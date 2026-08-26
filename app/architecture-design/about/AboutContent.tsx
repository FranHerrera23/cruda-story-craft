import Image from 'next/image';
import Link from 'next/link';
import franPhoto from '@/assets/fran-herrera-new.png';
import michaelPhoto from '@/assets/michael-choi-pugliano-new.png';
import nataliaPhoto from '@/assets/natalia-dmitrieva.jpg';
import isabellaPhoto from '@/assets/isabella-marinelli.png';
import bryanPhoto from '@/assets/bryan-surfer.jpg';
import './about.css';

/* ------------------------------------------------------------------
   CRUDA — /architecture-design/about (E1 rebuild).

   Server component (antes era 'use client' con inline styles y
   observer JS). CSS en about.css. Sistema tipográfico y de color por
   token — cero literales.

   Contenido migrado literal del template anterior: cada headline,
   cada párrafo, cada bio, cada logo tag, el placeholder de Abril.
   La ÚNICA modificación de copy es la fusión del CTA final ("The
   work was always the story. Let's make sure it travels") como
   pidió el brief E1.

   Estructura NDS: hero tipográfico → secciones I/II/III/IV con
   hairline arriba y numeral romano en mono a la izquierda →
   línea de CTA. Sin bloque negro con botón, sin footer inline.

   Reveal por CSS solo — animation-timeline: view() cuando el browser
   lo soporta, baseline visible cuando no. Cero observer JS. */

type TeamMember = {
  n: string;
  name: string;
  role: string;
  bio: string[];
  logoTags?: string[];
  flip?: boolean;
  photo?: { src: string; width: number; height: number };
  placeholder?: { top: string; bottom: string };
};

const TEAM: TeamMember[] = [
  {
    n: '01',
    name: 'Fran',
    role: 'Founder',
    photo: franPhoto,
    bio: [
      "Argentine. Lived in Russia for a decade. Worked across three continents with ten nationalities — TikTok, Nestlé, the United Nations, DeliveryHero.",
      "Every immigrant knows the same gap: you know exactly who you are, but the words don't travel.",
      "That's not theory. That's Tuesday morning.",
      "Now I sit with founders who have the same problem — and we find the words together.",
    ],
    logoTags: ['TikTok', 'Mondelez', 'Nestlé', 'United Nations', 'DeliveryHero', 'AB InBev'],
  },
  {
    n: '02',
    name: 'Michael',
    role: 'Creative Director',
    photo: michaelPhoto,
    flip: true,
    bio: [
      "Grew up making things — then spent a decade making things at Amazon, Twitch, EA, LucasArts, Marvel, Facebook.",
      "In-house and agency side. Every seat at the table. The thing he kept noticing: the best brands aren't the loudest. They're the ones people feel before they can explain why.",
      "That's what he builds here.",
    ],
    logoTags: ['Amazon', 'Twitch', 'EA', 'Facebook', 'Oculus', 'LucasArts', 'Marvel'],
  },
  {
    n: '03',
    name: 'Bryan',
    role: 'Film Director',
    photo: bryanPhoto,
    bio: [
      "A surfer who found his way behind the camera. Over a decade directing stories for retail brands — leading marketing teams at O'Neill Peru, bridging film, e-commerce, and the kind of content that makes people stop scrolling and actually feel something.",
      "Bryan doesn't shoot content. He captures the work the way it deserves to be seen — with the patience of someone who's spent years waiting for the right wave.",
    ],
  },
  {
    n: '04',
    name: 'Natalia',
    role: 'Business Strategist',
    photo: nataliaPhoto,
    flip: true,
    bio: [
      "Spent years in pharma running accounts across borders — GSK, Lundbeck, Dr. Reddy's. Then she left.",
      "Eight years in Spain. Thirty-five countries. Three languages. A life built around art, cats, and the belief that you don't have to stay on the path someone else drew for you.",
      "She keeps everything running so the rest of us can think.",
    ],
  },
  {
    n: '05',
    name: 'Isabella',
    role: 'Digital Strategist',
    photo: isabellaPhoto,
    bio: [
      "Forty-something startups across five cities — Dubai, Hong Kong, New York, London, Buenos Aires. Somewhere along the way she ended up in Puglia.",
      "Now she teaches AI and digital strategy, studies at Bocconi, and helps founders say clearly what they've been circling around for years.",
      "She's the one who looks at everything you've built and asks the question you've been avoiding.",
    ],
  },
  {
    n: '06',
    name: 'Abril',
    role: 'Narrative Strategist',
    flip: true,
    placeholder: {
      top: 'Buenos Aires → Bangkok → Mexico City.',
      bottom: 'She keeps moving.',
    },
    bio: [
      'Buenos Aires → Bangkok → Mexico City. She keeps moving.',
      "Built Aftertaste — a newsletter about culture, fashion, and the things that stay with you after you close the tab. Half a million people read it.",
      "Abril writes the pieces you send to someone with no context and just say: 'read this.'",
    ],
  },
];

