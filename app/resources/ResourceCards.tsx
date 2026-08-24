import Link from 'next/link'
import {
  type Resource,
  type ResourceLanguage,
  kindLabel,
} from '@/content/resources'

/* Brief v12 T1 — server component; los links viven en el HTML crudo.
   Brief v4 UX §4.5 — un solo componente card (opacity + arrow),
   eyebrow mono de una línea (reemplaza los chips que se leían como
   debug). §4.6 — el eyebrow marca el idioma solo cuando difiere del
   contexto. */

type Props = {
  items: Resource[]
  contextLang?: ResourceLanguage
  emptyText?: string
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

export default function ResourceCards({
  items,
  contextLang = 'en',
  emptyText = 'Nothing here yet.',
}: Props) {
  if (items.length === 0) {
    return <p className="rs-empty">{emptyText}</p>
  }

  return (
    <>
      <ul className="rs-list" id="rs-list" role="list">
        {items.map((r) => {
          const showLangBadge = r.language !== contextLang
          const eyebrow = showLangBadge
            ? `${kindLabel(r.kind).toUpperCase()} · ${r.language.toUpperCase()}`
            : kindLabel(r.kind).toUpperCase()
          return (
            <li
              key={r.href}
              data-company={r.company}
              data-kind={r.kind}
              data-language={r.language}
              data-piece={r.canonicalPieceId}
            >
              <Link href={r.href} className="card">
                <div className="card__head">
                  <span className="card__eyebrow">{eyebrow}</span>
                  <span className="card__arrow" aria-hidden="true">↗</span>
                </div>
                <h3 className="card__title">{r.title}</h3>
                {r.publishedAt && (
                  <time className="card__date" dateTime={r.publishedAt}>
                    {fmtDate(r.publishedAt, contextLang)}
                  </time>
                )}
              </Link>
            </li>
          )
        })}
      </ul>
      <p className="rs-empty rs-empty-dynamic" id="rs-empty" hidden>
        Nothing here yet. The filter stays applied &mdash; clear it if you want
        to see the whole library.
      </p>
    </>
  )
}
