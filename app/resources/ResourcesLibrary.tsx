'use client'

import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useEffect, useMemo, useState } from 'react'
import {
  type Resource,
  type ResourceCompany,
  type ResourceKind,
  type ResourceLanguage,
  companyLabel,
  countByCompany,
  countByKind,
  countByLanguage,
  kindLabel,
  languageLabel,
} from '@/content/resources'

/* Brief v6 T1 · T2 · T3 + Brief v10 T2.

   Filtros sobre tres ejes independientes: Company · Format · Language.

   - Query param sync: reads ?format=, ?company=, ?language= al montar
     y mirror state→URL en cada cambio via router.replace(scroll:false).
     Deep-linkable, shareable, indexable por combinación.

   - Filter logic: filtro explícito en cadena, sin closures que puedan
     retener estado stale. Se recomputa desde `items` en cada render.

   - Cards baseline visible: no observer, no gate. Si JS falla, chips
     pierden interactividad pero la lista sigue ahí.

   - Idioma NO se autodetecta: default es "All". Quien llega de Google
     ya sabe en qué idioma buscó; ocultarle media biblioteca es peor
     que mostrarle todo. */

type Props = { items: Resource[] }

type CompanyFilter = 'all' | ResourceCompany
type KindFilter = 'all' | ResourceKind
type LanguageFilter = 'all' | ResourceLanguage

const VALID_COMPANY: readonly ResourceCompany[] = [
  'cruda',
  'a-d',
  'sports',
  'ai-concierge',
]
const VALID_KIND: readonly ResourceKind[] = [
  'essay',
  'conversation',
  'playbook',
  'case-study',
]
const VALID_LANGUAGE: readonly ResourceLanguage[] = ['en', 'es']

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
function coerceLanguage(v: string | null): LanguageFilter {
  if (v && (VALID_LANGUAGE as readonly string[]).includes(v)) {
    return v as ResourceLanguage
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
  const [language, setLanguage] = useState<LanguageFilter>(() =>
    coerceLanguage(params?.get('language') ?? null),
  )

  useEffect(() => {
    setCompany(coerceCompany(params?.get('company') ?? null))
    setKind(coerceKind(params?.get('format') ?? null))
    setLanguage(coerceLanguage(params?.get('language') ?? null))
  }, [params])

  const pushUrl = useCallback(
    (
      nextCompany: CompanyFilter,
      nextKind: KindFilter,
      nextLanguage: LanguageFilter,
    ) => {
      const usp = new URLSearchParams()
      if (nextCompany !== 'all') usp.set('company', nextCompany)
      if (nextKind !== 'all') usp.set('format', nextKind)
      if (nextLanguage !== 'all') usp.set('language', nextLanguage)
      const qs = usp.toString()
      const href = qs ? `/resources?${qs}` : '/resources'
      router.replace(href, { scroll: false })
    },
    [router],
  )

  const onCompanyChange = (next: CompanyFilter) => {
    setCompany(next)
    pushUrl(next, kind, language)
  }
  const onKindChange = (next: KindFilter) => {
    setKind(next)
    pushUrl(company, next, language)
  }
  const onLanguageChange = (next: LanguageFilter) => {
    setLanguage(next)
    pushUrl(company, kind, next)
  }

  const kindCounts = useMemo(() => countByKind(items), [items])
  const companyCounts = useMemo(() => countByCompany(items), [items])
  const languageCounts = useMemo(() => countByLanguage(items), [items])

  const filtered = useMemo(() => {
    const byCompany =
      company === 'all' ? items : items.filter((r) => r.company === company)
    const byKind =
      kind === 'all' ? byCompany : byCompany.filter((r) => r.kind === kind)
    return language === 'all'
      ? byKind
      : byKind.filter((r) => r.language === language)
  }, [items, company, kind, language])

  const activeCompanyChips = (
    Object.keys(companyCounts) as ResourceCompany[]
  ).filter((c) => companyCounts[c] > 0)

  const activeKindChips = (Object.keys(kindCounts) as ResourceKind[]).filter(
    (k) => kindCounts[k] > 0,
  )

  /* Idioma en orden semántico (ES · EN), no alfabético. Los ES quedan
     primero porque son la biblioteca de autoridad y el default de las
     nuevas piezas. */
  const activeLanguageChips: ResourceLanguage[] = (
    ['es', 'en'] as const
  ).filter((l) => languageCounts[l] > 0)

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

          {activeLanguageChips.length > 0 && (
            <div className="rs-filter-row">
              <span className="rs-filter-label">Language</span>
              <div className="rs-chips">
                <button
                  type="button"
                  className={`rs-chip${language === 'all' ? ' is-active' : ''}`}
                  onClick={() => onLanguageChange('all')}
                  aria-pressed={language === 'all'}
                >
                  All <span className="rs-count">({items.length})</span>
                </button>
                {activeLanguageChips.map((l) => (
                  <button
                    type="button"
                    key={l}
                    className={`rs-chip${language === l ? ' is-active' : ''}`}
                    onClick={() => onLanguageChange(l)}
                    aria-pressed={language === l}
                  >
                    {languageLabel(l)}{' '}
                    <span className="rs-count">({languageCounts[l]})</span>
                  </button>
                ))}
              </div>
            </div>
          )}
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
                    {r.language === 'es' && (
                      <span className="rs-lang" aria-label="Spanish">ES</span>
                    )}
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
