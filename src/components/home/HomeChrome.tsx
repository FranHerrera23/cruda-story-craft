'use client'

import { useEffect } from 'react'

/* Home · Chrome cliente.
   Motion §3.3 · reveal de media unificado.

   En mount se etiquetan las figures de la grilla con
   `data-reveal="media"` y se observan. Al entrar al viewport reciben
   `.on` — la máscara clip-path se abre desde el centro (regla del
   motion system: reveals de media van del centro hacia afuera, no
   de arriba hacia abajo).

   Stagger de tres via data-stagger: los índices 1, 4, 7... reciben
   [data-stagger="1"] con 75ms de delay; 2, 5, 8... reciben
   [data-stagger="2"] con 150ms. Los múltiplos de 3 (0, 3, 6) van sin
   delay explícito (data-stagger="0").

   Sin JS: no hay data-reveal, las figures se ven normales.
   Reduce lo maneja el bloque global de globals.css (§6). */

export default function HomeChrome() {
  useEffect(() => {
    const figures = Array.from(
      document.querySelectorAll<HTMLElement>('.work-card__figure')
    )
    if (figures.length === 0) return

    figures.forEach((el, i) => {
      const mod = i % 3
      el.setAttribute('data-stagger', String(mod))
      el.setAttribute('data-reveal', 'media')
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
