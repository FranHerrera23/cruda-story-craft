'use client'

import { useEffect } from 'react'

/* Home · Chrome cliente.
   Motion §3.3 (media) + §3.4 (text) + §4 (stagger).

   En mount se etiquetan dos grupos de elementos:

   1. `.work-card__figure` → data-reveal="media", clip-path center-out.
      Stagger cíclico por index % 3 — patrón de grilla de nueve
      cards, ciclo por fila.

   2. `.ic-row` → data-reveal="text", opacity + translateY 16.
      Stagger secuencial 0/1/2 — las tres filas de inside-cruda
      entran una detrás de otra al aparecer la sección.

   Los estilos viven en globals.css como reglas por atributo.
   Sin JS: no hay data-reveal, los elementos se ven normales.
   Reduce lo maneja el bloque global de globals.css (§6). */

export default function HomeChrome() {
  useEffect(() => {
    const figures = Array.from(
      document.querySelectorAll<HTMLElement>('.work-card__figure')
    )
    figures.forEach((el, i) => {
      el.setAttribute('data-stagger', String(i % 3))
      el.setAttribute('data-reveal', 'media')
    })

    const icRows = Array.from(
      document.querySelectorAll<HTMLElement>('.ic-row')
    )
    icRows.forEach((el, i) => {
      el.setAttribute('data-stagger', String(i))
      el.setAttribute('data-reveal', 'text')
    })

    const targets: HTMLElement[] = [...figures, ...icRows]
    if (targets.length === 0) return

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

    targets.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return null
}
