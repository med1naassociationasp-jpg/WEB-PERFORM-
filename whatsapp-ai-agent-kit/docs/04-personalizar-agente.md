# 04 — Personalizar el agente

## El archivo `prompts/negocio.md`

El comportamiento del agente se controla principalmente a través del archivo `prompts/negocio.md`.

Si este archivo no existe, el agente usa un prompt genérico que le dice al usuario que configure el kit.

## Estructura del perfil

```markdown
# Perfil del negocio

## Nombre
Nombre del negocio o marca

## Descripción
Qué hace el negocio en 2-3 frases claras.

## Cliente ideal (ICP)
- Tipo de empresa: (ej: ecommerce con más de 50k€/mes de facturación)
- Sector: (ej: retail, servicios B2B, infoproductos)
- Cargo del decisor: (ej: CEO, Director de Marketing, fundador)
- Problema principal: (ej: tiene tráfico pero no convierte)

## Problema que resolvemos
El dolor principal que experimentan nuestros clientes y cómo lo solucionamos.

## Propuesta de valor
Qué nos diferencia y por qué deberían elegirnos a nosotros.

## Rango de inversión
Nuestros servicios/productos van de X€ a Y€. El ticket medio es Z€.

## Criterios de calificación
Un lead es cualificado si:
- Tiene negocio activo con facturación > 5k€/mes
- Su dolor encaja con nuestra solución
- Tiene urgencia (quiere empezar en menos de 30 días)
- Tiene presupuesto disponible

## Qué NO atendemos
- Empresas que empiezan desde cero sin facturación
- Proyectos con presupuesto < 500€
- [añade tus exclusiones]

## Tono del agente
Profesional pero cercano. Directo al grano. Sin jerga técnica.
El agente se llama [nombre] y representa a [negocio].
```

## Cómo el agente usa este archivo

El contenido de `negocio.md` se inyecta en el system prompt de cada conversación. El agente:

1. Usa la descripción para presentarse y explicar qué hace el negocio
2. Usa el ICP para orientar las preguntas de calificación
3. Usa los criterios de calificación para la tool `calificar`
4. Usa el tono para adaptar su estilo de comunicación
5. Usa las exclusiones para saber cuándo usar `derivarHumano`

## Crear con Claude Code

La forma más fácil es usar el comando `/personaliza` en Claude Code:

```
/personaliza
```

El asistente te hace preguntas una a una y genera el archivo por ti.

## Actualizar el prompt en caliente

El archivo `negocio.md` se lee en cada petición al agente — no necesitas reiniciar el bot para que los cambios tomen efecto. Edita el archivo y la próxima conversación usará el prompt actualizado.
