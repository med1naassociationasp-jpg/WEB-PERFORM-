export const calificarDefinition = {
  type: "function" as const,
  function: {
    name: "calificar",
    description: "Califica la calidad del lead según criterios de negocio. Devuelve score 0-10 y si califica para agendar.",
    parameters: {
      type: "object" as const,
      properties: {
        tieneNegocioActivo: { type: "boolean", description: "Tiene un negocio activo o proyecto en marcha" },
        facturaMasDe5kMes: { type: "boolean", description: "Factura más de 5.000€/mes o tiene presupuesto equivalente" },
        dolorEncajaConPropuesta: { type: "boolean", description: "Su dolor principal encaja con nuestra propuesta de valor" },
        urgenciaAlta: { type: "boolean", description: "Tiene urgencia real (quiere solución en <30 días)" },
        presupuestoConfirmado: { type: "boolean", description: "Ha confirmado que tiene presupuesto disponible" },
      },
      required: [],
    },
  },
};

interface CalificarArgs {
  tieneNegocioActivo?: boolean;
  facturaMasDe5kMes?: boolean;
  dolorEncajaConPropuesta?: boolean;
  urgenciaAlta?: boolean;
  presupuestoConfirmado?: boolean;
  conversationId?: number;
}

export async function calificar(args: CalificarArgs): Promise<Record<string, unknown>> {
  // TODO: pesos ajustables según el tipo de negocio
  let score = 0;
  if (args.tieneNegocioActivo) score += 3;
  if (args.facturaMasDe5kMes) score += 3;
  if (args.dolorEncajaConPropuesta) score += 2;
  if (args.urgenciaAlta) score += 1;
  if (args.presupuestoConfirmado) score += 1;

  const califica = score >= 7;
  return {
    ok: true,
    score,
    califica,
    mensaje: califica
      ? "Lead cualificado. Procede a agendar llamada."
      : "Lead NO cualificado. Responde cordialmente sin agendar.",
  };
}
