---
description: Guía paso a paso para desplegar el kit en producción usando Hostinger VPS + EasyPanel + Cloudflare Access.
---

# /deploy — Despliegue en producción

## Stack recomendado
- **Servidor**: Hostinger VPS (plan KVM 2 — 2 vCPU, 8GB RAM, ~€9/mes)
- **Panel de despliegue**: EasyPanel (open-source, gratis)
- **Protección del dashboard**: Cloudflare Access (gratis hasta 50 usuarios)
- **DNS**: Cloudflare

---

## Fase 1: Preparar el servidor

### 1.1 Contratar el VPS
- Hostinger VPS: https://www.hostinger.es/vps-hosting
- Sistema operativo: Ubuntu 22.04 LTS
- Ubicación: Europa (para latencia con WhatsApp)

### 1.2 Instalar EasyPanel
```bash
curl -sSL https://get.easypanel.io | sh
```
Accede a `http://TU_IP:3000` y crea el admin.

### 1.3 Configurar dominio
En Cloudflare, añade un registro A:
```
agente.tudominio.com → IP del VPS
```

---

## Fase 2: Desplegar la app

### 2.1 Crear el proyecto en EasyPanel
1. New Project → App
2. Source: GitHub (conecta tu repo)
3. Branch: `main`
4. Build: Nixpacks (detecta automáticamente el `nixpacks.toml`)

### 2.2 Variables de entorno en EasyPanel
Añade estas variables en la sección "Environment":
```
OPENROUTER_API_KEY=sk-or-v1-...
OPENROUTER_MODEL=openai/gpt-4o-mini
PORT=3000
LOG_LEVEL=info
NODE_ENV=production
```
Opcional:
```
GOOGLE_SHEETS_WEBHOOK_URL=https://...
CAL_BOOKING_URL=https://cal.com/...
```

### 2.3 Volúmenes persistentes
En EasyPanel, crea dos volúmenes:
- `/app/data` → para la base de datos SQLite
- `/app/auth` → para la sesión de WhatsApp

**CRÍTICO**: Sin volúmenes persistentes, perderás la sesión y la DB en cada redeploy.

### 2.4 Puerto
Expón el puerto `3000` y enlázalo al dominio `agente.tudominio.com`.

---

## Fase 3: Proteger el dashboard con Cloudflare Access

El dashboard NO tiene autenticación propia — cualquiera con la URL puede verlo.
Usa Cloudflare Access para añadir login con email:

### 3.1 Activar Cloudflare Access
1. Cloudflare Dashboard → Zero Trust → Access → Applications
2. Add an application → Self-hosted
3. Application domain: `agente.tudominio.com`
4. Policy: Allow → Emails → añade tus emails autorizados

### 3.2 Resultado
- El dashboard requiere login con el email autorizado
- El bot sigue funcionando sin autenticación (rutas `/api/` internas)

---

## Fase 4: Primera conexión en producción

1. Accede a `https://agente.tudominio.com`
2. Aparecerá el QR — escanéalo con WhatsApp
3. La sesión se guarda en el volumen `/app/auth`
4. Verifica en los logs de EasyPanel que aparece "Conectado como +XXXXX"

---

## Fase 5: Mantenimiento

### Actualizar el bot
```bash
# En EasyPanel: Deploy → Redeploy
# La sesión se mantiene gracias a los volúmenes persistentes
```

### Backup de la DB
```bash
# Descargar via EasyPanel → Files → /app/data/messages.db
# O configurar un cron de backup en el servidor
```

### Monitoreo de logs
EasyPanel → tu app → Logs (streaming en tiempo real)

---

## Troubleshooting de producción

| Problema | Solución |
|---|---|
| Bot se desconecta cada pocas horas | Revisa que los volúmenes estén montados. Sin `/app/auth` persistente, regenera sesión en cada restart. |
| Dashboard inaccesible | Verifica DNS en Cloudflare (propagación puede tardar hasta 24h) |
| Error 429 de OpenRouter | Cambia modelo a `openai/gpt-4o-mini` (no uses `:free`) |
| `SQLITE_BUSY` en producción | Verifica que solo hay UNA instancia corriendo. EasyPanel no debe tener réplicas. |
| QR no aparece | Verifica que `start:bot` está corriendo (el QR lo genera el bot, no Next.js) |
