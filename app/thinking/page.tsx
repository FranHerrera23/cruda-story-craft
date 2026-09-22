import type { Metadata } from 'next'
import Link from 'next/link'
import ThinkingFilters from './ThinkingFilters'
import StartHere from '@/components/StartHere'
import { allEssays } from '@/content/essays'
import { collectionPageSchema } from '@/lib/collection-schema'
import type { Resource, ResourceCompany } from '@/content/resources'
import './thinking.css'

/* /thinking · F23-2 · 22-sep · Fran §3.5 v2.

   Hero mantiene el split (h1 · lede) al mismo token que /services.
   Regla naranja SOLO bajo el h1.
   h2 "What we are thinking about." en token de h2 de sección, sin regla.
   Case studies usan el componente de card de Selected Work
   (imagen 1:1, título, segunda línea, descripción). */

const ARTICLES = allEssays
  .filter(e => {
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

/* Cards de case studies · misma anatomía que Selected Work en la home:
   imagen 1:1, título, empresa · ciudad, descripción. */
const CASE_STUDIES = [
  {
    n: '01',
    name: 'Karen Mannheim',
    meta: 'TRAZZO Lighting · Miami',
    description:
      "Lights ten to two hundred million dollar homes; one of Forbes Perú's 50 most powerful women, 2026.",
    href: '/work/karen-mannheim',
    imageSrc: '/karen-mannheim.webp',
    objectPosition: 'center 20%',
  },
  {
    n: '02',
    name: 'Mike Kaeding',
    meta: 'Norhart · Minneapolis',
    description:
      'CEO of Norhart, $230M in assets created, on a mission to halve the cost of housing.',
    href: '/work/mike-kaeding',
    imageSrc: '/mike-kaeding.webp',
    objectPosition: 'center 30%',
  },
  {
    n: '03',
    name: 'Girish Sehgal',
    meta: 'Sheikh Shakhbout Medical City · Abu Dhabi',
    description:
      "Former Four Seasons GM, bringing hospitality into the UAE's biggest medical city.",
    href: '/work/girish-sehgal',
    imageSrc: '/girish-sehgal.webp',
    objectPosition: 'center 15%',
  },
] as const

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
    <div className="thinking">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
      />

      {/* 01 · OPENER · única regla naranja de la página, bajo el h1. */}
      <section className="thinking-open">
        <h1 className="thinking-open__h">Thinking</h1>
        <div className="thinking-open__b">
          <p className="thinking-open__lede">
            Pieces on narrative, brand, and the founders who build them.
            Written for people who have to make decisions, not for people
            who write about them.
          </p>
        </div>
        <div className="thinking-rule thinking-rule--hero" />
      </section>

      <ThinkingFilters
        hasCases={CASE_STUDIES.length > 0}
        hasPodcasts={true}
      />

      {/* 03 · ARTICLES · h2 sin regla. */}
      <section className="thinking-sec" data-sec="article">
        <div className="thinking-sec__hd">
          <p className="eyebrow">Articles</p>
          <span className="thinking-sec__n" data-n />
        </div>
        <h2 className="thinking-name">What we are thinking about.</h2>
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

      {/* 04 · CASE STUDIES · componente de card de Selected Work
          (imagen 1:1, título, segunda línea, descripción). */}
      <section className="thinking-sec" data-sec="case">
        <div className="thinking-sec__hd">
          <p className="eyebrow">Case studies</p>
          <span className="thinking-sec__n" data-n />
        </div>
        <h2 className="thinking-name">The work, and what it moved.</h2>
        <div className="thinking-sw-grid marks">
          {CASE_STUDIES.map(c => (
            <Link
              key={c.n}
              className="thinking-sw-card mark"
              href={c.href}
              data-lang="en"
              aria-label={c.name}
            >
              <div className="thinking-sw-card__m">
                <img
                  className="thinking-sw-card__img"
                  src={c.imageSrc}
                  alt=""
                  loading="lazy"
                  style={{ objectPosition: c.objectPosition }}
                />
              </div>
              <h3 className="thinking-sw-card__n">{c.name}</h3>
              <p className="thinking-sw-card__meta">{c.meta}</p>
              <p className="thinking-sw-card__desc">{c.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* 05 · PODCASTS */}
      <section className="thinking-sec" data-sec="podcast">
        <div className="thinking-sec__hd">
          <p className="eyebrow">Podcasts</p>
          <span className="thinking-sec__n" data-n />
        </div>
        <h2 className="thinking-name">Conversations.</h2>
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

      {/* START HERE · F23-5. */}
      <StartHere h2="Did one of these pieces describe your company?" />

      <div className="thinking-end" />
    </div>
  )
}
