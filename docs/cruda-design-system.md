# CRUDA · Design System

Vive al lado del código. La ausencia de este doc ya causó
problemas medibles — el ejemplo firmado por Fran: el playbook
de Content Engineering tuvo el rojo `#FF2E63` durante meses
después de que dejara de ser el color de CRUDA, porque el
sistema visual vivía en el código y no en un doc.

Todo cambio a los tokens declarados vive contra este doc. Si
un componente necesita un valor fuera de esta lista, el
componente está mal (misma regla que ya vive en
`case-study.css:2-9`).

Este archivo tiene:

1. **Extracción PURA** · lo que el repo declara HOY. Sin
   correcciones. Es la evidencia.
2. **Dead CSS** · selectores declarados en CSS sin uso en
   `.tsx/.ts`.
3. **/llms.txt + /ai.txt · audit** · la superficie que el sitio
   sirve a los crawlers de IA.
4. **Correcciones a aplicar** · qué cambia, con motivo. Se
   ejecutan en commits siguientes. **NO SON DECLARATIVAS · son
   una lista de trabajo pendiente.**
5. **Prototipo del 18-sep** · lo que Fran propuso, para diff.
6. **Decisiones abiertas** · esperan firma.
7. **Historial**.

---

## 1 · Extracción PURA · lo que el repo declara HOY

Cubre los 27 archivos CSS del repo (fuera `.next`,
`node_modules`, `app/crudasports`, `app/deck`). El barrido
anterior sólo cubrió `case-study.css` y `globals.css` · esta
versión enumera todo.

### 1.1 · Fuentes de verdad y solapamientos

Cinco archivos declaran tokens en `:root` (o su bloque
equivalente). Ninguno importa a los otros · cada uno declara
lo suyo:

| Archivo                              | # tokens | Cobertura                          |
|--------------------------------------|----------|------------------------------------|
| `app/globals.css`                    | 53       | motion, spacing paralelo, shadcn HSL |
| `src/components/case-study.css`      | 62       | color, tipografía, tamaños, spacing, grid |
| `src/components/case-blocks/case-blocks.css` | 16 | tokens propios para bloques de caso |
| `src/components/essay.css`           | 3        | `--sans`, `--mono`, `--gut`        |
| `src/styles/resources.css`           | 4        | `--sans`, `--serif`, `--mono`, `--gut` |

Los otros 22 archivos CSS **no declaran tokens propios** · sólo
usan los declarados en los cinco de arriba, o valores hardcodeados
inline. Es donde vive la mayoría de las desviaciones.

**Solapamientos activos:**

- `--paper`, `--ink`, `--rule` viven en `case-study.css` Y en
  `case-blocks.css` (con valores DISTINTOS: `#1A1A1A` para el
  ink de case-blocks vs `#000000` del sistema principal).
- `--serif` en `case-study.css` y `resources.css` (mismos valores).
- `--grot` sólo en `case-study.css`; `--sans` (alias) sólo en
  `essay.css` y `resources.css`.
- `--mono` NO existe en `case-study.css` ni en `globals.css` · sólo
  en `essay.css` y `resources.css`.

**Token histórico no vigente:** `--paper-warm` fue declarado en
el commit `60f7b1c "Home · §2 · hero replacement + token
--paper-warm"` en la rama `claude/migrate-nextjs-14-fthUV`
(remote), NUNCA mergeado a `main`. Como el trabajo actual vive
en `main`, ese token no existe en el sitio en producción. Queda
como referencia del intent que había en esa rama, no como
sistema vigente.

### 1.2 · Color · valores declarados

`case-study.css`:
```
--paper       #FFFFFF
--ink         #000000
--rule        rgba(0, 0, 0, .14)
--cream       #EFEBDF     (texto sobre --ink-deep)
--ink-deep    #0E1113     (fondo negro del hero)
--color-focus #FFD200     (focus ring, ::selection)
--grid-line       rgba(0, 0, 0, .035)
--grid-line-dark  rgba(239, 235, 223, .05)
```

