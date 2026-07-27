'use client'

import { useEffect } from 'react'

/* Reading progress bar (brief part 8).
   Fixed-top 2px --red. Ratio driven by scaleX with transform-origin: left
   so it never triggers layout on scroll. transform: scaleX() is
   compositor-only — width would force paint every frame.

   Ratio is scoped to <article>: it starts when the article's top hits
   the viewport top and reaches 1 when its bottom clears the viewport.

   Still fires under prefers-reduced-motion — this is information, not
   decoration. */

export default function EssayProgressBar() {
  useEffect(() => {
    const bar = document.getElementById('essay-progress-bar')
    if (!bar) return
    const article = document.querySelector('article')
    if (!article) return

    const tick = () => {
      const rect = (article as HTMLElement)
      const start = rect.offsetTop
      const total = rect.offsetHeight - window.innerHeight
      const pct =
        total > 0
          ? Math.min(1, Math.max(0, (window.scrollY - start) / total))
          : 0
      bar.style.transform = `scaleX(${pct})`
    }
    document.addEventListener('scroll', tick, { passive: true })
    window.addEventListener('resize', tick)
    tick()
    return () => {
      document.removeEventListener('scroll', tick)
      window.removeEventListener('resize', tick)
    }
  }, [])

  return <div className="essay-bar" id="essay-progress-bar" aria-hidden="true" />
}
