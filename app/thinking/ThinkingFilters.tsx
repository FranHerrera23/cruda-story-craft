'use client'

import { useEffect, useState } from 'react'

/* /thinking · filtros · F14b.1 · prototipo thinking-v1 §02.
   Type × Language. Cero back-end · sólo pone hidden en los items
   que no cumplen. Cero cajas con borde+radio (§sistema).

   Los filtros se ocultan cuando no hay piezas de ese valor. */

type Type = 'all' | 'article' | 'case' | 'podcast'
type Lang = 'all' | 'en' | 'es'

const TYPE_OPTS: Array<{ v: Type; label: string }> = [
  { v: 'all', label: 'All' },
  { v: 'article', label: 'Articles' },
  { v: 'case', label: 'Case studies' },
  { v: 'podcast', label: 'Podcasts' },
]
const LANG_OPTS: Array<{ v: Lang; label: string }> = [
  { v: 'all', label: 'All' },
  { v: 'en', label: 'English' },
  { v: 'es', label: 'Español' },
]

export default function ThinkingFilters({
  hasCases,
  hasPodcasts,
}: {
  hasCases: boolean
  hasPodcasts: boolean
}) {
  const [type, setType] = useState<Type>('all')
  const [lang, setLang] = useState<Lang>('all')
  const [total, setTotal] = useState<number>(0)

  useEffect(() => {
    const secs = Array.from(
      document.querySelectorAll<HTMLElement>('[data-sec]'),
    )
    let sum = 0
    secs.forEach(sec => {
      const secType = sec.dataset.sec as Type
      const showSec = type === 'all' || secType === type
      let n = 0
      sec.querySelectorAll<HTMLElement>('[data-lang]').forEach(it => {
        const okLang = lang === 'all' || it.dataset.lang === lang
        const ok = showSec && okLang
        it.hidden = !ok
        if (ok) n++
      })
      sec.hidden = n === 0
      const counter = sec.querySelector<HTMLElement>('[data-n]')
      if (counter) counter.textContent = n + (n === 1 ? ' piece' : ' pieces')
      sum += n
    })
    setTotal(sum)
    const empty = document.querySelector<HTMLElement>('[data-empty]')
    if (empty) empty.hidden = sum > 0
  }, [type, lang])

  return (
    <div
      className="thinking-filters"
      role="group"
      aria-label="Filter thinking"
    >
      <div className="fgroup">
        <span className="fgroup__l">Type</span>
        {TYPE_OPTS.map(opt => {
          const hide =
            (opt.v === 'case' && !hasCases) ||
            (opt.v === 'podcast' && !hasPodcasts)
          if (hide) return null
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
      <span className="count" aria-live="polite">
        {total} {total === 1 ? 'piece' : 'pieces'}
      </span>
    </div>
  )
}
