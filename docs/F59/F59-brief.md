# F59 · Home: "How we help" después del hero, Work antes del newsletter, fixes de hero y About

**Para:** Claude Code · repo `FranHerrera23/cruda-story-craft` · rama `f59-how-we-help` desde `main` (`eeb7ec2`)
**Regla madre:** seguir al pie de la letra. No borrar nada (lo que sale del render queda como dead code), no cambiar nada que no esté en esta lista. **Copy verbatim, carácter por carácter.** Marco Aurelio (`Act2WhyNow`, `ACT2_*`, `acts-motor.ts`, `acts.css`, los seis grabados) **congelado**: solo puede cambiar su posición en el DOM, nunca su código.
**No mergear a `main` sin pasar la QA del final.**

> Reemplaza la versión anterior de F59 (que proponía grilla de 4 columnas y una línea bajo "Selected work."). Esa versión queda descartada.

---

## Archivos de referencia (commitearlos en `docs/F59/` antes de empezar)

- `F59-reference.html`: maqueta HTML de lo que tiene que verse. **Es referencia visual, no código de producción.** El copy es verbatim. Lo marcado con borde naranja punteado es lo que cambia.
- `ref-1440.png` y `ref-390.png`: capturas de esa maqueta a 1440 px y 390 px.

Si el brief y la maqueta se contradicen, **manda el brief**. Antes de escribir código, avisá la contradicción.

---

## Wireframes ASCII

### Home completa, en orden de scroll (1440 px)

```
┌──────────────────────────────────────────────────────────────────────┐
│ CRUDA                   Work  Services  About  Narrative Sparring  Contact │  ← NAV OSCURA (#0E1113)
├──────────────────────────────────────────────────────────────────────┤
│                                                                      │
│                       (aire vacío arriba)                            │  00 · HERO
│                                                                      │  #0E1113 · alto = 1er viewport
│  Famous to the                                                       │
│  few who matter.                                       (h1 120px)    │
│                                                                      │
│  We find what makes you exceptional and put it in                    │
│  front of the people who should know.                  (26px)        │
│                                                                      │
│  [ Email address              ][ Subscribe to Narrative Sparring ]   │
│                                                       ↕ 120px        │
└──────────────────────────────────────────────────────────────────────┘
┌──────────────────────────────────────────────────────────────────────┐  ← NAV pasa a CLARA acá
│  HOW WE HELP                                                         │  01 · HOW WE HELP (NUEVO)
│                                                                      │  CREAM #EFEBDF
│  Your buyers could fit                                               │
│  in one room. Every one of                                           │
│  them should know your name.                           (H2, ~20ch)   │
│                                                                      │
│  We sit with you, take the story out of your head                    │
│  and write it down. Then we put it where your few                    │
│  already look.                                         (23px, 640px) │
│                                                                      │
│  ▬▬▬ (naranja 2px × 120px)                                           │
│  WHO                  THEIR FEW              THE WORK                │
│  ════════════════════════════════════════════════════════════════   │  ← filete ink 1px
│  Karen Mannheim       Architects, interior   Her voice on LinkedIn   │
│  Co-founder, TRAZZO   designers and devs…    and Instagram, PR…      │
│  ──────────────────────────────────────────────────────────────────  │  ← filete rule 1px
│  José Mannheim        About 800 buyers of    Brand strategy and      │
│  Co-founder of AGP…   certified safety…      architecture for…       │
│  ──────────────────────────────────────────────────────────────────  │
│  Ryan Altman          Yacht owners,          Putting his story and   │
│  Founder, M2Develop   brokers and the…       M2Develop’s in front…   │
│  ──────────────────────────────────────────────────────────────────  │
│  Marty Lowe           Her industry, and      Turning forty-six years │
│  Yacht interior…      the women who see…     of work into a legacy…  │
│  ──────────────────────────────────────────────────────────────────  │
│     30 %                   33 %                   resto              │
└──────────────────────────────────────────────────────────────────────┘
┌──────────────────────────────────────────────────────────────────────┐
│  Selected work.                                                      │  02 · SELECTED WORK
│  ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ (naranja, como hoy)                             │  PAPER · 3 columnas
│  ┌────────┐ ┌────────┐ ┌────────┐                                    │
│  │ Karen  │ │ José   │ │M2Develop│                                   │
│  └────────┘ └────────┘ └────────┘                                    │
│  nombre      nombre      nombre                                      │
│  meta        meta        meta                                        │
│  desc        desc        desc*  ← *Ryan corregida                    │
│                                     (SIN "Their few" en ninguna)     │
│  ┌────────┐ ┌────────┐ ┌────────┐                                    │
│  │ Marty  │ │ Mike   │ │ Girish │                                    │
│  └────────┘ └────────┘ └────────┘                                    │
│  desc*  ← *Marty corregida                                           │
│  … Jack · INOUT · BAUHOME / Confidential · JP Romero (sin cambios)   │
└──────────────────────────────────────────────────────────────────────┘
┌──────────────────────────────────────────────────────────────────────┐
│  NEWSLETTER   ← antes "01 · Newsletter"                              │  03 · NARRATIVE SPARRING
│  (resto idéntico a hoy)                                              │  PAPER · grilla
└──────────────────────────────────────────────────────────────────────┘
┌──────────────────────────────────────────────────────────────────────┐
│  OUR FOUNDER (idéntico)                                              │  04 · NEGRO
└──────────────────────────────────────────────────────────────────────┘
┌──────────────────────────────────────────────────────────────────────┐
│  MARCO AURELIO · CONGELADA · 0 cambios de código                     │  05 · PAPER
└──────────────────────────────────────────────────────────────────────┘
┌──────────────────────────────────────────────────────────────────────┐
│  Every week, one story that changes how you tell yours. (idéntico)   │  06 · NEGRO
└──────────────────────────────────────────────────────────────────────┘
```

