'use client'

import { useEffect, useRef, useState } from 'react'
import { ACT1_BEATS } from './acts-config'
import { runAct, enterAct, leaveAct } from './acts-motor'
import './acts.css'

/* Home · Act 1 · Hero
   Brief F8 (17-sep) · §1 · modelo phrase.

   Fondo #0E1113 con grilla técnica. Sticky 100svh. Dos beats
   con copy verbatim. Sin imagen, sin contador, sin etiqueta.

   Modelo phrase (F8 §1) · cada beat es una frase completa que
   entra, se sostiene y sale por opacity + translateY, atado al
   scroll. Sin `.dim`/`.lit`, sin clip-path, sin snap a palabra,
   sin LineReveals. La frase o está o no está.

   SSR · las dos frases van en el HTML servido. Sin JS el CSS
   fallback las deja en opacity 1 (todo el copy legible). Con
   JS, .js .act1 .beat arranca en opacity 0 y el motor pinta el
   primer frame en menos de un rAF. */

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
            /* data-beat 1-indexed · el motor querySelectorAll(
               '[data-beat]') encuentra el elemento y le aplica
               opacity + --ty por scroll. */
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
