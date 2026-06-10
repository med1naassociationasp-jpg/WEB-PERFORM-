"use client";
import { useEffect, useState } from "react";
import DashboardHeader from "./DashboardHeader";
import ConversationList from "./ConversationList";
import ConversationPanel from "./ConversationPanel";

export interface ConversationItem {
  id: number;
  phone: string;
  name: string | null;
  jid: string | null;
  mode: "AI" | "HUMAN";
  last_message_at: number | null;
  last_message_preview: string | null;
}

interface Props {
  phone: string | null;
}

export default function Dashboard({ phone }: Props) {
  const [conversations, setConversations] = useState<ConversationItem[]>([]);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const refresh = async () => {
    try {
      const res = await fetch("/api/conversations", { cache: "no-store" });
      if (!res.ok) return;
      const data = (await res.json()) as { conversations: ConversationItem[] };
      setConversations(data.conversations);
      if (selectedId === null && data.conversations.length > 0) {
        setSelectedId(data.conversations[0].id);
      }
    } catch {}
  };

  useEffect(() => {
    refresh();
    const id = setInterval(refresh, 2000);
    return () => clearInterval(id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const selected = conversations.find((c) => c.id === selectedId) ?? null;

  return (
    <div className="min-h-screen flex flex-col bg-neutral-950">
      <DashboardHeader phone={phone} />
      <div className="flex-1 grid grid-cols-[320px_1fr] overflow-hidden">
        <ConversationList
          conversations={conversations}
          selectedId={selectedId}
          onSelect={setSelectedId}
          onRefresh={refresh}
        />
        <ConversationPanel
          conversation={selected}
          onRefresh={refresh}
        />
      </div>
    </div>
  );
}
