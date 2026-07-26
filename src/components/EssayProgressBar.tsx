'use client'

import { useEffect } from 'react'

/* Reading progress bar. Fixed-top red 2px. Respects prefers-reduced-motion. */
export default function EssayProgressBar() {
  useEffect(() => {
    const bar = document.getElementById('essay-progress-bar')
    if (!bar) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const tick = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight
      const p = h > 0 ? (window.scrollY / h) * 100 : 0
      bar.style.setProperty('--p', `${p}%`)
    }
    window.addEventListener('scroll', tick, { passive: true })
    window.addEventListener('resize', tick)
    tick()
    return () => {
      window.removeEventListener('scroll', tick)
      window.removeEventListener('resize', tick)
    }
  }, [])

  return <div className="essay-bar" id="essay-progress-bar" />
}
