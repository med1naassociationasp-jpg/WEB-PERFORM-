# Errores de sesión — Los 16 más comunes

Referencia completa de errores de WhatsApp/Baileys y cómo resolverlos.

---

## Error 1: `DisconnectReason.loggedOut` (401)

**Síntoma**: El bot muestra "Sesión cerrada (loggedOut)" y no reconecta.

**Causa**: WhatsApp cerró la sesión manualmente desde el móvil (Dispositivos vinculados > Cerrar sesión) o la sesión expiró por inactividad prolongada.

**Solución**:
1. Borra la carpeta `auth/`
2. Reinicia el bot
3. Escanea el QR de nuevo

```bash
rm -rf auth/
npm run start:bot
```

---

## Error 2: `connectionReplaced` (440)

**Síntoma**: Bot se desconecta con código 440 y reconecta en bucle.

**Causa**: Hay otra sesión activa con las mismas credenciales (otro proceso del bot corriendo en paralelo).

**Solución**:
1. Mata todos los procesos Node.js
2. Reinicia solo una instancia del bot

```bash
# Linux/macOS
pkill -f "start-bot"
npm run start:bot

# Windows
taskkill /F /IM node.exe
npm run start:bot
```

---

## Error 3: `515` (pairing OK)

**Síntoma**: Bot muestra código 515 en los logs al conectar.

**Causa**: Esto NO es un error. El código 515 indica que el emparejamiento fue exitoso.

**Solución**: No hacer nada. El bot debería conectar correctamente a continuación.

---

## Error 4: QR no aparece en el dashboard

**Síntoma**: El dashboard muestra "Esperando al bot..." sin generar QR.

**Causa**: El bot (`start-bot.ts`) no está corriendo.

**Solución**:
```bash
npm run start:bot
# O ambos servicios juntos:
npm run start:all
```

---

## Error 5: QR aparece pero no se puede escanear

**Síntoma**: El QR es visible pero WhatsApp dice "QR no válido" o "Error al escanear".

**Causa**: El QR caducó (duran ~60 segundos) o hay un problema de codificación.

**Solución**:
1. Recarga la página del dashboard
2. Espera a que aparezca un nuevo QR
3. Escanea inmediatamente

---

## Error 6: `SQLITE_BUSY`

**Síntoma**: Error en los logs del bot o en Next.js durante `npm run build`.

**Causa**: Múltiples procesos intentando acceder a la DB simultáneamente, o la DB se abre en el módulo-nivel (al hacer import).

**Solución**:
- Verifica que `db.ts` usa lazy init (la función `ctx()` solo abre la DB cuando se llama, no al importar)
- Si ocurre durante build: es normal — Next.js importa los módulos pero no debe abrir la DB. Verifica que no hay código de inicialización fuera de funciones.

---

## Error 7: `Falta OPENROUTER_API_KEY`

**Síntoma**: Bot no arranca, muestra este error en los logs.

**Causa**: `.env.local` no existe o `OPENROUTER_API_KEY` está vacía.

**Solución**:
```bash
cp .env.example .env.local
# Edita .env.local y añade tu key
```

---

## Error 8: `429 Too Many Requests` de OpenRouter

**Síntoma**: El agente responde con errores o no responde.

**Causa más probable**: Estás usando un modelo `:free` que tiene límite de 20 req/min global.

**Solución**: Cambia el modelo en `.env.local`:
```
OPENROUTER_MODEL=openai/gpt-4o-mini
```

---

## Error 9: El bot responde pero los mensajes no llegan al móvil

**Síntoma**: El historial en el dashboard muestra respuestas del agente pero el lead no las recibe.

**Causa**: Problema de red del servidor o el JID del destinatario está mal formado.

**Solución**:
1. Verifica que el bot tiene conexión a internet
2. Comprueba los logs del bot para errores de `sendMessage`
3. Verifica que el JID en la DB es correcto (formato: `34612345678@s.whatsapp.net`)

---

## Error 10: El modo IA está activo pero el bot no responde

**Síntoma**: Conversación en modo IA, llegan mensajes, pero no hay respuesta.

**Causas posibles**:
1. El modelo de IA devuelve una respuesta vacía
2. Error en la llamada a OpenRouter
3. El mensaje es de un grupo (filtrado por diseño)

**Solución**:
1. Revisa los logs del bot para errores de OpenRouter
2. Verifica que `OPENROUTER_API_KEY` es válida
3. Prueba con `curl` directamente a OpenRouter para descartar problemas de la key

---

## Error 11: `Cannot find module` al ejecutar scripts

**Síntoma**: `Error: Cannot find module '../src/lib/baileys/client.js'`

**Causa**: En ES Modules, los imports deben incluir la extensión `.js` aunque el archivo sea `.ts`.

**Solución**: Verifica que todos los imports en `src/` usan la extensión `.js`:
```ts
// Correcto
import { start } from "../src/lib/baileys/client.js";

// Incorrecto
import { start } from "../src/lib/baileys/client";
```

---

## Error 12: `next build` falla con errores de TypeScript

**Síntoma**: `npm run build` falla con errores de tipos.

**Solución**:
```bash
npm run typecheck
# Revisa y corrige los errores mostrados
```

---

## Error 13: Dashboard inaccesible en producción

**Síntoma**: `http://tu-dominio.com` devuelve error 502/503.

**Causas posibles**:
1. Next.js no está corriendo
2. El puerto no está expuesto correctamente en EasyPanel
3. El DNS no ha propagado todavía

**Solución**:
1. Verifica los logs en EasyPanel
2. Comprueba que el contenedor está "Running"
3. Verifica la configuración del dominio (puede tardar hasta 24h)

---

## Error 14: Sesión se pierde en cada redeploy

**Síntoma**: Después de cada despliegue, el bot genera un nuevo QR.

**Causa**: El volumen de `/auth` no está configurado como persistente en el servidor.

**Solución en EasyPanel**:
1. App → Mounts
2. Añadir: `/app/auth` como volumen persistente
3. Añadir: `/app/data` como volumen persistente

---

## Error 15: Mensajes duplicados

**Síntoma**: El bot envía el mismo mensaje dos veces.

**Causa**: Hay dos instancias del bot corriendo simultáneamente.

**Solución**:
```bash
# Verificar procesos activos
ps aux | grep "start-bot"
# Matar duplicados y dejar solo uno
```

---

## Error 16: `@hapi/boom` not found

**Síntoma**: Error al importar `client.ts`: `Cannot find module '@hapi/boom'`

**Causa**: La dependencia `@hapi/boom` es una peer dependency de Baileys que a veces no se instala automáticamente.

**Solución**:
```bash
npm install @hapi/boom
```