`case-blocks.css`:
```
--paper   #FFFFFF
--black   #000000
--ink     #1A1A1A          ← DIFIERE del sistema principal (#000000)
--rule    rgba(0, 0, 0, .14)
```

`globals.css` · shadcn HSL vars (no editorial):
```
--pure-white   0 0% 100%
--dark         0 0% 4%
--signal-red   347 100% 59%
```

**Alias legacy** (todos apuntan a los canónicos):

```
--white → --paper
--ink-2 → --ink
--rule-2 → --rule
--color-ink → --ink
--color-paper → --paper
--color-surface → --paper
--color-rule → --rule
```

**Colores hardcoded encontrados en CSS (fuera de tokens):**

| Hex          | Ocurrencias | Notas                             |
|--------------|-------------|-----------------------------------|
| `#E8623A`    | 3           | La naranja vieja de CRUDA. Presente sólo en comentarios de globals.css y en referencias que YA no aplican. Reemplazada por `#FF5A00` en el wireframe home §3.2. |
| `#000000`    | 4           | Duplica `var(--ink)` · desviación menor. |
| `#FFD200`    | 4           | Duplica `var(--color-focus)`. |
| `#FFFFFF`    | 3           | Duplica `var(--paper)`. |
| `#1A1A1A`    | 1           | El `--ink` distinto de case-blocks. |
| `#FFF`, `#8A8A8A`, `#EFEBDF`, `#0E1113`, `#25252A`, `#F2F2F0` | varias | valores usados directos sin token · candidatos a tokenizar |

**Token roto detectado 🔴** · `--color-accent` está USADO en
`case-study.css:358` y `:688` (background y hover del botón)
pero NO está DEFINIDO. Verificación runtime del 18-sep:

- `getComputedStyle(:root)['--color-accent']` → cadena vacía.
- `.cs-btn` · **0 usos** en .tsx/.ts · dead CSS.
- `.capture__row button` · gated por `CAPTURE_ENABLED = false`
  · el `<CaptureForm>` devuelve `null`.

El token roto NO produce bug visible porque las dos superficies
que lo consumen están muertas. Landmine si alguien reactiva
alguna.

**Grises** · sin token dedicado. El repo produce grises con
`color-mix(in srgb, var(--ink) 45%, transparent)` inline · uso
observado en ≥ 8 componentes.

### 1.3 · Tipografía · familias

```
--serif  var(--font-instrument-serif), 'Iowan Old Style', 'Palatino', Georgia, serif
--grot   var(--font-archivo), 'Archivo', system-ui, -apple-system, sans-serif
--sans   var(--font-archivo), -apple-system, sans-serif       (essay.css, resources.css)
--mono   'IBM Plex Mono', monospace                            (essay.css, resources.css)
```

**Loader via `next/font`:**

- Archivo · pesos 400, 500, 600, 700 (`app/layout.tsx:103`)
- Instrument Serif · peso 400 solamente (`app/layout.tsx:90`)
- IBM Plex Mono · NO cargada con next/font · font-family stack
  directo · falla si el sistema del usuario no la tiene

**`--mono` no está en `:root` global** · sólo declarado en dos
archivos scope-limitados. Fuera de `essay.css` y `resources.css`
(o rutas que las importen), `var(--mono)` cae al default del
navegador.

### 1.4 · Tipografía · escala

**Sistema principal (`case-study.css`, estático):**

```
--text-display    44px    (móvil 32px)
--text-h2         32px    (móvil 26px)
--text-h3         22px    (móvil 20px)
--text-body-large 22px    (móvil 19px)
--text-body       18px    (móvil 17px)
--text-caption    13px    (móvil 12px)
```

**Sistema paralelo (`globals.css`, fluid):**

```
--t-display   clamp(30px, 3.6vw, 54px)
--t-lead      clamp(18px, 1.4vw, 22px)
--t-body      17px
--t-small     15px
--t-eyebrow   13px
```

