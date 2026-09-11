import type { Metadata } from 'next'
import Link from 'next/link'
import './our-founder.css'

/* ------------------------------------------------------------------
   CRUDA — /our-founder. A.4 rebuild desde cruda-our-founder-v1
   (versión corregida 10-sep-2026).

   Reglas de la copy que aplica el doc (§Implementación):
   - Título "Founder & CEO" en el hero.
   - Cuentas de agencia se nombran como cuentas: "Campaigns for" /
     "accounts for", nunca "worked at". Ya está resuelto en la copy.
   - Purina no Nestlé, Brahma no AB InBev. Naciones Unidas solo con
     el alcance declarado (8M awareness campaign). Ya está resuelto.
   - Karen arranca en 2021 en Bushido; el hecho fuerte es la relación
     que sobrevivió a dos empleadores. Ya está resuelto.
   - CRUDA se registra el mes del layoff. Ya está resuelto.
   - Botones sin flechas ni →. Texto solo.

   Correcciones ya aplicadas al doc (no revertir):
   - $500M / "in under two years" → $300M in revenue (A.1.3, A.1.3b)
   - "retail founder" → "fashion founder" (A.1.3c)
   - $230M in assets → $200M in assets (A.3.6)

   Excluido a propósito por decisión de Fran:
   - Recomendaciones de Baltazar Christensen y Eugenia Debiasi.
   - Photo inline (el doc no la pide; Person schema conserva la
     imagen para OG/entity resolvers).

   Person schema NO se toca. @id, alternateName, sameAs y birthPlace
   quedan exactos.
------------------------------------------------------------------- */

export const metadata: Metadata = {
  title: 'Fran Herrera — Founder & CEO, CRUDA',
  description:
    "I've spent ten years helping companies say what they actually do.",
  alternates: { canonical: 'https://www.thecruda.com/our-founder' },
  openGraph: {
    title: 'Fran Herrera — Founder & CEO, CRUDA',
    description:
      "I've spent ten years helping companies say what they actually do.",
    url: 'https://www.thecruda.com/our-founder',
    type: 'profile',
  },
}

/* Person schema — Task 5 Phase A. NO reescribir. alternateName es
   la pieza que corta la ambigüedad con el cuartetero salteño en
   entity resolvers; "Francisco Herrera" ahí es correcto y es el
   único lugar del repo donde ese string se queda tras A.1.2. */
const PERSON_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://www.thecruda.com/our-founder#person',
  name: 'Fran Herrera',
  alternateName: ['Francisco Herrera', 'Francisco Fran Herrera'],
  jobTitle: 'Founder & CEO',
  worksFor: { '@id': 'https://www.thecruda.com/#organization' },
  birthPlace: 'Salta, Argentina',
  nationality: 'Argentine',
  url: 'https://www.thecruda.com/our-founder',
  image: 'https://www.thecruda.com/fran-herrera.png',
  sameAs: [
    'https://www.linkedin.com/in/franherrera2',
    'https://x.com/franherrera_23',
    'https://thefranherrera.substack.com',
    'https://www.youtube.com/@franherrera2',
    'https://franherrera.me',
  ],
  knowsAbout: [
    'Brand strategy',
    'Narrative systems',
    'Founder positioning',
    'Architecture and design marketing',
    'Influencer marketing',
    'Public relations',
  ],
}

