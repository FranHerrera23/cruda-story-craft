# BUILD INCIDENTS

Registro de incidentes técnicos del repo · bugs de deploy, de
cache, de assets, protocolos de diagnóstico que funcionaron o
fallaron. Vive al lado del código para que el próximo que
debuggee lo encuentre.

Es distinto del registro de lecciones de negocio y proceso, que
vive en el project knowledge del proyecto
(`EXPERIMENTS_AND_LEARNINGS.md`). Este archivo es solo build.

---

## 2026-09-16 · Cuatro de cinco imágenes de #act2 reportadas como rotas

El repo estaba limpio: los cinco archivos tracked, los cinco
sirviendo 200 en local, ningún commit tocó `public/`. Era cache
del navegador que hizo el reporte.

Protocolo: ante un bug visual, verificar en incógnito antes de
abrir la investigación. El protocolo listar → verificar →
reportar funcionó y detuvo la fase en el punto correcto.

Diagnóstico ejecutado:

  · `grep ACT2_ARTS` en `acts-config.ts` · 5 nombres declarados.
  · `ls public/why-now/` · 6 PNGs presentes (los 5 + bust-02-mid
    fuera del array).
  · `git ls-files public/why-now/` · los 6 tracked.
  · `git blame` sobre `3253008`, `4132bbc`, `6fdae95` · ningún
    commit tocó `public/`.
  · `curl -sI http://localhost:3000/why-now/<name>.png` · los
    5 devolvieron 200.

Con esa cadena de verificaciones, el código quedó descartado
como causa. Fran recargó en incógnito y las cinco imágenes se
renderizaron.

**Aprendizaje operativo:** el primer paso de cualquier bug
visual reportado es hard-reload (Ctrl+Shift+R / Cmd+Shift+R) o
ventana incógnita. Recién con eso, si el bug persiste, se
escala.

---

## 2026-09-18 · `scrollWidth` sobre `<p>` block-level con `nowrap` no distingue overflow

Fase A · home lock §4 · el auto-fit de tamaño del hero. La
primera versión reducía el font hasta ~12px en 1440 y 1024, y
converge a ~40px en 768. Diagnóstico:

  · La frase tiene `white-space: nowrap`, es `<p>` block-level.
  · `phrase.scrollWidth` sobre ese elemento devuelve
    `max(clientWidth, contentWidth)`. Cuando el texto CABE
    holgado en el ancho, `scrollWidth == clientWidth`.
  · Con el fit iterando `while (phrase.scrollWidth > containerWidth)`
    la condición nunca se vuelve falsa "por buen fit" · sólo cuando
    el font es tan chico que `clientWidth` (que también depende
    del contenedor, no del contenido) queda por debajo del target.
    En anchos grandes eso lleva a 12px porque el clientWidth de
    un `<p>` en absolute con `left/right` no baja aunque el texto
    quepa.

**Fix.** Medir el ancho REAL del texto, no el del elemento:

    phrase.style.width = 'max-content'
    // el <p> se encoge al ancho del texto
    const textWidth = phrase.getBoundingClientRect().width
    // comparar contra el contenedor
    while (textWidth > containerWidth) ...
    phrase.style.width = ''  // restaurar al final

Con `width: max-content`, el `<p>` colapsa al ancho de su
contenido y `getBoundingClientRect()` reporta lo que el ojo ve.
Sin `max-content`, la iteración usa `clientWidth` como proxy y
falla en silencio para todos los casos donde el texto cabe.