**Aliases redundantes (`--fs-*`)** · 10 nombres que apuntan a
`--text-*`. Legacy.

**Line-height / tracking (case-study.css):**

```
--lh-display    1.08
--lh-heading    1.15
--lh-body       1.7
--lh-tight      1.3

--track-display  -0.02em
--track-heading  -0.015em
--track-mono      0.12em
```

### 1.5 · Pesos usados · con conteo

El scan sobre los 27 archivos CSS encontró:

| Peso  | Ocurrencias | Notas                                    |
|-------|-------------|------------------------------------------|
| 400   | 51          | Cuerpo, prose · esperado                 |
| 500   | 50          | Label, eyebrow, título de sección · esperado |
| 600   | 25 + 3 sin espacio | Título de bloque en algunos componentes |
| 700   | 33 + 7 sin espacio | Nombre de sección, wordmark            |
| **300** | **9**       | 🔴 **Fuera de sistema · a normalizar**   |
| 800   | 3           | Fuera de sistema · a revisar             |
| 200   | 3           | Fuera de sistema · a revisar             |
| 100   | 1           | Fuera de sistema · a revisar             |
| 900   | 1           | Fuera de sistema · a revisar             |

Archivo solo carga 400/500/600/700 · los pesos 100/200/300/800/900
que aparecen NO están cargados. El browser los sintetiza (fake
weight) o cae al peso más cercano cargado.

### 1.6 · Tracking usado · con conteo

El scan encontró **~39 valores únicos** de `letter-spacing`.
Los que aparecen ≥ 5 veces:

| Valor         | Ocurrencias | Notas                                         |
|---------------|-------------|-----------------------------------------------|
| `.14em`       | **20**      | El tracking real de los rótulos               |
| `-.02em`      | 17          | Display                                       |
| `.55em`       | **13**      | 🔴 Un brief lo declaró y se propagó en fases C1/D/E1 · **NUNCA estuvo en el resto del código antes de esas fases** |
| `0.12em`      | 13          | Mono (matching `--track-mono`)                |
| `.04em`       | 11          | Fuera de sistema · a revisar                  |
| `-.025em`     | 7           |                                              |
| `-.015em`     | 6           | Matching `--track-heading`                    |
| `-.01em`      | 6+3         |                                              |
| `-.03em`      | 5           |                                              |

Y ~20 más con 1-4 ocurrencias cada uno. La granularidad revela
falta de token · cada componente inventa su valor. El barrido
Commit 4 los enumera para decisión ítem por ítem.

### 1.7 · Spacing

**Sistema principal** (`case-study.css`, base 8, estático):

```
--space-1  8px
--space-2  16px
--space-3  24px
--space-4  40px
--space-5  64px
--space-6  96px
--space-7  160px
```

**Sistema paralelo** (`globals.css`, fluid):

```
--s1  clamp(8px, 1vw, 12px)
--s2  clamp(16px, 2vw, 24px)
--s3  clamp(32px, 4vw, 56px)
--s4  clamp(64px, 8vw, 112px)
--s5  clamp(100px, 16vh, 180px)
```

Los dos convergen numéricamente al mismo orden de magnitud.

**En case-blocks.css** hay OTRO sistema paralelo:

```
--sp-1  24px
--sp-2  clamp(40px, 5vw, 72px)
--sp-3  clamp(80px, 9vw, 132px)
```

### 1.8 · Motion

```
--ease         cubic-bezier(0.215, 0.61, 0.355, 1)
--ease-exit    cubic-bezier(0.33, 1, 0.68, 1)
--dur-1        200ms
--dur-2        300ms
--dur-3        500ms
--dur-4        600ms
--stagger      75ms
```

### 1.9 · Layout · grilla técnica

```
--pad          clamp(24px, 5vw, 80px)
--gutter       clamp(20px, 2.5vw, 40px)
--measure      62ch
--grid-size    clamp(48px, 6vw, 96px)
--grid-line       rgba(0, 0, 0, .035)
--grid-line-dark  rgba(239, 235, 223, .05)
--grid-bg
--grid-bg-dark
```

