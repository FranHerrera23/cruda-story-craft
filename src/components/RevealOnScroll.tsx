'use client'

import { useEffect } from 'react'

/* Site-wide reveal — brief v2 Parte 2.1.

   Contract with the CSS:
   - Default state on .reveal is visible (opacity 1, transform none).
   - Only when <html> carries .js-ready AND user is not in
     reduced-motion does the CSS hide any .reveal that lacks
     .is-visible. If JS fails, .js-ready never lands and everything
     stays visible. That is the failsafe.

   What this hook does, in order:
   1. Stamp .js-ready on <html>. This is the ONLY thing that turns the
      hidden-then-fade behavior on.
   2. For each .reveal element inside a .reveal-group, compute
      --reveal-delay = siblingIndex * 80ms.
   3. Observe every .reveal. threshold 0 + rootMargin -12% bottom.
      Unobserve after fire.
   4. Safety timeout at 3 s: re-query the document for every .reveal
      that is still not .is-visible and stamp it. Re-query so that any
      .reveal added after mount is not missed.

   Reduced-motion: nothing to do — the CSS gate already skips the
   hidden state, so .reveal is already visible. We still stamp
   .js-ready so downstream selectors that key off it behave
   consistently. */

const STAGGER_MS = 80
const SAFETY_TIMEOUT_MS = 3000

export default function RevealOnScroll() {
  useEffect(() => {
    // 1. Flag JS as ready. This is the switch that turns on the
    // hidden-until-observed behavior via the CSS gate.
    document.documentElement.classList.add('js-ready')

    // Under reduced-motion the CSS never hides, so we can stop here.
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return

    const nodes = Array.from(document.querySelectorAll<HTMLElement>('.reveal'))
    if (nodes.length === 0) return

    // 2. Per-element stagger inside .reveal-group.
    nodes.forEach((el) => {
      const group = el.closest<HTMLElement>('.reveal-group')
      if (!group) return
      const siblings = Array.from(group.querySelectorAll<HTMLElement>('.reveal'))
      const i = siblings.indexOf(el)
      if (i > 0) el.style.setProperty('--reveal-delay', `${i * STAGGER_MS}ms`)
    })

    // 3. Observe.
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
    nodes.forEach((el) => io.observe(el))

    // 4. Safety timeout — re-query at fire time so late-mounted
    // .reveal elements get swept in too.
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
