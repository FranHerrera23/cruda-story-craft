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
