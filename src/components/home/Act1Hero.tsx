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

/* Medir el ancho REAL del texto de la frase.
   Trampa detectada en verificación (17-sep): scrollWidth sobre
   un <p> block-level con white-space:nowrap devuelve
   max(clientWidth, contentWidth). Cuando el contenido cabe
   holgado, scrollWidth == clientWidth, y el fit no puede saber
   si necesita subir el tamaño ni distingue "cabe" de "no cabe"
   con precisión. Con `width: max-content` el <p> se encoge al
   ancho natural del texto y getBoundingClientRect().width
   reporta lo que el ojo ve. */
function fitPhrase(phrase: HTMLElement) {
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
      const phrases = track.querySelectorAll<HTMLElement>('.beat__phrase')
      phrases.forEach(fitPhrase)
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
        {/* Wireframe §4.1 · fondo NEGRO LISO · sin grilla.
            El .act__grid queda intencionalmente afuera del
            markup de act 1 (act 2 sí lo lleva). */}
        <div className="act__beats">
          {ACT1_BEATS.map((beat, i) => (
            /* data-beat 1-indexed · el motor querySelectorAll(
               '[data-beat]') encuentra el elemento y le aplica
               opacity + --ty por scroll con lógica de overlap. */
            <div key={i} className="beat beat--dark" data-beat={i + 1}>
              {beat.lines.map((html, j) => (
                <p
                  key={j}
                  className="beat__phrase"
                  dangerouslySetInnerHTML={{ __html: html }}
                />
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
