import type { Metadata } from 'next'
import Link from 'next/link'
import ThinkingFilters from './ThinkingFilters'
import { allEssays } from '@/content/essays'
import { collectionPageSchema } from '@/lib/collection-schema'
import type { Resource, ResourceCompany } from '@/content/resources'
import './thinking.css'

/* /thinking · F36 · 24-sep · Fran · library.

   Reemplaza a F31 §4.2. F31 §4.1 (un solo h1 token /services + una
   sola regla naranja) sigue vigente.

   Sale de /thinking:
   · La sección CASE STUDIES completa (cards). Los casos viven en
     Work · abajo hay un link "Case studies live in Work →".
   · La opción "Case studies" del filtro TYPE.
   · Los h2 "What we are thinking about." · "Conversations."
   · El atenuado en gris de filas no activas (marks/mark).

   La página es una SOLA lista de artículos + podcasts, ordenada
   por fecha (más reciente primero). Cada fila muestra número,
   título, dek (si hay), meta line (kind · reading time · Also in
   other language), y una etiqueta de idioma a la derecha. */

/* F36 · lista incluye TODAS las piezas · el filtro de idioma
   decide cuáles se muestran. Antes se ocultaban las ES con alt EN
   para evitar duplicados de la misma pieza; en el molde library
   ambas versiones son ítems de biblioteca independientes. */
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

/* F36 §2 · fila unificada · articles + podcasts en una sola lista. */
type LibraryItem = {
  slug: string
  href: string
  title: string
  dek?: string
  language: 'en' | 'es'
  kind: 'article' | 'podcast'
  readingMinutes?: number
  publishedAt: string
  altLang?: { href: string; label: 'English' | 'Español' }
  status?: 'upcoming'
}

const ARTICLE_ITEMS: LibraryItem[] = ARTICLES.map(e => {
  const alt = e.alternates
  const language = (e.language ?? 'en') as 'en' | 'es'
  const altES =
    language === 'en' && alt?.es
      ? { href: `/thinking/${alt.es}`, label: 'Español' as const }
      : undefined
  const altEN =
    language === 'es' && alt?.en
      ? { href: `/thinking/${alt.en}`, label: 'English' as const }
      : undefined
  return {
    slug: e.slug,
    href: `/thinking/${e.slug}`,
    title: e.title,
    /* F36 § dek visible · viene del campo `deck` cuando existe.
       Si no hay deck, la fila va sin dek (F36 § "si una pieza no
       tiene descripción, se omite y se reporta"). */
    dek: e.deck || undefined,
    language,
    kind: 'article',
    readingMinutes: e.readingMinutes,
    publishedAt: e.publishedAt,
    altLang: altES ?? altEN,
  }
})

const PODCAST_ITEMS: LibraryItem[] = [
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

/* Combinado y ordenado por fecha (más reciente primero). Podcasts
   upcoming (sin fecha) van al final. */
const LIBRARY = [...ARTICLE_ITEMS, ...PODCAST_ITEMS].sort((a, b) => {
  if (!a.publishedAt) return 1
  if (!b.publishedAt) return -1
  return b.publishedAt.localeCompare(a.publishedAt)
})

const HAS_PODCASTS = PODCAST_ITEMS.length > 0

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

export default function ThinkingPage() {
  return (
    <div className="thinking thinking--library">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
      />

      {/* 01 · OPENER · F31 §4.2 (vigente) · rótulo · h1 · regla ·
          lede en una sola columna. */}
      <section className="thinking-open">
        <p className="eyebrow">Thinking</p>
        <h1 className="thinking-open__h">Thinking</h1>
        <div className="thinking-rule thinking-rule--hero" />
        <div className="thinking-open__b">
          <p className="thinking-open__lede">
            Pieces on narrative, brand, and the founders who build them.
            Written for people who have to make decisions, not for people
            who write about them.
          </p>
        </div>
      </section>

      <ThinkingFilters hasPodcasts={HAS_PODCASTS} />

      {/* F36 · una sola lista · articles + podcasts. */}
      <section className="thinking-sec thinking-lib" data-sec="library">
        <div className="thinking-lib__list">
          {LIBRARY.map((it, i) => (
            <article
              key={it.slug}
              className="thinking-row"
              data-kind={it.kind}
              data-lang={it.language}
              data-status={it.status}
              lang={it.language === 'es' ? 'es' : undefined}
            >
              <span className="thinking-row__o">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="thinking-row__b">
                <h3 className="thinking-row__n">
                  <Link href={it.href}>{it.title}</Link>
                </h3>
                {it.dek && <p className="thinking-row__dek">{it.dek}</p>}
                <p className="thinking-row__m">
                  {it.kind === 'podcast'
                    ? it.status === 'upcoming'
                      ? 'PODCAST · UPCOMING'
                      : 'PODCAST'
                    : `ARTICLE${
                        it.readingMinutes
                          ? ` · ${it.readingMinutes} MIN READ`
                          : ''
                      }`}
                  {it.altLang && (
                    <>
                      {' · '}
                      <Link
                        className="thinking-row__alt"
                        href={it.altLang.href}
                        hrefLang={it.altLang.label === 'Español' ? 'es' : 'en'}
                      >
                        Also in {it.altLang.label} →
                      </Link>
                    </>
                  )}
                </p>
              </div>
              <span className="thinking-row__lang">
                {it.language === 'es' ? 'Español' : 'English'}
              </span>
            </article>
          ))}
        </div>

        <p className="thinking-empty" data-empty hidden>
          Nothing here yet in this combination.
        </p>

        {/* F36 · link a Work para casos. */}
        <Link href="/#selected-work" className="thinking-lib__cases">
          Case studies live in Work →
        </Link>
      </section>

      <div className="thinking-end" />
    </div>
  )
}
