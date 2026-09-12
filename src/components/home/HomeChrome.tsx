'use client'

import { useEffect } from 'react'

/* Home · Chrome cliente.

   Setea data-reveal + data-stagger en runtime para elementos que
   no lo tienen en JSX. Cada grupo lo observa RevealScroll global,
   que agrega .on al intersectar.

   Nota: las work-cards ya declaran data-reveal="text" y data-stagger
   directamente en el JSX (motion v2 §4 — opacity:0 en el CSS
   servido, no aplicado por JS). Este componente cubre el resto:
     · .ic-row      → text · stagger secuencial (inside-cruda)
     · .essay-card  → text · stagger i%3 (grilla essays)
     · Cierre       → text · stagger secuencial (h2, p, mail) */

export default function HomeChrome() {
  useEffect(() => {
    const icRows = Array.from(
      document.querySelectorAll<HTMLElement>('.ic-row'),
    )
    icRows.forEach((el, i) => {
      el.setAttribute('data-stagger', String(i))
      el.setAttribute('data-reveal', 'text')
    })

    const essayCards = Array.from(
      document.querySelectorAll<HTMLElement>('.essay-card'),
    )
    essayCards.forEach((el, i) => {
      el.setAttribute('data-stagger', String(i % 3))
      el.setAttribute('data-reveal', 'text')
    })

    const closeTargets = Array.from(
      document.querySelectorAll<HTMLElement>(
        '.home-close h2, .home-close p, .home-close__mail',
      ),
    )
    closeTargets.forEach((el, i) => {
      el.setAttribute('data-stagger', String(i))
      el.setAttribute('data-reveal', 'text')
    })
  }, [])

  return null
}