### How we help, en mobile (390 px)

```
┌──────────────────────────────┐
│ HOW WE HELP                  │
│ Your buyers could fit in     │
│ one room. Every one of them  │
│ should know your name.       │
│                              │
│ We sit with you, take the    │
│ story out of your head…      │
│ ▬▬▬                          │
│ ──────────────────────────── │  ← sin encabezados de tabla
│ Karen Mannheim               │
│ Co-founder, TRAZZO Lighting  │
│ THEIR FEW                    │  ← rótulo dentro de la fila
│ Architects, interior…        │
│ THE WORK                     │
│ Her voice on LinkedIn…       │
│ ──────────────────────────── │
│ José Mannheim                │
│ …                            │
└──────────────────────────────┘
```

---

## Por qué

Hoy el visitante lee el hero (dos frases) y lo siguiente que ve es un newsletter. No entiende qué hacemos. Después del hero tiene que venir **qué hacemos, con hechos**: para cuatro clientes, quiénes son sus pocos y qué construimos. Después las fotos del trabajo. Recién ahí el newsletter.

---

## A · Nuevo orden de la home (`app/page.tsx`)

```
HomeHero                         NEGRO · estático (fix en C)
<main id="stack">
  01  HomeHowWeHelp   (NUEVO)    CREAM #EFEBDF
  02  SelectedWork               PAPER · sin "Their few" (ver D)
  03  HomeNarrativeSparring      PAPER (plano con grilla)
  04  HomeLegacy (Our founder)   NEGRO · copy actual, sin cambios
  05  Act2WhyNow (Marco Aurelio) PAPER · congelada
  06  HomeClose                  NEGRO · sin cambios
</main>
```

- `HomeNarrativeSparring`: el rótulo `01 · Newsletter` pasa a `Newsletter`. Nada más cambia en esa sección.
- Actualizar el comentario de cabecera de `app/page.tsx` con el orden nuevo.
- Verificar que `PlanesStack` (z-index por orden del DOM) y los reveals `[data-r]` sigan funcionando. Si `HomeHowWeHelp` tiene que ser plano para el apilado, documentarlo.

