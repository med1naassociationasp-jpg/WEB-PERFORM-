# 05 — Panel web

## Acceso

El panel web está disponible en `http://localhost:3000` en desarrollo, o en tu dominio en producción.

## Flujo de uso

### Primera vez: pantalla de QR

Si el bot no está conectado a WhatsApp, verás la pantalla de QR:
1. Asegúrate de que el bot está corriendo (`npm run start:bot`)
2. El QR aparecerá automáticamente (puede tardar 10-30 segundos)
3. En tu móvil: WhatsApp → tres puntos → Dispositivos vinculados → Vincular dispositivo
4. Escanea el QR

### Dashboard principal

Una vez conectado, verás el dashboard con dos columnas:

**Columna izquierda — Lista de conversaciones**
- Ordenadas por última actividad
- Badge verde = modo IA activo
- Badge naranja = modo humano activo
- Preview del último mensaje

**Columna derecha — Panel de conversación**
- Historial completo del chat
- Mensajes del usuario (gris, izquierda)
- Respuestas del agente IA (verde, derecha)
- Mensajes enviados por humano desde el panel (naranja, derecha)

## Funcionalidades del panel

### Cambiar modo de conversación

Cada conversación puede estar en modo **IA** o **Humano**:
- **Modo IA**: el agente responde automáticamente
- **Modo Humano**: el agente no responde; tú escribes desde el panel

Para cambiar: usa el toggle en la esquina superior derecha del panel de conversación.

### Enviar mensajes manuales

Solo disponible en modo Humano. El campo de texto aparece en la parte inferior del panel.
- `Enter` para enviar
- `Shift+Enter` para nueva línea

Los mensajes se envían por WhatsApp al lead en 2-4 segundos.

### Borrar conversación

Botón "Borrar" en el panel de conversación. Elimina todos los mensajes y la conversación de la DB. No se puede deshacer.

### Desconectar WhatsApp

Botón "Desconectar" en el header. Elimina la sesión de WhatsApp y genera un nuevo QR para vincular otro número.

## Polling automático

El panel actualiza automáticamente cada 2 segundos:
- Estado de conexión
- Lista de conversaciones
- Mensajes de la conversación seleccionada

No necesitas recargar la página manualmente.
