"use client";

interface Props {
  role: "user" | "assistant" | "human";
  content: string;
  created_at: number;
}

function formatTime(ts: number): string {
  return new Date(ts * 1000).toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" });
}

export default function MessageBubble({ role, content, created_at }: Props) {
  if (role === "user") {
    return (
      <div className="flex justify-start mb-3">
        <div className="max-w-[70%]">
          <div className="bg-neutral-800 rounded-2xl rounded-tl-sm px-4 py-2.5">
            <p className="text-neutral-100 text-sm whitespace-pre-wrap">{content}</p>
          </div>
          <p className="text-neutral-600 text-xs mt-1 ml-1">{formatTime(created_at)}</p>
        </div>
      </div>
    );
  }

  if (role === "assistant") {
    return (
      <div className="flex justify-end mb-3">
        <div className="max-w-[70%]">
          <p className="text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-1 text-right">
            Agente IA
          </p>
          <div className="bg-emerald-900 border border-emerald-800 rounded-2xl rounded-tr-sm px-4 py-2.5">
            <p className="text-neutral-100 text-sm whitespace-pre-wrap">{content}</p>
          </div>
          <p className="text-neutral-600 text-xs mt-1 text-right mr-1">{formatTime(created_at)}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-end mb-3">
      <div className="max-w-[70%]">
        <p className="text-amber-400 text-xs font-semibold uppercase tracking-wider mb-1 text-right">
          Humano
        </p>
        <div className="bg-amber-900 border border-amber-800 rounded-2xl rounded-tr-sm px-4 py-2.5">
          <p className="text-neutral-100 text-sm whitespace-pre-wrap">{content}</p>
        </div>
        <p className="text-neutral-600 text-xs mt-1 text-right mr-1">{formatTime(created_at)}</p>
      </div>
    </div>
  );
}
