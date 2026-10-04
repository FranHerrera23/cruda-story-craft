# F56 · /second-look + cambios en el sitio

Rama: `f56-second-look`. El sweep de copy ya está hecho (`ad9145d`).
Fuentes: **este brief** (tiene prioridad) y `F56-second-look.html` (referencia de copy y estructura, con las correcciones aprobadas ya aplicadas).
Los dos se commitean en `docs/` tal cual.
**Copy verbatim.** Si falta un texto, PARAR y preguntar. No se completa nada.

---

## 1 · Global

- **Tokens del sitio** (fondo, tinta, crema, gris, naranja). Sin variables nuevas. Si los hex del HTML (`#F2F2F0`, `#FF5A00`…) difieren del sitio, gana el sitio. Reportar las diferencias.
- **Tipografía:** la del sitio. Sin esquinas redondeadas.
- **Naranja:** aparece una sola vez, en la regla de 64×2 px bajo el h1 del paso 1.
- Primera persona, voz de Fran.
- **Un paso visible a la vez,** en una sola página.
- **Barra superior:** "SECOND LOOK" a la izquierda y el progreso "1 / 4" a la derecha. Botón Back en los pasos 2 a 4.
- **Las respuestas se conservan** al volver atrás. Tiene que funcionar en ancho de teléfono.
- **Historial:** cada paso con `history.pushState` (`#step-1` … `#step-4`, `#done`). El botón atrás del navegador vuelve al paso anterior y conserva las respuestas.
- **Animación:**
  - el paso 1 se muestra **sin animación** y sin `opacity: 0` en el render inicial (regla F49/F52)
  - la transición entre pasos (solo `transform`, 350 ms) aplica desde el paso 2
  - con `prefers-reduced-motion`, ninguna
- **Footer:** "Referred by a client? Write to me directly at fran@thecruda.com." y "CRUDA · Your expertise, translated."
- **Meta title:** "Second Look · Fran Herrera · CRUDA".
- **Meta description:** "Two conversations and a written diagnosis of your business, from the outside. $950, credited toward any engagement."

## 2 · Pasos (copy exacto)

**Paso 1 · Welcome**
- Retrato 4:5: usar la imagen de Fran que el sitio ya tiene. En F55 se reemplaza por el avatar.
- h1: You've looked at your company from the inside for years.
- sub: This is the look from the outside.
- regla naranja 64×2
- texto: Hi, I'm Fran. A Second Look is just you and me: two long conversations about your business, and then I write down what I see. Your company, read from the outside, by someone who has nothing to sell you that day.
- botón: See how it works

**Paso 2 · How it works + who trusted us**
- Tres columnas:
  - FIRST CONVERSATION · 90 MIN — We go through the essentials, the way a fractional CMO would: your product, your price, where and how you sell, who your clients really are, and the story underneath it all.
  - SECOND CONVERSATION · 90 MIN — I share what I see: what's working, what isn't, and what's hard to notice when you're this close.
  - YOURS TO KEEP — A written diagnosis of your business, and what I'd do next.
- label: FOUNDERS AND COMPANIES WHO TRUSTED US
- **Grilla de 8 clientes:** los del HTML (Karen Mannheim, Mike Kaeding, Girish Sehgal, José Mannheim, Confidential, JP Romero, INOUT, Jack Yeager), con nombre, "empresa · ciudad" y la línea, tomados de la misma fuente de datos que el Selected work de la home. Sin links ni hover.
  - Si la home tiene una 9.ª entrada, **no va**. Reportar cuál es.
  - Si alguna línea de la home difiere del HTML, gana la home. Reportar las diferencias.
- línea bajo la grilla: From homes worth $200 million to a hospital in Abu Dhabi. The industry changes. What a company needs to say about itself doesn't.
- botón: Tell me about your company

