# 02 — Configurar variables de entorno

## Crear `.env.local`

```bash
cp .env.example .env.local
```

Edita `.env.local` con tu editor favorito.

## Variables obligatorias

### `OPENROUTER_API_KEY`

La API key de OpenRouter es la única variable obligatoria. Sin ella, el bot no arranca.

**Cómo obtenerla**:
1. Ve a https://openrouter.ai
2. Crea una cuenta (gratis)
3. Ve a Keys → Create Key
4. Copia la key (formato: `sk-or-v1-...`)
5. Añade créditos (mínimo $5 para empezar)

**En `.env.local`**:
```
OPENROUTER_API_KEY=sk-or-v1-tu-key-aqui
```

## Variables recomendadas

### `OPENROUTER_MODEL`

El modelo de IA que usará el agente. Por defecto: `openai/gpt-4o-mini`.

**Opciones recomendadas**:
```
# Equilibrio precio/calidad (recomendado por defecto)
OPENROUTER_MODEL=openai/gpt-4o-mini

# Respuestas más naturales y creativas
OPENROUTER_MODEL=anthropic/claude-haiku-4-5

# Muy rápido, ideal para volumen alto
OPENROUTER_MODEL=google/gemini-2.5-flash
```

**Nunca uses modelos `:free` en producción**. Tienen límite de 20 req/min compartido globalmente y causan errores 429 con 2+ conversaciones simultáneas.

## Variables opcionales

### `GOOGLE_SHEETS_WEBHOOK_URL`

Webhook de Google Apps Script para guardar leads automáticamente en una hoja de cálculo.

**Cómo crear el webhook**:
1. Abre Google Sheets → Extensiones → Apps Script
2. Pega el código del webhook (ver `docs/03-google-sheets.md`)
3. Despliega como aplicación web
4. Copia la URL del webhook

```
GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/...
```

### `CAL_BOOKING_URL`

URL de tu calendario de Cal.com o Calendly para el agendamiento de llamadas.

```
# Cal.com
CAL_BOOKING_URL=https://cal.com/tu-usuario/diagnostico

# Calendly
CAL_BOOKING_URL=https://calendly.com/tu-usuario/llamada
```

### `PORT`

Puerto del panel web Next.js. Por defecto: 3000.

### `LOG_LEVEL`

Nivel de verbosidad de los logs del bot. Opciones: `silent`, `error`, `warn`, `info`, `debug`.
