# 06 — Despliegue en VPS (Hostinger + EasyPanel)

Ver la guía completa en `/deploy` (Claude Code) o en `GUIA-COMPLETA.md#despliegue-en-producción`.

## Resumen rápido

### 1. Contratar VPS

Hostinger VPS KVM 2 (€9/mes): https://www.hostinger.es/vps-hosting
- Ubuntu 22.04 LTS
- 2 vCPU, 8 GB RAM

### 2. Instalar EasyPanel

```bash
curl -sSL https://get.easypanel.io | sh
```

### 3. Configurar la app en EasyPanel

- Source: GitHub repo
- Build: Nixpacks (usa `nixpacks.toml` del proyecto)
- Variables de entorno: `OPENROUTER_API_KEY`, `OPENROUTER_MODEL`, `PORT=3000`
- Volúmenes: `/app/data` y `/app/auth` (persistentes)
- Puerto: 3000

### 4. Proteger con Cloudflare Access

- Cloudflare Zero Trust → Access → Applications
- Dominio: tu-dominio.com
- Policy: Allow → Emails autorizados

### 5. Primera conexión

Accede al dashboard y escanea el QR. La sesión queda guardada en el volumen persistente.

## Archivos de despliegue incluidos

- `nixpacks.toml` — configuración de build para Nixpacks/Railway/Render
- `Procfile` — para Heroku y plataformas compatibles
