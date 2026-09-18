# CRUDA · Design System

Vive al lado del código para que el próximo que abra este repo
sepa qué valores son sistema y cuáles son deriva. La ausencia
de este doc ya causó problemas medibles — el ejemplo firmado
por Fran: el playbook de Content Engineering tuvo el rojo
`#FF2E63` durante meses después de que dejara de ser el color
de CRUDA, porque el sistema visual vivía en el código y no en
un doc.

Este archivo tiene tres secciones:

1. **Extracción** · lo que HOY declara el repo, verbatim.
2. **Prototipo** · lo que Fran fijó en el prototipo del 18-sep.
3. **Diff + decisiones** · qué gana, por qué, qué queda abierto.

Todo cambio a los tokens declarados vive contra este doc. Si un
componente necesita un valor fuera de esta lista, el componente
está mal (misma regla que ya vive en `case-study.css:2-9`).

---

## 1 · Extracción · estado real del repo · 2026-09-18

### 1.1 · Fuentes de verdad y solapamientos

Los tokens viven repartidos en dos archivos y hay solapamientos:

| Archivo                        | Qué declara                          |
|--------------------------------|--------------------------------------|
| `src/components/case-study.css`| color, tipografía, tamaños, spacing, tracking, grid |
| `app/globals.css`              | motion (`--ease`, `--dur-*`), spacing paralelo (`--s1..s5`), tamaños paralelos (`--t-display`, `--t-lead`, `--t-body`), shadcn HSL vars |

Los dos sistemas conviven. Ejemplo:

- `--space-1..7` (case-study.css) y `--s1..s5` (globals.css) son escalas de spacing paralelas.
- `--text-display/h2/h3/body/caption` (case-study.css) y `--t-display/lead/body/small/eyebrow` (globals.css) son escalas tipográficas paralelas.

**Decisión abierta ⚠** · consolidar en un único archivo o mantener la separación. Recomendación abajo.

### 1.2 · Color

```
--paper       #FFFFFF              (case-study.css)
--ink         #000000              (case-study.css)
--rule        rgba(0, 0, 0, .14)   (case-study.css)
--cream       #EFEBDF              (case-study.css) · sólo texto sobre --ink-deep
--ink-deep    #0E1113              (case-study.css) · fondo negro del hero
--color-focus #FFD200              (case-study.css) · focus ring, ::selection
```

**Aliases legacy** (todos apuntan a los canónicos):
```
--white       → --paper
--ink-2       → --ink
--rule-2      → --rule
--color-ink   → --ink
--color-paper → --paper
--color-surface → --paper
--color-rule  → --rule
```

**Token roto detectado 🔴** · `--color-accent` está USADO en:

- `src/components/case-study.css:358` (`background: var(--color-accent)`)
- `src/components/case-study.css:688` (`.cs-btn:hover{background:var(--color-accent)...}`)

pero NO está DEFINIDO en ningún `:root`. Los comentarios de `globals.css:17` y `:233` lo mencionan como `#E8623A` (la naranja vieja de CRUDA) pero nadie la declara. En runtime, esas dos superficies fallan silenciosas al fallback CSS (nada / transparente).

**Grises** · no hay token dedicado. El repo produce grises con `color-mix(in srgb, var(--ink) 45%, transparent)` inline en cada componente. Ejemplos: `.home-fit__list li`, `.home-what-others__attribution`, `.home-legacy__row-label`.

### 1.3 · Tipografía · familias

```
--serif  var(--font-instrument-serif), 'Iowan Old Style', 'Palatino', Georgia, serif
--grot   var(--font-archivo), 'Archivo', system-ui, -apple-system, sans-serif
--mono   'IBM Plex Mono', monospace   (declarado en essay.css y resources.css, NO global)
```

Loader via `next/font`:

- **Archivo** · pesos 400, 500, 600, 700 (`app/layout.tsx:103`).
- **Instrument Serif** · peso 400 solamente (`app/layout.tsx:90`).
- **IBM Plex Mono** · NO se carga con next/font · viene por font-family stack directo · falla si el sistema no la tiene.

**Token roto detectado 🔴** · `--mono` está usado en `case-study.css` pero declarado solamente en `essay.css` y `resources.css`. Fuera de esas rutas, `var(--mono)` no resuelve y cae al default del navegador.

### 1.4 · Tipografía · escala

**Sistema principal** (`case-study.css`):

```
--text-display     44px         (móvil 32px)
--text-h2          32px         (móvil 26px)
--text-h3          22px         (móvil 20px)
--text-body-large  22px         (móvil 19px)
--text-body        18px         (móvil 17px)
--text-caption     13px         (móvil 12px)

--lh-display       1.08
--lh-heading       1.15
--lh-body          1.7
--lh-tight         1.3

--track-display    -0.02em
--track-heading    -0.015em
--track-mono        0.12em
```

