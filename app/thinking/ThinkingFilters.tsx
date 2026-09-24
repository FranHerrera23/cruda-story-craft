'use client'

import { useEffect, useState } from 'react'

/* /thinking · filtros · F36 · library.

   Cambios vs F14b.1:
   · LANGUAGE primero · es el filtro que más se usa desde un DM
     de Instagram.
   · Type ya no incluye "Case studies" (los casos viven en Work).
   · Opciones de Type: All · Articles · Podcasts (si hay).
   · Sin animación de opacidad · las filas se ocultan/mostran con
     hidden (todo lo demás queda en --ink). */

type Type = 'all' | 'article' | 'podcast'
type Lang = 'all' | 'en' | 'es'

const TYPE_OPTS: Array<{ v: Type; label: string }> = [
  { v: 'all', label: 'All' },
  { v: 'article', label: 'Articles' },
  { v: 'podcast', label: 'Podcasts' },
]
const LANG_OPTS: Array<{ v: Lang; label: string }> = [
  { v: 'all', label: 'All' },
  { v: 'en', label: 'English' },
  { v: 'es', label: 'Español' },
]

export default function ThinkingFilters({
  hasPodcasts,
}: {
  hasPodcasts: boolean
}) {
  const [type, setType] = useState<Type>('all')
  const [lang, setLang] = useState<Lang>('all')
  const [total, setTotal] = useState<number>(0)

  useEffect(() => {
    const rows = Array.from(
      document.querySelectorAll<HTMLElement>('.thinking-row'),
    )
    let n = 0
    rows.forEach(row => {
      const okType = type === 'all' || row.dataset.kind === type
      const okLang = lang === 'all' || row.dataset.lang === lang
      const ok = okType && okLang
      row.hidden = !ok
      if (ok) n++
    })
    setTotal(n)
    const empty = document.querySelector<HTMLElement>('[data-empty]')
    if (empty) empty.hidden = n > 0
  }, [type, lang])

  return (
    <div
      className="thinking-filters"
      role="group"
      aria-label="Filter thinking"
    >
      {/* F36 · LANGUAGE primero. */}
      <div className="fgroup">
        <span className="fgroup__l">Language</span>
        {LANG_OPTS.map(opt => (
          <button
            key={opt.v}
            type="button"
            className="f"
            aria-pressed={lang === opt.v}
            onClick={() => setLang(opt.v)}
          >
            {opt.label}
          </button>
        ))}
      </div>
      <div className="fgroup">
        <span className="fgroup__l">Type</span>
        {TYPE_OPTS.map(opt => {
          if (opt.v === 'podcast' && !hasPodcasts) return null
          return (
            <button
              key={opt.v}
              type="button"
              className="f"
              aria-pressed={type === opt.v}
              onClick={() => setType(opt.v)}
            >
              {opt.label}
            </button>
          )
        })}
      </div>
      <span className="count" aria-live="polite">
        {total} {total === 1 ? 'piece' : 'pieces'}
      </span>
    </div>
  )
}
