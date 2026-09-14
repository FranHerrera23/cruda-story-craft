'use client'

import { useEffect } from 'react'

/* Home · Chrome cliente.

   Setea data-reveal + data-stagger en runtime para elementos que
   no lo tienen en JSX. Cada grupo lo observa RevealScroll global,
   que agrega .on al intersectar.

   Nota: las work-cards ya declaran data-reveal="text" y data-stagger
   directamente en el JSX (motion v2 §4 — opacity:0 en el CSS
   servido, no aplicado por JS). Este componente cubre:
     · .essay-card  → text · stagger i%3 (grilla essays)

   Brief 04 (14-sep) — inside-cruda retirado. El bloque .ic-row
   ya no existe en la home; el chrome de .ic-row se retiró con él.

   Motion v3 §2 (14-sep) · el cierre migró a data-reveal-seq en JSX
   (HomeClose.tsx). Este componente ya no lo toca — antes lo
   sobrescribía y pisaba el `data-reveal="lines"` del H2. */

export default function HomeChrome() {
  useEffect(() => {
    const essayCards = Array.from(
      document.querySelectorAll<HTMLElement>('.essay-card'),
    )
    essayCards.forEach((el, i) => {
      el.setAttribute('data-stagger', String(i % 3))
      el.setAttribute('data-reveal', 'text')
    })
  }, [])

  return null
}
