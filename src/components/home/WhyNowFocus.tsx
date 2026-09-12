'use client'

import { useEffect } from 'react'

/* Home · why-now · foco por opacidad — brief §6.2.

   Marca con .is-focus el párrafo más cercano al centro del viewport
   entre los cuatro de .why-now__body. Usa IntersectionObserver con
   root margin -45%/-45% que activa solo dentro del 10% central del
   viewport — cuando un párrafo entra ahí, es el "en foco".

   Sin scroll hijacking. El scroll sigue nativo. Este JS solo
   escucha; no interviene.

   Bajo prefers-reduced-motion no se instancia el observer y todos
   los párrafos quedan en opacidad plena (fallback CSS).

   Se desmonta con la sección. */

export default function WhyNowFocus() {
  useEffect(() => {
    const reduce = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (reduce) return

    const paragraphs = Array.from(
      document.querySelectorAll<HTMLElement>('.why-now__body p'),
    )
    if (paragraphs.length === 0) return

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-focus')
          } else {
            entry.target.classList.remove('is-focus')
          }
        }
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
    )

    paragraphs.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return null
}
