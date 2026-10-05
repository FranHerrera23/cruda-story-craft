/* F52 §3.2 · lógica única del auto-fit de las frases del hero.

   Compartida entre:
   - Act1Hero.tsx (client component, re-ejecuta en resize + fonts.ready)
   - HeroFitInlineScript (server-rendered <script> inline que corre
     antes del primer paint, para que el h1 no haga un flash de
     76px → 49.6px al hidratar.

   La función es la misma en ambos lugares. Si acá cambia algo,
   la constante FIT_INLINE_SCRIPT se actualiza automáticamente al
   buildear, porque está construida sobre `fitAllPhrases.toString()`.

   Reglas del brief F11.1 § hero + F52 §3.2:
   - Cada frase se reduce hasta entrar en UNA sola line-box.
   - El techo del CSS (clamp) sigue mandando: el fit sólo puede
     BAJAR, nunca subir.
   - Después de medir cada una, se toma el mínimo y se aplica a
     todas, para que las dos frases queden al MISMO font-size.
   - Mobile (≤767 o pointer coarse o reduced-motion): el motor
     de Act1 no monta y el CSS apila los beats · el fit tampoco
     corre. Igual el inline script chequea el media query antes
     de ejecutar, para no tocar nada en mobile. */

/* Hardcode del minimo porque la funcion se serializa con .toString()
   para el inline script y no puede depender de variables externas. */
export const FIT_MIN_PX = 12

export function fitAllPhrases(phrases: HTMLElement[]) {
  if (phrases.length === 0) return
  var FIT_MIN = 12
  var perSize: number[] = []
  phrases.forEach(function (phrase) {
    var container = phrase.parentElement
    if (!container) return
    var containerWidth = container.getBoundingClientRect().width
    if (containerWidth <= 0) return
    phrase.style.fontSize = ''
    phrase.style.width = 'max-content'
    var cssSize = parseFloat(getComputedStyle(phrase).fontSize) || 76
    var size = cssSize
    phrase.style.fontSize = size + 'px'
    var iter = 0
    while (
      phrase.getBoundingClientRect().width > containerWidth &&
      size > FIT_MIN &&
      iter < 120
    ) {
      size *= 0.97
      phrase.style.fontSize = size + 'px'
      iter++
    }
    phrase.style.width = ''
    perSize.push(size)
  })
  var common = Math.min.apply(null, perSize)
  phrases.forEach(function (phrase) {
    phrase.style.fontSize = common + 'px'
  })
}

/* Inline script string · se inyecta via dangerouslySetInnerHTML
   en app/page.tsx justo después del markup del hero. Se construye
   serializando `fitAllPhrases.toString()` para que la lógica sea
   una sola y no haya chance de divergir.

   Guards:
   - Early return si el viewport es mobile (≤767 o pointer coarse
     o reduced-motion). Mobile no corre el motor de Act1.
   - Try/catch global por si document.querySelectorAll o algún
     cálculo falla · un fallo ahí NO debe romper la página.

   suppressHydrationWarning se aplica en Act1Hero sobre los
   elementos .beat__phrase, para que React no se queje del style
   inline que el script escribió antes del primer paint. */
export const FIT_INLINE_SCRIPT = `(function(){try{
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (window.matchMedia('(pointer: coarse)').matches) return;
  if (window.matchMedia('(max-width: 767px)').matches) return;
  var fit = ${fitAllPhrases.toString()};
  var phrases = Array.prototype.slice.call(document.querySelectorAll('.beat__phrase'));
  fit(phrases);
} catch(e) { /* silent · fallback a React useEffect fit */ } })();`