## B · Componente nuevo `src/components/home/HomeHowWeHelp.tsx` + `home-how-we-help.css`

Prefijo de clases `hwh-`. Fondo `--cream` `#EFEBDF`, texto `--ink`. Archivo. Márgenes laterales `var(--gap)` como el resto de la home.

**Copy (verbatim):**

Rótulo (13 px, uppercase, .14em, gris `#6E6B65`):
```
How we help
```

H2 (mismo tamaño y peso que los H2 de sección de la home, máx. ~20ch por línea, `text-wrap: balance`):
```
Your buyers could fit in one room. Every one of them should know your name.
```

Bajada (22–24 px, line-height 1.5, color ink al 75 %, máx. 640 px):
```
We sit with you, take the story out of your head and write it down. Then we put it where your few already look.
```

**Tabla** (debajo, margen superior ~96 px). Tres columnas con encabezados (13 px, uppercase, .14em, gris):

| WHO | THEIR FEW | THE WORK |
|---|---|---|

Filas, separadas por filete 1 px `rgba(0,0,0,.14)`, padding vertical 32 px, columnas alineadas por baseline:

1. **Karen Mannheim** / sub: `Co-founder, TRAZZO Lighting`
   · Their few: `Architects, interior designers and developers of homes worth up to $200 million.`
   · The work: `Her voice on LinkedIn and Instagram, PR strategy and pitch decks. Every week, for five years.`
2. **José Mannheim** / sub: `Co-founder of AGP, supplier to the Pentagon, Tesla, Audi, the Saudi Navy and the popemobile`
   · Their few: `About 800 buyers of certified safety glass. In the whole world.`
   · The work: `Brand strategy and architecture for his new company, Mannheim Trading Corp.`
3. **Ryan Altman** / sub: `Founder, M2Develop`
   · Their few: `Yacht owners, brokers and the shipyards that build for them.`
   · The work: `Putting his story and M2Develop's in front of that audience.`
4. **Marty Lowe** / sub: `Yacht interior designer, United States`
   · Their few: `Her industry, and the women who see themselves in her story.`
   · The work: `Turning forty-six years of work into a legacy of stories, on her website, a new blog and LinkedIn.`

Nombre 20 px / 500 ink. Sub 15 px gris. Celdas "Their few" y "The work" 18 px / 1.5. Primer filete de la tabla (bajo los encabezados) en ink sólido 1 px; un filete naranja `#FF5A00` de 2 px y 120 px de ancho entre bajada y tabla.

- Nombres **sin link** (Karen y José ya tienen caso en Selected work, justo debajo).
- Sin imágenes, sin CTA en esta sección.
- Usar `’` tipográfico en `M2Develop’s`.
- **Mobile (<768 px):** cada fila se apila: nombre + sub, luego "Their few" con su rótulo, luego "The work" con su rótulo. Encabezados de tabla ocultos (los rótulos van dentro de cada fila).
- Reveal: el mismo sistema `[data-r]` / `data-reveal` que usan las otras secciones de la home, sin animaciones nuevas. Con `prefers-reduced-motion`, todo visible.

## C · Hero de la home mal ubicado

Diseño aprobado (board "Hero" del canvas): bloque **anclado abajo a la izquierda** del primer viewport, 120 px de aire inferior.

En producción, en la pantalla de Fran (viewport aprox. **2000 × 1130**), el bloque aparece arriba, queda un vacío negro debajo y la nav se ve **blanca** sobre el hero negro.

1. Reproducir a 2000×1130, 1440×900, 1280×800 y 390×844. Diagnosticar por qué `min-height: 100svh` + `align-items: flex-end` no ancla el bloque abajo.
2. Corregir: en todos esos viewports el formulario queda a 120 px del borde inferior del primer viewport (72 px en mobile).
3. Nav en su **versión oscura** sobre el hero (la misma que ya usa sobre "Our founder"); vuelve a clara al entrar a `HomeHowWeHelp`.
4. Margen izquierdo del h1 alineado con el logo (como hoy).

