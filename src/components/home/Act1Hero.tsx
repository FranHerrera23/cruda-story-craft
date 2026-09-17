'use client'

import { useEffect, useRef, useState } from 'react'
import { ACT1_BEATS } from './acts-config'
import { runAct, enterAct, leaveAct } from './acts-motor'
import './acts.css'

/* Home · Act 1 · Hero
   Brief 07 definitivo (15-sep) · §2.

   Fondo #0E1113 con grilla técnica. Sticky 100svh. Dos beats con
   copy verbatim del §5. Sin imagen, sin contador, sin etiqueta.
   Solo la frase.

   SSR — los dos beats van en el HTML servido con su copia dim
   (§9 regla 11). El lit se rellena por scrub cuando el JS carga;
   sin JS el dim se lee y el sitio funciona. */

export default function Act1Hero() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    if (mq.matches) return

    const track = trackRef.current
    if (!track) return

    const cleanup = runAct({ track, beats: ACT1_BEATS })

    /* Lenis quiet mientras el acto está en viewport (§8). */
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
      /* Si el componente se desmonta con el acto en viewport,
         soltamos el contador para no dejar Lenis en modo quiet. */
      leaveAct()
    }
  }, [])

  return (
    <div
      id="act1"
      className={`act act1${reduced ? ' act--reduced' : ''}`}
      ref={trackRef}
    >
      <div className="act__stage act1__stage">
        <div className="act__grid" aria-hidden="true" />
        <div className="act__beats">
          {ACT1_BEATS.map((beat, i) => (
            /* data-beat es 1-indexed · Motion v4 §1 no-flash usa
               `[data-beat="1"]` como selector del primer beat. El
               motor querySelectorAll('[data-beat]') no depende del
               valor, sólo de la presencia del atributo. */
            <div key={i} className="beat beat--dark" data-beat={i + 1}>
              {beat.lines.map((html, j) => (
                <div key={j} className="beat__line" data-line>
                  <span
                    className="dim"
                    dangerouslySetInnerHTML={{ __html: html }}
                  />
                  {/* F2-FIX bug 1 · data-reveal="lines" hace que
                      LineReveals parta el .lit en <span class="rv-line">
                      por VISUAL line real (medido al ancho renderizado),
                      no por línea autoral. Cada .rv-line recibe su
                      propio --fill y su propio clip-path. Sin este split
                      el clip-path aplica al bloque entero de la línea
                      autoral y produce el bug del corte mid-palabra en
                      líneas envueltas. */}
                  <span
                    className="lit"
                    aria-hidden="true"
                    data-reveal="lines"
                    dangerouslySetInnerHTML={{ __html: html }}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="act__logo" aria-hidden="true">
          CRUDA
        </div>
      </div>
    </div>
  )
}
