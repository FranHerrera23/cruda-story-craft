'use client'

import Image from 'next/image'
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

    /* F48 · gate mobile · el motor de Act2 no monta en touch. El
       CSS colapsa el stage y apila los beats + la primer imagen
       estática (art:first-child) como en reduced-motion. */
    if (
      window.matchMedia('(pointer: coarse)').matches ||
      window.matchMedia('(max-width: 767px)').matches
    ) {
      setReduced(true)
      return
    }

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

        {/* Dibujo · cinco capas sobre el papel, sin caja ni borde.
            mix-blend-mode: multiply lleva el blanco a transparente.
            F2 §2.5 · corte duro entre archivos (opacity 0/1) +
            escala continua atada al progreso del acto. El
            transform-origin lo dicta data-subject (bust · 50% 28%,
            book · 42% 45%). */}
        <div className="act2__arts" aria-hidden="true">
          {/* F49 §3.3 · `next/image` con `sizes` real.
              Displayed 721×721 en mobile · 459×459 en desktop.
              Vercel emite variantes AVIF/WebP a esos anchos en
              vez del PNG 1024×1024 (waste ~50 % en LH). El primer
              art queda `priority` (era eager en el motor), los otros
              cinco lazy. Peso y aspecto originales no cambian; el
              CSS de `.act2__art` sigue mandando (width/height 100 %,
              object-fit contain). */}
          {ACT2_ARTS.map((a, i) => (
            <Image
              key={a.name}
              className={`act2__art act2__art--${a.subject}`}
              data-art={i}
              data-subject={a.subject}
              src={`/why-now/${a.name}.png`}
              alt=""
              width={1024}
              height={1024}
              sizes="(max-width: 767px) 90vw, (max-width: 1199px) 60vw, 480px"
              quality={90}
              priority={i === 0}
            />
          ))}
        </div>

        <div className="act__beats act2__beats">
          {ACT2_BEATS.map((beat, i) => (
            /* data-beat 1-indexed · ver comentario en Act1Hero.tsx. */
            <div key={i} className="beat beat--paper" data-beat={i + 1}>
              {beat.lines.map((html, j) => (
                <div key={j} className="beat__line" data-line>
                  <span
                    className="dim"
                    dangerouslySetInnerHTML={{ __html: html }}
                  />
                  {/* F2-FIX bug 1 · ver comentario en Act1Hero.tsx.
                      LineReveals parte el .lit en .rv-line por línea
                      visual real, cada una con su clip-path y su
                      ventana temporal. */}
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
      </div>
    </div>
  )
}
