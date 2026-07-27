'use client'

import { useEffect } from 'react'

/* Brief part 8, single script for the whole site.

   Rule:
     [data-reveal] { opacity: 0; transform: translateY(24px);
                     transition: opacity 700ms var(--ease),
                                 transform 700ms var(--ease);
                     transition-delay: var(--reveal-delay, 0ms); }
     [data-reveal].is-in { opacity: 1; transform: none; }

   Stagger only inside [data-reveal-group] — sibling index × 80ms.
   Once-only: unobserve after fire. Nothing re-hides on scroll-up.

   prefers-reduced-motion is handled by the CSS (transition: none) —
   we still stamp .is-in so no element gets stuck invisible. */

const STAGGER_MS = 80

export default function RevealOnScroll() {
  useEffect(() => {
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>('[data-reveal]')
    )
    if (nodes.length === 0) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      nodes.forEach((el) => el.classList.add('is-in'))
      return
    }

    // Compute per-element --reveal-delay from position inside a group.
    nodes.forEach((el) => {
      const group = el.closest<HTMLElement>('[data-reveal-group]')
      if (!group) return
      const siblings = Array.from(
        group.querySelectorAll<HTMLElement>('[data-reveal]')
      )
      const i = siblings.indexOf(el)
      if (i > 0) el.style.setProperty('--reveal-delay', `${i * STAGGER_MS}ms`)
    })

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add('is-in')
          io.unobserve(entry.target)
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.15 }
    )

    nodes.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return null
}
