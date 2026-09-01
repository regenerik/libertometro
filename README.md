# Libertómetro de Consistencia

Mini app estática para cruzar afirmaciones libertarias iniciales con escenarios cotidianos y mostrar inconsistencias como un mapa conceptual interactivo.

## Qué incluye

- Encuesta inicial con 33 afirmaciones libertarias frecuentes.
- 20 preguntas aleatorias con ramas internas y réplicas.
- Historial local de respuestas e inconsistencias usando `localStorage`.
- Barra lateral de "libertarismo" basada en creencias activas.
- Botón "Ya no creo en esto" en las creencias que disparan inconsistencias.
- Cartel de felicitaciones si se abandonan todas las creencias iniciales.
- Bloque "Fuentes:" en inconsistencias, con enlaces externos en pestaña nueva.
- Diseño responsive sin dependencias ni build step.
- `render.yaml` listo para publicar como Static Site en Render.

## Cómo probarlo

Abrí `index.html` directamente en el navegador.

También podés servir la carpeta con cualquier servidor estático local. Por ejemplo:

```bash
python -m http.server 8080
```

## Deploy en Render

Opción dashboard:

1. Subí esta carpeta a un repositorio.
2. En Render, creá un nuevo Static Site.
3. Usá esta carpeta como root si el repo tiene más cosas.
4. Build Command: dejalo vacío.
5. Publish Directory: `.`.

Opción Blueprint:

Render puede leer `render.yaml`. La configuración usa `type: web`, `runtime: static` y `staticPublishPath: .`.

## Cómo ampliar preguntas

El contenido vive en `app.js`:

- `beliefs`: afirmaciones iniciales.
- `questions`: preguntas base, respuestas, inconsistencias y réplicas.
- `globalChecks`: cruces históricos entre respuestas de distintas preguntas.

Cada inconsistencia tiene un `id` único para no repetirse si aparece por más de un camino.
