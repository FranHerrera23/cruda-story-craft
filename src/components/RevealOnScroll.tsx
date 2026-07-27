'use client'

import { useEffect } from 'react'

/* Site-wide reveal (parche P0.1 supersedes earlier data-reveal spec).

   Rule:
     .reveal { opacity: 0; transform: translateY(24px);
               transition: opacity 700ms var(--ease),
                           transform 700ms var(--ease);
               transition-delay: var(--reveal-delay, 0ms); }
     .reveal.is-visible { opacity: 1; transform: none; }

   Stagger only inside .reveal-group — sibling index × 80ms.
   Once-only: unobserve after fire. Nothing re-hides on scroll-up.

   Guardrails from the patch:
   - threshold: 0 (rely on rootMargin). 0.15 fails on elements taller
     than the viewport, which is what left /thinking blank.
   - 3 s safety timeout: any .reveal still not visible after 3 s gets
     is-visible stamped by force. Content never depends on an observer.
   - noscript failsafe lives in root layout, covers both selectors.

   prefers-reduced-motion: CSS paints the resting state; we still stamp
   is-visible so nothing gets stuck. */

const STAGGER_MS = 80
const SAFETY_TIMEOUT_MS = 3000

export default function RevealOnScroll() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>('.reveal'))
    if (nodes.length === 0) return

    const reveal = (el: HTMLElement) => el.classList.add('is-visible')

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      nodes.forEach(reveal)
      return
    }

    // Per-element --reveal-delay inside a .reveal-group (index × 80ms).
    nodes.forEach((el) => {
      const group = el.closest<HTMLElement>('.reveal-group')
      if (!group) return
      const siblings = Array.from(group.querySelectorAll<HTMLElement>('.reveal'))
      const i = siblings.indexOf(el)
      if (i > 0) el.style.setProperty('--reveal-delay', `${i * STAGGER_MS}ms`)
    })

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          reveal(entry.target as HTMLElement)
          io.unobserve(entry.target)
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0 }
    )
    nodes.forEach((el) => io.observe(el))

    // Safety net: whatever is still hidden after 3 s gets forced visible.
    // Content must never depend on an observer firing.
    const safety = window.setTimeout(() => {
      nodes.forEach((el) => {
        if (!el.classList.contains('is-visible')) reveal(el)
      })
    }, SAFETY_TIMEOUT_MS)

    return () => {
      io.disconnect()
      window.clearTimeout(safety)
    }
  }, [])

  return null
}
