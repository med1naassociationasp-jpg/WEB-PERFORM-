---
description: Personaliza el agente de WhatsApp con el perfil del negocio. Hace preguntas una a una y genera prompts/negocio.md.
---

# /personaliza — Personalización del agente

## Objetivo
Generar el archivo `prompts/negocio.md` con el perfil del negocio para que el agente tenga contexto real y pueda calificar leads adecuadamente.

## Regla crítica
**Una pregunta a la vez.** No hagas varias preguntas en el mismo mensaje. Espera la respuesta antes de continuar.

## Flujo de preguntas

### Pregunta 1 — Nombre del negocio
"¿Cómo se llama tu negocio o proyecto?"

### Pregunta 2 — Qué hace
"¿Qué hace exactamente tu negocio? Descríbelo en 1-2 frases como si se lo explicaras a un cliente nuevo."

### Pregunta 3 — Cliente ideal
"¿Quién es tu cliente ideal? (tipo de empresa, sector, tamaño, cargo de la persona que decide)"

### Pregunta 4 — Problema que resuelves
"¿Cuál es el principal problema o dolor que resuelves para tus clientes?"

### Pregunta 5 — Propuesta de valor
"¿Qué te diferencia de la competencia? ¿Por qué elegiría alguien trabajar contigo y no con otro?"

### Pregunta 6 — Rango de precios / inversión
"¿Cuál es el rango de inversión de tus servicios o productos? (no tiene que ser exacto, un rango orientativo)"

### Pregunta 7 — Criterios de calificación
"¿Qué hace que un lead sea 'bueno' para ti? (facturación mínima, sector específico, problema concreto, etc.)"

### Pregunta 8 — Qué NO quieres
"¿Hay algún tipo de cliente o caso que NO quieres atender? (para que el agente no pierda tiempo)"

### Pregunta 9 — Tono del agente
"¿Cómo quieres que suene el agente? (formal/informal, cercano/profesional, directo/consultivo)"

### Pregunta 10 — Nombre del agente (opcional)
"¿Quieres que el agente tenga un nombre? (ej: 'Soy Marta, del equipo de Divisual'). Si no, lo dejamos genérico."

## Generación del archivo

Con todas las respuestas, genera `prompts/negocio.md` con este formato:

```markdown
# Perfil del negocio

## Nombre
[nombre]

## Descripción
[qué hace]

## Cliente ideal
[descripción del ICP]

## Problema que resolvemos
[dolor principal]

## Propuesta de valor
[diferenciadores]

## Rango de inversión
[rango de precios]

## Criterios de calificación (lead cualificado)
[criterios para score >= 7]

## Qué NO atendemos
[exclusiones]

## Tono del agente
[estilo de comunicación]

## Identidad del agente
[nombre si aplica, o "Asistente del equipo de [negocio]"]
```

## Post-generación
1. Lee el archivo generado y muéstraselo al usuario para confirmación.
2. Pregunta si quiere ajustar algo.
3. Recuerda que `prompts/negocio.md` está en `.gitignore` (no se sube al repo).
4. Indica que el bot usará este perfil automáticamente — no necesita reiniciarse.
