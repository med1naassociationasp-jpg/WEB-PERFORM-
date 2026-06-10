import type { WASocket } from "@whiskeysockets/baileys";
import { getPendingOutbox, getConversationById, markOutboxSent } from "../db.js";

let outboxTimer: ReturnType<typeof setInterval> | null = null;

export function startOutboxLoop(sock: WASocket): void {
  if (outboxTimer) return;
  outboxTimer = setInterval(async () => {
    const pending = getPendingOutbox(20);
    for (const item of pending) {
      try {
        const convo = getConversationById(item.conversation_id);
        const jid = convo?.jid ?? `${item.phone}@s.whatsapp.net`;
        await sock.sendMessage(jid, { text: item.content });
        markOutboxSent(item.id);
      } catch {
        // leave sent=0 to retry next tick
      }
    }
  }, 2000);
}

export function stopOutboxLoop(): void {
  if (outboxTimer) {
    clearInterval(outboxTimer);
    outboxTimer = null;
  }
}
