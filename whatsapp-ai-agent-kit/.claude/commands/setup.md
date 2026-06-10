---
description: Configura el WhatsApp AI Agent Kit desde cero. Crea .env.local, valida la API key de OpenRouter y prepara el sistema para arrancar.
---

# /setup — Configuración inicial del kit

## Objetivo
Llevar al usuario desde cero hasta tener el bot listo para escanear el QR, sin que tenga que abrir una terminal manualmente.

## Pasos a ejecutar (en orden)

### 1. Validar Node.js
Comprueba que `node --version` devuelve v20 o superior. Si no, indica cómo instalar Node 22 desde https://nodejs.org o via nvm.

### 2. Comprobar si existe `.env.local`
- Si NO existe: cópialo desde `.env.example`.
- Si SÍ existe: lee el contenido y verifica si `OPENROUTER_API_KEY` está rellenada.

### 3. Solicitar la API key de OpenRouter
Si `OPENROUTER_API_KEY` está vacía:
1. Indica al usuario que vaya a https://openrouter.ai/keys
2. Que cree una key (es gratuito registrarse, pago por uso)
3. Que la pegue aquí
4. Valida que empiece por `sk-or-`
5. Escríbela en `.env.local` en la línea `OPENROUTER_API_KEY=`

### 4. Configurar el modelo
Pregunta si quiere usar el modelo por defecto (`openai/gpt-4o-mini`) o cambiarlo.
- Opciones recomendadas: `openai/gpt-4o-mini`, `anthropic/claude-haiku-4-5`, `google/gemini-2.5-flash`
- **NUNCA** sugerir modelos `:free` para producción.
- Escribe el modelo elegido en `OPENROUTER_MODEL=` en `.env.local`.

### 5. Instalar dependencias
Ejecuta `npm install` desde el directorio del kit. Confirma que termina sin errores.

### 6. Validar TypeScript
Ejecuta `npm run typecheck`. Si hay errores, muéstralos y corrígelos antes de continuar.

### 7. Instrucciones para arrancar
Indica al usuario que ejecute `npm run start:all` y que abra `http://localhost:3000`.
Explica que aparecerá un QR que debe escanear con WhatsApp > Dispositivos vinculados.

### 8. Próximo paso
Sugiere ejecutar `/personaliza` para configurar el perfil del negocio y personalizar el comportamiento del agente.

## Validaciones obligatorias antes de declarar éxito
- [ ] `.env.local` existe y `OPENROUTER_API_KEY` tiene valor que empieza por `sk-or-`
- [ ] `OPENROUTER_MODEL` no termina en `:free`
- [ ] `node_modules` existe
- [ ] `npm run typecheck` pasa sin errores
