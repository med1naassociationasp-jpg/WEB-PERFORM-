import "./env-loader.js";
import chalk from "chalk";
import fs from "fs";
import path from "path";
import { execSync } from "child_process";

const DATA_DIR = path.resolve(process.cwd(), "data");
const DB_PATH = path.join(DATA_DIR, "messages.db");
const AUTH_DIR = path.resolve(process.cwd(), "auth");

console.log(chalk.bold("\n🩺 Doctor — diagnóstico del sistema\n"));

// Block 1: .env.local + API key + model
console.log(chalk.yellow("── Bloque 1: Variables de entorno ──"));
if (!fs.existsSync(path.resolve(process.cwd(), ".env.local"))) {
  console.log(chalk.red("✗  No existe .env.local"));
} else {
  console.log(chalk.green("✓  .env.local existe"));
  if (!process.env.OPENROUTER_API_KEY?.trim()) {
    console.log(chalk.red("✗  OPENROUTER_API_KEY vacía o no definida"));
  } else {
    console.log(chalk.green(`✓  OPENROUTER_API_KEY presente (${process.env.OPENROUTER_API_KEY.slice(0, 12)}...)`));
  }
  const model = process.env.OPENROUTER_MODEL ?? "openai/gpt-4o-mini";
  if (model.endsWith(":free")) {
    console.log(chalk.red(`✗  OPENROUTER_MODEL usa variante :free (${model}) — saturada en producción`));
  } else {
    console.log(chalk.green(`✓  OPENROUTER_MODEL: ${model}`));
  }
}

// Block 2: node_modules + typecheck
console.log(chalk.yellow("\n── Bloque 2: Dependencias y TypeScript ──"));
if (!fs.existsSync(path.resolve(process.cwd(), "node_modules"))) {
  console.log(chalk.red("✗  node_modules no existe — ejecuta npm install"));
} else {
  console.log(chalk.green("✓  node_modules presente"));
  try {
    execSync("npx tsc --noEmit", { stdio: "pipe" });
    console.log(chalk.green("✓  TypeScript sin errores"));
  } catch (e) {
    console.log(chalk.red("✗  Errores TypeScript:"));
    const out = (e as { stdout?: Buffer }).stdout?.toString() ?? "";
    console.log(chalk.gray(out.slice(0, 500)));
  }
}

// Block 3: connection_state
console.log(chalk.yellow("\n── Bloque 3: Estado de conexión WhatsApp ──"));
if (!fs.existsSync(DB_PATH)) {
  console.log(chalk.gray("   No existe DB — el bot no ha arrancado aún"));
} else {
  try {
    // Use require-style dynamic import for readonly check
    const { createRequire } = await import("module");
    const require = createRequire(import.meta.url);
    const Database = require("better-sqlite3") as typeof import("better-sqlite3");
    const db = new Database(DB_PATH, { readonly: true });
    const row = db.prepare("SELECT status, phone, qr_string FROM connection_state WHERE id = 1").get() as
      | { status: string; phone: string | null; qr_string: string | null }
      | undefined;
    if (!row) {
      console.log(chalk.gray("   Sin fila en connection_state"));
    } else {
      const statusMap: Record<string, string> = {
        connected: chalk.green(`✓  Conectado como +${row.phone ?? "?"}`),
        qr: chalk.yellow("   Esperando escaneo de QR"),
        connecting: chalk.yellow("   Conectando..."),
        disconnected: chalk.red("✗  Desconectado — ¿está el bot corriendo?"),
      };
      console.log(statusMap[row.status] ?? chalk.gray(`   Estado: ${row.status}`));
    }
  } catch (e) {
    console.log(chalk.red(`✗  Error leyendo DB: ${String(e)}`));
  }
}

// Block 4: auth/ + prompts/negocio.md
console.log(chalk.yellow("\n── Bloque 4: Archivos de sesión y prompt ──"));
if (fs.existsSync(AUTH_DIR)) {
  const files = fs.readdirSync(AUTH_DIR);
  console.log(chalk.green(`✓  auth/ existe (${files.length} archivo(s))`));
} else {
  console.log(chalk.gray("   auth/ no existe — se creará al arrancar el bot"));
}
const negocioPath = path.resolve(process.cwd(), "prompts", "negocio.md");
if (fs.existsSync(negocioPath)) {
  console.log(chalk.green("✓  prompts/negocio.md existe"));
} else {
  console.log(chalk.yellow("   prompts/negocio.md no existe — el bot usa el prompt genérico. Ejecuta /personaliza"));
}

// Block 5: Windows zombie processes
if (process.platform === "win32") {
  console.log(chalk.yellow("\n── Bloque 5: Procesos zombie (Windows) ──"));
  try {
    const out = execSync("tasklist /FI \"IMAGENAME eq node.exe\" /NH", { encoding: "utf-8" });
    const count = (out.match(/node\.exe/gi) ?? []).length;
    if (count > 3) {
      console.log(chalk.red(`✗  ${count} procesos node.exe — posibles zombies. Reinicia VS Code o cierra las terminales.`));
    } else {
      console.log(chalk.green(`✓  ${count} proceso(s) node.exe — normal`));
    }
  } catch {
    console.log(chalk.gray("   No se pudo consultar tasklist"));
  }
}

console.log(chalk.bold("\nDiagnóstico completado.\n"));