**Sistema paralelo en globals.css** (nombres distintos, valores fluid):

```
--t-display    clamp(30px, 3.6vw, 54px)
--t-lead       clamp(18px, 1.4vw, 22px)
--t-body       17px
--t-small      15px
--t-eyebrow    13px
```

**Aliases `--fs-*`** (case-study.css:103-113):
```
--fs-display, --fs-h1, --fs-h2, --fs-h3, --fs-capsule, --fs-lead,
--fs-body, --fs-card-title, --fs-excerpt, --fs-meta
```

Todos son alias de `--text-*`. Redundancia legacy.

### 1.5 · Pesos en uso

Los pesos que Archivo declara cargar: **400, 500, 600, 700**.

Un grep sobre `font-weight` en los CSS del sitio encontró estos valores en producción:

| Peso  | Ocurrencias observadas | Comentario                                    |
|-------|------------------------|-----------------------------------------------|
| 300   | ≥ 2 detectadas         | 🔴 Fuera de sistema · corregidas en fases D y E1. El barrido §2 (audit-type) las enumera todas. |
| 400   | sí                     | Body, prose                                   |
| 500   | sí                     | Label, eyebrow, h-section                     |
| 600   | sí                     | Título en algunos componentes (case-study)   |
| 700   | sí                     | Nombre de sección (LEGACY name, wordmark)    |

**Decisión abierta ⚠** · fijar el set canónico. Fran (18-sep) sugiere revisar si 300 se está usando por elección deliberada en algún lugar antes de retirarlo del sistema.

### 1.6 · Spacing

**Sistema principal** (`case-study.css`, base 8, estático):

```
--space-1   8px
--space-2   16px
--space-3   24px
--space-4   40px
--space-5   64px
--space-6   96px
--space-7   160px
```

**Sistema paralelo** (`globals.css`, fluid):

```
--s1   clamp(8px, 1vw, 12px)
--s2   clamp(16px, 2vw, 24px)
--s3   clamp(32px, 4vw, 56px)
--s4   clamp(64px, 8vw, 112px)
--s5   clamp(100px, 16vh, 180px)
```

Los dos sistemas convergen numéricamente al mismo orden de magnitud pero no son sustitutos exactos.

### 1.7 · Motion

```
--ease         cubic-bezier(0.215, 0.61, 0.355, 1)
--ease-exit    cubic-bezier(0.33, 1, 0.68, 1)
--dur-1        200ms
--dur-2        300ms
--dur-3        500ms
--dur-4        600ms
--stagger      75ms
```

### 1.8 · Layout · grilla técnica y padding

```
--pad          clamp(24px, 5vw, 80px)
--gutter       clamp(20px, 2.5vw, 40px)
--measure      62ch
--grid-size    clamp(48px, 6vw, 96px)
--grid-line    rgba(0, 0, 0, .035)
--grid-line-dark rgba(239, 235, 223, .05)
```

---

## 2 · Prototipo · propuesta Fran · 2026-09-18

```
--paper    #F1EFEB                 (warm off-white)
--ink      #0D0D0D                 (near-black)
--grey     #6E6B65                 (token dedicado)
--orange   #FF5A00                 (naranja nueva)
tipografía Inter Tight
pesos      400, 500, 600
```

---

## 3 · Diff · repo vs prototipo · 2026-09-18

| Axis            | Repo                       | Prototipo         | Diagnóstico                     |
|-----------------|----------------------------|-------------------|---------------------------------|
| Paper           | `#FFFFFF`                  | `#F1EFEB`         | Cambia · repo blanco puro vs cálido |
| Ink             | `#000000`                  | `#0D0D0D`         | Cambia · negro puro vs cerca-negro |
| Grey            | ninguno (color-mix inline) | `#6E6B65` firmado | Cambia · agregar token dedicado |
| Orange          | `#E8623A` mencionado, **NO declarado** 🔴 | `#FF5A00` firmado por wireframe §3.2 | Cambia · el wireframe ya lo firmó, el repo no lo tiene declarado |
| Familia sans    | Archivo                    | Inter Tight       | Divergencia · ambas son grotescas modernas |
| Pesos           | 400/500/600/700            | 400/500/600       | El prototipo es subset del repo |
| Familia serif   | Instrument Serif           | (no mencionada)   | Sin conflicto — el prototipo no ataca la serif |

### 3.1 · Análisis según el framework de Fran

Fran planteó tres outcomes posibles:

1. **Repo tiene sistema coherente que el prototipo se le parece** → mandan los del repo.
2. **Repo no tiene sistema — valores sueltos por componente** → adoptar los del prototipo como sistema.
3. **Diferencias puntuales** → decisión una por una.

**El diagnóstico es (3) — sistema parcial con diferencias puntuales.** El repo tiene una estructura de tokens declarada, pero:

- Un token crítico (`--color-accent`) está roto (usado sin declarar).
- El wireframe home §3.2 ya fijó `#FF5A00` como el naranja del sistema — el prototipo confirma lo que el wireframe ya firmó.
- Paper/ink son casi-blanco vs blanco puro y casi-negro vs negro puro. El wireframe home §2.5 dice "grilla tenue existente" y "negro liso" sin fijar los hex — la decisión queda abierta.
- Los grises del prototipo (`#6E6B65`) matchean visualmente el `color-mix(--ink, 45%, transparent)` que el repo produce hoy sobre `#FFFFFF`.

---

## 4 · Decisiones abiertas · esperan firma de Fran

### 4.1 · Paleta base

| # | Decisión                                                                  | Recomendación técnica |
|---|--------------------------------------------------------------------------|----------------------|
| 1 | Paper: `#FFFFFF` vs `#F1EFEB`                                             | Prototipo (contraste con acento naranja y tinta más rico) |
| 2 | Ink: `#000000` vs `#0D0D0D`                                               | Prototipo (menos áspero en cuerpo largo) |
| 3 | Agregar `--grey #6E6B65` como token dedicado                              | Sí · reemplaza el `color-mix` inline en ≥ 8 componentes |
| 4 | Orange: adoptar `#FF5A00` como `--orange` (o `--color-accent`)            | Sí · el wireframe ya lo firmó · resolver la referencia rota |
| 5 | ¿Mantener `--cream #EFEBDF`, `--ink-deep #0E1113` como tokens del hero?  | Sí · son valores del acto 1, no se tocan |

### 4.2 · Tipografía

| # | Decisión                                                                     | Recomendación técnica |
|---|-----------------------------------------------------------------------------|----------------------|
| 6 | Familia grotesca: Archivo (repo) vs Inter Tight (prototipo)                  | Consultar en la mano — el wireframe §2.1 dice "grotesca" sin fijar familia. Diferencia visual pequeña. Recomendación: **Archivo** por costo cero (ya cargada) y por continuidad, salvo que el prototipo haya sido probado y matcheado a Inter Tight explícitamente. |
| 7 | Pesos canónicos: `{400, 500, 700}` (el 600 no se usa consistentemente)      | Set canónico `{400, 500, 700}`. Retirar 300 (fuera de sistema, ya detectado). Retirar 600 salvo caso justificado. |
| 8 | Serif: Instrument Serif queda tal cual                                       | Sin cambio |
| 9 | Mono: definir `--mono` en `:root` del sistema (no sólo en essay/resources)   | Sí · el fallback silencioso rompe consistencia |

### 4.3 · Escala tipográfica

| # | Decisión                                                                     | Recomendación técnica |
|---|-----------------------------------------------------------------------------|----------------------|
| 10 | Unificar `--text-*` (estático) con `--t-*` (fluid)                          | Elegir uno. **Recomendación: `--text-*` estático con overrides mobile.** Los clamps de `--t-*` producen tamaños intermedios raros. |
| 11 | Retirar aliases `--fs-*` (10 nombres redundantes)                            | Sí · migrar los componentes que aún los usan, después borrar |

### 4.4 · Spacing

| # | Decisión                                                                     | Recomendación técnica |
|---|-----------------------------------------------------------------------------|----------------------|
| 12 | Unificar `--space-*` con `--s*`                                              | Elegir uno. Los dos convergen · fusionar en `--space-*` (nombres explícitos) es más legible. |

### 4.5 · Estructura del archivo

| # | Decisión                                                                       | Recomendación técnica |
|---|-------------------------------------------------------------------------------|----------------------|
| 13 | ¿Mover el bloque de tokens a `app/design-tokens.css`?                          | Sí · un único archivo importado desde `layout.tsx` como el primer hoja de estilos. Elimina la ambigüedad de que globals.css y case-study.css definan sistema. |
| 14 | Retirar la comment de `globals.css` que menciona `--color-accent = #E8623A`   | Sí · la referencia ya no aplica |

---

## 5 · Cómo se lee este doc

- Cada axis (color, type, scale, spacing, motion) es una SECCIÓN del sistema.
- Cuando Fran firma una decisión, se **actualiza esta doc** primero, después el código.
- Cualquier valor nuevo que aparezca en un componente y no esté acá **falla la revisión**.
- La verificación post-build (grep contra `.next/server/app/*.html`) confirma que el token nuevo se está sirviendo.

## 6 · Historial

| Fecha       | Cambio                                                     |
|-------------|-----------------------------------------------------------|
| 2026-09-18  | Creación del doc · extracción + diff contra prototipo    |

---

**Espera firma de Fran sobre los 14 ítems del §4 antes de que se ejecute cualquier cambio en el CSS del sistema.**