---

## 2 · Dead CSS · selectores sin uso en `.tsx/.ts`

Enumeración de clases CSS que están declaradas pero no aparecen
en ningún JSX del sitio. Marcadas con **categoría**.

**Realmente muertos** (retiro autorizado o candidato a limpieza):

| Selector | Archivo | Categoría |
|----------|---------|-----------|
| `.cs-btn` | `case-study.css:685,688` | Retiró el JSX que lo consumía · CSS huérfano con `var(--color-accent)` (token roto). Doble bug. |
| `.cs-dates` | `case-study.css:579,784` | Retiró el JSX que lo consumía. |
| `.idx-arrow`, `.idx-card`, `.idx-card-eyebrow`, `.idx-eyebrow`, `.idx-grid`, `.idx-head`, `.idx-sub` | `case-study.css:757-778` | Hub `/resources` retirado (redirige 308 a `/work`). Los estilos del index quedaron. |
| `.home-fit__lede` | `home-fit.css:16` | Retirada en fase F8 §9.3 (movida a /contact). |
| `.of-photo` | `globals.css:546` | Retiro del /our-founder (redirige 301 a /about). |

**Behind feature flag (efectivamente muertos):**

| Selector | Archivo | Categoría |
|----------|---------|-----------|
| `.capture__status--error` | `case-study.css:371` | `CAPTURE_ENABLED = false` · el `<CaptureForm>` devuelve null. |
| `.capture--compact` | `case-study.css:302` | Idem. |

**Falso positivo del scan · dinámicos con template literals:**

| Selector | Archivo | Cómo se aplica |
|----------|---------|----------------|
| `.act2__art--bust`, `.act2__art--book` | `acts.css:295,298` | ``className={`act2__art act2__art--${a.subject}`}`` en `Act2WhyNow.tsx:85` |
| `.proof--compact`, `.proof--full` | `proof.css:134,139` | ``className={`proof proof--${variant}`}`` en `Proof.tsx:79` |
| `.ord--dim`, `.ord--muted` | `ordinal.css:16,19` | ``className={`ord ord--${variant}...`}`` en `Ordinal.tsx:41` |

**Total dead real: 12 selectores.** Todos concentrados en
`case-study.css` (10) y en dos archivos individuales (`home-fit.css`,
`globals.css`).

---

## 3 · /llms.txt + /ai.txt · audit

Los dos endpoints se generan desde `src/lib/llms-txt.ts` y se
sirven via `app/llms.txt/route.ts` y `app/ai.txt/route.ts`
(mismo contenido, dos direcciones · diferentes crawlers buscan
uno u otro).

**El propósito declarado del archivo (comment del código):**
"Declara a los crawlers de IA qué contenido pueden usar y dónde
está lo importante".

### 3.1 · Contenido servido HOY

Extracto del build actual (`.next/server/app/llms.txt.body`):

- **Header** · dos líneas de descripción de CRUDA
- **Case studies** · 4 links a `/work/{slug}` con descripciones (Karen, Girish, JP, Mike) · **falta Confidential**
- **Essays** · 6 links a `/essays/{slug}` con descripciones · derivado de `allEssays`
- **Companies** · 3 links a `/work`, `/sports`, `/systems`
- **Pages** · 4 links a `/about`, `/process`, `/contact`, `/resources`

### 3.2 · Problemas encontrados

**🔴 CRÍTICO · `/sports` y `/systems` están declarados como
COMPANIES pero devuelven 410 Gone.**

Confirmado con `middleware.ts:22` · `GONE_ROUTES = ['/sports',
'/systems']` responden 410 con página "Gone. This page has been
retired." Pero `llms-txt.ts` los lista como:

```
- [CRUDA for Sports](.../sports): Narrative infrastructure for
  athletes and sports organizations (coming soon).
- [CRUDA Systems](.../systems): Custom internal AI systems for
  studios that need to remember what the founder knows.
```

