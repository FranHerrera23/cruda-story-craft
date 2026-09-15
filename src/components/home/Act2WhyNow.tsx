'use client'

import { useEffect, useRef, useState } from 'react'
import { ACT2_BEATS, ACT2_ARTS } from './acts-config'
import { runAct, enterAct, leaveAct } from './acts-motor'
import './acts.css'

/* Home · Act 2 · Why Now
   Brief 07 definitivo (15-sep) · §3.

   Fondo #F2F2F0 (papel · no --paper puro, es un blanco cálido)
   con grilla técnica al 3.5%. Sticky 100svh. Cinco beats con
   copy verbatim del §5.

   Dibujo · seis PNG en public/why-now/ apilados en la columna
   izquierda (x: 8vw → 42vw, ratio 3:4). Sin caja, sin borde, sin
   placa. mix-blend-mode: multiply hace desaparecer el blanco del
   PNG contra el papel y deja solo la línea (§6 del brief).

   Contador · "01 /05" a "05 /05" arriba a la izquierda. */

export default function Act2WhyNow() {
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
      beats: ACT2_BEATS,
      arts: ACT2_ARTS,
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
      id="act2"
      className={`act act2${reduced ? ' act--reduced' : ''}`}
      ref={trackRef}
    >
      <div className="act__stage act2__stage">
        <div className="act__grid act__grid--paper" aria-hidden="true" />

        <p className="act__counter" aria-hidden="true" data-counter>
          01 /{String(ACT2_BEATS.length).padStart(2, '0')}
        </p>
        <p className="act__label" aria-hidden="true">
          Story
        </p>

        {/* Dibujo · seis capas sobre el papel, sin caja ni borde.
            mix-blend-mode: multiply lleva el blanco a transparente. */}
        <div className="act2__arts" aria-hidden="true">
          {ACT2_ARTS.map((a, i) => (
            <img
              key={a.name}
              className="act2__art"
              data-art={i}
              src={`/why-now/${a.name}.png`}
              alt=""
              loading={i === 0 ? 'eager' : 'lazy'}
              decoding="async"
            />
          ))}
        </div>

        <div className="act__beats act2__beats">
          {ACT2_BEATS.map((beat, i) => (
            <div key={i} className="beat beat--paper" data-beat={i}>
              {beat.lines.map((html, j) => (
                <div key={j} className="beat__line" data-line>
                  <span
                    className="dim"
                    dangerouslySetInnerHTML={{ __html: html }}
                  />
                  <span
                    className="lit"
                    aria-hidden="true"
                    dangerouslySetInnerHTML={{ __html: html }}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
