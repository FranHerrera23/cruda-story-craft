import type { Metadata } from 'next'
import Link from 'next/link'
import { allEssays } from '@/content/essays'
import { collectionPageSchema } from '@/lib/collection-schema'
import type { Resource, ResourceCompany } from '@/content/resources'
import './thinking.css'

/* /thinking · F50 · 28-sep · Fran · index rediseñado.

   Referencia: tetragrammaton.com/articles. Una sola columna, título,
   una línea de meta, dek opcional y un filete negro de lado a lado
   entre filas. Se van del molde F36: el kicker "THINKING", los
   filtros LANGUAGE/TYPE, el contador "N pieces" y la columna de
   meta en mayúsculas.

   Este commit trae la lista visual nueva mostrando ambos idiomas
   ordenados por fecha. El toggle idioma (?lang=es) entra en el
   commit siguiente. La regla naranja del h1 se mantiene porque es
   del sistema. */

/* ------- Datos ------- */

const ARTICLES = [...allEssays].sort((a, b) =>
  (b.publishedAt || '').localeCompare(a.publishedAt || ''),
)

const SCHEMA_ITEMS: Resource[] = ARTICLES.map(e => ({
  slug: e.slug,
  href: `/thinking/${e.slug}`,
  title: e.title,
  excerpt: e.answerCapsule,
  kind: 'essay' as const,
  company: 'cruda' as ResourceCompany,
  language: (e.language ?? 'en') as 'en' | 'es',
  publishedAt: e.publishedAt,
  canonicalPieceId: e.alternates?.en ?? e.slug,
}))

type Row = {
  slug: string
  href: string
  title: string
  dek?: string
  language: 'en' | 'es'
  kind: 'article' | 'podcast'
  readingMinutes?: number
  publishedAt: string
  altHref?: string
  altLang?: 'en' | 'es'
  status?: 'upcoming'
}

const ARTICLE_ROWS: Row[] = ARTICLES.map(e => {
  const language = (e.language ?? 'en') as 'en' | 'es'
  const alt = e.alternates
  const altEs = language === 'en' && alt?.es
    ? { href: `/thinking/${alt.es}`, lang: 'es' as const }
    : undefined
  const altEn = language === 'es' && alt?.en
    ? { href: `/thinking/${alt.en}`, lang: 'en' as const }
    : undefined
  const altPair = altEs ?? altEn
  return {
    slug: e.slug,
    href: `/thinking/${e.slug}`,
    title: e.title,
    /* F50 · dek sale del campo `deck` — si el ensayo no tiene
       subtítulo firmado, la fila va sin dek. No se inventa uno. */
    dek: e.deck || undefined,
    language,
    kind: 'article',
    readingMinutes: e.readingMinutes,
    publishedAt: e.publishedAt,
    altHref: altPair?.href,
    altLang: altPair?.lang,
  }
})

const PODCAST_ROWS: Row[] = [
  {
    slug: 'steve-walls',
    href: '/thinking/steve-walls',
    title: 'Steve Walls',
    dek: 'Former CSO, Publicis Singapore & Saatchi & Saatchi.',
    language: 'en',
    kind: 'podcast',
    publishedAt: '',
    status: 'upcoming',
  },
]

const ROWS = [...ARTICLE_ROWS, ...PODCAST_ROWS].sort((a, b) => {
  if (!a.publishedAt) return 1
  if (!b.publishedAt) return -1
  return b.publishedAt.localeCompare(a.publishedAt)
})

/* ------- Formatos ------- */

const MONTHS_EN = [
  'January','February','March','April','May','June',
  'July','August','September','October','November','December',
]

function fmtDate(iso: string): string {
  if (!iso) return ''
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return ''
  return `${MONTHS_EN[d.getUTCMonth()]} ${d.getUTCDate()}, ${d.getUTCFullYear()}`
}