El crawler pide `/sports`, recibe 410, y ya tiene el string de
descripción en su memoria. El modelo termina asociando a CRUDA
con dos productos que NO existen.

Es la MISMA familia del bug de `/pricing` en `llms.txt` (retirado
en commit `f25ff69`) pero peor: acá son dos, y estuvieron desde
brief v12 T5.

**🟡 `/resources` redirige 308 a `/work`.**

```
- [All resources](.../resources): Every essay and case study in
  one library.
```

La URL redirige (permanente) a `/work` per `next.config.mjs:99`.
El label "Every essay and case study in one library" describe
un hub que NO existe · `/work` sólo tiene case studies. El
crawler sigue la redirección pero el label queda en su memoria.

**🟡 Descripciones inconsistentes con el posicionamiento nuevo.**

- Header: "Brand building GROUP for founders" · positioning viejo
- `/work` label: "CRUDA for Architecture & Design · Brand building
  for founders and studios in architecture, construction and
  design" · nicho cerrado que F9 abre a "cuatro puertas"
- `/about` label: "CRUDA is a narrative practice for founder-led
  companies. Fran Herrera — 10 years building brands" · **la
  misma frase** que F9 §2.4 marca para reemplazo por "QUÉ ES
  CRUDA" copy · Fran quiere UN SOLO TEXTO para /about + home
  posición 02 + plano 00 de /services
- `/process` label: "The first 90 days. What CRUDA does, month
  by month" · F9 cambia `/process` a ser la página de TRANSLATED

**🟢 Bien:**

- Los links a case studies individuales (`/work/{slug}`) son válidos
- Los links a essays son válidos
- `/about`, `/process`, `/contact` responden 200 (URLs válidas,
  aunque labels stale)

### 3.3 · Confidential fashion founder · ausente

`allClients` incluye a Confidential (`src/content/clients/`) pero
`llms-txt.ts` sólo emite lo que devuelve `allClients` con
descripción · si el data-file de Confidential tiene el campo,
sale. Necesita verificación cruzada · en el output no lo veo.

---

## 4 · Correcciones a aplicar · trabajo pendiente

**No son declaraciones del sistema.** Son la lista de qué debe
cambiar contra la extracción PURA de arriba. Se ejecutan en
commits siguientes.

Formato: **QUÉ · DE · A · MOTIVO · DÓNDE.**

### 4.1 · Tracking canónico de rótulos · `.55em → .14em`

**QUÉ** · el letter-spacing canónico de rótulos y eyebrows
**DE** · `.55em` (declarado por un brief, propagado a fases C1/D/E1)
**A** · `.14em` (el sistema real medido en el código · 20 selectores existentes)
**MOTIVO** · el `.55em` NUNCA estuvo en el código antes de fase
C1 · vino de un brief que declaró un valor de sistema sin
verificar contra el repo. El barrido del 18-sep encontró `.55em`
en 13 selectores TODOS creados en fases C1/D/E1. El resto del
sitio (20 selectores) usa `.14em`. Ese es el sistema real.

**DÓNDE aplicar el fix:**

- `src/components/home/home-who-it-holds.css:26` · `.home-whi__label`
- `src/components/home/home-legacy.css:56` · `.home-legacy__role`
- `src/components/home/home-legacy.css:87` · `.home-legacy__row-label`
- `src/components/home/home-what-others.css:24` · `.home-what-others__eyebrow`
- `src/components/home/home-what-others.css:60` · `.home-what-others__media-label`
- Cualquier otro creado bajo la premisa `.55em`

### 4.2 · Peso 300 fuera de sistema

**QUÉ** · el peso de rótulos ligeros
**DE** · `font-weight: 300` (9 ocurrencias)
**A** · `font-weight: 500`
**MOTIVO** · Archivo no carga el peso 300 · el browser sintetiza
o cae al 400. Además el sistema no lo declara (§1.5). Dos
ocurrencias corregidas en fases D y E1 · el barrido §2 encontró
9 más en toda la superficie.

