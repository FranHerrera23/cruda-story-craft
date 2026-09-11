'use client'

import { useEffect } from 'react'

/* Home · Chrome cliente.
   Motion §3.3 (media) + §3.4 (text) + §4 (stagger).

   En mount se etiquetan cuatro grupos y se registran contra un
   solo IntersectionObserver:

   1. `.work-card__figure` → data-reveal="media" (clip-path center-out).
      Stagger cíclico por index % 3 — patrón de grilla de nueve
      cards, ciclo por fila.

   2. `.ic-row` → data-reveal="text" (opacity + translateY 16).
      Stagger secuencial 0/1/2 — las tres filas de inside-cruda
      entran una detrás de otra.

   3. `.essay-card` → data-reveal="text".
      Stagger cíclico por index % 3 — misma lógica que la grilla
      de work cards, ciclo por fila.

   4. Cierre — h2, párrafo y mail bajo `.home-close`.
      data-reveal="text" con stagger secuencial 0/1/2.

   Los estilos viven en globals.css como reglas por atributo.
   Sin JS: no hay data-reveal, todo se ve normal.
   Reduce lo maneja el bloque global de globals.css (§6). */

export default function HomeChrome() {
  useEffect(() => {
    const targets: HTMLElement[] = []

    const figures = Array.from(
      document.querySelectorAll<HTMLElement>('.work-card__figure')
    )
    figures.forEach((el, i) => {
      el.setAttribute('data-stagger', String(i % 3))
      el.setAttribute('data-reveal', 'media')
    })
    targets.push(...figures)

    const icRows = Array.from(
      document.querySelectorAll<HTMLElement>('.ic-row')
    )
    icRows.forEach((el, i) => {
      el.setAttribute('data-stagger', String(i))
      el.setAttribute('data-reveal', 'text')
    })
    targets.push(...icRows)

    const essayCards = Array.from(
      document.querySelectorAll<HTMLElement>('.essay-card')
    )
    essayCards.forEach((el, i) => {
      el.setAttribute('data-stagger', String(i % 3))
      el.setAttribute('data-reveal', 'text')
    })
    targets.push(...essayCards)

    const closeTargets = Array.from(
      document.querySelectorAll<HTMLElement>(
        '.home-close h2, .home-close p, .home-close__mail'
      )
    )
    closeTargets.forEach((el, i) => {
      el.setAttribute('data-stagger', String(i))
      el.setAttribute('data-reveal', 'text')
    })
    targets.push(...closeTargets)

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
