# 01 — Instalación

## Requisitos del sistema

| Requisito | Mínimo | Recomendado |
|---|---|---|
| Node.js | 20.9.0 | 22.x LTS |
| npm | 10.x | 10.x |
| RAM | 512 MB | 1 GB |
| Disco | 500 MB | 2 GB |
| SO | macOS/Linux/Windows | Ubuntu 22.04 LTS |

## Instalación paso a paso

### 1. Node.js

**macOS** (con nvm):
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash
nvm install 22
nvm use 22
```

**Linux** (Ubuntu):
```bash
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt-get install -y nodejs
```

**Windows**: Descarga el instalador desde https://nodejs.org/en/download

### 2. Dependencias del proyecto

```bash
cd whatsapp-ai-agent-kit
npm install
```

La instalación puede tardar 60-90 segundos. Descarga e instala ~200 MB de paquetes incluyendo Baileys, Next.js y better-sqlite3 (que compila código nativo).

### 3. Verificar instalación

```bash
npm run check
```

Debe mostrar todos los checks en verde excepto `.env.local` (que creas en el siguiente paso).

## Solución de problemas de instalación

### `node-gyp` falla en Windows

better-sqlite3 requiere compilación nativa. En Windows necesitas:
```bash
npm install --global windows-build-tools
```
O instala Visual Studio Build Tools manualmente.

### `npm install` muy lento

Usa un proxy de npm más cercano:
```bash
npm config set registry https://registry.npmjs.org/
```

### Error de permisos en Linux

```bash
# Nunca uses sudo con npm install en el directorio del proyecto
# Si tienes problemas de permisos:
sudo chown -R $(whoami) ~/.npm
```
