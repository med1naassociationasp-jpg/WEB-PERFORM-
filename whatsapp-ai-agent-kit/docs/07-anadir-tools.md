# 07 — Añadir tools al agente

## Estructura de una tool

Cada tool tiene dos partes:
1. **Definición**: el JSON Schema que el LLM ve (qué hace, qué parámetros acepta)
2. **Handler**: la función que se ejecuta cuando el LLM llama a la tool

## Crear una nueva tool

### Paso 1: Crear el archivo en `src/lib/tools/`

Ejemplo: `src/lib/tools/enviar-email.ts`

```typescript
export const enviarEmailDefinition = {
  type: "function" as const,
  function: {
    name: "enviarEmail",
    description: "Envía un email de seguimiento al lead con información del servicio.",
    parameters: {
      type: "object" as const,
      properties: {
        email: { type: "string", description: "Email del lead" },
        nombre: { type: "string", description: "Nombre del lead" },
        asunto: { type: "string", description: "Asunto del email" },
      },
      required: ["email", "nombre"],
    },
  },
};

interface EnviarEmailArgs {
  email: string;
  nombre: string;
  asunto?: string;
  conversationId?: number;
}

export async function enviarEmail(args: EnviarEmailArgs): Promise<Record<string, unknown>> {
  // Tu lógica aquí
  const emailUrl = process.env.EMAIL_SERVICE_URL;
  if (!emailUrl?.trim()) {
    return { ok: false, message: "Tool no configurada: falta EMAIL_SERVICE_URL" };
  }
  
  try {
    const res = await fetch(emailUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: args.email, nombre: args.nombre, asunto: args.asunto }),
    });
    return { ok: res.ok };
  } catch (e) {
    return { ok: false, message: String(e) };
  }
}
```

### Paso 2: Registrar en `src/lib/tools/index.ts`

```typescript
import { enviarEmailDefinition, enviarEmail } from "./enviar-email.js";

// Añadir a toolDefinitions:
export const toolDefinitions: ToolDefinition[] = [
  guardarLeadDefinition,
  calificarDefinition,
  agendarDefinition,
  derivarHumanoDefinition,
  enviarEmailDefinition,  // ← añadir aquí
];

// Añadir al mapa de handlers:
const handlers: Record<string, GenericHandler> = {
  guardarLead: guardarLead as GenericHandler,
  calificar: calificar as GenericHandler,
  agendar: agendar as GenericHandler,
  derivarHumano: derivarHumano as GenericHandler,
  enviarEmail: enviarEmail as GenericHandler,  // ← añadir aquí
};
```

### Paso 3: Actualizar el system prompt (opcional)

Si quieres que el agente sepa cuándo usar la nueva tool, añade una entrada en la sección "Cuándo usar cada tool" de `src/lib/system-prompt.ts`.

### Paso 4: Añadir la variable de entorno (si aplica)

En `.env.example`:
```
# URL del servicio de email
EMAIL_SERVICE_URL=
```

En `.env.local`:
```
EMAIL_SERVICE_URL=https://tu-servicio-email.com/api/send
```

## Patrones recomendados

### Tool con variable de entorno requerida
```typescript
const url = process.env.MI_VARIABLE;
if (!url?.trim()) {
  return { ok: false, message: "Tool no configurada: falta MI_VARIABLE" };
}
```

### Tool que modifica el estado de la conversación
```typescript
import { setMode } from "../db.js";
// Usa conversationId del args
setMode(args.conversationId!, "HUMAN");
```

### Tool asíncrona con timeout
```typescript
const controller = new AbortController();
const timeout = setTimeout(() => controller.abort(), 5000);
try {
  const res = await fetch(url, { signal: controller.signal });
  clearTimeout(timeout);
  // ...
} catch (e) {
  clearTimeout(timeout);
  return { ok: false, message: "Timeout" };
}
```

## Límites

- El agente puede hacer hasta 5 llamadas a tools por conversación (configurable en `MAX_TURNS` en `openrouter.ts`)
- Si se superan los 5 turnos, el agente devuelve un mensaje de fallback
