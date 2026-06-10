"use client";
import { useEffect, useState } from "react";
import QRScreen from "./QRScreen";
import Dashboard from "./Dashboard";

type Status = "disconnected" | "qr" | "connecting" | "connected" | "unknown";

export default function ConnectionGate() {
  const [status, setStatus] = useState<Status>("unknown");
  const [qrPng, setQrPng] = useState<string | null>(null);
  const [phone, setPhone] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    const poll = async () => {
      try {
        const res = await fetch("/api/connection/status", { cache: "no-store" });
        if (!res.ok) return;
        const data = (await res.json()) as { status: Status; qrPng?: string; phone?: string | null };
        if (!active) return;
        setStatus(data.status);
        setQrPng(data.qrPng ?? null);
        setPhone(data.phone ?? null);
      } catch {}
    };

    poll();
    const id = setInterval(poll, 2000);
    return () => {
      active = false;
      clearInterval(id);
    };
  }, []);

  if (status === "connected") return <Dashboard phone={phone} />;
  return <QRScreen status={status} qrPng={qrPng} />;
}
