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
              <p>
                Eight of those years inside agencies in Argentina, on
                accounts for TikTok, Brahma, Oreo, DirecTV, Mary Kay and
                MercadoLibre. Two in-house in Dubai and the United States.
                Since February 2024, running CRUDA.
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

            <div className="of-chapter">
              <h3 className="of-chapter-h">Salta, 2016–2020 · Events</h3>
              <div className="of-reading of-body">
                <p>
                  Started producing. Fuckup Nights in Salta, 2016. An
                  internship at <strong>Endeavor Argentina</strong> in
                  2017, running entrepreneurship events across three cities
                  in the north — including the 50th anniversary of
                  UCASAL&apos;s Economics department: fifteen C-level
                  speakers, 600 attendees, USD 20,000 budget.
                </p>
                <p>
                  Then <strong>Quiero Stand Up!</strong> in Buenos Aires,
                  first as junior planner, then as Senior Event &amp; PR
                  Manager. Twenty-plus theatre and comedy shows, 20,000
                  tickets, Luna Park and Gran Rex.
                </p>
                <p>
                  I learned there that a room full of people is a narrative
                  problem before it&apos;s a logistics problem.
                </p>
              </div>
            </div>

            <div className="of-chapter">
              <h3 className="of-chapter-h">
                Buenos Aires, 2017–2020 · Agencies
              </h3>
              <div className="of-reading of-body">
                <p>
                  <strong>Somos Fans</strong>, influencer marketing,
                  2017–2018. Campaigns for Mary Kay, Natura, Havanna,
                  Mastercard, MercadoLibre, DogHero, DirecTV and
                  McDonald&apos;s. On-site content at Mary Kay&apos;s
                  year-end event with their CMO. Social tracking for
                  DirecTV&apos;s Barcelona–Real Madrid campaigns.
                </p>
                <p>
                  <strong>Mate.Cool</strong>, 2018–2019. Influencer
                  campaigns for LATAM brands: DirecTV, FOX, TikTok, Oreo,
                  Brahma, PedidosYa, the Argentine Polo Association.
                  Production on <strong>TikTok&apos;s official launch event
                  in Argentina</strong>, negotiating with twenty-plus
                  creators. Support to the commercial and PR lead for the
                  three biggest football influencers during the 2018 World
                  Cup.
                </p>
                <p>
                  Freelance across those years: <strong>CCU</strong>{' '}
                  (Cerveza Imperial, Cerveza Salta), an audiovisual
                  production for <strong>Purina</strong>, and an 8M
                  awareness campaign with women&apos;s health professionals
                  for <strong>the United Nations</strong>.
                </p>
              </div>
            </div>

            <div className="of-chapter">
              <h3 className="of-chapter-h">Salta, 2020–2022 · Brand</h3>
              <div className="of-reading of-body">
                <p>
                  <strong>Bushido Advertising Global</strong>, Senior PR
                  &amp; Account Manager, then Junior Brand Manager. Two
                  years and three months. Brand development for
                  fifteen-plus companies in hospitality, real estate,
                  supply chain, architecture and lighting design.
                </p>
                <p>
                  One of those accounts was <strong>TRAZZO</strong>,
                  Peru&apos;s most exclusive lighting and luxury furniture
                  company, and the personal brand of its founder, Karen
                  Mannheim. That work led to a collaboration with
                  Architectural Digest.
                </p>
                <p>
                  Karen hired me in early 2021. She is still a client
                  today. That relationship has outlasted two of my
                  employers.
                </p>
              </div>
            </div>

            <div className="of-chapter">
              <h3 className="of-chapter-h">
                Dubai and Abu Dhabi, 2022–2023
              </h3>
              <div className="of-reading of-body">
                <p>Emigrated in September 2022.</p>
                <p>
                  <strong>Luna PR</strong>, Dubai. PR Strategist, then
                  Brand Strategy Manager. Built the agency&apos;s branding
                  and strategy unit from zero. Brand strategy and identity
                  for VOY Finance, APAD, and BillionAir. Clients and teams
                  across the UK, USA, Czech Republic, Saudi Arabia,
                  Sweden, China, Spain and Israel.
                </p>
                <p>
                  <strong>VOY Finance</strong>, 2023. Led the rebrand of a
                  fintech operating in Estonia and the UK — identity,
                  positioning, tagline, messaging, tone of voice, and the
                  full website.
                </p>
              </div>
            </div>

            <div className="of-chapter">
              <h3 className="of-chapter-h">
                Minnesota, remote, 2023–2024
              </h3>
              <div className="of-reading of-body">
                <p>
                  <strong>Norhart</strong>. Brand &amp; Communications
                  Strategist for a residential construction company with
                  1,000+ apartments delivered and $200M in assets, working
                  directly with CEO Mike Kaeding on a mission to halve
                  construction costs.
                </p>
                <p>
                  A $1M marketing budget. Copy for the CEO&apos;s LinkedIn
                  that reached 100,000 impressions in its first month.
                  Website copy for norhart.com/invest, an SEC-regulated
                  investment platform. Two months of coaching with Dean
                  Rotbart, former Wall Street Journal reporter.
                </p>
                <p>
                  In February 2024 they announced my layoff in a
                  restructuring. I registered CRUDA that same month.
                </p>
              </div>
            </div>

            <div className="of-chapter">
              <h3 className="of-chapter-h">
                Los Angeles, remote, 2024–2025
              </h3>
              <div className="of-reading of-body">
                <p>
                  <strong>BAUHOME</strong>, brand and marketing strategy
                  from scratch — a luxury kitchen, closet and bath showroom
                  backed by The Baumann Group, a German manufacturer
                  founded in 1917 that produces 140,000 kitchens a year
                  across 700+ showrooms.
                </p>
              </div>
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
            <p className="of-eyebrow">
              What people I&apos;ve worked for say
            </p>

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

              <figure className="of-testimonial">
                <blockquote>
                  <p>
                    Fran is creative, intuitive, and enthusiastic. He did a
                    great job for us managing multiple campaigns, social
                    media, and creatives. He actively contributes to a
                    positive team culture and is just fun.
                  </p>
                </blockquote>
                <figcaption className="of-testimonial-attrib">
                  <strong>Stacy Ekholm</strong> — SVP Property Operations,
                  Norhart. Managed Fran directly. <em>(March 2024)</em>
                </figcaption>
              </figure>

              <figure className="of-testimonial">
                <blockquote>
                  <p>
                    He has a comprehensive profile for account management:
                    strategy, brand identity, copywriting, sales, PR, event
                    management, and business development. I&apos;ve worked
                    with him on projects as a Creative Director for real
                    estate brands.
                  </p>
                </blockquote>
                <figcaption className="of-testimonial-attrib">
                  <strong>Oscar Gramajo</strong> — Creative Director.
                  Managed Fran directly. <em>(March 2023)</em>
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
          className="of-block of-block--ink"
        >
          <div className="of-inner">
            <p className="of-eyebrow of-eyebrow--on-ink">
              The short version
            </p>

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

            {/* Botones sin flechas ni →. Texto solo (regla del doc). */}
            <div className="of-cta-row">
              <Link href="/work" className="of-cta">
                See the work
              </Link>
              <Link href="/contact" className="of-cta of-cta--ghost">
                Start a conversation
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
