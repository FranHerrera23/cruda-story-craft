# Decisiones lockeadas

Ledger de decisiones permanentes que trascienden un brief y aplican a todo
el sitio. Se abren solo con instrucción explícita de Fran.

---

## 2026-09-14 · Regla de ratios contra fee

**Regla:** ningún múltiplo, ratio o proporción contra el fee puede aparecer
en el sitio. `21x el fee`, `1.7x el fee`, `1.38% de los ingresos`,
`$30,252 en media value` — todos son función de dos direcciones: el lector
divide y deduce el pricing.

**Alcance:** todo el sitio, sin excepción. Aplica a rutas indexadas y a
las noindex (`/pricing`, `/deck`) — el noindex protege del crawler, no
del lector, y el pricing es exactamente lo que un humano con link puede
inferir.

**Verificación:** grep del repo hoy devuelve cero ocurrencias
(`multiplier`, `21x`, `1.7x`, `1.38%`, `$30,252`, `media value`). La regla
queda como bloqueo para futuras iteraciones.

**Origen:** Brief 03 (Process) · P2, 14 septiembre 2026.

---

## 2026-09-14 · `--space-8` (244px) fuera del sistema

**Decisión:** el token `--space-8: 244px` sale del `:root` de
`case-study.css`. Sus dos usos (`essay .e-head padding-top` y
`approach .ap padding-top`) pasan a `--s5` (clamp 100–180).

**Razón:** 244px suelto convivía con la escala cerrada `--s1`…`--s5` del
sistema. Un valor fuera de escala en el mismo `:root` es exactamente lo
que la unificación tipográfica y de espaciado retiró de todo lo demás.

**Alcance de esta decisión:** solo el reemplazo. **Subir `--s5` al valor
244 con regresión de sitio completo queda como fase propia** — cambia el
padding vertical de cada sección donde `--s5` se consume, y eso requiere
mirar la home, `/our-founder` (→ `/about`), `/approach` (→ `/process`),
`/essays`, `/contact` y los case studies uno por uno.

**Verificación:** grep de `--space-8` en `src/` y `app/` devuelve cero
ocurrencias vivas. La declaración en `case-study.css:62` queda con una
nota que apunta a esta entrada.

**Origen:** Brief 03 (Process) · P4, 14 septiembre 2026 · resuelto por
adelantado en commit `952c94f`.

---

## 2026-09-14 · Tiempo verbal sobre clientes

**Regla:** ningún compromiso cerrado se enmarca en presente. El hecho
sobre el cliente (lo que ella hace en su práctica) puede quedar en
presente; el marco que lo ata a CRUDA hoy tiene que llevar rango de
fechas o verbo en pasado.

**Formato de atribución:** `Client, YYYY—YYYY` cuando el compromiso está
cerrado. Un rango sin qualifier no puede leerse como "fecha del testimonio"
— la fecha del testimonio va en la copy del testimonio si hace falta, no
en la atribución.

**Alcance:** todo el sitio, incluidas rutas noindex.

**Verificación permanente:** grep de `still a client`, `is ongoing`,
`Client since <year>` en la mitad del rango debe devolver cero ocurrencias
sobre engagements cerrados.

**Origen:** Fran, 14 septiembre 2026 · barrido ejecutado en commits
`952c94f` y siguientes.

---

## 2026-09-14 · Precio y scope no van al sitio público

**Regla:** ninguna cifra de precio, ninguna descripción detallada de
scope aparece en las rutas indexadas. El filtro vive en el intake, no
en el copy.

**Consecuencia:** se vende marca, posicionamiento y proceso — la
credibilidad la construyen los clientes, el contenido publicado y el
método, no un pricing en pantalla.

**Origen:** Addendum A — TRANSLATED, 14 septiembre 2026 · §1.

---

## 2026-09-14 · `fee` fuera del vocabulario, `the engagement` en su lugar

**Regla:** la palabra `fee` deja de usarse para nombrar el paquete. El
paquete es cerrado, se llama `the engagement`. Excepción: `media budget
sits outside the fee` — donde `fee` se refiere al costo del engagement
en contraste con el presupuesto de medios que el cliente paga aparte.
Todo otro uso migra a `the engagement`.