**DÓNDE** · el audit `docs/audits/2026-09-18-type.md` lista
selector por selector.

### 4.3 · Trackings off-system

**QUÉ** · valores de letter-spacing que no matchean ningún token
**DE** · `.04em` (11 oc), `.01em` (3 oc), `.16em` (3 oc), `.20em`
(2 oc), `-.008em` (3 oc), `-.006em` (2 oc), y ~10 más 1-2 oc
**A** · **decisión por caso** · normalizar a los declarados
`0`, `.12em`, `.14em`, `-.015em`, `-.02em`, `-.03em`, o firmar
la excepción con motivo

**EXCEPCIÓN FIRMADA:** `-.04em` en `.pr-block__number` se queda
(display de 115px · tracking negativo fuerte correcto a ese
tamaño · Fran, 18-sep).

### 4.4 · Eyebrows en peso 600 normalizan a 500

**QUÉ** · algunos eyebrows/labels usan `font-weight: 600`
**A** · `font-weight: 500`
**MOTIVO** · regla nueva del sistema (Fran, 18-sep): "todos los
rótulos y eyebrows van en peso 500. El 600 queda para
`cs-author`, `summary` y CTAs."

**DÓNDE** · el audit los enumera. Se resuelve en Commit 4.

### 4.5 · Hero cambia de serif a grotesca

**QUÉ** · el título del hero (act 1)
**DE** · `--serif` (Instrument Serif)
**A** · `--grot` (Archivo)
**MOTIVO** · regla 18 dice que la serif es la voz de un cliente
· se usa sólo en testimonios y citas atribuidas. El hero no es
ninguna de las dos (F9 §2.1). #act2 sigue como excepción firmada
(es cita).

**VERIFICACIÓN POSTERIOR** · re-medir line-boxes en 1440/1024/
768/390 tras el cambio. La grotesca tiene métricas distintas ·
el auto-fit va a converger a valores distintos.

### 4.6 · Motion · `duration` Lenis

**QUÉ** · duration del scroll global
**DE** · 2.0 (dentro de acto) / 1.7 (fuera)
**A** · 1.1
**MOTIVO** · F9 §2.2 · el modelo correcto no es "tarda en moverse"
sino "responde inmediato, y hay mucho por recorrer". El
`wheelMultiplier` 0.35 se mantiene · `lerp` sigue ausente.

### 4.7 · `--color-accent` no declarado

**QUÉ** · el token de acento
**DE** · nada declarado · fallback silencioso
**A** · declarar `--color-accent: #FF5A00` en `:root` (alineado
con wireframe home §3.2) O retirar los dos usos huérfanos
(`.cs-btn`, `.capture__row button` hover)
**MOTIVO** · el token se usa en el CSS sin estar declarado. Las
dos superficies que lo consumen están muertas hoy pero el bug
queda como landmine.

### 4.8 · `--mono` sin declaración global

**QUÉ** · el token de fuente mono
**DE** · declarado solo en `essay.css` y `resources.css`
**A** · declarado en el `:root` global del sistema
**MOTIVO** · fuera de esas dos rutas, `var(--mono)` cae al default
del navegador. Uso observado en `case-study.css` fuera de las
rutas de essay/resources.

### 4.9 · `--ink` distinto en case-blocks

**QUÉ** · el token `--ink` en `case-blocks.css` declara `#1A1A1A`
mientras el resto del sitio usa `#000000`
**DE** · `#1A1A1A`
**A** · `var(--ink)` alineado al sistema principal · o firmar la
divergencia con motivo
**MOTIVO** · dos valores de "negro" en el mismo sitio · uno da
ink real, otro da un gris oscuro cercano al negro.

### 4.10 · Colores hardcoded que duplican tokens

**QUÉ** · hex/rgb inline en CSS que reproducen valores ya
tokenizados (`#000000`, `#FFFFFF`, `#FFD200`, etc.)
**A** · usar el token
**MOTIVO** · higiene · el sistema no puede consultarse via
hex literal.

