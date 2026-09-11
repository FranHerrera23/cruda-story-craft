'use client'

import { useEffect } from 'react'

/* Home · Chrome cliente.
   Brief 11-sep §5 — capa de interacción de la home.

   Nada visible se renderea acá. En mount se:
     1. Aplica el clip-path reveal a las figuras de la grilla via
        IntersectionObserver. Cuando la figura entra al viewport,
        gana `.on` y la máscara se abre de arriba hacia abajo. Sin
        JS, la CSS de default deja las figuras visibles.
     2. Stagger de tres — los indices 1, 4, 7... reciben `.d1` con
        100ms de delay; 2, 5, 8... reciben `.d2` con 200ms. Los
        múltiplos de 3 (0, 3, 6) van sin delay. Mismo patrón que el
        observer de CaseChrome pero scoped a la grilla de home.

   La nav se maneja sola (ver Nav.tsx `ready` state). */

export default function HomeChrome() {
  useEffect(() => {
    const figures = Array.from(
      document.querySelectorAll<HTMLElement>('.work-card__figure')
    )
    if (figures.length === 0) return

    /* Aplica clases de stagger ANTES de observar — así al ganar
       `.on` la delay ya está declarada. */
    figures.forEach((el, i) => {
      const mod = i % 3
      if (mod === 1) el.classList.add('d1')
      else if (mod === 2) el.classList.add('d2')
      /* rv: gate del reveal. Sin esta clase, la figura muestra normal
         (comportamiento sin JS). Con la clase, arranca cerrada y el
         observer la abre en el intersect. */
      el.classList.add('rv')
    })

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add('on')
          io.unobserve(entry.target)
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.06 }
    )

    figures.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return null
}
