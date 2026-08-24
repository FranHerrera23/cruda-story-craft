import Link from 'next/link'
import {
  allResources,
  companyLabel,
  dedupeByPiece,
  kindLabel,
  type Resource,
  type ResourceLanguage,
} from '@/content/resources'

/* Brief v9 T5 + Brief v4 UX §4.5 §4.6.

   §4.5 — card sin translateY, sin sombra, sin escala. Solo opacity +
   flecha que estaba ahí y aparece deslizándose 4px.
   §4.6 — dedupe por canonicalPieceId. Un ensayo bilingüe es UNA
   pieza; se sirve la traducción que coincide con el idioma de la
   pieza actual. Si no existe traducción, cae a la que haya. */

type Props = {
  excludeHrefs: string[]
  lang?: ResourceLanguage
  limit?: number
}

function fmtDate(iso: string, lang: ResourceLanguage): string {
  if (!iso) return ''
  const locale = lang === 'es' ? 'es-ES' : 'en-US'
  return new Date(iso).toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function pickRelated(
  excludeHrefs: string[],
  lang: ResourceLanguage,
  limit: number,
): Resource[] {
  /* Primero deduplicamos por pieza (respetando el idioma de contexto),
     después excluimos la pieza actual y su traducción. */
  const deduped = dedupeByPiece(allResources, lang)
  const excludeSet = new Set(excludeHrefs)
  const seedHref = excludeHrefs[0]
  const seed = allResources.find((r) => r.href === seedHref)
  const sameCompany = seed?.company ?? null

  const others = deduped.filter((r) => !excludeSet.has(r.href))

  const sorted = [...others].sort((a, b) => {
    if (sameCompany !== null) {
      const aSame = a.company === sameCompany ? 0 : 1
      const bSame = b.company === sameCompany ? 0 : 1
      if (aSame !== bSame) return aSame - bSame
    }
    if (!a.publishedAt && !b.publishedAt) return 0
    if (!a.publishedAt) return 1
    if (!b.publishedAt) return -1
    return b.publishedAt.localeCompare(a.publishedAt)
  })

  return sorted.slice(0, limit)
}

export default function RelatedResources({
  excludeHrefs,
  lang = 'en',
  limit = 3,
}: Props) {
  const picks = pickRelated(excludeHrefs, lang, limit)
  if (picks.length === 0) return null

  const heading = lang === 'es' ? 'Seguí leyendo' : 'Read more'

  return (
    <section className="rr" aria-label={heading}>
      <h2 className="rr-heading">{heading}</h2>
      <ul className="rr-list" role="list">
        {picks.map((r) => {
          /* Brief v4 UX §4.6 — la marca de idioma solo aparece si la
             pieza está en un idioma distinto al de contexto. Es
             información útil, no debug. */
          const showLangBadge = r.language !== lang
          const eyebrow = showLangBadge
            ? `${kindLabel(r.kind).toUpperCase()} · ${r.language.toUpperCase()}`
            : kindLabel(r.kind).toUpperCase()
          return (
            <li key={r.href}>
              <Link href={r.href} className="card">
                <div className="card__head">
                  <span className="card__eyebrow">{eyebrow}</span>
                  <span className="card__arrow" aria-hidden="true">↗</span>
                </div>
                <h3 className="card__title">{r.title}</h3>
                {r.publishedAt && (
                  <time className="card__date" dateTime={r.publishedAt}>
                    {fmtDate(r.publishedAt, lang)}
                  </time>
                )}
                {/* Company label como contexto secundario, no como chip. */}
                <span className="card__meta" aria-hidden="true">
                  {companyLabel(r.company)}
                </span>
              </Link>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
