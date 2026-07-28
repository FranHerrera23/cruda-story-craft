'use client'

import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useEffect, useMemo, useState } from 'react'
import {
  type Resource,
  type ResourceCompany,
  type ResourceKind,
  companyLabel,
  countByCompany,
  countByKind,
  kindLabel,
} from '@/content/resources'

/* Brief v6 T1 · T2 · T3.

   - Query param sync (T3): reads ?format= and ?company= at mount and
     mirrors state to URL on every chip change via router.replace(scroll:
     false). Deep-linkable, shareable, indexable per format.

   - Filter logic (T1): explicit two-step filter, no closure edge cases
     that could survive stale state. Every render recomputes from
     `items` — never mutates the source array.

   - Cards baseline visible (T1 guard): no .reveal, no .animate-*, no
     observer. If JS ever fails to hydrate, chips lose interactivity
     but the list is still there. Regla: la lista filtrada nace visible.

   - Chip typography (T2): Archivo sentence case, --fs-meta, no
     letter-spacing bump. Legible on words with parens + digits. */

type Props = { items: Resource[] }

type CompanyFilter = 'all' | ResourceCompany
type KindFilter = 'all' | ResourceKind

const VALID_COMPANY: readonly ResourceCompany[] = ['a-d', 'sports', 'ai-concierge']
const VALID_KIND: readonly ResourceKind[] = [
  'essay',
  'conversation',
  'playbook',
  'case-study',
]

function coerceCompany(v: string | null): CompanyFilter {
  if (v && (VALID_COMPANY as readonly string[]).includes(v)) {
    return v as ResourceCompany
  }
  return 'all'
}
function coerceKind(v: string | null): KindFilter {
  if (v && (VALID_KIND as readonly string[]).includes(v)) {
    return v as ResourceKind
  }
  return 'all'
}

export default function ResourcesLibrary({ items }: Props) {
  const router = useRouter()
  const params = useSearchParams()

  const [company, setCompany] = useState<CompanyFilter>(() =>
    coerceCompany(params?.get('company') ?? null),
  )
  const [kind, setKind] = useState<KindFilter>(() =>
    coerceKind(params?.get('format') ?? null),
  )

  /* Keep state in sync if the URL changes externally (back button,
     nav-driven format shortcut, deep link from a shared card). */
  useEffect(() => {
    setCompany(coerceCompany(params?.get('company') ?? null))
    setKind(coerceKind(params?.get('format') ?? null))
  }, [params])

  const pushUrl = useCallback(
    (nextCompany: CompanyFilter, nextKind: KindFilter) => {
      const usp = new URLSearchParams()
      if (nextCompany !== 'all') usp.set('company', nextCompany)
      if (nextKind !== 'all') usp.set('format', nextKind)
      const qs = usp.toString()
      const href = qs ? `/resources?${qs}` : '/resources'
      router.replace(href, { scroll: false })
    },
    [router],
  )

  const onCompanyChange = (next: CompanyFilter) => {
    setCompany(next)
    pushUrl(next, kind)
  }
  const onKindChange = (next: KindFilter) => {
    setKind(next)
    pushUrl(company, next)
  }

  const kindCounts = useMemo(() => countByKind(items), [items])
  const companyCounts = useMemo(() => countByCompany(items), [items])

  const filtered = useMemo(() => {
    const byCompany =
      company === 'all' ? items : items.filter((r) => r.company === company)
    return kind === 'all' ? byCompany : byCompany.filter((r) => r.kind === kind)
  }, [items, company, kind])

  const activeCompanyChips = (
    Object.keys(companyCounts) as ResourceCompany[]
  ).filter((c) => companyCounts[c] > 0)

  const activeKindChips = (Object.keys(kindCounts) as ResourceKind[]).filter(
    (k) => kindCounts[k] > 0,
  )

  return (
    <div className="rs-body">
      <div className="rs-inner">
        <div className="rs-filters" role="group" aria-label="Filters">
          <div className="rs-filter-row">
            <span className="rs-filter-label">Company</span>
            <div className="rs-chips">
              <button
                type="button"
                className={`rs-chip${company === 'all' ? ' is-active' : ''}`}
                onClick={() => onCompanyChange('all')}
                aria-pressed={company === 'all'}
              >
                All <span className="rs-count">({items.length})</span>
              </button>
              {activeCompanyChips.map((c) => (
                <button
                  type="button"
                  key={c}
                  className={`rs-chip${company === c ? ' is-active' : ''}`}
                  onClick={() => onCompanyChange(c)}
                  aria-pressed={company === c}
                >
                  {companyLabel(c)}{' '}
                  <span className="rs-count">({companyCounts[c]})</span>
                </button>
              ))}
            </div>
          </div>

          <div className="rs-filter-row">
            <span className="rs-filter-label">Format</span>
            <div className="rs-chips">
              <button
                type="button"
                className={`rs-chip${kind === 'all' ? ' is-active' : ''}`}
                onClick={() => onKindChange('all')}
                aria-pressed={kind === 'all'}
              >
                All <span className="rs-count">({items.length})</span>
              </button>
              {activeKindChips.map((k) => (
                <button
                  type="button"
                  key={k}
                  className={`rs-chip${kind === k ? ' is-active' : ''}`}
                  onClick={() => onKindChange(k)}
                  aria-pressed={kind === k}
                >
                  {kindLabel(k)}{' '}
                  <span className="rs-count">({kindCounts[k]})</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="rs-empty">
            Nothing here yet. The filter stays applied &mdash; clear it if you
            want to see the whole library.
          </p>
        ) : (
          <ul className="rs-list" role="list">
            {filtered.map((r) => (
              <li key={r.href}>
                <Link href={r.href} className="rs-card">
                  <div className="rs-card-meta">
                    <span className="rs-badge">{companyLabel(r.company)}</span>
                    <span className="rs-kind">{kindLabel(r.kind)}</span>
                  </div>
                  <h2 className="rs-card-title">{r.title}</h2>
                  <p className="rs-card-excerpt">{r.excerpt}</p>
                  <span className="rs-card-more" aria-hidden="true">
                    Read →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
