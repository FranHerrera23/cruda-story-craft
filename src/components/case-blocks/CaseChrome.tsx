'use client'

import { useEffect } from 'react'

/* §5.4 del spec (§5 recortado a 2 comportamientos) — entrada de
   contenido. En mount, se agrega la clase `.rv` a los elementos
   candidatos de reveal y se los observa; cuando entran al viewport,
   se les agrega `.on` y salen del observer. Sin JS: los elementos
   NO llevan .rv, se muestran normal. Sin FOUC.

   La lista de selectores es la combinación de las tres referencias
   (INOUT, Girish, MTC). Los que no matchean en una composición
   dada simplemente son no-op.

   Respeta prefers-reduced-motion via CSS — si está reduce, el
   .rv tiene opacity 1 y transform none (definido en case-blocks.css),
   por lo que la clase no oculta nada. */

const REVEAL_SELECTORS = [
  '.b-lead > .slot',
  '.b-lead > img',
  '.b-band figure',
  '.b-band .prose .grp',
  '.b-prose .body',
  '.b-pull blockquote',
  '.b-pair figure',
  '.b-bleed',
  '.b-voice > div',
  '.b-figures > div',
  '.b-built > div',
  '.b-passages-featured-item',
  '.b-passages-archive li',
  '.b-system .cell',
  '.b-system .slot',
  '.slab',
].join(',')

export default function CaseChrome() {
  useEffect(() => {
    const root = document.querySelector('.cb-root')
    if (!root) return
    const targets = Array.from(
      root.querySelectorAll<HTMLElement>(REVEAL_SELECTORS)
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

    for (const el of targets) {
      el.classList.add('rv')
      io.observe(el)
    }

    return () => io.disconnect()
  }, [])

  return null
}
