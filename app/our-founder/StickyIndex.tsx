'use client'

import { useEffect } from 'react'

/* Left-side sticky index for /our-founder — anchors alineados al
   rebuild A.4. Cinco marcas: hero + las cuatro secciones del v1
   doc. Active state via IntersectionObserver sobre [data-section].
   Hidden below 1024px (CSS). */

const ITEMS = [
  { id: 'hero', label: '00  HERO' },
  { id: 'now', label: '01  NOW' },
  { id: 'before', label: '02  BEFORE' },
  { id: 'voices', label: '03  VOICES' },
  { id: 'short', label: '04  SHORT' },
] as const

export default function OurFounderStickyIndex() {
  useEffect(() => {
    const links = Array.from(
      document.querySelectorAll<HTMLElement>('[data-index-link]')
    )
    const marks = Array.from(
      document.querySelectorAll<HTMLElement>('[data-section]')
    )
    if (links.length === 0 || marks.length === 0) return

    const spy = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          const id = (entry.target as HTMLElement).dataset.section
          links.forEach((l) =>
            l.classList.toggle('is-active', l.dataset.indexLink === id)
          )
        }
      },
      { rootMargin: '-45% 0px -45% 0px' }
    )

    marks.forEach((m) => spy.observe(m))
    return () => spy.disconnect()
  }, [])

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    const target = document.getElementById(id)
    if (!target) return
    e.preventDefault()
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    history.replaceState(null, '', `#${id}`)
  }

  return (
    <nav className="of-sticky-idx" aria-label="Page sections">
      <ol>
        {ITEMS.map((i) => (
          <li key={i.id}>
            <a
              href={`#${i.id}`}
              data-index-link={i.id}
              onClick={(e) => handleClick(e, i.id)}
            >
              {i.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
