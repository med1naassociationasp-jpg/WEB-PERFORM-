# WhatsApp AI Agent Kit

Kit open-source para montar un agente de WhatsApp con IA, panel web de control y sistema de calificación de leads.

**Por La Tribu Divisual** — [divisual.es](https://divisual.es)

---

## Características

- Agente de WhatsApp impulsado por cualquier modelo de OpenRouter (GPT-4o, Claude, Gemini...)
- Panel web en tiempo real para gestionar conversaciones
- Sistema de calificación de leads con score 0-10
- Integración con Google Sheets para guardar leads
- Generación de links de agendamiento (Cal.com / Calendly)
- Derivación a agente humano con un clic
- Despliegue en un comando con Nixpacks

## Stack

- **Runtime**: Node.js 22, ES Modules
- **Framework web**: Next.js 16, React 19, TypeScript 5.7
- **WhatsApp**: Baileys 6.7
- **Base de datos**: SQLite via better-sqlite3 12
- **IA**: OpenAI SDK 6 → OpenRouter
- **UI**: Tailwind CSS v4

## Inicio rápido

```bash
cp .env.example .env.local
# Edita .env.local y añade OPENROUTER_API_KEY
npm install
npm run start:all
# Abre http://localhost:3000 y escanea el QR
```

Ver `EMPIEZA-AQUI.md` para más detalles.

## Estructura del proyecto

```
src/
  app/           # Next.js App Router + API routes
  components/    # Panel web (React)
  lib/
    db.ts        # SQLite con lazy init
    openrouter.ts  # Cliente de IA
    system-prompt.ts  # Construcción del prompt
    tools/       # Tools del agente (guardarLead, calificar, agendar, derivarHumano)
    baileys/     # Cliente WhatsApp (client, handler, outbox)
scripts/
  start-bot.ts   # Punto de entrada del bot
  wizard.ts      # Asistente de configuración interactivo
  doctor.ts      # Diagnóstico del sistema
  check-system.ts  # Validación básica
prompts/
  negocio.md     # Perfil del negocio (crea el tuyo, gitignored)
  negocio.example.md  # Ejemplo
```

## Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Panel web en modo desarrollo |
| `npm run start:bot` | Bot de WhatsApp |
| `npm run start:all` | Bot + panel web en paralelo |
| `npm run wizard` | Asistente de configuración interactivo |
| `npm run doctor` | Diagnóstico completo del sistema |
| `npm run check` | Validación básica del entorno |
| `npm run typecheck` | Verificación de tipos TypeScript |
| `npm run clean` | Limpiar `.next`, `data` y `auth` |

## Variables de entorno

| Variable | Obligatoria | Descripción |
|---|---|---|
| `OPENROUTER_API_KEY` | Sí | API key de OpenRouter (sk-or-v1-...) |
| `OPENROUTER_MODEL` | No | Modelo a usar (default: openai/gpt-4o-mini) |
| `GOOGLE_SHEETS_WEBHOOK_URL` | No | Webhook de Google Apps Script para leads |
| `CAL_BOOKING_URL` | No | URL de Cal.com/Calendly para agendamiento |
| `PORT` | No | Puerto del panel web (default: 3000) |
| `LOG_LEVEL` | No | Nivel de log: silent/error/warn/info/debug |

## Licencia

MIT — La Tribu Divisual 2025