export default function OurFounderPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_SCHEMA) }}
      />
      <div className="of">
        {/* HERO — ink */}
        <section id="hero" data-section="hero" className="of-hero-ink">
          <div className="of-hero-inner">
            <h1 className="of-hero-h1">Fran Herrera</h1>
            <p className="of-hero-kicker">
              Founder &amp; CEO, CRUDA. Abu Dhabi.
            </p>
            <div className="of-hero-body">
              <p>
                I&apos;ve spent ten years helping companies say what they
                actually do.
              </p>
            </div>
          </div>
        </section>

        {/* 01 — WHAT I DO NOW */}
        <section
          id="now"
          data-section="now"
          data-reveal="text"
          className="of-block"
        >
          <div className="of-inner">
            <p className="of-eyebrow">What I do now</p>
            <div className="of-reading of-body">
              <p>
                CRUDA works with founder-led companies at a point of
                inflection: a new market, a new category, a leadership
                handover, a reputation built offline that now has to travel.
              </p>
              <p>
                That&apos;s not a segment I chose. It&apos;s what every
                client has turned out to be.
              </p>
              <p>
                A Lima lighting studio entering Miami after 33 years. A
                hospitality executive of 25 years moving into healthcare. A
                Guatemalan hardwood founder arriving in the United States. A
                fashion founder whose company reached $300M in revenue. A
                design firm handing the work to the next generation.
              </p>
              <p>None of them came for more followers.</p>
            </div>
          </div>
        </section>

        {/* 02 — BEFORE CRUDA */}
        <section
          id="before"
          data-section="before"
          data-reveal="text"
          className="of-block of-block--white"
        >
          <div className="of-inner">
            <p className="of-eyebrow">Before CRUDA</p>
            <div className="of-reading of-body">
              <p>
                Events first, in Salta and then Buenos Aires — Fuckup
                Nights, Endeavor, twenty-plus theatre and comedy shows at
                Luna Park and Gran Rex. Then agencies: influencer
                marketing at Somos Fans, production at Mate.Cool, brand
                at Bushido, on accounts for Mary Kay, Natura, MercadoLibre,
                DirecTV, FOX, Oreo and Brahma, the production of
                TikTok&apos;s official launch event in Argentina, and an
                8M awareness campaign for the United Nations. One of the
                Bushido accounts was TRAZZO — which is how Karen Mannheim
                hired me in early 2021, and why she is still a client.
                Dubai from September 2022, building a branding and
                strategy unit from zero at Luna PR. Then in-house at
                Norhart in Minnesota, a $1M budget and a CEO on a mission
                to halve construction costs. They restructured in February
                2024. I registered CRUDA that month.
              </p>
            </div>
          </div>
        </section>

        {/* 03 — WHAT PEOPLE I'VE WORKED FOR SAY */}
        <section
          id="voices"
          data-section="voices"
          data-reveal="text"
          className="of-block"
        >
          <div className="of-inner">
            <p className="of-eyebrow">What people say</p>

            <div className="of-testimonials">
              <figure className="of-testimonial">
                <blockquote>
                  <p>
                    Any founder who spent decades building something good
                    knows this problem: the work is excellent and nobody
                    outside your circle finds out.
                  </p>
                  <p>
                    I had it for twenty-eight years. In early 2021 I decided
                    to become visible and I hired Fran. Five years later,
                    TRAZZO is not the same company.
                  </p>
                </blockquote>
                <figcaption className="of-testimonial-attrib">
                  <strong>Karen Mannheim</strong> — Lighting Designer,
                  Miami. Client. <em>(August 2026)</em>
                </figcaption>
              </figure>

              <a
                className="of-linkedin-link"
                href="https://www.linkedin.com/in/franherrera2/details/recommendations/"
                target="_blank"
                rel="noopener noreferrer"
              >
                See the recommendations on LinkedIn
              </a>
            </div>
          </div>
        </section>

        {/* 04 — THE SHORT VERSION */}
        <section
          id="short"
          data-section="short"
          data-reveal="text"
          className="of-block"
        >
          <div className="of-inner">
            <p className="of-eyebrow">The short version</p>

            <div className="of-short-body">
              <p>
                Born in Salta, in the north of Argentina, to a
                working-class family. Dropped out of university after six
                months.
              </p>
              <p>
                Ten years later I&apos;ve worked in events, influencer
                marketing, PR, brand strategy and communications, in
                Argentina, the UAE and the United States. I&apos;ve been
                the agency guy and the in-house guy. I&apos;ve been laid
                off.
              </p>
              <p className="of-short-close">
                I know what it costs to build something good and have
                nobody notice.
              </p>
            </div>

            {/* Botones sin flechas — texto tipográfico. Brief §5:
                "See the work" apunta a /#selected-work, NO a /work
                ni a /clients que redirigen a la raíz. */}
            <div className="of-cta-row">
              <Link href="/#selected-work" className="of-cta">
                See the work
              </Link>
              <Link href="/contact" className="of-cta">
                Start a conversation
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
