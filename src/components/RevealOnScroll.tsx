'use client'

import { useEffect } from 'react'

/* Site-wide reveal — hardened against anchor-scroll invisibility.

   Contract with the CSS:
   - .reveal is visible by default (opacity 1, transform none).
   - Only when <html> carries .js-ready AND user is not in
     reduced-motion does the CSS hide any .reveal that lacks
     .is-visible.

   Ordering that this hook guarantees before .js-ready is added:
   1. For every .reveal already in view (rect.top < innerHeight),
      stamp .is-visible up front. That way the CSS gate never hides
      an above-fold block — including blocks scrolled to via a URL
      fragment like /our-founder#proof.
   2. Only then flip .js-ready and set up the observer for blocks
      below the fold.

   Safety timeout: re-query the DOM for any .reveal still not
   .is-visible after 3 s and stamp it. This catches late-mounted
   .reveal elements the observer never saw.

   Under reduced-motion, the CSS gate is inert; we still stamp
   .js-ready and .is-visible so downstream selectors are consistent. */

const STAGGER_MS = 80
const SAFETY_TIMEOUT_MS = 3000

function isInViewport(el: HTMLElement): boolean {
  const rect = el.getBoundingClientRect()
  // Any part visible or already scrolled past. Anything above the
  // current viewport bottom counts as "already there".
  return rect.top < window.innerHeight
}

export default function RevealOnScroll() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>('.reveal'))

    // Step 1 — mark everything already in view visible BEFORE turning
    // on the CSS hide gate. Prevents anchor-scrolled blocks from ever
    // painting invisible.
    nodes.forEach((el) => {
      if (isInViewport(el)) el.classList.add('is-visible')
    })

    // Step 2 — flip the CSS gate.
    document.documentElement.classList.add('js-ready')

    // Under reduced-motion, the CSS never hides — sweep any remaining
    // .reveal to visible and stop.
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      nodes.forEach((el) => el.classList.add('is-visible'))
      return
    }

    if (nodes.length === 0) return

    // Per-element --reveal-delay inside a .reveal-group.
    nodes.forEach((el) => {
      const group = el.closest<HTMLElement>('.reveal-group')
      if (!group) return
      const siblings = Array.from(group.querySelectorAll<HTMLElement>('.reveal'))
      const i = siblings.indexOf(el)
      if (i > 0) el.style.setProperty('--reveal-delay', `${i * STAGGER_MS}ms`)
    })

    // Observer for blocks below the fold (or that came into being late).
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add('is-visible')
          io.unobserve(entry.target)
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0 }
    )
    // Only observe nodes that haven't already been marked visible.
    nodes.forEach((el) => {
      if (!el.classList.contains('is-visible')) io.observe(el)
    })

    // Safety timeout — re-query at fire time so late-mounted .reveal
    // elements the observer never saw still land visible.
    const safety = window.setTimeout(() => {
      document
        .querySelectorAll<HTMLElement>('.reveal:not(.is-visible)')
        .forEach((el) => el.classList.add('is-visible'))
    }, SAFETY_TIMEOUT_MS)

    return () => {
      io.disconnect()
      window.clearTimeout(safety)
    }
  }, [])

  return null
}
