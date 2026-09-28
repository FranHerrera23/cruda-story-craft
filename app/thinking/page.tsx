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

   Idioma:
     · /thinking (default) · renderiza sólo las piezas en inglés.
     · /thinking?lang=es · renderiza sólo las piezas en español, con
       los rótulos de UI (fecha, "min de lectura", toggle) en
       español. h1 y lede quedan en inglés.
   Cada par bilingüe aparece una sola vez por vista; el link
   "Also in …" apunta a la otra versión.

   Los toggles son links reales (`<a href>`), no botones JS. Ambas
   URLs responden 200 desde el servidor con canonical a sí mismas.

   La regla naranja del h1 se mantiene porque es del sistema. */

type Lang = 'en' | 'es'

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
  language: (e.language ?? 'en') as Lang,
  publishedAt: e.publishedAt,
  canonicalPieceId: e.alternates?.en ?? e.slug,
}))

type Row = {
  slug: string
  href: string
  title: string
  dek?: string
  language: Lang
  kind: 'article' | 'podcast'
  readingMinutes?: number
  publishedAt: string
  altHref?: string
  altLang?: Lang
  status?: 'upcoming'
}

const ARTICLE_ROWS: Row[] = ARTICLES.map(e => {
  const language = (e.language ?? 'en') as Lang
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

const ALL_ROWS = [...ARTICLE_ROWS, ...PODCAST_ROWS].sort((a, b) => {
  if (!a.publishedAt) return 1
  if (!b.publishedAt) return -1
  return b.publishedAt.localeCompare(a.publishedAt)
})

/* ------- Formatos i18n ------- */

const MONTHS: Record<Lang, string[]> = {
  en: [
    'January','February','March','April','May','June',
    'July','August','September','October','November','December',
  ],
  es: [
    'enero','febrero','marzo','abril','mayo','junio',
    'julio','agosto','septiembre','octubre','noviembre','diciembre',
  ],
}

function fmtDate(iso: string, lang: Lang): string {
  if (!iso) return ''
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return ''
  const day = d.getUTCDate()
  const mon = MONTHS[lang][d.getUTCMonth()]
  const year = d.getUTCFullYear()
  if (lang === 'es') return `${day} de ${mon} de ${year}`
  return `${mon} ${day}, ${year}`
}

/* Los rótulos "Also in English →" / "Also in Español →" se
   mantienen tal cual en las dos vistas (brief §4). */
const ALSO_LABEL: Record<Lang, string> = {
  en: 'Also in English →',
  es: 'Also in Español →',
}

const READ_LABEL: Record<Lang, string> = {
  en: 'min read',
  es: 'min de lectura',
}

const PODCAST_LABEL: Record<Lang, { base: string; upcoming: string }> = {
  en: { base: 'Podcast', upcoming: 'Podcast · Upcoming' },
  es: { base: 'Podcast', upcoming: 'Podcast · Próximamente' },
}

function metaText(row: Row, viewLang: Lang): string {
  const parts: string[] = []
  if (row.publishedAt) parts.push(fmtDate(row.publishedAt, viewLang))
  if (row.kind === 'podcast') {
    parts.push(row.status === 'upcoming'
      ? PODCAST_LABEL[viewLang].upcoming
      : PODCAST_LABEL[viewLang].base)
  } else if (row.readingMinutes) {
    parts.push(`${row.readingMinutes} ${READ_LABEL[viewLang]}`)
  }
  return parts.join(' · ')
}

/* ------- Metadata (dinámica por lang) ------- */

const BASE_TITLE = 'Thinking · CRUDA'
const BASE_DESC =
  'Articles, case studies and podcasts by CRUDA on narrative, brand and demand.'

export async function generateMetadata({
  searchParams,
}: {
  searchParams?: Promise<{ lang?: string }>
}): Promise<Metadata> {
  const params = (await searchParams) ?? {}
  const lang: Lang = params.lang === 'es' ? 'es' : 'en'
  const canonical =
    lang === 'es'
      ? 'https://www.thecruda.com/thinking?lang=es'
      : 'https://www.thecruda.com/thinking'
  return {
    title: BASE_TITLE,
    description: BASE_DESC,
    alternates: { canonical },
    openGraph: {
      title: BASE_TITLE,
      description: BASE_DESC,
      url: canonical,
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
      title: BASE_TITLE,
      description: BASE_DESC,
      images: ['https://www.thecruda.com/logo.png'],
    },
  }
}

const SCHEMA = collectionPageSchema({
  url: 'https://www.thecruda.com/thinking',
  name: BASE_TITLE,
  description: BASE_DESC,
  items: SCHEMA_ITEMS,
})

/* ------- Render ------- */

export default async function ThinkingPage({
  searchParams,
}: {
  searchParams?: Promise<{ lang?: string }>
}) {
  const params = (await searchParams) ?? {}
  const viewLang: Lang = params.lang === 'es' ? 'es' : 'en'
  const rows = ALL_ROWS.filter(r => r.language === viewLang)

  return (
    <div className="thinking" data-lang={viewLang}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
      />

      {/* 01 · OPENER · h1 (EN en las dos vistas · brief §4). */}
      <section className="thinking-open">
        <h1 className="thinking-open__h">Thinking</h1>
        <div className="thinking-rule thinking-rule--hero" />
        <p className="thinking-open__lede">
          Pieces on narrative, brand, and the founders who build them.
          Written for people who have to make decisions, not for people
          who write about them.
        </p>

        {/* 01b · TOGGLE · links reales sin JS. Activo en ink,
            inactivo en gris. Subrayado sólo en hover. */}
        <nav className="thinking-lang" aria-label="Language">
          <Link
            className={`thinking-lang__opt${viewLang === 'en' ? ' is-active' : ''}`}
            href="/thinking"
            hrefLang="en"
            aria-current={viewLang === 'en' ? 'page' : undefined}
          >
            English
          </Link>
          <Link
            className={`thinking-lang__opt${viewLang === 'es' ? ' is-active' : ''}`}
            href="/thinking?lang=es"
            hrefLang="es"
            aria-current={viewLang === 'es' ? 'page' : undefined}
          >
            Español
          </Link>
        </nav>
      </section>

      {/* 02 · LISTA · una sola columna, filetes 1px negro entre filas. */}
      <section className="thinking-list">
        {rows.map(row => {
          const upcoming = row.status === 'upcoming'
          const showAlso = row.altHref && row.altLang
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
                <span>{metaText(row, viewLang)}</span>
                {showAlso && (
                  <>
                    <span aria-hidden="true"> · </span>
                    <Link
                      className="thinking-row__also"
                      href={row.altHref!}
                      hrefLang={row.altLang}
                    >
                      {ALSO_LABEL[row.altLang as Lang]}
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
