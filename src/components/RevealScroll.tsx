'use client'

import { useEffect } from 'react'

/* Reveal global del sistema de movimiento — motion §3.3 + §3.4.

   Monta un solo IntersectionObserver que busca cualquier elemento
   con [data-reveal]:not(.on) en el DOM y le agrega .on al entrar
   al viewport. Reemplaza la lógica per-page repetida
   (HomeChrome/CaseChrome los siguen usando para SETEAR data-reveal
   en runtime, pero acá el observer es único).

   El brief unificado §12 pide reveals en home, /our-founder,
   /approach, /essays y /contact — este componente es lo que hace
   que las cuatro interiores hereden el sistema sin tocar cada
   una con su propio observer.

   Corre en el layout root para que aplique a cualquier página. */

export default function RevealScroll() {
  useEffect(() => {
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>('[data-reveal]:not(.on)')
    )
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
