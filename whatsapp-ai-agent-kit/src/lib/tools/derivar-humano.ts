import { setMode } from "../db.js";

export const derivarHumanoDefinition = {
  type: "function" as const,
  function: {
    name: "derivarHumano",
    description: "Deriva la conversación a un agente humano. Usar cuando el lead pide precios específicos, tiene quejas, o el tema está fuera de alcance.",
    parameters: {
      type: "object" as const,
      properties: {
        razon: { type: "string", description: "Por qué se deriva. Útil para el humano que retoma la conversación." },
      },
      required: ["razon"],
    },
  },
};

interface DerivarHumanoArgs {
  razon: string;
  conversationId?: number;
}

export async function derivarHumano(args: DerivarHumanoArgs): Promise<Record<string, unknown>> {
  if (!args.conversationId) {
    return { ok: false, message: "No se pudo derivar: falta conversationId (bug del wrapper de tools)" };
  }
  setMode(args.conversationId, "HUMAN");
  return {
    ok: true,
    message: `Conversación derivada a HUMAN. Razón: ${args.razon}`,
    instruccion: "Responde al usuario con algo como: 'Te paso con una persona del equipo, te escribe enseguida.' No respondas más en esta conversación.",
  };
}
