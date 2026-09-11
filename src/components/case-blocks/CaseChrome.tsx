'use client'

import { useEffect } from 'react'

/* Motion §3.3/§3.4 · reveals unificados.

   Los elementos candidatos se etiquetan con data-reveal:
   - "media" (figures, imágenes, slots, sangre) → clip-path center-out
   - "text"  (prose, blockquote, cells, slab, meta) → opacity + translateY(16px)

   El IntersectionObserver agrega .on cuando entran al viewport y
   los deja de observar. Los estilos de reveal viven en globals.css
   como reglas globales por atributo — sin duplicación por componente.

   Sin JS: no hay data-reveal, los elementos se ven normales. Sin FOUC.
   Sin prefers-reduced-motion: reduce lo maneja el bloque global. */

const MEDIA_SELECTORS = [
  '.b-lead > img',
  '.b-lead > .slot',
  '.b-band figure',
  '.b-pair figure',
  '.b-bleed',
  '.b-system .slot',
].join(',')

const TEXT_SELECTORS = [
  '.b-band .prose .grp',
  '.b-prose .body',
  '.b-pull blockquote',
  '.b-voice > div',
  '.b-figures > div',
  '.b-built > div',
  '.b-passages-featured-item',
  '.b-passages-archive li',
  '.b-system .cell',
  '.slab',
].join(',')

export default function CaseChrome() {
  useEffect(() => {
    const root = document.querySelector('.cb-root')
    if (!root) return

    const mediaTargets = Array.from(
      root.querySelectorAll<HTMLElement>(MEDIA_SELECTORS)
    )
    const textTargets = Array.from(
      root.querySelectorAll<HTMLElement>(TEXT_SELECTORS)
    )

    if (mediaTargets.length === 0 && textTargets.length === 0) return

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

    for (const el of mediaTargets) {
      el.setAttribute('data-reveal', 'media')
      io.observe(el)
    }
    for (const el of textTargets) {
      el.setAttribute('data-reveal', 'text')
      io.observe(el)
    }

    return () => io.disconnect()
  }, [])

  return null
}
