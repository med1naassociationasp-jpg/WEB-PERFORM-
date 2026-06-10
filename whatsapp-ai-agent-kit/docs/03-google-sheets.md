# 03 — Integración con Google Sheets

## Configuración del webhook

### 1. Crear la hoja de cálculo

1. Crea una nueva hoja en Google Sheets
2. Añade estas columnas en la primera fila:
   ```
   A: Fecha | B: Nombre | C: Teléfono | D: Negocio | E: Facturación | F: Dolor
   ```

### 2. Crear el Apps Script

1. En Google Sheets: Extensiones → Apps Script
2. Borra el código existente y pega:

```javascript
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    sheet.appendRow([
      data.fecha || new Date().toISOString(),
      data.nombre || '',
      data.telefono || '',
      data.negocio || '',
      data.facturacion || '',
      data.dolor || ''
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. Guarda el script (Ctrl+S)

### 3. Desplegar como aplicación web

1. Desplegar → Nueva implementación
2. Tipo: Aplicación web
3. Ejecutar como: Yo mismo
4. Quién tiene acceso: Cualquier usuario
5. Clic en "Implementar"
6. Copia la URL del webhook

### 4. Configurar en `.env.local`

```
GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/XXXXXX/exec
```

### 5. Probar el webhook

```bash
curl -X POST "TU_URL_WEBHOOK" \
  -H "Content-Type: application/json" \
  -d '{"nombre":"Test","telefono":"34600000000","negocio":"Test"}'
```

Debe devolver `{"ok":true}` y aparecer una fila en la hoja.

## Notas importantes

- Google Apps Script tiene un límite de 20.000 ejecuciones/día en cuentas gratuitas
- El webhook puede tardar 1-2 segundos en responder (normal)
- Si el webhook falla, el agente continúa funcionando (la tool devuelve `ok: false` pero no detiene la conversación)
