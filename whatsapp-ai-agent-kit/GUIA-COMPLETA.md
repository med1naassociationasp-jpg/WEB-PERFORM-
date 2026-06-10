# Guía Completa — WhatsApp AI Agent Kit

## Índice

1. [Instalación](#instalación)
2. [Configuración del agente](#configuración-del-agente)
3. [Panel web](#panel-web)
4. [Tools del agente](#tools-del-agente)
5. [Personalización del prompt](#personalización-del-prompt)
6. [Modo humano](#modo-humano)
7. [Outbox y mensajes manuales](#outbox-y-mensajes-manuales)
8. [Despliegue en producción](#despliegue-en-producción)
9. [Seguridad](#seguridad)
10. [FAQ](#faq)

---

## Instalación

### Requisitos previos
- Node.js 20 o superior
- npm 10 o superior
- Sistema operativo: macOS, Linux o Windows

### Pasos

```bash
# 1. Clonar o descargar el kit
git clone https://github.com/divisualproject/whatsapp-ai-agent-kit
cd whatsapp-ai-agent-kit

# 2. Instalar dependencias
npm install

# 3. Configurar variables de entorno
cp .env.example .env.local
# Edita .env.local con tu editor favorito

# 4. Arrancar
npm run start:all
```

---

## Configuración del agente

### Variables de entorno clave

**OPENROUTER_API_KEY** (obligatoria)
- Obtenla en https://openrouter.ai/keys
- Formato: `sk-or-v1-...`
- El bot no arranca si esta variable está vacía

**OPENROUTER_MODEL** (recomendada)
- Por defecto: `openai/gpt-4o-mini`
- Opciones recomendadas:
  - `openai/gpt-4o-mini` — equilibrio precio/calidad
  - `anthropic/claude-haiku-4-5` — respuestas más naturales
  - `google/gemini-2.5-flash` — muy rápido y económico
- **Nunca uses modelos `:free` en producción** — tienen límites muy estrictos

### Costes estimados

A `openai/gpt-4o-mini`:
- Conversación de 10 mensajes ≈ $0.0015
- 1.000 conversaciones/mes ≈ $1.50
- 10.000 conversaciones/mes ≈ $15

---

## Panel web

El panel web corre en `http://localhost:3000` (o el puerto configurado en `PORT`).

### Funcionalidades

**Lista de conversaciones** (columna izquierda)
- Todas las conversaciones activas ordenadas por actividad
- Badge de modo: verde (IA) o naranja (Humano)
- Preview del último mensaje y tiempo relativo

**Panel de conversación** (columna derecha)
- Historial completo de mensajes
- Colores por rol: gris (usuario), verde (IA), naranja (humano)
- Toggle de modo IA/Humano
- Botón de borrar conversación

**Header**
- Estado de conexión con el número de WhatsApp vinculado
- Botón de desconexión (genera nuevo QR)

---

## Tools del agente

El agente tiene 4 tools disponibles:

### guardarLead
Guarda los datos del lead en Google Sheets via webhook.
- Requiere `GOOGLE_SHEETS_WEBHOOK_URL` configurada
- Se llama automáticamente cuando el agente tiene nombre + teléfono del lead

### calificar
Evalúa si el lead es cualificado según 5 criterios (score 0-10):
- `tieneNegocioActivo` (3 pts)
- `facturaMasDe5kMes` (3 pts)
- `dolorEncajaConPropuesta` (2 pts)
- `urgenciaAlta` (1 pt)
- `presupuestoConfirmado` (1 pt)
- Score >= 7 = lead cualificado

### agendar
Genera un link personalizado de Cal.com/Calendly.
- Requiere `CAL_BOOKING_URL` configurada
- **Solo se llama si `calificar` devolvió score >= 7**

### derivarHumano
Cambia el modo de la conversación a HUMAN.
- El agente deja de responder automáticamente
- El humano puede escribir desde el panel web

---

## Personalización del prompt

El agente usa el archivo `prompts/negocio.md` si existe, o un prompt genérico si no.

### Crear tu perfil de negocio

Opción A — Con Claude Code:
```
/personaliza
```

Opción B — Manualmente:
```bash
cp prompts/negocio.example.md prompts/negocio.md
# Edita prompts/negocio.md con la información de tu negocio
```

### Estructura del archivo

```markdown
# Perfil del negocio

## Nombre
[nombre del negocio]

## Descripción
[qué hace el negocio]

## Cliente ideal
[ICP detallado]

## Problema que resolvemos
[dolor principal]

## Propuesta de valor
[diferenciadores]

## Rango de inversión
[precios orientativos]

## Criterios de calificación
[qué hace a un lead "bueno"]

## Qué NO atendemos
[exclusiones]

## Tono del agente
[estilo de comunicación]
```

**Nota**: `prompts/negocio.md` está en `.gitignore` — nunca se sube al repositorio.

---

## Modo humano

Cuando una conversación está en **modo HUMAN**:
- El bot NO responde automáticamente
- El humano puede escribir desde el panel web (campo de texto en la parte inferior)
- Los mensajes enviados desde el panel llegan al lead por WhatsApp

### Cuándo activa el agente el modo humano
El agente activa el modo humano automáticamente (via tool `derivarHumano`) cuando:
- El lead pide precios específicos
- Hay quejas o situaciones conflictivas
- El tema está fuera del alcance configurado

### Volver al modo IA
Usa el toggle "Modo IA" en el panel web. El agente retomará las respuestas automáticas.

---

## Outbox y mensajes manuales

El sistema tiene una cola de salida (outbox) para enviar mensajes desde el panel web:

1. El humano escribe un mensaje en el panel
2. El mensaje se guarda en la tabla `outbox` con `sent=0`
3. El bot lo detecta cada 2 segundos y lo envía por WhatsApp
4. El mensaje se marca como `sent=1`

Esto garantiza que los mensajes manuales se envíen aunque el bot esté en proceso de reconexión.

---

## Despliegue en producción

Ver `/deploy` en Claude Code o `docs/06-deploy-vps.md` para la guía completa.

**Stack recomendado**: Hostinger VPS + EasyPanel + Cloudflare Access

**Puntos críticos**:
1. Volúmenes persistentes para `/data` y `/auth`
2. Solo UNA instancia corriendo (SQLite no soporta múltiples escritores)
3. Proteger el dashboard con autenticación (Cloudflare Access o similar)

---

## Seguridad

### Qué NO hacer
- No expongas el dashboard sin autenticación en producción
- No compartas `auth/` — contiene las credenciales de WhatsApp
- No subas `.env.local` al repositorio
- No uses la misma API key en desarrollo y producción

### Qué SÍ hacer
- Usa Cloudflare Access para proteger el dashboard
- Haz backups periódicos de `data/messages.db`
- Usa un número de WhatsApp dedicado para el bot (no tu número personal)
- Rota la API key de OpenRouter periódicamente

---

## FAQ

**¿Puedo usar cualquier número de WhatsApp?**
Sí, pero recuerda que el número quedará "ocupado" como dispositivo vinculado. WhatsApp puede bannear números que envíen mensajes masivos o spam. Usa un número dedicado para el bot.

**¿Qué pasa si WhatsApp me desconecta?**
El bot intentará reconectar automáticamente. Si la sesión caduca, aparecerá un nuevo QR en el dashboard.

**¿Puedo tener múltiples instancias?**
No con SQLite. Si necesitas escalabilidad horizontal, considera migrar la DB a PostgreSQL y usar un backend de auth distribuido para Baileys.

**¿El bot puede enviar mensajes primero (outbound)?**
No directamente desde el panel, pero puedes implementarlo: añade un registro en `outbox` desde una API route y el bot lo enviará. WhatsApp tiene restricciones sobre mensajes "fríos" — solo puedes responder a usuarios que te hayan escrito primero (o usar templates aprobados).

**¿Funciona con grupos de WhatsApp?**
El bot ignora mensajes de grupos por diseño (ver `handler.ts`). Puedes cambiar este comportamiento modificando el filtro en `remoteJid.endsWith("@g.us")`.

**¿Cómo cambio el idioma del agente?**
Modifica el prompt en `prompts/negocio.md`. El agente responde en el idioma que le configures.
