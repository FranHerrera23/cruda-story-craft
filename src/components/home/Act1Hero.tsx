'use client'

import { useEffect, useRef, useState } from 'react'
import { ACT1_BEATS } from './acts-config'
import { runAct, enterAct, leaveAct } from './acts-motor'
import './acts.css'

/* Home · Act 1 · Hero
   Wireframe LOCK · home §4 (17-sep).

   Fondo #0E1113 NEGRO LISO · sin grilla, sin textura, sin
   mockup. Sticky 100svh. Dos beats con crossfade solapado.

   Modelo phrase con overlap (§4.3) · cada beat entra, se
   sostiene y sale por opacity + translateY, atado al scroll,
   con ventanas [from, to] que se solapan a propósito para que
   en el cruce ambas frases estén parciales. Cero pantalla vacía
   en cualquier p (§4.4).

   Auto-fit del tamaño de fuente (§4.2 · white-space:nowrap +
   medición) · cada frase se reduce hasta entrar en UNA sola
   line-box, aplicado en 1440/1024/768/390. Se recalcula en
   resize y en document.fonts.ready.

   F52 §3.2 · el fit corre en un <script> inline server-rendered
   dentro del árbol del hero. La lógica de fit es una sola: vive
   en `INLINE_FIT_SCRIPT` como fuente única, y `window.__crudaFitAct1`
   la deja disponible tanto para el primer paint como para el resize
   y el fonts.ready. Antes de F52 el fit corría en el useEffect de
   este componente y Chrome no podía marcar el h1 como LCP hasta
   que React hidrataba (~2 s en desktop LH). Con el script inline
   el font-size sale seteado en el mismo paint del HTML servido y
   el h1 pasa a ser LCP en FCP. */

const FIT_MIN_PX = 12

/* Fuente única del auto-fit. Este mismo string se emite como
   `<script>` inline en el JSX (SSR + primer paint) y define
   `window.__crudaFitAct1`, que el useEffect llama en resize y en
   fonts.ready. Cambios acá impactan ambos caminos. */
const INLINE_FIT_SCRIPT = `
(function(){
  var MIN = ${FIT_MIN_PX};
  function fit(track) {
    var phrases = track.querySelectorAll('.beat__phrase');
    if (phrases.length === 0) return;
    var sizes = [];
    for (var i = 0; i < phrases.length; i++) {
      var phrase = phrases[i];
      var container = phrase.parentElement;
      if (!container) continue;
      var cw = container.getBoundingClientRect().width;
      if (cw <= 0) continue;
      phrase.style.fontSize = '';
      phrase.style.width = 'max-content';
      var css = parseFloat(getComputedStyle(phrase).fontSize) || 76;
      var s = css;
      phrase.style.fontSize = s + 'px';
      var iter = 0;
      while (
        phrase.getBoundingClientRect().width > cw &&
        s > MIN &&
        iter < 120
      ) {
        s *= 0.97;
        phrase.style.fontSize = s + 'px';
        iter++;
      }
      phrase.style.width = '';
      sizes.push(s);
    }
    if (sizes.length === 0) return;
    var common = Math.min.apply(null, sizes);
    for (var j = 0; j < phrases.length; j++) {
      phrases[j].style.fontSize = common + 'px';
    }
  }
  window.__crudaFitAct1 = function(){
    var track = document.getElementById('act1');
    if (!track) return;
    /* F48 · mismo gate mobile/reduced que el motor de Act1: el CSS
       apila los beats en flujo y el fit no aplica. */
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;
    if (window.matchMedia('(max-width: 767px)').matches) return;
    fit(track);
  };
  window.__crudaFitAct1();
})();
`

export default function Act1Hero() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    if (mq.matches) return

    /* F48 · gate mobile · el motor de Act1 no monta en touch o
       viewport chico. El CSS ya apila los beats en flujo (misma
       política que reduced-motion) — el JS no hace falta. */
    if (
      window.matchMedia('(pointer: coarse)').matches ||
      window.matchMedia('(max-width: 767px)').matches
    ) {
      setReduced(true)
      return
    }

    const track = trackRef.current
    if (!track) return

    /* F52 §3.2 · el fit inicial ya corrió en el <script> inline al
       primer paint. Acá sólo re-corremos en resize y en fonts.ready
       (que puede llegar después de la hidratación). La lógica es la
       misma que en el script inline (misma función `__crudaFitAct1`). */
    const runFit = () => {
      const w = window as unknown as { __crudaFitAct1?: () => void }
      if (w.__crudaFitAct1) w.__crudaFitAct1()
    }
    window.addEventListener('resize', runFit)
    if (document.fonts?.ready) {
      document.fonts.ready.then(runFit).catch(() => {})
    }

    const cleanup = runAct({
      track,
      beats: ACT1_BEATS,
      mode: 'phrase',
    })

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) enterAct()
          else leaveAct()
        })
      },
      { rootMargin: '0px' },
    )
    io.observe(track)

    return () => {
      cleanup()
      io.disconnect()
      leaveAct()
      window.removeEventListener('resize', runFit)
    }
  }, [])

  return (
    <div
      id="act1"
      className={`act act1${reduced ? ' act--reduced' : ''}`}
      ref={trackRef}
    >
      <div className="act__stage act1__stage">
        {/* F11.1 · kicker firmado del prototipo home-v3 §hero. */}
        <p className="hero__kicker">A communications company</p>
        <div className="act__beats">
          {ACT1_BEATS.map((beat, i) => {
            /* F11.1 · el primer beat es el <h1> semántico de la
               página. Los siguientes siguen como <p>, cero cambio
               visual. Ambos comparten .beat__phrase y el motor. */
            const Tag = i === 0 ? 'h1' : 'p'
            return (
              <div key={i} className="beat beat--dark" data-beat={i + 1}>
                {beat.lines.map((html, j) => (
                  <Tag
                    key={j}
                    className="beat__phrase"
                    /* F52 §3.2 · el font-size lo escribe el script inline
                       (más abajo) o `__crudaFitAct1` al primer paint /
                       resize / fonts.ready. React no toca `style` en
                       este nodo (no hay prop `style`), así que la
                       hidratación no re-renderea. */
                    suppressHydrationWarning
                    dangerouslySetInnerHTML={{ __html: html }}
                  />
                ))}
              </div>
            )
          })}
        </div>
        {/* F23.1 · CRUDA crema abajo-izquierda del hero retirado (Fran
            22-sep). El wordmark ya vive en la nav global; repetirlo
            en el fold competía con el h1. */}
        {/* F52 §3.2 · fit inline · corre en el mismo tick del parseo
            del HTML, antes de que React hidrate. Setea `font-size`
            inline en cada `.beat__phrase` con la lógica compartida
            (constante `INLINE_FIT_SCRIPT`). */}
        <script
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: INLINE_FIT_SCRIPT }}
        />
      </div>
    </div>
  )
}
