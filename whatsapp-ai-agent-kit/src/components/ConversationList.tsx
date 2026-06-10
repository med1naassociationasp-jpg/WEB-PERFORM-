"use client";
import type { ConversationItem } from "./Dashboard";

function formatRelative(ts: number | null): string {
  if (!ts) return "";
  const diff = Math.floor(Date.now() / 1000) - ts;
  if (diff < 60) return "ahora";
  if (diff < 3600) return `hace ${Math.floor(diff / 60)} min`;
  if (diff < 86400) return `hace ${Math.floor(diff / 3600)} h`;
  return `hace ${Math.floor(diff / 86400)} días`;
}

interface Props {
  conversations: ConversationItem[];
  selectedId: number | null;
  onSelect: (id: number) => void;
  onRefresh: () => void;
}

export default function ConversationList({ conversations, selectedId, onSelect }: Props) {
  return (
    <aside className="bg-neutral-900 border-r border-neutral-800 flex flex-col overflow-hidden">
      <div className="px-4 py-3 border-b border-neutral-800">
        <h2 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider">
          Conversaciones · {conversations.length}
        </h2>
      </div>
      <div className="flex-1 overflow-y-auto">
        {conversations.length === 0 ? (
          <div className="p-6 text-center text-neutral-500 text-sm">
            <p className="mb-1">Sin conversaciones aún.</p>
            <p>Escribe "hola" desde otro móvil al número vinculado.</p>
          </div>
        ) : (
          conversations.map((c) => (
            <button
              key={c.id}
              onClick={() => onSelect(c.id)}
              className={`w-full text-left px-4 py-3 border-b border-neutral-800 hover:bg-neutral-800 transition-colors ${
                selectedId === c.id ? "bg-neutral-800" : ""
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-neutral-100 text-sm font-medium truncate">
                  {c.name ?? `+${c.phone}`}
                </span>
                <span
                  className={`text-xs px-1.5 py-0.5 rounded uppercase tracking-wider font-semibold ${
                    c.mode === "AI"
                      ? "bg-emerald-950 text-emerald-400"
                      : "bg-amber-950 text-amber-400"
                  }`}
                >
                  {c.mode === "AI" ? "IA" : "Humano"}
                </span>
              </div>
              {c.name && (
                <p className="text-neutral-500 text-xs mb-1">+{c.phone}</p>
              )}
              <div className="flex items-center justify-between">
                <p className="text-neutral-400 text-xs truncate max-w-[180px]">
                  {c.last_message_preview ?? "Sin mensajes"}
                </p>
                <span className="text-neutral-600 text-xs whitespace-nowrap ml-2">
                  {formatRelative(c.last_message_at)}
                </span>
              </div>
            </button>
          ))
        )}
      </div>
    </aside>
  );
}