**Dónde vuelve a morder.** Cualquier auto-fit por medición
sobre un elemento block-level que aloja texto `nowrap`. En
particular:

  · Titulares de etapa en `/process` (wireframe §4 motion ·
    "los títulos NO hacen wrapping a más de dos líneas · si no
    entran, se reduce el tamaño").
  · Cualquier futuro título display que aplique nowrap con fit.

**Protocolo.** El día que un fit por medición devuelva "el font
converge a valores absurdos", asumir que la métrica leída no es
lo que el ojo ve. Cambiar `scrollWidth` (o `offsetWidth`) por
`getBoundingClientRect().width` sobre un elemento con
`width: max-content` o `display: inline-block`.

---

## 2026-09-18 · Invariantes de test formulados por tramo en vez de por medición

Fase A · el test 5 del hero verificaba "en p=0.60 ambas frases
deben tener opacity > 0". Al ejecutar, beat 1 llegaba a opacity
0 exacto en el borde de su ventana de exit (0.60) y el test daba
rojo. La respuesta pragmática habría sido "tolerar el edge y
dejar 17/18 pass", pero eso es lo que ya pasó dos rondas atrás
con el word-snap: un invariante ambiguo que se aprende a
ignorar deja de proteger.

**Reformulación.** El invariante que importa no es "en tal punto
X pasa Y" · es "la pantalla nunca está negra". Reescrito:

  Test binario · para cada uno de N samples de p en [0, 1]:
    sum(opacity de todos los beats) > 0

Con 200 samples y N beats, el test agarra cualquier hueco real
sin depender de conocer los bordes exactos de las ventanas.

**Aprendizaje.** Un test que codifica boundaries del código
(0.54, 0.60) se rompe cuando el código legítimo cambia esos
boundaries. Un test que codifica la INTENCIÓN (cero pantalla
vacía, cero line-box mayor a 1) sobrevive a la refactorización.
Antes de escribir el assert, preguntar "¿qué está midiendo esto,
la geometría o el resultado?"

---

## 2026-09-18 · `letter-spacing: 0` en CSS compila a `normal` en computed style

Fase D · WHAT OTHERS · el test binario contra tracking de un
attribution medía `parseFloat(getComputedStyle(el).letterSpacing)`
y devolvía `NaN` cuando el CSS declaraba `letter-spacing: 0`.

Causa · el CSS `letter-spacing: 0` es válido, pero el user
agent lo colapsa al keyword `normal` en la representación
computada. `getComputedStyle` devuelve la string `"normal"`, y
`parseFloat("normal")` es `NaN`.

Misma familia que la trampa de `scrollWidth` sobre `<p>`
block-level con `nowrap`: el valor escrito y el valor computado
no coinciden.

**Fix.** Comparar contra ambos representaciones válidas:

    const ls = getComputedStyle(el).letterSpacing
    const px = ls === 'normal' ? 0 : parseFloat(ls)
    // asserto sobre `px`

**Dónde vuelve a morder.** Cualquier test que lea propiedades
CSS "opcionales" con valor cero: `letter-spacing`, `word-spacing`,
`line-height`, `column-gap` cuando no está en un contenedor
flex/grid, `text-indent` en algunos motores. La regla general
· lee la string, si es `normal`/`auto`/`inherit`, tratala como 0
o como el default esperado.

---

## 2026-09-18 · `font-weight: 300` en un rótulo fuera de sistema · alguien lo decidió en el momento

Fase D · WHAT OTHERS · el eyebrow tenía `font-weight: 300`
(light). El sistema §2 declara peso 500 para los labels. Nadie
lo había pedido en un brief · alguien lo eligió al escribir el
CSS.

Fase E · LEGACY · el `.home-legacy__role` con el mismo tratamiento
`font-weight: 300`. Segundo hallazgo del mismo tipo en dos
commits consecutivos.

Fran (18-sep) · "Si aparecieron dos en un solo bloque, hay más
en el resto de la home. Cuando E cierre, un barrido de toda la
superficie contra §2 —pesos, tracking, tamaños fuera de escala—
probablemente encuentre otros tres."

**Aprendizaje.** El sistema de diseño no se aplica revisando cada
archivo cuando lo tocás por otra razón · un archivo que no se
edita sigue con el peso equivocado. Necesita un barrido explícito.

**Barrido tipo.** Un test que enumere selectores con propiedades
del sistema (color, font-weight, font-size, letter-spacing,
line-height) y los compare contra la escala firmada. Cualquier
valor fuera de la escala se reporta.

Selectores a auditar (mínimo):
  · cualquier `.*__eyebrow`, `.*__label`
  · cualquier `.*__role`
  · cualquier `.*__meta`, `.*__attribution`, `.*__caption`
  · cualquier `.*__num`, `.*__value`
  · cualquier `.*__head`, `.*__title`, `.*__h1`, `.*__h2`

Propiedades a comparar:
  · font-weight: sólo {400, 500, 700} en el sistema · nada
    fuera de eso.
  · letter-spacing en labels: exactamente .55em (44% de font-size
    en px, con tolerancia de 5%).
  · letter-spacing en meta/body: `normal` (o 0, ver entrada
    anterior).
  · font-size: dentro de la escala h-display / h-section / h-sub
    / body / label / meta.

**Cuando corre.** Antes de firmar cada fase de home o /process.
Reemplaza la revisión manual, que ya se probó porosa.

---

## 2026-09-18 · El peso 300 aparece cuando el sistema no está escrito

Un aprendizaje, no un bug puntual. Se registra acá porque va a
volver a aparecer en cualquier repo que empiece a escalar antes
de tener el sistema declarado.

**Los hechos.** Dos fases consecutivas (D y E1) corrigieron
`.home-what-others__eyebrow` y `.home-legacy__role`, ambos
declarados con `font-weight: 300`. Fran pidió el barrido §2
después. El barrido enumeró **seis selectores distintos** con
peso 300 en la superficie del sitio (home, /about, /process,
/contact, molde de caso).

Seis ocurrencias del mismo peso "fuera de sistema" no son seis
descuidos aislados. Es un patrón. Un peso liviano no aparece
por error de tipeo · aparece porque alguien lo eligió al escribir
el CSS de ese componente, buscando que se viera delicado.

**El diagnóstico.** Cuando el sistema visual vive sólo en el
código, cada componente tiene la libertad de inventar su propia
elegancia. La coherencia depende de que quien lo escribe consulte
otro archivo del repo · y esa consulta no ocurre bajo presión.
El resultado es N micro-inventos que suman divergencia sin que
nadie firme la divergencia.

**El remedio.** Un doc del sistema (`docs/cruda-design-system.md`
· creado 18-sep) reemplaza la consulta al código con la consulta
a un archivo destinado a eso. Y un barrido automatizado (§2 ·
`scratchpad/audit-type.mjs`) chequea la divergencia como paso
firmable, no como revisión manual.

**Lo que hay que agarrar.** El sistema declarado NO impide que
alguien elija `font-weight: 300` para el próximo componente. Lo
que impide es que esa elección pase sin verse. El barrido tiene
que correr antes de firmar cada fase, y el commit debe reportar
"cero deviation" o listar las excepciones firmadas.

**Corolario.** Todo axis del sistema tiene el mismo riesgo:
color inventado, tracking off-system, tamaño fuera de escala.
El barrido cubre los tres. Cuando aparezca la cuarta ocurrencia
del mismo patrón en un axis nuevo, esta entrada se referencia.

---

## 2026-09-19 · Un brief no puede declarar un valor de sistema

Fase C1, D y E1 crearon rótulos con `letter-spacing: .55em`
porque el wireframe LOCK · home §2.2 lo declaró como el sistema:
"rótulos: mayúsculas, tracking .55em, gris medio". El agente
ejecutó el brief al pie de la letra en tres fases.

El barrido §2 del 18-sep encontró que `.55em` **no existía en
el código previamente**. Los 20 selectores de rótulos que
vivían en el resto del sitio usaban `.14em` (medido, no
declarado). El brief había declarado un valor de sistema que
nadie verificó contra el repo, y como el brief manda, el valor
falso se propagó a cada componente nuevo creado bajo él.

**El error es del brief, no del agente.** Fran (19-sep) · "vos
ejecutaste C1, D y E1 siguiéndolo al pie de la letra. Hiciste
lo correcto".

**Lo que revela.** Un brief puede declarar un valor de sistema
que no existe en el repo, y como el brief manda, el valor falso
se propaga a cada componente nuevo. Tres fases lo replicaron.

**Regla nueva del protocolo (Fran, 19-sep).**

> Un brief no puede declarar un valor de sistema. Sólo puede
> declarar la intención — "rótulo", "display", "cuerpo" — y el
> valor sale del design-system doc. Si un brief trae un número
> que el doc no tiene, se reporta antes de ejecutar, no después.

**Cómo se aplica.**

Cuando un brief trae un valor concreto (`.55em`, `#FF5A00`,
`44px`, `weight 500`, `clamp(...)`) para una propiedad del
sistema (color, tipografía, spacing, motion, tracking):

1. Consultar `docs/cruda-design-system.md` primero.
2. Si el valor está declarado ahí, ejecutar.
3. Si el valor NO está declarado ahí, **detener y reportar**:
   - "El brief trae X para PROPIEDAD. El design-system doc no lo
     declara. ¿Se agrega al sistema (y en ese caso hay que
     firmar la adición) o se corrige contra el sistema vigente?"
4. Recién con firma de Fran (agregar o corregir) se ejecuta.

**Caso testigo · registrado con este aprendizaje.** El `.55em`
se corrige a `.14em` en Commit 4 · las tres fases (C1, D, E1)
tienen selectores concretos a normalizar: `.home-whi__label`,
`.home-legacy__role`, `.home-legacy__row-label`,
`.home-what-others__eyebrow`, `.home-what-others__media-label`.

**Efecto de este aprendizaje.** El design-system doc pasa a ser
la fuente de verdad de los valores. El brief es la fuente de
verdad de la intención y la estructura. Si los dos se contradicen
en el momento de la ejecución, el agente detiene y reporta ·
Fran decide cuál gana.

---

## 2026-09-19 · `/llms.txt` y `/ai.txt` deben revisarse en cada retiro/agregado de ruta

En dos días distintos, `/llms.txt` (y su gemelo `/ai.txt`)
sirvió a los crawlers de IA rutas retiradas o inexistentes:

**18-sep · commit `f25ff69`** · `/pricing` estaba listada como
hub en `HUBS_SECTION` (`- [Pricing](/pricing): CRUDA's engagement
structure and rates.`) cuando el directorio se borró. Detectado
en el reconocimiento del Commit 1 · cleanup en el mismo commit.

**19-sep · Commit 3** · `/sports` y `/systems` estaban listadas
como Companies en `COMPANIES_SECTION` cuando `middleware.ts`
las retornaba 410 Gone. `/resources` estaba listada como hub
cuando redirige 308 a `/work`. **Peor caso posible** · le decíamos
a los modelos "acá hay dos empresas de CRUDA" y cuando iban a
buscarlas no existían. Es una afirmación falsa sobre la
compañía, servida específicamente para consumo de IA. Y encima
había un tercer link `/resources` que redirigía.

Fran (19-sep) · "Que `llms.txt` y `ai.txt` entren al protocolo:
cada vez que se retira o agrega una ruta, se revisan los dos.
Ya nos pasó dos veces en dos días."

**Regla nueva del protocolo.**

Cualquier commit que:
- borre un directorio de ruta (`rm -rf app/route-name/`)
- agregue una ruta nueva (`app/new-route/`)
- cambie el estado de una ruta (301/308 redirect, 410 Gone,
  noindex, feature-flag apagado)

**tiene que incluir la revisión de `src/lib/llms-txt.ts` y las
routes `app/llms.txt/route.ts` + `app/ai.txt/route.ts`.**

Chequeos automatizables:

1. `grep -o "\.thecruda\.com/[a-z][a-z0-9-]*" src/lib/llms-txt.ts`
   enumera todas las rutas declaradas al crawler.
2. Cada una tiene que resolver con status 200 (o estar autorizada
   como redirect en el sitemap con destino coherente).
3. Cada URL en el sitemap tiene que aparecer o justificar su
   ausencia en `llms.txt`. Cada URL en `llms.txt` tiene que ser
   servida (no 410, no dead flag).

**Cómo se aplica.**

Verificación post-build (nueva disciplina firmada 19-sep):

    grep -o "\.thecruda\.com/[^)]*" .next/server/app/llms.txt.body
    // → enumerá las URLs listadas
    // cada una tiene que existir en el bundle (.next/server/app/)
    // o estar en next.config.mjs redirects con destino vivo.

Este check corre antes de firmar cualquier retiro de ruta.

**Corolario.** Los dos surfaces (sitemap y llms/ai) sirven
audiencias distintas — buscadores tradicionales vs modelos de
IA — pero son la misma pregunta: "qué páginas dice el sitio
que existen". Deben estar sincronizadas. Un componente adicional
que consumen ambas fuentes (por ejemplo un `ROUTES` firmado en
`src/content/routes.ts` con estado por ruta) sería el fix
estructural. Fase futura, no scope de este commit.

---

## 2026-09-19 · El test de tipografía forzó familia en :root y midió lo mismo dos veces

Fase decisión 6 · comparar Archivo vs Inter Tight sobre el hero.
Primera corrida del script `scratchpad/font-test.mjs` devolvió
Δ 0 en los 8 puntos de medición. Un resultado que parecía
limpio, y no medía nada.

**La causa.** El script inyectaba el swap sobrescribiendo
`--grot` en `:root`. Pero el hero HOY renderea con `--serif`
(Instrument Serif · el cambio a grotesca es F9.1, todavía
pendiente). El override sobre `--grot` no afectaba al elemento
medido, porque el elemento consumía otra variable. Baseline y
test midieron lo mismo · serif contra serif.

Recién con debug output (fontFamily del computed style sobre el
elemento medido) se detectó · en las dos corridas el elemento
seguía en `__Instrument_Serif_315a98`, no en Archivo ni en Inter
Tight.

**Es la tercera vez.** Misma familia de trampa que:

- `scrollWidth` sobre `<p>` block-level con `nowrap` (entrada
  del 18-sep) · devuelve `max(clientWidth, contentWidth)`, no
  el ancho del texto.
- `letter-spacing: 0` compila a `normal` en computed style
  (entrada del 18-sep) · `parseFloat("normal")` da `NaN`.
- El override en el ancestor cuando el elemento medido usa otra
  variable (esta entrada).

Todas comparten el patrón: **la métrica leída no es lo que
parece**. La suposición implícita del test no matchea la
mecánica real del CSS.

Fran (19-sep) · "Un resultado que parecía limpio y no medía
nada. Es la misma familia de problema que el `scrollWidth` y
el `letter-spacing: normal` — la tercera vez en dos días que
una métrica devuelve algo que no es lo que parece."

**Regla nueva del protocolo.**

Todo test que compara una propiedad tipográfica (tamaño, ancho,
familia, tracking, height) entre dos configuraciones tiene que:

1. **Forzar el swap sobre el selector que se mide**, no sobre
   un ancestor o un token. Si el elemento usa `var(--serif)` y
   el swap es `var(--grot)`, el elemento no se toca.
2. **Verificar el valor computado del elemento antes de confiar
   en la medición.** El `computedStyle(el).fontFamily`,
   `fontSize`, etc. tienen que reflejar el swap · si no, el
   test está midiendo el estado viejo.
3. **Doble baseline · misma configuración corrida dos veces.**
   Si baseline vs baseline devuelve Δ 0, el test funciona.
   Si baseline vs test devuelve Δ 0, o el swap no aplicó o
   las dos configuraciones son iguales · hay que distinguir.
4. **Cross-check con una métrica directa.** Si el swap dice
   "Inter Tight es más angosta", el ancho del texto a font-size
   fijo tiene que ser menor. Si no, el swap no aplicó · el auto-
   fit sí converge al mismo punto porque midió la misma familia.

**Cuando corre esta regla.** Cualquier test comparativo sobre
propiedad tipográfica. Antes de reportar el resultado, chequear
los cuatro puntos.

**Fix documentado en el script.** `scratchpad/font-test.mjs`
ahora inyecta `font-family` directamente sobre `.act1
.beat__phrase` en ambas familias, imprime el `fontFamily`
computado del elemento medido antes de reportar cada punto, y
agrega el test cruzado de scrollWidth a font-size fijo como
sanity check.
