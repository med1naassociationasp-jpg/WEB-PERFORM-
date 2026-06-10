"use client";

interface Props {
  phone: string | null;
}

export default function DashboardHeader({ phone }: Props) {
  const handleDisconnect = async () => {
    if (!confirm("¿Desconectar WhatsApp? Tendrás que escanear el QR de nuevo.")) return;
    try {
      const res = await fetch("/api/connection/disconnect", { method: "POST", cache: "no-store" });
      if (!res.ok) throw new Error("Error al desconectar");
      window.location.reload();
    } catch {
      alert("Error al desconectar. Inténtalo de nuevo.");
    }
  };

  return (
    <header className="bg-neutral-900 border-b border-neutral-800 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse" />
        <span className="text-neutral-100 font-medium">Agente conectado</span>
        {phone && <span className="text-neutral-400 text-sm">+{phone}</span>}
      </div>
      <button
        onClick={handleDisconnect}
        className="text-sm text-neutral-400 hover:text-red-400 transition-colors px-3 py-1.5 rounded-lg hover:bg-red-950 border border-transparent hover:border-red-800"
      >
        Desconectar
      </button>
    </header>
  );
}
