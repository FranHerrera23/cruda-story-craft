# F55 · /about desde cero · paneles independientes

Rama: `f55-about` desde `main` **con F54 mergeado**.
Diseño aprobado por Fran en canvas el 1-oct-2026. **Se construye exactamente esto.** Se borra la página actual y se reemplaza; no se reutiliza su layout. Si una medida no se puede aplicar tal cual, PARAR y preguntar.
Las demás páginas no se tocan (pixel-diff 0), salvo el avatar de la firma de los ensayos (§6).

---

## 0 · Sistema

- **Tipografía, colores, contenedor, nav y footer:** los mismos de F54 §0. Crema = el token del loader; naranja = el token de la regla del h1.
- **Panel:** cada capítulo es un `<section>` independiente, a todo el ancho, con su propio fondo. **Nada se superpone ni se apila sobre otro**: sin sticky, sin planos que se pliegan.
- **Scroll:** cada panel usa **el mismo motor y la misma animación de entrada que `/services`**, aplicados por panel. Reportar qué componente es y con qué parámetros.
  - Reglas F49/F52: nada visible en el primer pantallazo arranca en `opacity: 0`. El reveal del hero es solo `transform`.
  - `prefers-reduced-motion`: sin animación.
- **Barra de panel** (todos menos el hero):
  - `border-top: 1px solid currentColor`, padding-top 16 px, 15 px
  - a la izquierda, el número romano (peso 500, 14 px de margen derecho) y el nombre
  - a la derecha, "I / IV" con opacidad 0.6
- **Ritmo de fondos:** hero blanco · I blanco · II **negro** · III blanco · IV blanco · Start here **negro**. En los paneles negros, el texto va en crema, el dek en `#BDB6AB` y los filetes en `#3A3733`.

## 1 · Desktop (≥ 1024)

```
┌ nav ─────────────────────────────────────────────────────────────┐
│ HERO · blanco · min-height 820 · contenido anclado abajo          │
│                                                                   │
│ Find the essence.                         (120px / .95 / 600)     │
│ Strip the bullshit.                                               │
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━ naranja 2px, 58% de ancho              │
│                                                        96px       │
├───────────────────────────────────────────────────────────────────┤
│ PANEL I · blanco · min-height 820 · padding 64 / 40 / 112         │
│ ─────────────────────────────────────────────────── 1px           │
│ I  Our story                                            I / IV    │
│                                                        88px       │
│                  The first client came three years before the     │
│                  company did.                     (h2 44px)       │
│                  párrafo 1 (21px / 1.6)                           │
│                  párrafo 2                                        │
│                  párrafo 3          (texto en cols 4–10)          │
├███████████████████████████████████████████████████████████████████┤
│ PANEL II · NEGRO · texto crema                                    │
│ II  The work                                           II / IV    │
│                  We don't add. We reveal what's already there.    │
│                  2 párrafos                                       │
├───────────────────────────────────────────────────────────────────┤
│ PANEL III · blanco · min-height 900                               │
│ III  Who you work with                                III / IV    │
│                  You talk to Fran from the first call.            │
│                  ┌────┐  Fran Herrera founded CRUDA in…           │
│                  │120 │  (21px / 1.6)                             │
│                  │×150│                                           │
│                  └────┘                                           │
│                  ─────────────── 1px #E6E6E6                      │
│                  Languages            Replies                     │
│                  English and…         Within 24–48 hours.         │
│                  Before CRUDA         What he reads               │
│                  …                    …                           │
│                  Fran on LinkedIn                                 │
├───────────────────────────────────────────────────────────────────┤
│ PANEL IV · blanco · min-height 760                                │
│ IV  Questions                                          IV / IV    │
│                  ─────────────────────────────────────            │
│                  Pregunta 1                                 +     │
│                  ─────────────────────────────────────            │
│                  … (8, acordeón)                                  │
├███████████████████████████████████████████████████████████████████┤
│ START HERE · NEGRO · min-height 560                               │
│ Start here                                                        │
│                  The first step is a 45-minute call with Fran.    │
│                  No cost, and no pitch at the end of it. (44px)   │
│                  [ Book the call ]   fran@thecruda.com            │
└───────────────────────────────────────────────────────────────────┘
```

