# Empieza aquí

Bienvenido al **WhatsApp AI Agent Kit** de La Tribu Divisual.

Este kit monta un agente de WhatsApp con IA en menos de 15 minutos. El agente califica leads, agenda llamadas y puede derivar a un humano cuando es necesario — todo desde un panel web.

## Requisitos

- Node.js 20 o superior ([descargar](https://nodejs.org))
- Una cuenta en [OpenRouter](https://openrouter.ai) (gratis, pago por uso)
- Un número de WhatsApp para vincular al bot

## Inicio rápido

### Opción A: Con Claude Code (recomendado)

Si tienes Claude Code instalado, abre este directorio y escribe:

```
/setup
```

El asistente te guiará paso a paso.

### Opción B: Manual

```bash
# 1. Instalar dependencias
npm install

# 2. Copiar variables de entorno
cp .env.example .env.local

# 3. Editar .env.local y añadir tu OPENROUTER_API_KEY
# (obtén una en https://openrouter.ai/keys)

# 4. Arrancar el sistema
npm run start:all

# 5. Abrir el panel web
# http://localhost:3000
# Escanea el QR con WhatsApp > Dispositivos vinculados
```

## Qué hace el kit

- **Bot de WhatsApp**: responde automáticamente a mensajes entrantes usando IA
- **Panel web**: visualiza conversaciones, cambia entre modo IA y modo humano, envía mensajes manuales
- **Calificación de leads**: el agente evalúa si el lead encaja con tu negocio (score 0-10)
- **Agendamiento**: genera links de Cal.com/Calendly personalizados para leads cualificados
- **Google Sheets**: guarda los datos de leads automáticamente
- **Derivación humana**: cuando el agente no puede ayudar, pasa la conversación a una persona

## Siguientes pasos

1. Ejecuta `/setup` o sigue la opción manual de arriba
2. Personaliza el agente para tu negocio: `/personaliza`
3. Lee `GUIA-COMPLETA.md` para opciones avanzadas
4. Cuando estés listo para producción: `/deploy`

## Documentación

- `GUIA-COMPLETA.md` — Guía detallada de todas las funciones
- `docs/` — Documentación técnica por módulos
- `errores-sesion.md` — Los 16 errores más comunes y cómo solucionarlos
- `prompts/README.md` — Cómo personalizar el comportamiento del agente
