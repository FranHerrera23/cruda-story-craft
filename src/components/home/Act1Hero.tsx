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
   resize y en document.fonts.ready. */

const FIT_MIN_PX = 12

/* F11.1 · auto-fit mínimo común (21-sep · autónomo).
   Bug del brief: `fitPhrase` bajaba cada frase por su cuenta y
   la frase corta se sostenía más grande que la larga. El check
   §4 pide "las dos frases del hero al MISMO font-size, medido".

   Nuevo modelo: medí cada frase por separado hasta que quepa,
   guardá cada tamaño, tomá el mínimo, aplicá el mínimo a todas.
   El techo del CSS (`font-size: clamp`) sigue mandando; el fit
   sólo puede BAJAR. */
function fitAllPhrases(phrases: HTMLElement[]) {
  if (phrases.length === 0) return
  const perSize: number[] = []
  phrases.forEach(phrase => {
    const container = phrase.parentElement
    if (!container) return
    const containerWidth = container.getBoundingClientRect().width
    if (containerWidth <= 0) return
    phrase.style.fontSize = ''
    phrase.style.width = 'max-content'
    const cssSize = parseFloat(getComputedStyle(phrase).fontSize) || 76
    let size = cssSize
    phrase.style.fontSize = size + 'px'
    let iter = 0
    while (
      phrase.getBoundingClientRect().width > containerWidth &&
      size > FIT_MIN_PX &&
      iter < 120
    ) {
      size *= 0.97
      phrase.style.fontSize = size + 'px'
      iter++
    }
    phrase.style.width = ''
    perSize.push(size)
  })
  const common = Math.min(...perSize)
  phrases.forEach(phrase => {
    phrase.style.fontSize = common + 'px'
  })
}

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

    /* Auto-fit inicial + en resize + en fonts.ready.
       Wireframe §4.2 · nunca dos line-boxes. */
    const runFit = () => {
      const phrases = Array.from(
        track.querySelectorAll<HTMLElement>('.beat__phrase'),
      )
      fitAllPhrases(phrases)
    }
    runFit()
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
                    dangerouslySetInnerHTML={{ __html: html }}
                  />
                ))}
              </div>
            )
          })}
        </div>
        <div className="act__logo" aria-hidden="true">
          CRUDA
        </div>
      </div>
    </div>
  )
}