- **Panel:** padding 64 px arriba, 40 px a los lados y 112 px abajo. Contenedor del sitio. Barra y contenido separados por 88 px.
- **Contenido de los paneles I a IV:** cols 4–10 de la grilla de 12.
- **Hero:**
  - h1 "Find the essence. / Strip the bullshit." en dos líneas: 120 px / 0.95, peso 600, tracking −0.045em
  - regla naranja de 2 px, 48 px arriba, ancho 58 % del contenedor
  - padding inferior 96 px
- **h2 de panel:** 44 px / 1.1, peso 500, tracking −0.02em, `text-wrap: balance`, 36 px abajo.
- **Prosa:** 21 px / 1.6, 1.1em entre párrafos, ancho máximo el de cols 4–10.
- **Retrato (III):** 120 × 150 px, en blanco y negro, al lado del párrafo con 32 px de gap.
- **Ficha (III):**
  - grilla de 2 columnas, gap 32 / 28, `border-top: 1px #E6E6E6` y padding-top 32, 56 px arriba
  - `dt` 14 px `#6B6B6B`; `dd` 16 px / 1.55
  - "Fran on LinkedIn": 15 px, 32 px arriba
- **Preguntas (IV):**
  - `<details>` con filetes `#E6E6E6` arriba de cada una y abajo de la última
  - `summary` 19 px peso 500, padding 22 px, con un "+" de 20 px a la derecha que rota 45° al abrir (sin animación si reduced-motion)
  - respuesta 17 px / 1.6 `#5C5C5C`, 26 px abajo
  - todas cerradas al cargar
- **Start here:**
  - frase 44 px / 1.1, peso 500, `max-width: 16em`, cols 4–11
  - botón "Book the call": 48 px de alto, fondo crema, texto negro, padding 0 24, sin radio, link al Calendly actual (`NEXT_PUBLIC_CALENDLY_URL`)
  - email `fran@thecruda.com` en crema, 28 px a la derecha, `mailto:`

## 2 · Tablet (768–1023)

Mismo esquema de paneles, con el contenido en cols 2–11, h1 de 88 px, h2 de 36 px y la ficha en 2 columnas.

## 3 · Mobile (≤ 767) — con aire

```
┌ nav ──────────────────────┐
│ 28px de margen lateral     │
│        120px               │
│ Find the                   │
│ essence.        (52px)     │
│ Strip the                  │
│ bullshit.                  │
│ ━━━━━━━━━━━━━━ naranja     │
│        88px                │
├────────────────────────────┤
│ I Our story        I / IV  │
│        56px                │
│ The first client came…     │
│ (h2 31px)                  │
│ párrafos 18px / 1.7        │
│        104px               │
├████ II · negro ████████████┤
│ …                          │
└────────────────────────────┘
```

- margen lateral 28 px
- **hero:**
  - padding 120 px arriba, 88 px abajo
  - h1: 52 px / 0.98, tracking −0.035em
  - regla naranja: 36 px arriba, ancho completo
- **paneles:**
  - padding 40 px arriba, 104 px abajo
  - barra de 14 px
  - 56 px entre la barra y el contenido
- **h2:** 31 px / 1.15, 28 px abajo
- **prosa:** 18 px / 1.7
- **retrato:** 96 × 120 px, arriba del párrafo, con 28 px abajo
- **ficha:** una columna con 24 px de gap, `dt` 14 px y `dd` 17 px / 1.6
- **LinkedIn:** 44 px de alto
- **preguntas:** `summary` 17 px con padding 18 px (alto ≥ 44 px); respuesta 16 px / 1.65
- **Start here:**
  - frase 28 px / 1.2, 56 px abajo de la barra
  - botón y email apilados, cada uno con 44 px de alto como mínimo

## 4 · Copy (exacto)

