"use client";
import { useEffect, useRef, useState } from "react";
import type { ConversationItem } from "./Dashboard";
import MessageBubble from "./MessageBubble";
import ModeToggle from "./ModeToggle";

interface Message {
  id: number;
  conversation_id: number;
  role: "user" | "assistant" | "human";
  content: string;
  created_at: number;
}

interface Props {
  conversation: ConversationItem | null;
  onRefresh: () => void;
}

export default function ConversationPanel({ conversation, onRefresh }: Props) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!conversation) return;
    let mounted = true;

    const fetchMessages = async () => {
      try {
        const res = await fetch(`/api/messages/${conversation.id}`, { cache: "no-store" });
        if (!res.ok || !mounted) return;
        const data = (await res.json()) as { messages: Message[] };
        setMessages(data.messages);
      } catch {}
    };

    fetchMessages();
    const id = setInterval(fetchMessages, 2000);
    return () => {
      mounted = false;
      clearInterval(id);
    };
  }, [conversation?.id]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleModeChange = async (mode: "AI" | "HUMAN") => {
    if (!conversation) return;
    try {
      await fetch(`/api/mode/${conversation.id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mode }),
        cache: "no-store",
      });
      onRefresh();
    } catch {}
  };

  const handleSend = async () => {
    if (!conversation || !input.trim() || sending) return;
    setSending(true);
    try {
      await fetch(`/api/messages/${conversation.id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: input.trim() }),
        cache: "no-store",
      });
      setInput("");
      onRefresh();
    } catch {}
    setSending(false);
  };

  const handleDelete = async () => {
    if (!conversation) return;
    if (!confirm(`¿Borrar la conversación con ${conversation.name ?? `+${conversation.phone}`}?`)) return;
    try {
      await fetch(`/api/conversations/${conversation.id}`, { method: "DELETE", cache: "no-store" });
      onRefresh();
    } catch {}
  };

  if (!conversation) {
    return (
      <section className="flex items-center justify-center bg-neutral-950 text-neutral-500 text-sm">
        Selecciona una conversación
      </section>
    );
  }

  return (
    <section className="flex flex-col bg-neutral-950 overflow-hidden">
      {/* Header */}
      <div className="bg-neutral-900 border-b border-neutral-800 px-6 py-4 flex items-center justify-between">
        <div>
          <p className="text-neutral-100 font-medium">
            {conversation.name ?? `+${conversation.phone}`}
          </p>
          {conversation.name && (
            <p className="text-neutral-400 text-xs">+{conversation.phone}</p>
          )}
        </div>
        <div className="flex items-center gap-3">
          <ModeToggle mode={conversation.mode} onModeChange={handleModeChange} />
          <button
            onClick={handleDelete}
            className="text-xs text-neutral-500 hover:text-red-400 transition-colors px-2 py-1 rounded hover:bg-red-950"
          >
            Borrar
          </button>
        </div>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-6">
        {messages.map((m) => (
          <MessageBubble key={m.id} role={m.role} content={m.content} created_at={m.created_at} />
        ))}
      </div>

      {/* Footer */}
      {conversation.mode === "HUMAN" ? (
        <div className="bg-neutral-900 border-t border-neutral-800 p-4 flex gap-3">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            placeholder="Escribe un mensaje..."
            className="flex-1 bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-2.5 text-sm text-neutral-100 placeholder-neutral-500 resize-none focus:outline-none focus:border-neutral-600"
            rows={2}
            disabled={sending}
          />
          <button
            onClick={handleSend}
            disabled={sending || !input.trim()}
            className="bg-amber-600 hover:bg-amber-500 disabled:opacity-50 disabled:cursor-not-allowed text-white px-4 py-2 rounded-xl text-sm font-medium transition-colors"
          >
            Enviar
          </button>
        </div>
      ) : (
        <div className="bg-neutral-900 border-t border-neutral-800 px-6 py-4">
          <p className="text-neutral-500 text-sm text-center">
            El agente IA responde automáticamente. Cambia a{" "}
            <span className="text-amber-400">Modo Humano</span> para escribir tú.
          </p>
        </div>
      )}
    </section>
  );
}
