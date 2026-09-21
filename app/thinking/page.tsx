import type { Metadata } from 'next'
import Link from 'next/link'
import ThinkingFilters from './ThinkingFilters'
import WorkCard from '@/components/home/WorkCard'
import { selectedWorkCards } from '@/content/home/selected-work'
import { allEssays } from '@/content/essays'
import { collectionPageSchema } from '@/lib/collection-schema'
import type { Resource, ResourceCompany } from '@/content/resources'
import '@/components/home/work-card.css'
import '@/components/home/selected-work.css'
import './thinking.css'

/* /thinking · F14b.1 · 21-sep · autónomo · prototipo thinking-v1.

   Antes: /essays (redirect /thinking → /essays). Ahora /thinking
   es canónica y /essays → 301 → /thinking.

   Estructura del prototipo:
     01  Opener · split asimétrico
     02  Filters · Type × Language (sticky bajo la barra)
     03  Articles · index de artículos (molde WHAT WE DO)
     04  Case studies · grilla wcard (molde SELECTED WORK)
     05  Podcasts · sección vacía en F14b.1. F14b.2 mete el
         episodio 01 · Steve Walls en upcoming.

   Todos los items en el HTML servido · el filtro sólo pone hidden. */

/* Los artículos vienen directo de allEssays porque necesitamos el
   campo `alternates` (hreflang ES/EN) para el link "Also in ...".
   Dedup manual: si el essay tiene versión EN, se muestra la EN y la
   ES queda representada por el link alternate. */
const ARTICLES = allEssays
  .filter(e => {
    // Si es ES y existe versión EN, se oculta (la EN la incluye vía alt).
    if (e.language === 'es' && e.alternates?.en) {
      return !allEssays.some(o => o.slug === e.alternates!.en)
    }
    return true
  })
  .sort((a, b) => (b.publishedAt || '').localeCompare(a.publishedAt || ''))

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

/* F19-C.3 · Case studies section usa las MISMAS cards de SELECTED
   WORK (Parte B). Se filtran las que tienen `href` (caso con
   página propia). Girish · Abu Dhabi ya se corrigió en la data. */
const CASE_STUDY_CARDS = selectedWorkCards.filter(c => !!c.href)

const SCHEMA = collectionPageSchema({
  url: 'https://www.thecruda.com/thinking',
  name: 'Thinking — CRUDA',
  description:
    'Pieces on narrative, brand, and the founders who build them. Written for people who have to make decisions, not for people who write about them.',
  items: SCHEMA_ITEMS,
})

export const metadata: Metadata = {
  title: 'Thinking — CRUDA',
  description:
    'Pieces on narrative, brand, and the founders who build them.',
  alternates: {
    canonical: 'https://www.thecruda.com/thinking',
  },
  openGraph: {
    title: 'Thinking — CRUDA',
    description:
      'Pieces on narrative, brand, and the founders who build them.',
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
    title: 'Thinking — CRUDA',
    description:
      'Pieces on narrative, brand, and the founders who build them.',
    images: ['https://www.thecruda.com/logo.png'],
  },
}

export default function ThinkingPage() {
  return (
    <div className="thinking">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
      />

      {/* 01 · OPENER · F19-C · una columna · rótulo + h1 + regla + lede.
          El h1 usa el mismo token que el h1 de /services. La regla
          naranja es la ÚNICA de la página. */}
      <section className="thinking-open">
        <p className="thinking-eyebrow">Thinking</p>
        <h1 className="thinking-h1">Thinking</h1>
        <div className="thinking-h1-rule" />
        <p className="thinking-lede">
          Pieces on narrative, brand, and the founders who build them.
          Written for people who have to make decisions, not for people
          who write about them.
        </p>
      </section>

      {/* 02 · FILTROS */}
      <ThinkingFilters
        hasCases={CASE_STUDY_CARDS.length > 0}
        hasPodcasts={true}
      />

      {/* 03 · ARTICLES · F19-C · sin regla naranja bajo el h2. */}
      <section className="thinking-sec" data-sec="article">
        <div className="thinking-sec__hd">
          <p className="eyebrow">Articles</p>
          <span className="thinking-sec__n" data-n />
        </div>
        <h2 className="thinking-h2">What we are thinking about.</h2>
        <div className="thinking-index marks">
          {ARTICLES.map((e, i) => {
            const alt = e.alternates
            const altES =
              e.language === 'en' && alt?.es
                ? { href: `/thinking/${alt.es}`, label: 'Español' }
                : null
            const altEN =
              e.language === 'es' && alt?.en
                ? { href: `/thinking/${alt.en}`, label: 'English' }
                : null
            return (
              <article
                key={e.slug}
                className="thinking-irow mark"
                data-lang={e.language}
                lang={e.language === 'es' ? 'es' : undefined}
              >
                <span className="thinking-irow__o">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="thinking-irow__n">
                    <Link href={`/thinking/${e.slug}`}>{e.title}</Link>
                  </h3>
                  {(altES || altEN) && (
                    <p className="thinking-irow__d">
                      Also in{' '}
                      <Link
                        className="alt"
                        href={(altES ?? altEN)!.href}
                        hrefLang={altES ? 'es' : 'en'}
                      >
                        {(altES ?? altEN)!.label}
                      </Link>
                    </p>
                  )}
                </div>
                <span className="thinking-irow__m">
                  {e.language === 'es' ? 'Español' : 'English'}
                </span>
              </article>
            )
          })}
        </div>
      </section>

      {/* 04 · CASE STUDIES · F19-C.3 · mismas cards que SELECTED WORK.
          Sin regla naranja bajo el h2. */}
      <section className="thinking-sec" data-sec="case">
        <div className="thinking-sec__hd">
          <p className="eyebrow">Case studies</p>
          <span className="thinking-sec__n" data-n />
        </div>
        <h2 className="thinking-h2">The work, and what it moved.</h2>
        <div className="work-grid" data-work-grid>
          {CASE_STUDY_CARDS.map((card, i) => (
            <div key={card.href ?? card.name} data-lang="en">
              <WorkCard
                {...card}
                ordinal={String(i + 1).padStart(2, '0')}
                revealIndex={Math.min(i, 5)}
              />
            </div>
          ))}
        </div>
      </section>

      {/* 05 · PODCASTS · F14b.2 · Steve Walls upcoming (única excepción firmada §2) */}
      <section className="thinking-sec" data-sec="podcast">
        <div className="thinking-sec__hd">
          <p className="eyebrow">Podcasts</p>
          <span className="thinking-sec__n" data-n />
        </div>
        <h2 className="thinking-h2">Conversations.</h2>
        {/* F18.8 · sin caja gris/negra · card de TEXTO. */}
        <div className="thinking-podcast marks">
          <Link
            className="thinking-podrow mark"
            href="/thinking/steve-walls"
            data-lang="en"
            data-status="upcoming"
            aria-label="Steve Walls · Episode 01 · upcoming"
          >
            <span className="thinking-podrow__o">01</span>
            <div className="thinking-podrow__body">
              <h3 className="thinking-podrow__n">Steve Walls</h3>
              <p className="thinking-podrow__d">
                Former CSO, Publicis Singapore &amp; Saatchi &amp; Saatchi · 1 h
              </p>
              <p className="thinking-podrow__s">Episode 01 · upcoming</p>
            </div>
          </Link>
        </div>
      </section>

      <p className="thinking-empty" data-empty hidden>
        Nothing here yet in this combination.
      </p>
      <div className="thinking-end" />
    </div>
  )
}