- **h1:** Find the essence. / Strip the bullshit.
- **I · Our story**
  - h2: The first client came three years before the company did.
  - p: Karen Mannheim's work was known only in Lima. In early 2021 she hired Fran Herrera through an agency where TRAZZO was one of the accounts.
  - p: In July 2023, Fran went in-house at Norhart, Mike Kaeding's construction company in Minneapolis. In February 2024 he was part of a round of layoffs there, and CRUDA started that same month.
  - p: Mike stayed on as a client into 2025. Karen's work outlasted the agency and ran for five years. Now it wins pitches in Miami.
- **II · The work**
  - h2: We don't add. We reveal what's already there.
  - p: Every founder we work with already has a true story. Most of it is buried under specs, prices and projects. The work is to find it, strip away what isn't theirs, and make it sayable.
  - p: CRUDA is a communications company. We build narrative and demand systems for founders, companies and cross-border joint ventures.
- **III · Who you work with**
  - h2: You talk to Fran from the first call.
  - p: Fran Herrera founded CRUDA in February 2024. Before that, ten years across Fortune 500s, SMEs and B2B companies, on three continents, in-house and agency side. He was born in Salta, in the north of Argentina, and works from Dubai and Moscow.
  - ficha:
    - Languages: English and Spanish. Russian in-house. Chinese and Arabic with collaborators.
    - Replies: Within 24–48 hours.
    - **Before CRUDA:** el texto actual de `/about`, **tal cual**.
    - **What he reads:** el texto actual de `/about`, **tal cual**.
  - link: Fran on LinkedIn → https://www.linkedin.com/in/franherrera2/
- **IV · Questions:** las **8 preguntas y respuestas actuales de `/about`, tal cual**, en el mismo orden.
- **Start here:** The first step is a 45-minute call with Fran. No cost, and no pitch at the end of it. · Book the call · fran@thecruda.com
- Tipografía: comillas y apóstrofes curvos, igual que en el molde de F53.
- **Antes de construir**, reportar en un bloque el texto actual de Before CRUDA, What he reads y las 8 Q&A, copiado del código (no resumido). Fran lo ve antes del merge.

## 5 · SEO y datos (F37: no se pierde nada)

- `<title>`: se mantiene "About CRUDA · Founded by Fran Herrera".
- JSON-LD Organization, Person (`/about#fran-herrera`, birthPlace Salta, sameAs LinkedIn) y FAQPage: **se mantienen idénticos**. El FAQPage tiene que coincidir carácter por carácter con las 8 Q&A visibles.
- Person: `image` = el avatar nuevo (§6).
- `id="fran-herrera"` va en el panel III.
- Se mantiene el `disambiguatingDescription`. No se nombran al cantante Fran Herrera, Cruda Store ni Naciones Unidas.

## 6 · Avatar (lo provee Fran)

- Es la imagen de Fran generada con IA. Llega como archivo en la rama, subida desde GitHub (`public/fran-avatar-source.<ext>`).
- El molde la procesa en escala de grises, con recorte 4:5 centrado en la cara: `public/fran/avatar-480x600.webp` y `avatar-240x300.webp`. Mínimo de origen: 480 px de ancho.
- `alt="Fran Herrera"`. No se describe como foto en ningún texto.
- La misma imagen reemplaza el avatar de la firma de todos los ensayos y la `image` del Person en el JSON-LD. Ese cambio en los ensayos es la única excepción al pixel-diff 0 fuera de `/about`.

## 7 · QA y entrega

1. Reporte previo con el copy actual (§4) **antes** de construir.
2. Capturas con hash de `/about` en 390, 768, 1024, 1440 y 1920, y de un ensayo con el avatar nuevo.
3. Medición con script commiteado (salida sin editar): tamaños, paddings y gaps de §1 y §3 en 1440 y 390.
4. Rich Results Test local o validación del JSON-LD: Person y FAQPage válidos, y FAQ visible = FAQPage.
5. Lighthouse mobile (mediana de 3): LCP < 2.5 s, CLS < 0.1, accesibilidad ≥ 95.
6. Pixel-diff 0 en las demás páginas, salvo el avatar de los ensayos.
7. `docs/merge-log.md` con el rollback. Preview de Vercel en verde. Esperar el "ok" de Fran.
