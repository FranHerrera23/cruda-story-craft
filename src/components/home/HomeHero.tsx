'use client'

import { useEffect, useState } from 'react'
import './home-hero.css'

/* Home · Hero — design system unificado §5.

   Peso 500 (no 700), clamp(30, 3.6vw, 54) — el hero deja de ser
   un cartel y vuelve a leerse como una afirmación. Grot, no serif
   (la regla de §2: serif solo en títulos ≤6 palabras; el hero
   tiene 20 palabras). max-width 26ch.

   Fix del bug de fondo (§5.1): el h1 renderea DOS spans:
     · .ghost — la copy completa, visibility: hidden. Reserva el
       alto final desde el primer frame, sin importar cuánto haya
       tipeado el usuario todavía.
     · .typed — posición absoluta sobre el ghost, con lo que se
       está escribiendo + el cursor.

   El HTML servido lleva la copy completa en ghost + typed vacío,
   así que sin JS el visible queda invisible pero el ghost pinta.
   Al hidratar, JS reemplaza ghost/typed con el ciclo del tipeo.

   aria-label del h1 tiene la copy completa; ambos spans van con
   aria-hidden. Screen readers leen el aria-label.

   Reduced motion: se saltea el tipeo y typed queda con la copy
   completa desde el mount — el alto es el mismo (ghost lo reserva),
   solo cambia si hay animación o no. */

const FULL =
  'CRUDA builds the narrative that founder-led companies need at the point where what they built stopped explaining itself.'
const SPEED = 22
const START_DELAY = 300

export default function HomeHero() {
  const [typed, setTyped] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setTyped(FULL)
      setDone(true)
      return
    }

    let i = 0
    let cancelled = false
    let timeoutId: number | undefined

    const tick = () => {
      if (cancelled) return
      if (i >= FULL.length) {
        setDone(true)
        return
      }
      i++
      setTyped(FULL.slice(0, i))
      timeoutId = window.setTimeout(tick, SPEED)
    }

    const startId = window.setTimeout(tick, START_DELAY)

    return () => {
      cancelled = true
      window.clearTimeout(startId)
      if (timeoutId !== undefined) window.clearTimeout(timeoutId)
    }
  }, [])

  return (
    <section className="home-hero">
      <h1 className="home-hero__h1" aria-label={FULL}>
        <span className="ghost" aria-hidden="true">{FULL}</span>
        <span className="typed" aria-hidden="true">
          {typed}
          {!done && <i className="cursor" />}
        </span>
      </h1>
    </section>
  )
}