## D · Selected work: sacar "Their few" de las tarjetas + dos correcciones de copy

1. `SelectedWork.tsx`: **dejar de renderizar** `FewBlock` (no borrar el componente ni el campo `few?` del tipo; quitar los valores `few` de las cuatro tarjetas, porque ahora viven en `HomeHowWeHelp`). La grilla vuelve a ser exactamente la de antes de F58: 3 columnas, sin bloque extra.
2. **Marty Lowe**, `description` →
   `One of the most recognized yacht interior designers in the US, turning forty-six years of work into a legacy of stories.`
3. **Ryan Altman**, `description` →
   `50+ boats for leading European yacht brands, now founder of M2Develop.`
   (Motivo: acuerdo con el cliente, no se nombran marcas ni astilleros.)
4. Nada más cambia en las tarjetas: orden, imágenes, links, hover y rótulos de servicio iguales.

## E · About + metadata: alinear con el posicionamiento

Reemplazar, en **todos** estos lugares, la frase "CRUDA is a communications company. We build narrative and demand systems for founders, companies and cross-border joint ventures." por el texto correspondiente:

**Texto largo** (FAQ "What is CRUDA?", `app/about/page.tsx` ~l.70):
```
CRUDA makes founders and companies famous to the few who matter. We find what makes them exceptional and put it in front of the people who should know. Fran Herrera founded it in February 2024.
```

**Texto corto** (todos los demás):
```
CRUDA makes founders and companies famous to the few who matter. We find what makes them exceptional and put it in front of the people who should know.
```
- `ABOUT_DESCRIPTION` (~l.38; si hoy incluye "founded by Fran Herrera", usar: `CRUDA makes founders and companies famous to the few who matter. Founded by Fran Herrera.`)
- JSON-LD Organization `description` (~l.112)
- Sección II "The work", segundo párrafo (~l.224)
- `HOME_DESCRIPTION` en `app/page.tsx`

JSON-LD Person `description` (~l.130):
```
Founder of CRUDA, which makes founders and companies famous to the few who matter.
```
No se tocan: `knowsAbout` (`'Founder-led communications'`, ~l.136) ni `disambiguatingDescription` (`'Communications company founded by Fran Herrera in 2024, based in Dubai and Moscow.'`). Son clasificación para buscadores e IAs, no copy visible. El copy check del punto 2 es sensible a mayúsculas y solo busca el texto visible.

El resto de About (hero, historia, bio de Fran, ficha, FAQ restantes, precios) **no se toca**.

---

## QA (obligatoria antes de mergear)

1. **Marco Aurelio:** `scripts/f58-act2-diff.mjs` contra `main` actual, 5 estados, nav excluida. ≤0,5 % o no se mergea.
2. **Copy check:** `scripts/f59-copy-check.mjs` con todo el copy de B, D.2, D.3, E y el rótulo `Newsletter`; y verificar que **no** aparezcan en `/` ni en `/about`: `communications company`, `narrative and demand systems`, `forty years`, `Ferretti`, `01 · Newsletter`. 100 % ok.
3. **Orden:** script que liste las secciones de `/` en orden del DOM. Debe dar: hero → how-we-help → selected-work → narrative sparring → legacy → act2 → close.
4. **Capturas** a 2000×1130, 1440×900, 1280×800 y 390×844: primer viewport (hero + nav oscura), `HomeHowWeHelp` completa, Selected work (grilla limpia), transición Work → Newsletter, FAQ "What is CRUDA?" abierta en About. En `docs/F59-shots/`.
5. Preview de Vercel verde. Recién entonces merge a `main`.

## Reporte

Un solo reporte: commits, qué cambió por punto (A–E), salida sin editar de los scripts, rutas de las capturas.
