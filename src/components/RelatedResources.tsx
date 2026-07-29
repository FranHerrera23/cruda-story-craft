import Link from 'next/link'
import {
  allResources,
  companyLabel,
  kindLabel,
  type Resource,
} from '@/content/resources'

/* Brief v9 T5 — Read more.

   Va al final de ensayos y case studies, después del ClosingBlock.
   Prioriza misma company primero, después más recientes. Nunca
   incluye la pieza actual. Si hay menos de 3, muestra las que haya.
   Si no hay ninguna, no renderiza. */

type Props = {
  currentHref: string
  lang?: 'en' | 'es'
  limit?: number
}

function fmtDate(iso: string, lang: 'en' | 'es'): string {
  if (!iso) return ''
  const locale = lang === 'es' ? 'es-ES' : 'en-US'
  return new Date(iso).toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function pickRelated(currentHref: string, limit: number): Resource[] {
  const current = allResources.find((r) => r.href === currentHref)
  if (!current) return []

  const others = allResources.filter((r) => r.href !== currentHref)

  const sorted = [...others].sort((a, b) => {
    /* 1) Same company as current wins. */
    const aSame = a.company === current.company ? 0 : 1
    const bSame = b.company === current.company ? 0 : 1
    if (aSame !== bSame) return aSame - bSame
    /* 2) Newest first. Empty publishedAt goes last. */
    if (!a.publishedAt && !b.publishedAt) return 0
    if (!a.publishedAt) return 1
    if (!b.publishedAt) return -1
    return b.publishedAt.localeCompare(a.publishedAt)
  })

  return sorted.slice(0, limit)
}

export default function RelatedResources({
  currentHref,
  lang = 'en',
  limit = 3,
}: Props) {
  const picks = pickRelated(currentHref, limit)
  if (picks.length === 0) return null

  const heading = lang === 'es' ? 'Seguí leyendo' : 'Read more'

  return (
    <section className="rr" aria-label={heading}>
      <h2 className="rr-heading">{heading}</h2>
      <ul className="rr-list" role="list">
        {picks.map((r) => (
          <li key={r.href}>
            <Link href={r.href} className="rr-card">
              <div className="rr-meta">
                <span className="rr-badge">{companyLabel(r.company)}</span>
                <span className="rr-kind">{kindLabel(r.kind)}</span>
                {r.language === 'es' && (
                  <span className="rr-lang" aria-label="Spanish">ES</span>
                )}
              </div>
              <h3 className="rr-title">{r.title}</h3>
              {r.publishedAt && (
                <time className="rr-date" dateTime={r.publishedAt}>
                  {fmtDate(r.publishedAt, lang)}
                </time>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
