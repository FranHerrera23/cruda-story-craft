import LibraryBrowser from '@/components/LibraryBrowser'
import libraryArticles from '@/content/articles.json'
import type { Metadata } from 'next'
import Link from 'next/link'
import { allEssays } from '@/content/essays'
import { collectionPageSchema } from '@/lib/collection-schema'
import type { Resource, ResourceCompany } from '@/content/resources'
import NewsletterCTA from '@/components/NewsletterCTA'
import './thinking.css'

/* /thinking · F58 · 27-oct · Narrative Sparring landing.

   Reemplaza al layout F54. Esta página es ahora la puerta del
   ecosistema: todo (reels, LinkedIn, home) apunta acá.

   Estructura (brief F58 §C.2):
     1. Top block · izquierda h1 + lede · derecha intro + form thin.
     2. Toggle English / Español en una fila propia.
     3. Latest · imagen 16:9 (cols 1-7) + meta/título/dek (cols 8-12).
     4. All essays · filas sin imagen (fecha / título+dek / min · Also).
     5. Cierre negro (--ink-deep) · h2 + NewsletterCTA bar dark.

   Sale: aside de suscripción chico, "Podcast · Upcoming" de
   Steve Walls (la ruta queda, solo no se lista), "Case studies
   live in Work →".

   Copy fija: en EN. En ES (`?lang=es`) se renderiza con la misma
   copy EN (brief F58 §C.2) hasta que exista traducción aprobada.
   Los metadatos de ensayos (fechas, min read) sí se formatean en
   el idioma activo. */

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
  readingMinutes?: number
  publishedAt: string
  heroImage?: string
  heroAlt?: string
  altLang?: Lang
}

const ARTICLE_ROWS: Row[] = ARTICLES.map(e => {
  const language = (e.language ?? 'en') as Lang
  const alt = e.alternates
  const altEs = language === 'en' && alt?.es ? ('es' as const) : undefined
  const altEn = language === 'es' && alt?.en ? ('en' as const) : undefined
  return {
    slug: e.slug,
    href: `/thinking/${e.slug}`,
    title: e.title,
    dek: e.deck || undefined,
    language,
    readingMinutes: e.readingMinutes,
    publishedAt: e.publishedAt,
    heroImage: e.heroImage,
    heroAlt: e.heroAlt,
    altLang: altEs ?? altEn,
  }
})

const ALL_ROWS = ARTICLE_ROWS

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

const READ_LABEL: Record<Lang, string> = {
  en: 'min read',
  es: 'min de lectura',
}

const ALSO_LABEL: Record<Lang, string> = {
  en: 'Also in Español',
  es: 'Also in English',
}

function metaText(row: Row, viewLang: Lang): string {
  const parts: string[] = []
  if (row.publishedAt) parts.push(fmtDate(row.publishedAt, viewLang))
  if (row.readingMinutes) {
    parts.push(`${row.readingMinutes} ${READ_LABEL[viewLang]}`)
  }
  if (row.altLang) parts.push(ALSO_LABEL[viewLang])
  return parts.join(' · ')
}

/* ------- Metadata (dinámica por lang) ------- */

const BASE_TITLE = 'Narrative Sparring · CRUDA'
const BASE_DESC =
  'Ensayos y artículos de CRUDA sobre marca, estrategia y comunicación. Criterio y casos para decisiones de negocio.'

export async function generateMetadata({
  searchParams,
}: {
  searchParams?: Promise<{ lang?: string; type?: string }>
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
      images: [{
        url: 'https://www.thecruda.com/logo.png',
        width: 1080, height: 1080, alt: 'CRUDA',
      }],
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
  searchParams?: Promise<{ lang?: string; type?: string }>
}) {
  const params = (await searchParams) ?? {}
  const viewLang: Lang = params.lang === 'es' ? 'es' : 'en'

  const viewType = params.type === 'articles' ? 'articles' : params.type === 'essays' ? 'essays' : 'all'
  const rows = ALL_ROWS.filter(r => r.language === viewLang)
  const [featured, ...rest] = viewType === 'articles' ? [] : rows

  return (
    <div className="thinking thinking--v2" data-lang={viewLang}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
      />

      {/* ============ Top block (brief §C.2 bloque superior) ============ */}
      <section className="t2-hero" aria-labelledby="t2-hero-h1">
        <div className="t2-hero__left">
          <p className="t2-hero__eyebrow">Newsletter · One essay a week</p>
          <h1 id="t2-hero-h1" className="t2-hero__h">Narrative Sparring</h1>
          <div className="t2-hero__rule" aria-hidden="true" />
          <p className="t2-hero__lede">
            A sparring partner hits back so you get stronger.<br />
            Muhammad Ali had Larry Holmes.<br />
            Warren Buffett had Charlie Munger.<br />
            Your company has us.
          </p>
        </div>

        <div className="t2-hero__right">
          <p className="t2-hero__intro">
            One essay a week on the stories that shape business and culture. The full essay lives here; the email is how you know it went up.
          </p>
          <NewsletterCTA
            variant="light"
            shape="thin"
            ctaLabel="Get Narrative Sparring →"
            helper="Unsubscribe anytime. Written by Fran Herrera, in English and Spanish."
            source="/thinking"
          />
        </div>
      </section>

      <LibraryBrowser initialType={params.type === 'articles' || params.type === 'essays' ? params.type : 'all'} initialLang={params.lang === 'es' || params.lang === 'en' ? params.lang : 'all'} rows={[
        ...ARTICLE_ROWS.map(r => ({...r,kind:'essays' as const})),
        ...libraryArticles.map(a=>({slug:a.slug,href:`/thinking/${a.slug}`,title:a.title,dek:a.description,language:'es',readingMinutes:a.minutes,publishedAt:a.publishedAt,kind:'articles' as const})),
      ].sort((a,b)=>b.publishedAt.localeCompare(a.publishedAt))} />

      {/* ============ Cierre negro ============ */}
      <section className="t2-close">
        <div className="t2-close__in">
          <div className="t2-close__left">
            <p className="t2-close__eyebrow">Narrative Sparring</p>
            <h2 className="t2-close__h">
              Every week, one story that changes how you tell yours.
            </h2>
          </div>
          <div className="t2-close__right">
            <NewsletterCTA
              variant="dark"
              shape="thin"
              ctaLabel="Get Narrative Sparring →"
              helper="Unsubscribe anytime."
              source="/thinking#close"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
