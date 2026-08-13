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

/* Brief v12 T1 — client filter component.

   Refactor completo del sistema anterior:
   - El componente NO renderea las cards. Esas viven en el server
     component <ResourceCards>. Este componente sólo maneja los chips
     y oculta/muestra las cards manipulando el DOM directamente
     (via `hidden` attr sobre los <li> que ya están renderizados).
   - Preserva SSR: el crawler ve todas las cards sin depender de JS.
   - URL sync con router.replace(scroll:false).

   Brief v12 T2 — Format axis es NAVEGACIÓN, no filtro.
   Los tres chips de Format (All / Case studies / Essays) son <Link>
   a las tres rutas reales. Cada ruta tiene su propio title y canonical.
   Company y Language sí son filtros in-place (query params encima). */

type Props = {
  items: Resource[]
  /* Scope: qué ruta muestra este filter. En 'case-studies' y 'essays'
     el axis Format se colorea pero no filtra (redundante), y el
     conteo de "All" muestra el subset actual. */
  scope: 'all' | 'case-studies' | 'essays'
  /* Total global — se usa para el chip "All" del axis Format aunque
     items venga filtrado por scope. Sin esto el nav diría "All (5)"
     en /resources/case-studies. */
  totalItems?: number
  /* Conteos globales para los chips de Format — así los subroutes
     muestran los mismos contadores que /resources y siguen coherentes. */
  globalKindCounts?: Record<ResourceKind, number>
}

type CompanyFilter = 'all' | ResourceCompany
type LanguageFilter = 'all' | ResourceLanguage

const VALID_COMPANY: readonly ResourceCompany[] = [
  'cruda',
  'a-d',
  'sports',
  'systems',
]
const VALID_LANGUAGE: readonly ResourceLanguage[] = ['en', 'es']

function coerceCompany(v: string | null): CompanyFilter {
  if (v && (VALID_COMPANY as readonly string[]).includes(v)) {
    return v as ResourceCompany
  }
  return 'all'
}
function coerceLanguage(v: string | null): LanguageFilter {
  if (v && (VALID_LANGUAGE as readonly string[]).includes(v)) {
    return v as ResourceLanguage
  }
  return 'all'
}

const FORMAT_LINKS: Array<{
  kind: 'all' | 'case-study' | 'essay'
  href: string
  scope: Props['scope']
}> = [
  { kind: 'all', href: '/resources', scope: 'all' },
  { kind: 'case-study', href: '/resources/case-studies', scope: 'case-studies' },
  { kind: 'essay', href: '/resources/essays', scope: 'essays' },
]

export default function ResourceFilters({
  items,
  scope,
  totalItems,
  globalKindCounts,
}: Props) {
  const router = useRouter()
  const params = useSearchParams()

  const [company, setCompany] = useState<CompanyFilter>(() =>
    coerceCompany(params?.get('company') ?? null),
  )
  const [language, setLanguage] = useState<LanguageFilter>(() =>
    coerceLanguage(params?.get('language') ?? null),
  )

  useEffect(() => {
    setCompany(coerceCompany(params?.get('company') ?? null))
    setLanguage(coerceLanguage(params?.get('language') ?? null))
  }, [params])

  const basePath = useMemo(() => {
    if (scope === 'case-studies') return '/resources/case-studies'
    if (scope === 'essays') return '/resources/essays'
    return '/resources'
  }, [scope])

  const pushUrl = useCallback(
    (nextCompany: CompanyFilter, nextLanguage: LanguageFilter) => {
      const usp = new URLSearchParams()
      if (nextCompany !== 'all') usp.set('company', nextCompany)
      if (nextLanguage !== 'all') usp.set('language', nextLanguage)
      const qs = usp.toString()
      const href = qs ? `${basePath}?${qs}` : basePath
      router.replace(href, { scroll: false })
    },
    [router, basePath],
  )

  const onCompanyChange = (next: CompanyFilter) => {
    setCompany(next)
    pushUrl(next, language)
  }
  const onLanguageChange = (next: LanguageFilter) => {
    setLanguage(next)
    pushUrl(company, next)
  }

  /* Filtro DOM: manipula los <li> renderizados por el server. No
     re-renderea la lista — sólo toggles hidden + oculta/muestra el
     estado vacío. Preserva SSR y evita hydration mismatches. */
  useEffect(() => {
    if (typeof document === 'undefined') return
    const list = document.getElementById('rs-list')
    const empty = document.getElementById('rs-empty')
    if (!list) return
    let visible = 0
    const children = list.children
    for (let i = 0; i < children.length; i++) {
      const li = children[i] as HTMLElement
      const matches =
        (company === 'all' || li.dataset.company === company) &&
        (language === 'all' || li.dataset.language === language)
      li.hidden = !matches
      if (matches) visible += 1
    }
    if (empty) empty.hidden = visible > 0
  }, [company, language])

  const kindCounts = useMemo(
    () => globalKindCounts ?? countByKind(items),
    [items, globalKindCounts],
  )
  const companyCounts = useMemo(() => countByCompany(items), [items])
  const languageCounts = useMemo(() => countByLanguage(items), [items])

  const activeCompanyChips = (
    Object.keys(companyCounts) as ResourceCompany[]
  ).filter((c) => companyCounts[c] > 0)

  const activeLanguageChips: ResourceLanguage[] = (
    ['es', 'en'] as const
  ).filter((l) => languageCounts[l] > 0)

  const allCount = totalItems ?? items.length
  const formatAllCount = totalItems ?? items.length

  return (
    <div className="rs-filters" role="group" aria-label="Filters">
      {/* Format — links a las tres rutas reales. Cada una tiene
          title y canonical propios (brief v12 T2). */}
      <div className="rs-filter-row">
        <span className="rs-filter-label">Format</span>
        <div className="rs-chips">
          {FORMAT_LINKS.map((f) => {
            const isActive = f.scope === scope
            const count =
              f.kind === 'all' ? formatAllCount : (kindCounts[f.kind] ?? 0)
            const label =
              f.kind === 'all'
                ? 'All'
                : f.kind === 'case-study'
                  ? 'Case studies'
                  : 'Essays'
            return (
              <Link
                key={f.href}
                href={f.href}
                className={`rs-chip${isActive ? ' is-active' : ''}`}
                aria-current={isActive ? 'page' : undefined}
              >
                {label} <span className="rs-count">({count})</span>
              </Link>
            )
          })}
        </div>
      </div>

      {/* Company — filter in-place */}
      <div className="rs-filter-row">
        <span className="rs-filter-label">Company</span>
        <div className="rs-chips">
          <button
            type="button"
            className={`rs-chip${company === 'all' ? ' is-active' : ''}`}
            onClick={() => onCompanyChange('all')}
            aria-pressed={company === 'all'}
          >
            All <span className="rs-count">({allCount})</span>
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

      {/* Language — filter in-place. Sólo se muestra si hay al menos
          un idioma con piezas. */}
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
              All <span className="rs-count">({allCount})</span>
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
  )
}