### 4.11 · Registro histórico · el `.55em` como error de brief

Un brief declaró un valor de sistema (`.55em` como tracking de
rótulos) que **no existía en el código** cuando el brief se
escribió. Como la regla dice "el brief manda", el valor falso se
propagó a cada componente nuevo creado bajo ese brief · fases
C1, D, E1 lo replicaron.

Se corrige en Commit 4. Se registra en `docs/build-incidents.md`
como caso de aprendizaje, con la regla nueva del protocolo (§X
más abajo).

---

## 5 · Prototipo del 18-sep · lo que Fran propuso

```
--paper    #F1EFEB    (warm off-white)
--ink      #0D0D0D    (near-black)
--grey     #6E6B65    (token dedicado · no existe en repo)
--orange   #FF5A00    (nueva naranja · el wireframe §3.2 ya la firmó)
familia    Inter Tight
pesos      400, 500, 600
```

---

## 6 · Diff · repo vs prototipo · decisiones abiertas

| # | Axis            | Repo                       | Prototipo         | Estado |
|---|-----------------|----------------------------|-------------------|--------|
| 1 | Paper           | `#FFFFFF`                  | `#F1EFEB`         | Abierto |
| 2 | Ink             | `#000000`                  | `#0D0D0D`         | Abierto |
| 3 | Grey            | inline `color-mix`         | `#6E6B65` firmado | Abierto |
| 4 | Orange          | `#E8623A` en comentarios, `--color-accent` no declarado | `#FF5A00` firmado por wireframe | **Recomendación: declarar `--color-accent: #FF5A00`** |
| 5 | `--cream`, `--ink-deep` (hero) | valores actuales | no ataca | Se quedan |
| 6 | Familia grotesca | Archivo                   | Inter Tight       | **FIRMADA · Archivo** · medición 19-sep (tabla abajo) |
| 7 | Pesos canónicos | 400/500/600/700           | 400/500/600       | **Recomendación: 400/500/700 · el 600 queda para `cs-author`, `summary`, CTAs** |
| 8 | Serif           | Instrument Serif           | (no ataca)        | Se queda |
| 9 | Mono            | scope-limitado             | (no ataca)        | Mover a `:root` global |
| 10 | Escala `--text-*` vs `--t-*` | dos paralelas | (no ataca) | Consolidar · **recomendación: `--text-*` estático con overrides mobile** |
| 11 | Aliases `--fs-*` (10 nombres) | vigentes | (no ataca) | Retirar · migrar y borrar |
| 12 | Spacing `--space-*` vs `--s*` vs `--sp-*` | tres paralelas | (no ataca) | Consolidar |
| 13 | Estructura del archivo | tokens repartidos en 5 archivos | (no ataca) | Mover a `app/design-tokens.css` importado desde `layout.tsx` |
| 14 | Comment obsoleto `--color-accent = #E8623A` en `globals.css` | vigente | (no ataca) | Retirar |

**Ninguna decisión se ejecuta hasta firma de Fran ítem por ítem.**

---

### 6.a · Decisión 6 · FIRMADA · Archivo (19-sep)

**Regla del test.** Fran (19-sep) · "Δ ≤ 2px, Archivo se queda.
Δ ≥ 6px, Inter Tight gana. Entre medio, decisión abierta." Test
sobre el hero real con auto-fit activo, dos frases y cuatro
anchos.

**Metodología.** `scratchpad/font-test.mjs` · Playwright sobre
dev server local. Descarga Inter Tight 400 TTF via curl (Google
Fonts CDN accesible por curl aunque `page.addStyleTag(url)` da
egress error), inyecta como data URI, override `font-family` sobre
`.act1 .beat__phrase` en ambas familias (baseline y test),
trigger resize para que el auto-fit re-corra, mide el font-size
al que converge.

**Cross-check** · scrollWidth de las dos frases a font-size fijo
50px. Verifica que el swap efectivamente aplique · Inter Tight
tiene que renderear más angosta si Fran tenía razón visual.