**Origen:** Addendum A — TRANSLATED, 14 septiembre 2026 · §1.

---

## 2026-09-14 · Sistema de marca — CRUDA · The Reading · TRANSLATED

**Regla:**

- `CRUDA` — el estado en que el cliente llega.
- `The Reading` — el antes (diagnóstico). Único nombre; no se agregan
  nombres nuevos para el diagnóstico.
- `TRANSLATED` — el paquete de tres meses. En caps cuando nombra al
  paquete, minúscula como participio dentro de una frase (*"your
  expertise, translated"*).

**Línea de posicionamiento:** *Your expertise, translated.*

**Alcance:** los tres nombres son públicos. El paquete es siempre tres
meses (no cuatro, la v1 del addendum quedó anulada). Media budget queda
fuera del engagement.

**Origen:** Addendum A — TRANSLATED, 14 septiembre 2026 · §1 y §2.

---

## 2026-09-14 · `in cruda radice` no se usa en público

**Regla:** el enunciado latino queda fuera del copy público. Origen no
verificado en fuente académica y `CRUDA` ya significa crudo sin necesidad
de latín.

**Origen:** Addendum A — TRANSLATED, 14 septiembre 2026 · §1.

---

## 2026-09-14 · Vocabulario público: ethos · pathos · logos

**Regla:** los tres marcos que se nombran en superficie pública son
`ethos`, `pathos` y `logos`. `Hammer` queda como herramienta interna —
los dos sistemas se superponen pero no coinciden, y usar ambos en
público deja ver el empalme. **Sócrates no se nombra** sin confirmar —
fue descartado a favor de Jung en su momento.

**Origen:** Addendum A — TRANSLATED, 14 septiembre 2026 · §1.

---

## 2026-09-14 · Cortes de títulos display siempre autorados

**Regla:** cada H1/H2 display lleva sus cortes de línea marcados
explícitamente con `<br/>` cuando la lectura del titular depende de
ellos. Si el número de líneas cambia entre breakpoints por wrapping
natural del ancho de columna, **es un bug** — se resuelve con
`max-width` en `ch` o con `<br/>` explícito, no dejando que el navegador
decida.

**Por qué:** el ritmo de lectura del titular es parte del diseño. Un
titular que rompe en dos líneas en desktop y en tres en tablet cambia el
énfasis y contradice la jerarquía. `LineReveals` mide el corte real y
anima línea por línea — si el corte cambia entre viewports, el reveal
también cambia, y el timing queda inconsistente.

**Implementación:** el `<br/>` del hero home (HomeHero.tsx) es el patrón.
Cualquier título display nuevo que se agregue va a llevar el mismo
tratamiento.

**Origen:** Fran, 14 septiembre 2026 · lockeada.

---

## 2026-09-14 · Un caso de BEFORE/AFTER por superficie

**Regla:** la sección `THE TRANSLATION IN PRACTICE` (Brief 04 §4.3)
muestra **un solo caso** en la home. Tres seguidos convierten la sección
en un carrusel y el lector escanea en vez de leer. Karen y Jack van
adentro de sus case studies y como contenido, nunca en la home. El
componente se construye repetible para que los case studies lo
consuman.

**Reglas del componente:**

- Cero comentario sobre el `BEFORE`. Ni adjetivos, ni ironía, ni tachado.
- El texto del `AFTER` es verbatim de lo que el cliente publicó. Si CRUDA
  lo escribe para la web, la sección que prueba que traducís está
  fabricada.
- Asimetría 1 · 1.6 columnas (BEFORE gris chico · AFTER negro grande).
  El peso desigual es lo que hace funcionar el bloque; si pesan igual, la
  sección no dice nada.

**Referencia:** `docs/mockups/translation-in-practice.html`.

**Origen:** Addendum A — TRANSLATED, 14 septiembre 2026 · §4.3.

---

## 2026-09-14 · Watchdog · seguro de contenido

**Regla:** el watchdog de `RevealScroll` (2000ms desde el mount de la
ruta) fuerza `.on` con `--seq-delay: 0ms` sobre cualquier elemento con
`data-reveal` o `data-seq` que siga oculto. **No es fallback de UX. Es
seguro de contenido.**

**Consecuencia:** ningún elemento con copy servido puede terminar
invisible permanente por falla del observer, del splitter, o de
cualquier otro sistema de motion. El watchdog es la última barrera antes
de una pantalla en blanco.

**Prohibido:**

- Retirar el `setTimeout` del watchdog.
- Bajar el timeout de 2000ms sin discutirlo.
- Anclarlo al setup en vez del mount (setup puede tardar por
  `document.fonts.ready` lento; los 2000ms tienen que ser absolutos).
- Aplicar `--seq-delay` distinto de 0 cuando dispara — el usuario tiene
  que ver el contenido ya, no 400ms después.

**Implementación:** `src/components/RevealScroll.tsx`, función
`fireWatchdog`. El comentario en el archivo apunta a esta entrada.

**Origen:** Fran, 14 septiembre 2026 · P0.3/P0.5 del Brief 14-sep ·
lockeada tras el bug que ocultaba cuerpos permanentemente en navegación
entre rutas.

---

## 2026-09-14 · Fechas de engagement fuera de las superficies

**Regla:** las fechas de un engagement (rangos, ventanas, "Years"
labels con rango) salen de todas las superficies. Se quedan **solo**
donde:

1. La duración es el argumento del bloque — por ejemplo, el bloque de
   prueba de Karen: `A five-year period of engagement · 2021—2026` y su
   encabezado *Karen ran hers for five years*. Ahí la duración construye
   el pitch: los tres meses arman el sistema, cinco años prueban que
   sigue funcionando.
2. Sin ellas el tiempo verbal miente — testimonial attributions con el
   formato `Client, 2021—2026` (ver entrada del formato de atribución
   arriba). Ahí el período es lo que evita que se lea como relación
   vigente.

**Prohibido en el resto:**

- Rangos `Years: YYYY–YYYY` sueltos en credits de case studies que no
  sostienen argumento.
- Ventanas de tiempo en menciones de clientes en `/pricing` o cualquier
  arco de resultados (`Over the five years the work ran...`, etc.). El
  verbo en pasado hace el trabajo sin necesidad de repetir la fecha.
- Sources de stats con el rango de engagement (`LinkedIn Analytics,
  2021–2026` → `LinkedIn Analytics`).

**Precaución:** sacar la fecha **no puede reintroducir el presente que
el barrido ya cerró**. Past-tense sticks. `walks into meetings` → `walked
into meetings`. Si sacar el marcador de fecha te obliga a mover a
presente, el marcador se queda.

**Nadie se marca como activo.** Ninguno de los nueve del grid lo está,
o mientras haya dudas, se trata como cerrado por defecto.

**Origen:** Fran, 14 septiembre 2026 · lockeada tras el barrido de
precisión que cerró Karen y INOUT.

---

## 2026-09-14 · Nombres de rutas retiradas viven en los regex de match del nav

**Regla:** cuando una ruta se retira y queda con redirect
permanente hacia su canónica nueva, el nombre viejo se conserva en
la regex de `match` del `NAV_ITEMS` correspondiente. La regex
matchea AMBAS: la canónica actual y la ruta retirada.

**Por qué:** el redirect 308 dispara desde el servidor, pero
durante el frame antes de que resuelva, el `usePathname()` del
cliente devuelve la URL vieja. Sin el nombre viejo en la regex, el
estado activo del nav queda sin match por ese frame — el elemento
correspondiente se ve inactivo aunque el usuario esté navegando
hacia él.

**Ejemplo actual:**

```ts
{ href: '/about', label: 'About', match: /^\/(about|our-founder)/ }
```

`about` es la canónica desde el Brief 02 (14-sep). `our-founder`
es la ruta retirada. La regex mantiene ambas.

**Prohibido:** limpiar el regex retirando el nombre viejo por
"orden". El comentario en `Nav.tsx` apunta a esta entrada
específicamente para frenar esa limpieza. Si el nombre viejo se
saca, el nav pierde su estado activo durante el frame de
transición.

**Cuándo se retira del regex:** solo cuando la URL vieja deja de
existir en la web pública — es decir, cuando el redirect se retira
también. Mientras haya un `301`/`308` sirviendo esa URL, el
nombre se queda en el regex.

**Origen:** Fran, 14 septiembre 2026 · lockeada durante el rollout
del Brief 02 (/our-founder → /about).

---

## 2026-09-14 · Grillas se encienden por `:has()`, no por placeholder

**Regla:** cuando una grilla depende de un asset opcional
(retrato, foto de team, imagen de card), el layout se activa via
`:has()` sobre la presencia del asset en el DOM — no reservando
altura vacía con `vh` ni mostrando un placeholder.

**Por qué:** un placeholder o un `min-height: Xvh` reservado deja
un agujero en la página cuando el asset no llegó. Ese fue el bug
de las cards de la home donde Jack Yaeger sin foto rompía el
renglón. La solución es no dibujar el hueco.

**Cómo se implementa:**

```css
.ab-who {
  /* Sin retrato: una columna, layout fluido. */
  display: grid;
  gap: clamp(24px, 4vh, 48px);
}
.ab-who:has(.ab-who__portrait) {
  /* Con retrato: dos columnas, retrato 3:4 en col 1. */
  grid-template-columns: minmax(280px, 1fr) minmax(0, 2fr);
}
```

El JSX renderea el `<img>` solo cuando la ruta existe. Sin el
`<img>` el `:has()` no matchea y el layout cae al default de una
columna. Con el `<img>` el `:has()` matchea y la grilla se
enciende sin cambios de otras medidas.

**Alcance:** el mismo patrón sirve para la sección `06 · Team`
del `/about` cuando lleguen tres personas — la grilla 3-up se
enciende cuando hay 3+ children con `.ab-team__card` (o el
selector equivalente), no antes. Y también para cualquier card
del sitio que tenga foto opcional.

**Origen:** Fran, 14 septiembre 2026 · lockeada durante el rollout
del §05 de /about (retrato de Fran pendiente).

---

## 2026-09-15 · No linkeamos al contenido publicado por el cliente desde nuestro portfolio

**Regla:** las páginas de case study **no incluyen enlaces al
contenido publicado bajo el nombre del cliente**. Sale del molde
la línea "Read it on LinkedIn ↗" o cualquier variante que apunte
a superficies donde el cliente firma como autor.

**Razón:** el contenido está publicado bajo el nombre del cliente,
en su voz. Mandar gente ahí con un link desde el portfolio de
CRUDA es firmar por debajo algo que él firmó arriba. Toda la
ética del sitio es que la voz es del cliente. Un link es señalar
— y CRUDA no señala su propio trabajo por debajo de la firma
ajena.

**Se queda:** el `AFTER` verbatim adentro del case study. En un
case study se muestra como lo que escribió el cliente; el sitio
lo cita como texto en su voz. Un link a la superficie donde
está publicado es otra cosa.

**Precedente rechazado:** NDS §7.2 del brief 06. La técnica de
"link to the live work" que usa National Design Studio se ve
bien y funciona para ellos, pero su portfolio linkea a sitios
que ellos entregaron — no a contenido publicado bajo el nombre
del cliente. La analogía falla y la ética no.

**Origen:** Fran, 15 septiembre 2026 · rechazo explícito durante
la revisión del Brief 06.

---

## 2026-09-15 · Endpoint stub no publica una página con formulario

**Regla:** un `<form>` que devuelve 200 y descarta los datos es
peor que no tener formulario. La página se ve funcionando, alguien
escribe en serio, y se pierde. **Sin destino real, la sección con
formulario no publica.**

**Alcance:** aplica al formulario de intake de `/contact` (Brief
05 P2) y a cualquier form que se agregue después. El destino
puede ser mail directo, Notion, un CRM, un endpoint propio —
pero tiene que existir, cachear y ser recuperable.

**Consecuencia:** `/contact` como página nueva se queda en la
cola hasta que Fran defina destino. La estructura y el CSS se
pueden construir; el POST no.

**Origen:** Fran, 15 septiembre 2026 · precisión durante la
planificación del Brief 05.

---

## 2026-09-15 · Regla 15 retirada · registro reemplaza conteo de palabras

**Regla nueva:** el uso de `--serif` vs `--grot` se decide por
**registro**, no por cantidad de palabras.

  ```
  SERIF      la tesis · el argumento · la voz de la marca
  GROTESCA   lo operativo · nav · grillas · números · specs
  ```

**Qué cambia:** el límite anterior de ≤ 6 palabras para serif
(entrada 15) se retira. Un titular display en serif puede tener
la extensión que necesite si es tesis. Un nombre corto en serif
sigue estando bien; una cita de 40 palabras en serif también, si
la cita es la voz de la marca.

**Qué NO cambia:** el rechazo a agregar familias tipográficas.
Sistema sigue con Instrument Serif + Archivo. Cualquier tercera
familia se cruza con esta entrada primero.

**Casos actualizados:**

  · Beats del escenario de apertura (siete beats, hasta 40
    palabras cada uno): serif liviana, cream sobre ink-deep.
  · why-now H2 de 12 palabras (antes flagged): ahora está bien
    si la sección se llama argumento. La versión actual de la
    home retira why-now entera per Brief 07 v2 — el caso ya no
    aplica, pero la regla lo permitiría si volviera.

**Origen:** Brief 07 v2 §P4 (15-sep) · Fran retira la regla del
conteo de palabras y sube el registro como criterio.

---

## 2026-09-15 · Dos bloques inversos permitidos en la home

**Regla:** la home puede tener **dos zonas oscuras**, no una:

  1. `opening-act` (el escenario de apertura, ink-deep +
     cream + grilla oscura).
  2. `testimonial` (la voz del cliente, mismos tokens).

Los dos comparten `#0E1113` + `#EFEBDF` + grilla oscura — se
leen como pariente, no como islas negras. El testimonio adopta
el sistema del escenario para reforzar el marco.

**Qué NO cambia:** el resto del sitio sigue con la regla de un
solo bloque inverso por página. `/about §01` es el único inverso
de esa página. Los case studies no llevan inverso.

**Origen:** Brief 07 v2 §P5.bis (15-sep) — cambio explícito de
la regla anterior.

---

## 2026-09-15 · Regla 5 · excepción de `outside the fee` retirada

**Cambio:** la excepción que permitía la frase "media budget
sits outside the fee" queda retirada. El sitio unifica en `the
engagement` en toda superficie, incluida la línea del media
budget.

  ```
  Antes:  Media budget is yours and sits outside the fee.
  Ahora:  The media budget is yours and sits outside the engagement.
  ```

Aplica a home `first-90` mes 3, `/process` block 03, y cualquier
uso futuro. Grep de `outside the fee` debe devolver cero.

**Origen:** Brief 08 (15-sep) · Fran unifica el vocabulario en
un solo commit. El fee ya no aparece.

---

## 2026-09-15 · Grilla técnica continua sobre todo el sitio

**Regla:** una grilla de líneas sutiles con cruces en las
intersecciones se aplica a **todas las secciones del sitio**,
oscura sobre negro y clara sobre papel.

  ```
  --grid-dark:   rgba(239,235,223,.05)   sobre --ink-deep
  --grid-paper:  rgba(0,0,0,.035)        sobre --paper
  ```

Misma medida de módulo (~64-96px según viewport). Cruza el corte
de color sin romperse — es lo que hace que las dos mitades del
sitio se lean como un solo objeto y no como dos páginas pegadas.

**Alcance:** las nueve secciones de la home, `/about`, `/process`
y (en fase propia) los case studies. Todas usan el mismo
tratamiento, aunque a diferentes opacidades.

**Origen:** Brief 08 §P1 (15-sep) · Fran lo llama "el cambio
con mejor relación esfuerzo/resultado del brief".

---

## 2026-09-15 · Un solo lenguaje de revelado fuera del escenario

**Regla:** todo el sitio excepto el escenario de apertura usa
**el mismo timing de revelado, sin excepciones por sección**:

  ```
  eyebrow  delay 0
  título   delay 120ms   line-reveal, 90ms por línea
  cuerpo   delay 120ms + (líneas × 90ms) + 160ms
  media    con el cuerpo
  ```

**Regla de contención:** ninguna transición fuera del escenario
puede durar más de **600ms**. Lo que tarde más compite con el
scrub del escenario y desordena la jerarquía.

**El escenario es la excepción única** — allí el estilo es
función pura del progreso del scroll, sin transition ni
animation. El scrub es la firma; el revelado uniforme es el
rigor del resto.

**Origen:** Brief 08 §P3 (15-sep).

---

## 2026-09-15 · Un scrub por superficie · reemplaza "un scrub por sitio"

**Corrección al Brief 08:** la regla no es *un scrub por sitio*.
La regla es **un scrub por superficie**.

**Consecuencia práctica:**

- La HOME tiene su scrub en el acto de apertura (`opening-act`).
  El acto de papel de la home NO puede tener otro scrub — dos
  scrubs en una misma superficie compiten y desordenan la
  jerarquía. Regla lockeada.
- `/process` puede tener su propio scrub en el futuro. Nunca dos
  en la misma página.
- Cada case study puede tener su propio scrub más adelante.
  Nunca dos en la misma página.

**Qué NO cambia:**

- El acto de papel de la HOME sigue sin scrub — la home ya
  gastó su scrub en el acto de apertura.
- El resto del sitio sigue con el revelado uniforme (entrada
  anterior · 600ms tope, timing igual por sección).

**Origen:** Fran, 15 septiembre 2026 · corrección al Brief 08
minutos después de escribirlo, aclarando el alcance real.

---

## 2026-09-14 · Serif solo hasta seis palabras, sin excepciones

**Regla:** `--serif` (Instrument Serif) se usa exclusivamente en
títulos display de **seis palabras o menos**. Por encima de seis,
el título va en `--grot` (Archivo).

**Sin excepciones nuevas.** Ni epígrafe de sección, ni "lo pide
el rythm", ni "queda mejor con dos líneas". Cualquier razón para
subir el límite se cruza con esta entrada primero.

**Casos históricos que cayeron:**

- `why-now` H2 (12 palabras) — flagged en Brief 04 P1.
- `/about` §01 H1 (8 palabras) — flagged por Fran durante el
  rollout de Brief 02, rationalizada como excepción de epígrafe
  y corregida el mismo día.

Las dos veces la razón fue "se veía bien en serif". Es
exactamente el marker que la regla existe para frenar.

**Por qué el límite es seis:** más allá de seis palabras el
tracking negativo (-.02 a -.025em) del serif display se acumula
sobre demasiada distancia horizontal, y la línea deja de leerse
como titular y pasa a leerse como cita mal armada. El límite no
es estético, es funcional.

**Alcance:** todo H1, H2, H3 que use `font-family: var(--serif)`
directa o indirectamente (via `.display`, `.display--sm`, etc.).
Bylines, atribuciones, decoraciones que no son título display no
cuentan.

**Brief 06 P3 (15-sep) · aclaración:** el límite de seis palabras
aplica solo a **títulos display** (H1, H2 al peso display). Deks
y ledes en serif no tienen límite de palabras — su función no es
display sino continuación. El dek de Girish (18 palabras en serif)
se queda por eso.

  ```
  serif ≤ 6 palabras   → H1 y H2 display
  serif sin límite     → deks y ledes
  ```

**Cuándo se puede reabrir:** cuando alguien tenga una razón que
no sea gusto. Hasta entonces, sigue en pie.

**Implementación:** el token `--serif` vive en
`src/components/case-study.css:35`. El comentario en esa línea
apunta a esta entrada.

**Origen:** Fran, 14 septiembre 2026 · lockeada tras la segunda
caída (H1 de /about durante el rollout de Brief 02).

---

## 2026-09-15 · `className +=`, nunca asignación, sobre `<html>` en el layout server component

**Regla:** cualquier script inline que corra antes del primer
paint y toque `document.documentElement.className` usa
`className +=` (append), nunca `className =` (asignación).

**Por qué:** `next/font` (`Archivo`, `Instrument_Serif`) expone
sus fuentes como CSS variables (`--font-archivo`,
`--font-instrument-serif`) inyectando esas variables como
**clases** en `<html>` desde el layout server component:

```tsx
<html lang="en" className={`${instrumentSerif.variable} ${archivo.variable}`}>
```

Esas clases (con nombres autogenerados tipo `__variable_315a98`)
son el hook que las hojas de estilo usan para resolver `var(--serif)`
y `var(--grot)`. Si un script pre-paint asigna `className =`, las
pisa. Resultado: todo el sitio cae a la fuente default del sistema,
sin previo aviso, sin error en consola.

**Caso concreto:** Motion v4 §1 no-flash gate. El script inline en
`app/layout.tsx` agrega `js` a la clase de `<html>` para que el
CSS `.js #act1 .beat:not([data-beat="1"]) { visibility: hidden }`
tome antes del primer paint. Se usa `+=`, no `=`.

```js
// bien
document.documentElement.className += ' js';

// mal · rompe las fuentes en silencio
document.documentElement.className = 'js';
```

**Alternativa igualmente segura:** `dataset` cuando lo que se
quiere es un flag y no una clase. `document.documentElement.dataset.foo = 'bar'`
no toca `className` y el CSS matchea por `[data-foo="bar"]`. El
loader gate del mismo archivo va por ahí (`dataset.loader = 'skip'`)
porque no necesita una clase.

**Implementación:** el script vive en
`app/layout.tsx:LOADER_GATE_SCRIPT`. El comentario en esa
constante apunta a esta entrada.

**Origen:** Fran, 15 septiembre 2026 · flagged durante la
verificación de Fase 1 del Motion System v4. El fix de flash
originalmente planteado con `className =` habría roto las fuentes
en producción — se cazó antes de mergear.

---

## 2026-09-15 · El agente de código no retira contenido del sitio

**Regla:** cards, casos, secciones y copy salen del sitio **solo
por instrucción explícita de Fran**, nunca como efecto lateral
de una tarea técnica.

**Corolario:** cuando aparece una card o un caso que "queda mal"
durante otra tarea (imagen faltante, cita pendiente, ruta 404,
métrica sin fuente), la resolución es plantearlo a Fran o
enmascararlo con placeholder / marker de estado. **Nunca** hay
retirada silenciosa.

**Regla de decisión relacionada** (mismo día, brief 15-sep):

```
sin PÁGINA   →  la card sale
sin FOTO     →  la card se queda, la foto se resuelve
```

El límite entre las dos no lo cruza el agente autónomamente.

**Caso concreto que la motivó:** durante la ejecución de la
Fase 1 del Motion System v5 (reordenar el array `ACT2_ARTS`),
se retiraron previamente las cards INOUT (`ebffebf3`, 12-sep,
"no publica sin su cita") y Mistiva (`190dba4f`, 14-sep, "sin
foto floteaba desalineada"). Ninguno de los dos briefs autorizaba
esa retirada · fueron decisiones de contenido tomadas dentro de
commits de motion / rebuild. El addendum del 15-sep las revirtió
con `placeholder:true` (commit `4132bbc`).

**Consecuencia para el flujo de trabajo:**

- El agente propone, Fran decide. Si un caso queda visualmente
  roto y no hay instrucción explícita, se marca en el reporte
  con la propuesta de fix; no se ejecuta la retirada.
- El error de mapping (par bust · 3253008 → 6fdae95) es de
  otra categoría: es un error técnico que el agente detecta y
  corrige solo. Se acepta y se promueve.
- Retirar contenido mientras se ejecuta motion / refactor /
  rebuild es siempre error, aunque el efecto lateral parezca
  correcto en el momento.

**Alcance:** todo el sitio. Sin excepciones por brief. Los
briefs pueden autorizar retiradas; ninguna instrucción implícita
las autoriza.

**Implementación:** el `draft:true` como flag sigue existiendo
en `WorkCardData` como signal de "hidden por decisión", pero
nunca se aplica sin instrucción. Para "sin foto" el flag correcto
es `placeholder:true` (Fran 15-sep) — mantiene la card en la
grilla con el crop del sistema.

**Origen:** Fran, 15 septiembre 2026 · addendum al Motion System
v5, §3. Motivado por la doble retirada de INOUT y Mistiva
detectada durante la verificación de Fase 1.
