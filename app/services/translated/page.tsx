import type { Metadata } from 'next'
import Link from 'next/link'
import StartHere from '@/components/StartHere'
import '../services.css'
import './translated.css'

/* /services/translated · F23-4 · 22-sep · Fran §5.

   Página del plano Translated.
   Antes esta ruta era /process (proceso genérico); ahora es la página
   del servicio Translated. La vieja /process → 301 → esta URL, un
   solo salto (next.config.mjs).

   Sistema: fondo --paper, Archivo, tokens del sistema. Una sola regla
   naranja, bajo el h1. h2 de sección sin regla.

   Sale: grilla de fondo, rail vertical, números fantasma 01/02/03,
   cuerpo en mayúsculas espaciadas, la comparación Agencies / Surfaces. */

const BASE = 'https://www.thecruda.com'

const TRANSLATED_TITLE = 'Translated · CRUDA'
const TRANSLATED_DESCRIPTION =
  'Translated: twelve weeks, $19,500 flat. The narrative system CRUDA builds with a founder, and what the company keeps running without us.'

const COST_LINE =
  'Fees cover our work. Any third-party costs are paid by the client directly.'

export const metadata: Metadata = {
  title: TRANSLATED_TITLE,
  description: TRANSLATED_DESCRIPTION,
  alternates: { canonical: `${BASE}/services/translated` },
  openGraph: {
    title: TRANSLATED_TITLE,
    description: TRANSLATED_DESCRIPTION,
    url: `${BASE}/services/translated`,
    type: 'website',
    images: [
      { url: `${BASE}/logo.png`, width: 1080, height: 1080, alt: 'CRUDA' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TRANSLATED_TITLE,
    description: TRANSLATED_DESCRIPTION,
    images: [`${BASE}/logo.png`],
  },
}

const WEEKS = [
  {
    label: 'WEEKS 1—4 · RESEARCH AND NARRATIVE PLATFORM',
    h3: 'Anyone who looks you up finds something that backs you up.',
    body: 'We start with the founder in the room and with our 5C research: what the company actually does, and what the market currently believes about it. The gap between the two becomes the narrative platform, and the founder manuscript, written so the founder recognises every line as their own.',
  },
  {
    label: 'WEEKS 5—8 · FOUR CONTENT PILLARS',
    h3: 'People who never heard of you start reading you.',
    body: 'The pillars come out of the research, not out of a calendar. Every angle is locked before anything is written, and every one is tagged to who it is for. Then the articles, the case studies and the posts are written and scheduled.',
  },
  {
    label: 'WEEKS 9—12 · WEBSITE AND CADENCE',
    h3: 'You stop hoping the right people see it.',
    body: 'The website is rebuilt to tell the story the pillars already tell. The last weeks set the working cadence: who publishes what, where and how often, so the company keeps the system running without us.',
  },
] as const

const KEEPS = [
  'A narrative platform',
  'A founder manuscript',
  'Four content pillars',
  'A website that tells the story',
  'A working cadence to publish and distribute',
] as const

export default function TranslatedPage() {
  return (
    <main className="translated">
      {/* 01 · HERO · única regla naranja de la página. */}
      <section className="translated-hero">
        <Link className="translated-back" href="/services">
          ← Services
        </Link>
        <p className="eyebrow">01 · Building the system</p>
        <h1 className="translated-h1">Translated</h1>
        <div className="translated-rule" />
        <p className="translated-lede">
          Twelve weeks to build the system a company uses to say what it
          is.
        </p>
        <p className="translated-body">
          It starts with the founder in the room and ends with a system
          the company keeps running without us: a narrative platform, a
          founder manuscript, four content pillars, a website that tells
          the story, and a working cadence to publish and distribute it.
        </p>

        <div className="translated-data">
          <div className="cell">
            <p className="cell__l">For</p>
            <p className="cell__v">A founder, CMO or head of marketing</p>
          </div>
          <div className="cell">
            <p className="cell__l">Runs</p>
            <p className="cell__v">Twelve weeks</p>
            <p className="cell__n">50% to begin, 50% at month three</p>
          </div>
          <div className="cell">
            <p className="cell__l">Fee</p>
            <p className="cell__v cell__fee">$19,500</p>
            <p className="cell__n">Flat</p>
            <p className="cell__n">{COST_LINE}</p>
          </div>
        </div>
      </section>

      {/* 02 · The twelve weeks · h2 sin regla. */}
      <section className="translated-sec">
        <h2 className="translated-h2">The twelve weeks.</h2>
        <div className="translated-weeks">
          {WEEKS.map(w => (
            <div key={w.label} className="translated-week">
              <p className="translated-week__l">{w.label}</p>
              <div className="translated-week__body">
                <h3 className="translated-week__h">{w.h3}</h3>
                <p className="translated-week__p">{w.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 03 · What you keep · h2 sin regla. */}
      <section className="translated-sec">
        <h2 className="translated-h2">What you keep.</h2>
        <ul className="translated-keeps">
          {KEEPS.map(k => (
            <li key={k}>{k}</li>
          ))}
        </ul>
        <p className="translated-see-in">
          See it in:{' '}
          <Link href="/work/karen-mannheim">Karen Mannheim</Link> ·{' '}
          <Link href="/work/girish-sehgal">Girish Sehgal</Link> ·{' '}
          <Link href="/work/mannheim-trading">José Mannheim</Link> ·{' '}
          <Link href="/work/juan-pablo-romero">JP Romero</Link> ·{' '}
          <Link href="/work/inout">INOUT</Link>
        </p>
      </section>

      {/* 04 · START HERE · F23-5 */}
      <StartHere h2="Twelve weeks start with forty-five minutes." />
    </main>
  )
}
