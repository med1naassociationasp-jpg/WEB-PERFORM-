# Prompts — Guía de personalización

## Archivos en este directorio

```
prompts/
├── README.md               ← estás aquí
├── negocio.example.md      ← ejemplo de perfil de negocio
├── negocio.md              ← TU perfil (gitignored, créalo tú)
└── ejemplos/
    ├── agencia-ia.md       ← ejemplo para agencia de IA
    ├── ecommerce.md        ← ejemplo para tienda online
    └── infoproducto.md     ← ejemplo para creador de cursos
```

## Cómo crear tu perfil

### Opción A — Con Claude Code (recomendado)
```
/personaliza
```

### Opción B — Copiar un ejemplo
```bash
cp prompts/ejemplos/agencia-ia.md prompts/negocio.md
# Edita los valores con tu información
```

### Opción C — Desde el ejemplo base
```bash
cp prompts/negocio.example.md prompts/negocio.md
# Rellena todas las secciones
```

## Notas importantes

- `negocio.md` está en `.gitignore` — contiene información de tu negocio y nunca se sube al repo
- El prompt se recarga en cada mensaje — no necesitas reiniciar el bot para que los cambios tomen efecto
- Si `negocio.md` no existe, el bot usa un prompt genérico
- Cuanto más específico sea el perfil, mejor calificará el agente
