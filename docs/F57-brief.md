# F57 · Second Look reservable + /services + /thinking

Rama: `f57-fixes` desde `main`. Se ejecuta según `docs/autonomy.md`: sin paradas, un reporte al final.
**Prioridad: el §1 sale primero, en un commit propio, y se mergea apenas el preview esté en verde. El resto viene después.**

---

## 1 · Calendly en el paso 4 (crítico)

- La URL de Calendly es `process.env.NEXT_PUBLIC_CALENDLY_URL_SECOND_LOOK`, con **valor por defecto en el código**: `https://calendly.com/cruda-intro/narrative-sparring-live-1`. Si la variable no existe, se usa ese link; el fallback de email ya no se activa por esa causa.
- Siguen igual: `hide_gdpr_banner=1`, `a1` = empresa, `a2` = facturación, `a3` = presupuesto, el script cargado recién al entrar al paso 4 y el chequeo de origen exacto.
- QA: en el preview, el widget de Calendly se ve en el paso 4, con los campos precargados. Captura en 390 y 1440.

## 2 · Second Look: idioma y foto

- **Línea nueva (copy de Fran, exacta): "Calls in English or Spanish."**
  - Paso 1: debajo del texto y arriba del botón, 15 px, color gris del sitio, 16 px arriba.
  - Paso 4: debajo de la nota del precio, mismo estilo.
- **Foto del paso 1 y del cierre:** se usa `public/fran-second-look.<ext>` si existe (Fran la sube). Si no, `public/fran-avatar-source.<ext>`. Si tampoco, la foto actual. Mismo recorte 4:5 y mismo tamaño que hoy. No se agrega ningún filtro.

## 3 · /services y home: Second Look como entrada

- **Frase de la intro**, en `/services` y en la sección "What we do" de la home:
  - antes: "Work with us for one session, for twelve weeks, or every week after that."
  - después: **"Start with two conversations. Then twelve weeks, or every week after that."**
- **Orden y marca:** Second Look pasa a ser la **primera fila**, en el índice de `/services` y en la lista de la home. En el lugar del número va **"Start here"**, con el mismo estilo naranja de los números. Translated, Transmission e Interpreted quedan como 01, 02 y 03.
- **Ficha de Second Look en `/services`:** pasa a ser la primera ficha. Eyebrow "Start here · Two conversations". El resto de la ficha, sin cambios.
- Las anclas y los links de la home (`#second-look`, etc.) se mantienen.

## 4 · /thinking: un solo bloque de suscripción y título arriba

- **Primer pantallazo:** el hero pasa a `align-items: start`. "Thinking" queda arriba, como en el diseño de F54. El formulario no puede empujar el h1 hacia abajo.
- **Un solo bloque:** el aside conserva "Narrative Sparring" y "Every week, the full story." (en Archivo, como está) y el embed debajo. El embed se muestra en su propio contenedor, con `max-height` igual a la altura reservada y `overflow: hidden`, alineado arriba.
  - Si el embed de beehiiv todavía trae título y descripción propios, igual se ve uno solo: el del sitio.
  - Reportá cómo queda con y sin la limpieza que Fran hace en beehiiv.
- **Caja de suscripción al final de todos los ensayos, también los ES:** el mismo bloque de los ensayos EN (título = la línea de newsletter del ensayo, y debajo el embed). Antes, en ES era solo un link.

## 5 · QA y entrega

1. El §1 primero, solo: preview en verde, merge y deploy. Después el resto.
2. Capturas con hash: `/second-look` pasos 1 y 4, `/services` (índice y primera ficha), la home ("What we do"), `/thinking` (primer pantallazo) y un ensayo EN y uno ES (final), en 390 y 1440.
3. Pixel-diff: solo cambian las zonas de arriba. El resto en 0, con el criterio de F49.
4. Merge, merge-log y un reporte al final, con la lista de lo que depende de Fran.

## 6 · Lo que hace Fran (fuera del repo)

- **Calendly:** el evento `narrative-sparring-live-1` pasa a 90 minutos, con las tres preguntas en este orden: empresa y web, facturación anual, presupuesto. Cambiarle el nombre a "Second Look".
- **beehiiv:** el formulario sin título ni descripción y en tipografía sans.
- **GitHub:** la foto nueva, como `public/fran-second-look.jpg`.
