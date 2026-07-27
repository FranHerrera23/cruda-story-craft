'use client'

import { useEffect } from 'react'

/* Site-wide reveal (brief part 8). Any element with class .reveal enters
   the viewport, gets .is-visible, and lifts. Once only. Respects
   prefers-reduced-motion via the CSS gate — this hook still stamps the
   class so the resting state (opacity 1, transform none) is applied. */

export default function RevealOnScroll() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal'))
    if (els.length === 0) return

    // prefers-reduced-motion: still mark visible so no element gets stuck
    // hidden; the CSS gate at @media (prefers-reduced-motion: no-preference)
    // means the transition itself is inert.
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      els.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            io.unobserve(entry.target)
          }
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.08 }
    )

    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return null
}