function metaSegments(row: Row): { text: string; alt?: { href: string; text: string; lang: 'en' | 'es' } } {
  const parts: string[] = []
  if (row.publishedAt) parts.push(fmtDate(row.publishedAt))
  if (row.kind === 'podcast') {
    parts.push(row.status === 'upcoming' ? 'Podcast · Upcoming' : 'Podcast')
  } else if (row.readingMinutes) {
    parts.push(`${row.readingMinutes} min read`)
  }
  const meta = { text: parts.join(' · ') } as { text: string; alt?: { href: string; text: string; lang: 'en' | 'es' } }
  if (row.altHref && row.altLang) {
    meta.alt = {
      href: row.altHref,
      lang: row.altLang,
      text: row.altLang === 'es' ? 'Also in Español →' : 'Also in English →',
    }
  }
  return meta
}

/* ------- Metadata ------- */

const SCHEMA = collectionPageSchema({
  url: 'https://www.thecruda.com/thinking',
  name: 'Thinking · CRUDA',
  description:
    'Articles, case studies and podcasts by CRUDA on narrative, brand and demand.',
  items: SCHEMA_ITEMS,
})

const THINKING_TITLE = 'Thinking · CRUDA'
const THINKING_DESCRIPTION =
  'Articles, case studies and podcasts by CRUDA on narrative, brand and demand.'

export const metadata: Metadata = {
  title: THINKING_TITLE,
  description: THINKING_DESCRIPTION,
  alternates: {
    canonical: 'https://www.thecruda.com/thinking',
  },
  openGraph: {
    title: THINKING_TITLE,
    description: THINKING_DESCRIPTION,
    url: 'https://www.thecruda.com/thinking',
    type: 'website',
    images: [
      {
        url: 'https://www.thecruda.com/logo.png',
        width: 1080,
        height: 1080,
        alt: 'CRUDA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: THINKING_TITLE,
    description: THINKING_DESCRIPTION,
    images: ['https://www.thecruda.com/logo.png'],
  },
}

/* ------- Render ------- */

export default function ThinkingPage() {
  return (
    <div className="thinking">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
      />

      {/* 01 · OPENER · h1, regla naranja del sistema, intro.
          Se sacó el kicker "Thinking" · repetía el h1. */}
      <section className="thinking-open">
        <h1 className="thinking-open__h">Thinking</h1>
        <div className="thinking-rule thinking-rule--hero" />
        <p className="thinking-open__lede">
          Pieces on narrative, brand, and the founders who build them.
          Written for people who have to make decisions, not for people
          who write about them.
        </p>
      </section>

      {/* 02 · LISTA · una sola columna, filetes 1px negro entre filas.
          Meta line 15px sentence case, dek 18px, ambos color secundario.
          Toda la fila clickeable via <Link> que envuelve el título;
          el resto lo cubre `.thinking-row__link::after` (F50 §3). */}
      <section className="thinking-list">
        {ROWS.map(row => {
          const meta = metaSegments(row)
          const upcoming = row.status === 'upcoming'
          return (
            <article
              key={row.slug}
              className={`thinking-row${upcoming ? ' thinking-row--upcoming' : ''}`}
              data-kind={row.kind}
              data-lang={row.language}
              lang={row.language === 'es' ? 'es' : undefined}
            >
              <h2 className="thinking-row__t">
                <Link className="thinking-row__link" href={row.href}>
                  {row.title}
                </Link>
              </h2>
              <p className="thinking-row__meta">
                <span>{meta.text}</span>
                {meta.alt && (
                  <>
                    <span aria-hidden="true"> · </span>
                    <Link
                      className="thinking-row__also"
                      href={meta.alt.href}
                      hrefLang={meta.alt.lang}
                    >
                      {meta.alt.text}
                    </Link>
                  </>
                )}
              </p>
              {row.dek && <p className="thinking-row__dek">{row.dek}</p>}
            </article>
          )
        })}

        <Link href="/#selected-work" className="thinking-list__cases">
          Case studies live in Work →
        </Link>
      </section>
    </div>
  )
}
