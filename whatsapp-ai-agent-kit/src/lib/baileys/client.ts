import {
  makeWASocket,
  useMultiFileAuthState,
  fetchLatestBaileysVersion,
  Browsers,
  DisconnectReason,
  type WASocket,
} from "@whiskeysockets/baileys";
import pino from "pino";
import qrcodeTerminal from "qrcode-terminal";
import fs from "fs";
import path from "path";
import { setConnectionState, getConnectionState } from "../db.js";
import { handleIncomingMessages } from "./handler.js";
import { startOutboxLoop, stopOutboxLoop } from "./outbox.js";
import { Boom } from "@hapi/boom";

const AUTH_DIR = path.resolve(process.cwd(), "auth");
const DATA_DIR = path.resolve(process.cwd(), "data");
const RESTART_FLAG = path.join(DATA_DIR, ".restart");

const logger = pino({ level: (process.env.LOG_LEVEL ?? "info") as pino.Level });

interface Handle {
  sock: WASocket;
  shutdown: () => void;
}

let handle: Handle | null = null;
let reconnectTimer: ReturnType<typeof setTimeout> | null = null;

function scheduleReconnect(code: number | undefined): void {
  if (reconnectTimer) return;
  // 440 = connectionReplaced: back off longer to avoid loop
  const delay = code === 440 ? 15000 : 5000;
  reconnectTimer = setTimeout(async () => {
    reconnectTimer = null;
    try {
      handle?.sock.end(undefined);
    } catch {}
    await start();
  }, delay);
}

export async function start(): Promise<void> {
  fs.mkdirSync(AUTH_DIR, { recursive: true });
  fs.mkdirSync(DATA_DIR, { recursive: true });

  const { state, saveCreds } = await useMultiFileAuthState(AUTH_DIR);

  let version: [number, number, number] | undefined;
  try {
    const v = await fetchLatestBaileysVersion();
    version = v.version;
  } catch {
    logger.warn("No se pudo obtener la versión de WhatsApp, usando la por defecto");
    version = undefined;
  }

  const sock = makeWASocket({
    version,
    auth: state,
    logger: pino({ level: "silent" }),
    browser: Browsers.macOS("Desktop"),
    markOnlineOnConnect: false,
    syncFullHistory: false,
  });

  const shutdown = () => {
    try {
      sock.end(undefined);
    } catch {}
  };

  handle = { sock, shutdown };

  sock.ev.on("creds.update", saveCreds);

  sock.ev.on("connection.update", (u) => {
    const { connection, lastDisconnect, qr } = u;

    if (qr) {
      setConnectionState({ status: "qr", qr_string: qr, phone: null });
      qrcodeTerminal.generate(qr, { small: true });
      logger.info("QR generado — escanea con WhatsApp > Dispositivos vinculados");
    }

    if (connection === "connecting") {
      const current = getConnectionState();
      if (current.status === "disconnected") {
        setConnectionState({ status: "connecting" });
      }
    }

    if (connection === "open") {
      const userId = sock.user?.id ?? "";
      const phone = userId.split(":")[0].split("@")[0];
      setConnectionState({ status: "connected", phone });
      logger.info(`Conectado como +${phone}`);
      startOutboxLoop(sock);
    }

    if (connection === "close") {
      const code = (lastDisconnect?.error as Boom)?.output?.statusCode;
      stopOutboxLoop();

      // 515 is NOT an error — it's a pairing OK signal
      if (code === 515) return;

      if (code === DisconnectReason.loggedOut) {
        logger.warn("Sesión cerrada (loggedOut). Reinicia y escanea el QR de nuevo.");
        setConnectionState({ status: "disconnected" });
      } else {
        logger.warn(`Conexión cerrada (code ${code}), reconectando...`);
        scheduleReconnect(code);
      }
    }
  });

  sock.ev.on("messages.upsert", (e) => {
    handleIncomingMessages(sock, e).catch((err) =>
      logger.error({ err }, "Error procesando mensaje entrante")
    );
  });
}

export function watchRestartFlag(): void {
  setInterval(() => {
    if (fs.existsSync(RESTART_FLAG)) {
      fs.unlinkSync(RESTART_FLAG);
      logger.info("Flag de restart detectado — regenerando sesión...");
      try {
        handle?.sock.end(undefined);
      } catch {}
      fs.rmSync(AUTH_DIR, { recursive: true, force: true });
      start().catch((err) => logger.error({ err }, "Error al reiniciar"));
    }
  }, 1000);
}
