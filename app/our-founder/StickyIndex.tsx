'use client'

import { useEffect, useState } from 'react'

/* Left-side sticky index for /our-founder. Five anchors, mono 11px,
   active in --red. Hidden below 1024px (CSS handles the hide). */

const ITEMS = [
  { id: 'belief', label: '01  BELIEF' },
  { id: 'method', label: '02  METHOD' },
  { id: 'at-a-glance', label: '03  AT A GLANCE' },
  { id: 'proof', label: '04  PROOF' },
  { id: 'contact', label: '05  CONTACT' },
] as const

export default function OurFounderStickyIndex() {
  const [active, setActive] = useState<string>('belief')

  useEffect(() => {
    const nodes = ITEMS.map((i) => document.getElementById(i.id)).filter(
      (n): n is HTMLElement => !!n
    )
    if (nodes.length === 0) return

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible.length > 0) setActive(visible[0].target.id)
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    )
    nodes.forEach((n) => io.observe(n))
    return () => io.disconnect()
  }, [])

  return (
    <nav className="of-sticky-idx" aria-label="Page sections">
      <ol>
        {ITEMS.map((i) => (
          <li key={i.id}>
            <a
              href={`#${i.id}`}
              className={active === i.id ? 'active' : ''}
              aria-current={active === i.id ? 'true' : undefined}
            >
              {i.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
