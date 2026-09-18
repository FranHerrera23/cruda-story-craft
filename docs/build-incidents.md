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
