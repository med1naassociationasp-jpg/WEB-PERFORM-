"use client";
import { useEffect, useState } from "react";

type Status = "disconnected" | "qr" | "connecting" | "connected" | "unknown";

interface Props {
  status: Status;
  qrPng: string | null;
}

export default function QRScreen({ status, qrPng }: Props) {
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    setElapsed(0);
    const id = setInterval(() => setElapsed((e) => e + 1), 1000);
    return () => clearInterval(id);
  }, [qrPng]);

  const statusMessages: Record<Status, string> = {
    disconnected: "Esperando al bot...",
    connecting: "Conectando...",
    qr: "Escanea el QR con WhatsApp",
    connected: "Conectado",
    unknown: "Cargando...",
  };

  return (
    <div className="min-h-screen bg-neutral-950 flex items-center justify-center p-4">
      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 max-w-md w-full shadow-xl">
        <h1 className="text-2xl font-bold text-neutral-100 mb-2 text-center">Conectar WhatsApp</h1>
        <p className="text-neutral-400 text-sm text-center mb-6">
          {statusMessages[status]}
        </p>

        <div className="flex justify-center mb-6">
          {qrPng ? (
            <div className="bg-white p-3 rounded-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={qrPng} alt="QR de WhatsApp" className="w-64 h-64" />
            </div>
          ) : (
            <div className="w-64 h-64 bg-neutral-800 rounded-xl flex items-center justify-center">
              <div className="w-10 h-10 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin" />
            </div>
          )}
        </div>

        {elapsed > 60 && qrPng && (
          <div className="bg-amber-950 border border-amber-700 rounded-lg p-3 mb-4 text-amber-300 text-sm text-center">
            El QR puede haber caducado. Recarga la página si no funciona.
          </div>
        )}

        <div className="bg-neutral-800 rounded-xl p-4">
          <p className="text-neutral-300 text-sm font-medium mb-3">Cómo vincular:</p>
          <ol className="text-neutral-400 text-sm space-y-1 list-decimal list-inside">
            <li>Abre WhatsApp en tu móvil</li>
            <li>Ve a <span className="text-neutral-300">Dispositivos vinculados</span></li>
            <li>Toca <span className="text-neutral-300">Vincular un dispositivo</span></li>
            <li>Escanea el QR de arriba</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
