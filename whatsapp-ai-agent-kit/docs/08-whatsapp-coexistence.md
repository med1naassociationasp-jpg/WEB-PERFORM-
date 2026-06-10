# 08 — Coexistencia con WhatsApp Business

## Limitaciones de Baileys

Baileys emula un cliente de WhatsApp Web/Desktop. Esto implica:

1. **Solo un número**: No puedes tener el mismo número en WhatsApp y en el bot simultáneamente desde el mismo dispositivo. El bot ocupa un "slot" de dispositivo vinculado.

2. **Límite de dispositivos**: WhatsApp permite hasta 4 dispositivos vinculados. El bot ocupa uno de esos slots.

3. **WhatsApp Business API vs Baileys**: La API oficial de WhatsApp Business (Meta) es diferente y más cara, pero oficial. Baileys usa ingeniería inversa del protocolo.

## Número recomendado para el bot

Usa un número de WhatsApp **dedicado** para el bot:
- Una SIM secundaria o eSIM
- Un número de VoIP (ej: Skype Number, TextNow)
- Un número de WhatsApp Business independiente

**No uses tu número personal** — si WhatsApp banea el número por comportamiento de spam, perderás acceso.

## Riesgo de ban

WhatsApp puede bannear números que:
- Envíen mensajes masivos a contactos que no los tienen guardados
- Tengan muchas quejas de spam
- Usen automatización de forma agresiva

Para minimizar el riesgo:
- El bot solo responde a mensajes entrantes (no inicia conversaciones)
- Los mensajes son naturales y conversacionales
- No envíes el mismo mensaje a múltiples contactos a la vez
- Respeta el ritmo natural de la conversación (no envíes 10 mensajes seguidos)

## WhatsApp Business vs WhatsApp Personal

Baileys funciona con ambos. Usa WhatsApp Business si:
- Quieres mostrar información de negocio en el perfil (horarios, dirección, web)
- Quieres mensajes de bienvenida/ausencia nativos como respaldo
- Tienes más de 200 conversaciones/día (Business API puede ser más apropiada)

## Coexistencia en el mismo dispositivo

Si quieres seguir usando WhatsApp en tu móvil mientras el bot corre:
- El bot ocupa un slot de "dispositivo vinculado" — esto es normal
- Puedes ver el bot como "WhatsApp Web" en tu lista de dispositivos
- Si desconectas desde el móvil (Dispositivos vinculados > Cerrar sesión), el bot generará un nuevo QR