export default function AboutContent() {
  return (
    <div className="about-root">
      <article className="about grid-container">
        {/* --------- HERO --------- */}
        <header className="about-hero">
          <p className="about-hero-eyebrow mono">About</p>
          <h1 className="about-hero-h1 display--sm">
            Trust moved. <em>We followed.</em>
          </h1>
          <p className="about-hero-body">
            It used to live in institutions &mdash; media, government, corporations.
            That&apos;s over. Now trust moves person to person. Your clients don&apos;t
            buy your company. They buy you. Your story. Your voice. Your struggle.
          </p>
          <blockquote className="about-hero-pull">
            Most founders have spent decades building expertise &mdash; not
            explaining&nbsp;it. That gap is where we live.
          </blockquote>
          {/* Slot de imagen preparado — cuando exista arte de hero:
              <figure className="about-hero-image"><Image ... /></figure>
              Mientras no exista, no renderea nada y no ocupa hueco. */}
        </header>

        {/* --------- I. PHILOSOPHY --------- */}
        <section className="about-section" id="philosophy">
          <div className="about-section-head">
            <span className="about-section-n">I</span>
            <span className="about-section-name">Philosophy</span>
          </div>
          <div className="about-section-body">
            <h2>
              The best work doesn&apos;t come from adding. It comes from stripping away.
            </h2>
            <p>
              Rick Rubin taught us that the only thing worth keeping is what&apos;s
              essential. We don&apos;t layer on marketing. We don&apos;t invent a story
              for you. We find the one that&apos;s already there &mdash; the pattern
              inside your work, your decisions, your life &mdash; and we make it travel.
            </p>
            <p className="about-section-quote">
              &ldquo;The personal is universal.&rdquo;
            </p>
          </div>
        </section>

        {/* --------- II. ETYMOLOGY --------- */}
        <section className="about-section" id="etymology">
          <div className="about-section-head">
            <span className="about-section-n">II</span>
            <span className="about-section-name">Etymology</span>
          </div>
          <div className="about-section-body">
            <p className="about-etym-word">Cruda</p>
            <p className="about-etym-lead">Raw, in Spanish.</p>
            <p>
              The story before it&apos;s been shaped. Before the agency polished it.
              Before the consultant diluted it. Before the committee killed it.
            </p>
            <p>
              <strong>We don&apos;t create from nothing. We find what&apos;s already there.</strong>
            </p>
          </div>
        </section>

        {/* --------- III. THE TEAM --------- */}
        <section className="about-section" id="team">
          <div className="about-section-head">
            <span className="about-section-n">III</span>
            <span className="about-section-name">The Team</span>
          </div>
          <div className="about-section-body">
            <div className="about-team-intro">
              <h2>Lean by design. Senior by default.</h2>
              <p>
                No account managers. No junior handoffs. Every person on this page
                touches your work directly.
              </p>
            </div>
            <ul className="about-team-list">
              {TEAM.map((m) => (
                <li key={m.n} className={`about-member${m.flip ? ' flip' : ''}`}>
                  <div className="about-member-photo">
                    {m.photo ? (
                      <Image
                        src={m.photo}
                        alt={m.name}
                        width={m.photo.width}
                        height={m.photo.height}
                        sizes="(max-width: 767px) 100vw, 40vw"
                      />
                    ) : m.placeholder ? (
                      <div className="about-member-placeholder">
                        <span>
                          {m.placeholder.top}
                          <br />
                          {m.placeholder.bottom}
                        </span>
                      </div>
                    ) : null}
                  </div>
                  <div className="about-member-bio">
                    <span className="about-member-n">{m.n}</span>
                    <h3 className="about-member-name">{m.name}</h3>
                    <p className="about-member-role">{m.role}</p>
                    <div className="about-member-bio-text">
                      {m.bio.map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                    </div>
                    {m.logoTags && m.logoTags.length > 0 && (
                      <div className="about-member-logos" aria-label={`${m.name} — previous clients`}>
                        {m.logoTags.map((tag) => (
                          <span key={tag} className="about-member-logo">{tag}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* --------- IV. HOW WE WORK --------- */}
        <section className="about-section" id="how-we-work">
          <div className="about-section-head">
            <span className="about-section-n">IV</span>
            <span className="about-section-name">How We Work</span>
          </div>
          <div className="about-section-body">
            <div className="about-values">
              <div className="about-value">
                <h4>No handoffs.</h4>
                <p>
                  The person you talk to is the person doing the work. Strategy and
                  execution, same hands.
                </p>
              </div>
              <div className="about-value">
                <h4>No templates.</h4>
                <p>
                  Every narrative is built from scratch. Your story isn&apos;t a
                  fill-in-the-blank exercise.
                </p>
              </div>
              <div className="about-value">
                <h4>No busywork.</h4>
                <p>
                  We don&apos;t create content to fill a calendar. Everything serves
                  the narrative or it doesn&apos;t exist.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --------- CTA line --------- */}
        {/* E1: fusión del H2 + sub anteriores en una sola línea con .link.
            Es la única pieza de contenido que se toca en toda la migración.
            "Let's make sure it travels" → /contact. */}
        <p className="about-cta-line">
          The work was always the story.{' '}
          <Link href="/contact" className="link">
            Let&apos;s make sure it travels
          </Link>
          .
        </p>
      </article>
    </div>
  );
}
