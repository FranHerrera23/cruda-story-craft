import Link from 'next/link'
import {
  type Resource,
  companyLabel,
  kindLabel,
} from '@/content/resources'

/* Brief v12 T1 — server component.

   Renderea todas las cards en el HTML crudo. Los crawlers ven títulos
   + links + excerpts + badges sin necesidad de JS. Los data-* dejan
   que el filtro cliente oculte cards sin re-renderear la lista, así
   preservamos el SSR y no perdemos SEO al filtrar.

   Regla nueva del brief: ninguna página de contenido se da por
   terminada hasta que `curl` muestre su contenido en el HTML crudo. */

type Props = {
  items: Resource[]
  emptyText?: string
}

export default function ResourceCards({
  items,
  emptyText = 'Nothing here yet.',
}: Props) {
  if (items.length === 0) {
    return <p className="rs-empty">{emptyText}</p>
  }

  return (
    <>
      <ul className="rs-list" id="rs-list" role="list">
        {items.map((r) => (
          <li
            key={r.href}
            data-company={r.company}
            data-kind={r.kind}
            data-language={r.language}
          >
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
      {/* Estado vacío para el caso en que el filtro cliente esconda
          todo. Sigue oculto en SSR (no matchea nada porque no hay filtro
          activo aún); el cliente lo muestra si toca. */}
      <p className="rs-empty rs-empty-dynamic" id="rs-empty" hidden>
        Nothing here yet. The filter stays applied &mdash; clear it if you want
        to see the whole library.
      </p>
    </>
  )
}