**Paso 3 · Tres preguntas**
- h2: Tell me about your company.
- Campo de texto **obligatorio**, label "Company and website". Validación nativa: no se avanza vacío.
- Label "Annual revenue", opciones: Under $1M / $1–5M / $5–20M / $20M+
- Label "Budget available to invest in this", opciones: Under $5K / $5–20K / $20–50K / $50K+
- botón: Continue
- No hay campos de nombre ni de email: los pide Calendly.

**Paso 4 · Booking**
- h2: Pick a time that works for you.
- Al lado: "$950" y "Two conversations and a written diagnosis. Credited toward any engagement if we work together."
- Calendly inline, URL `process.env.NEXT_PUBLIC_CALENDLY_URL_SECOND_LOOK`, con `hide_gdpr_banner=1`, `a1`=empresa, `a2`=facturación, `a3`=presupuesto.
  - El script de Calendly se inyecta **al entrar al paso 4**, no antes.
  - Si la variable no existe, en lugar del widget se muestra "Write to me directly at fran@thecruda.com." y se registra el error.
- Debajo: Once you book, I'll send you an invoice for $950 within 24 hours. Your time is confirmed when it's paid. We set the second conversation together, at the end of the first.
- Al recibir `calendly.event_scheduled`, se pasa al cierre. El listener verifica `e.origin === 'https://calendly.com'` (exacto).

**Cierre**
- Retrato chico
- h2: See you soon.
- texto: Your time is held. The invoice will be in your inbox within 24 hours, and once it's paid, your Second Look is confirmed. Between now and then, you don't need to prepare anything. Just come as you are.
- firma: Fran (en gris)

## 3 · SEO y datos

- JSON-LD `Service` ("Second Look", provider = Organization CRUDA, con el `@id` existente) con `Offer` (`price` 950, `priceCurrency` USD).
- **og:image** 1200×630 JPG generado con script: fondo negro, raya naranja 40×2 arriba a la izquierda y abajo a la izquierda "You've looked at your company from the inside for years." en crema, con la tipografía del sitio.
- `/second-look` en el sitemap y en `llms.txt`.
- Indexable.

## 4 · Cambios en el sitio

Ya hechos en el sweep `ad9145d`. Resumen para el registro:
- "The Read" pasa a "Second Look" ("two conversations · $950") en la home, en `/services` (fila y ficha con el copy de las tres columnas) y en el FAQ de `/about`.
- Todos los CTA de reservar llevan a `/second-look` ("Start a Second Look →").
- `/contact`: h1 "Start with a Second Look." y debajo "Two conversations and a written diagnosis. $950.". El link va a `/second-look`; el formulario y el email quedan.
- Se eliminan "free", "no cost", "no pitch" y la llamada de 45 minutos de todo el sitio (salvo el uso editorial en los ensayos y los logs históricos).
- `NEXT_PUBLIC_CALENDLY_URL` se borra del código.
- **JP Romero, en todos lados:** "Takes Latin American architecture and design brands into the US market." Buscar "European" y reportar cualquier otra descripción de JP en esos términos.

## 5 · Pendientes de Fran (no bloquean el build)

- Evento de Calendly `second-look` de 90 minutos con las tres preguntas en orden (empresa, facturación, presupuesto). Desactivar el viejo.
- En Vercel: crear `NEXT_PUBLIC_CALENDLY_URL_SECOND_LOOK`, borrar `NEXT_PUBLIC_CALENDLY_URL` y hacer redeploy.

## 6 · QA

1. Capturas con hash de los 4 pasos y del cierre en 390 y 1440.
2. El botón atrás del navegador y el Back de la página funcionan y conservan las respuestas.
3. El paso 3 no avanza sin la empresa.
4. Verificación en la red de que Calendly no carga antes del paso 4.
5. Lighthouse mobile del paso 1 (mediana de 3): LCP < 2.5 s, CLS < 0.1.
6. Pixel-diff 0 en las demás páginas, salvo los cambios del sweep.
7. Preview de Vercel en verde. Merge con el merge-log.
