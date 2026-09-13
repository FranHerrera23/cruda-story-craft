'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/* Home · why-now · foco atado al scroll — motion v3 §5.

   Antes: IntersectionObserver. El foco cambiaba cuando un párrafo
   entraba al 10% central del viewport. Se veía bien pero era por
   presencia, no por scroll. Si parabas a mitad, se quedaba con lo
   último que había entrado — no en el punto exacto donde estabas.

   Ahora: ScrollTrigger con scrub. El foco es una función de la
   posición del scroll dentro de la sección, no de un evento de
   intersección. Consecuencias que son la fricción:
     · Si scrolleás para atrás, el foco vuelve.
     · Si parás, se queda donde estás.
     · Si acelerás, el foco te acompaña con 1s de retraso (scrub:1).

   El rango de scrub es "top top → bottom bottom" — desde que el
   top de la sección toca el top del viewport hasta que el bottom
   toca el bottom del viewport. Dentro de ese rango la progresión
   0→1 se parte en cuatro tramos iguales (uno por párrafo).

   ScrollTrigger.update ya está atado al 'scroll' de Lenis en
   SmoothScroll (§4), así que el scrub recibe la posición correcta
   incluso con el smooth scroll activo.

   Bajo prefers-reduced-motion no se registra ningún trigger; el
   fallback CSS deja todos los párrafos en opacidad plena. */

export default function WhyNowFocus() {
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const section = document.querySelector<HTMLElement>('.why-now')
    if (!section) return
    const paragraphs = Array.from(
      section.querySelectorAll<HTMLElement>('.why-now__body p'),
    )
    if (paragraphs.length === 0) return

    const trigger = ScrollTrigger.create({
      trigger: section,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1,
      onUpdate: (self) => {
        const i = Math.min(
          paragraphs.length - 1,
          Math.floor(self.progress * paragraphs.length),
        )
        paragraphs.forEach((p, n) => p.classList.toggle('is-focus', n === i))
      },
    })

    return () => {
      trigger.kill()
      paragraphs.forEach((p) => p.classList.remove('is-focus'))
    }
  }, [])

  return null
}