**Tabla de medición · font-size al que converge el auto-fit.**

| Frase                                    | Ancho | Archivo   | Inter Tight | Δ (px)   | Lectura |
|------------------------------------------|-------|-----------|-------------|----------|---------|
| "Your company outgrew its own story."    | 1440  | 49.62 px  | 51.15 px    | +1.53    | ≤ 2px   |
| "Your company outgrew its own story."    | 1024  | 36.10 px  | 36.10 px    | 0        | ≤ 2px   |
| "Your company outgrew its own story."    | 768   | 40.00 px  | 40.00 px    | 0        | ≤ 2px   |
| "Your company outgrew its own story."    | 390   | 22.32 px  | 22.32 px    | 0        | ≤ 2px   |
| "We build the next one."                 | 1440  | 76.00 px  | 76.00 px    | 0        | ≤ 2px   |
| "We build the next one."                 | 1024  | 55.30 px  | 55.30 px    | 0        | ≤ 2px   |
| "We build the next one."                 | 768   | 40.00 px  | 40.00 px    | 0        | ≤ 2px   |
| "We build the next one."                 | 390   | 31.20 px  | 31.20 px    | 0        | ≤ 2px   |

**Cross-check · ancho del texto a font-size fijo 50px** (menor
= más angosta):

| Frase                                    | Archivo    | Inter Tight | Δ (px)  | Δ (%)   |
|------------------------------------------|------------|-------------|---------|---------|
| "Your company outgrew its own story."    | 765.4 px   | 757.8 px    | −7.6    | −1.0%   |
| "We build the next one."                 | 462.7 px   | 452.6 px    | −10.1   | −2.2%   |

**Lectura.** Inter Tight ES 1-2% más angosta a font-size fijo
(cross-check lo confirma). Ese margen NO se traduce en beneficio
visible del auto-fit del hero · sólo phrase 1 a 1440 muestra
+1.53 px de font-size, dentro del umbral ≤ 2px. En los otros 7
puntos ambas familias convergen al mismo tope (por el paso
0.97 del auto-fit o por el clamp inferior). Regla firmada por
Fran cumple · **Archivo se queda**.

**Costo del cambio (que se evita).** Cargar Inter Tight vía
next/font en `app/layout.tsx`, eliminar `Archivo`, actualizar
las 5 declaraciones de `--grot` y `--sans`, revisar cada CSS
que use `var(--font-archivo)` directamente. Trabajo transversal
a cambio de un píxel y medio en un breakpoint.

**Beneficio del cambio (que se evita perseguir).** 1-2% más de
compresión horizontal. Imperceptible en el auto-fit del hero,
imperceptible en cualquier título que quepa en su contenedor.

---

## 7 · Cómo se lee este doc

- Cada axis (color, type, scale, spacing, motion) es una SECCIÓN.
- Cuando Fran firma una decisión, se **actualiza esta doc primero,
  después el código**.
- Cualquier valor nuevo en un componente que no está acá **falla
  la revisión**.
- La verificación post-build (grep contra `.next/server/app/*.html`)
  confirma que el token nuevo se está sirviendo.
- **Un brief NO puede declarar un valor de sistema.** Sólo puede
  declarar la intención ("rótulo", "display", "cuerpo") y el valor
  sale de este doc. Si un brief trae un número que el doc no
  tiene, se reporta antes de ejecutar, no después. Regla nueva
  del protocolo, registrada en `build-incidents.md` con el caso
  del `.55em` como ejemplo.

## 8 · Historial

| Fecha       | Cambio                                                     |
|-------------|-----------------------------------------------------------|
| 2026-09-18  | Creación del doc · extracción parcial (case-study.css + globals.css) + diff contra prototipo |
| 2026-09-18  | Re-extracción sobre los 27 archivos CSS del repo. Agregada §2 dead CSS · §3 audit /llms.txt · §4 correcciones a aplicar. |
