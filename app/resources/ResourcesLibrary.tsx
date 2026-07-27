'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import {
  type Resource,
  type ResourceCompany,
  type ResourceKind,
  companyLabel,
  countByCompany,
  countByKind,
  kindLabel,
} from '@/content/resources'

/* Two axes, chips built from data. If Sports has 0 items today, no
   Sports chip renders — the moment a Sports piece lands, the chip
   appears. Cross-product empty state honest, doesn't reset filters.
   Cards sin imagen — no hay portadas y las tipográficas fallaron. */

type Props = { items: Resource[] }

type CompanyFilter = 'all' | ResourceCompany
type KindFilter = 'all' | ResourceKind

export default function ResourcesLibrary({ items }: Props) {
  const [company, setCompany] = useState<CompanyFilter>('all')
  const [kind, setKind] = useState<KindFilter>('all')

  const kindCounts = useMemo(() => countByKind(items), [items])
  const companyCounts = useMemo(() => countByCompany(items), [items])

  const filtered = useMemo(() => {
    return items.filter((r) => {
      if (company !== 'all' && r.company !== company) return false
      if (kind !== 'all' && r.kind !== kind) return false
      return true
    })
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
            <span className="mono rs-filter-label">Company</span>
            <div className="rs-chips">
              <button
                type="button"
                className={`rs-chip${company === 'all' ? ' is-active' : ''}`}
                onClick={() => setCompany('all')}
                aria-pressed={company === 'all'}
              >
                All <span className="rs-count">({items.length})</span>
              </button>
              {activeCompanyChips.map((c) => (
                <button
                  type="button"
                  key={c}
                  className={`rs-chip${company === c ? ' is-active' : ''}`}
                  onClick={() => setCompany(c)}
                  aria-pressed={company === c}
                >
                  {companyLabel(c)}{' '}
                  <span className="rs-count">({companyCounts[c]})</span>
                </button>
              ))}
            </div>
          </div>

          <div className="rs-filter-row">
            <span className="mono rs-filter-label">Format</span>
            <div className="rs-chips">
              <button
                type="button"
                className={`rs-chip${kind === 'all' ? ' is-active' : ''}`}
                onClick={() => setKind('all')}
                aria-pressed={kind === 'all'}
              >
                All <span className="rs-count">({items.length})</span>
              </button>
              {activeKindChips.map((k) => (
                <button
                  type="button"
                  key={k}
                  className={`rs-chip${kind === k ? ' is-active' : ''}`}
                  onClick={() => setKind(k)}
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
            Nothing here yet. The filter stays applied — clear it if you want
            to see the whole library.
          </p>
        ) : (
          <ul className="rs-list" role="list">
            {filtered.map((r) => (
              <li key={r.href}>
                <Link href={r.href} className="rs-card">
                  <div className="rs-card-meta">
                    <span className="mono rs-badge">
                      {companyLabel(r.company)}
                    </span>
                    <span className="mono rs-kind">{kindLabel(r.kind)}</span>
                  </div>
                  <h2 className="rs-card-title">{r.title}</h2>
                  <p className="rs-card-excerpt">{r.excerpt}</p>
                  <span className="mono rs-card-more" aria-hidden="true">
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
