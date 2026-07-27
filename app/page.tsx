import type { Metadata } from 'next';
import './home.css';

/* ------------------------------------------------------------------
   CRUDA — Home (`/`). Etapa 3.
   Copy locked from thecruda-home.html — 52 words, do not modify.
   La madre no captura nada: no form, no CTA button. Declares.
------------------------------------------------------------------- */

export const metadata: Metadata = {
  title: 'CRUDA — Find the essence. Strip the bullshit.',
  description:
    'CRUDA builds people. Companies follow. Nobody buys the company — they buy you. Architecture & Design, Sports, AI Concierge.',
  alternates: { canonical: 'https://www.thecruda.com' },
  openGraph: {
    title: 'CRUDA — Find the essence. Strip the bullshit.',
    description:
      'We build people. Companies follow. Nobody buys the company — they buy you.',
    url: 'https://www.thecruda.com',
    type: 'website',
  },
};

const ORG_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'CRUDA',
  url: 'https://www.thecruda.com',
  slogan: 'Find the essence. Strip the bullshit.',
  description:
    'CRUDA builds people. Companies follow. Nobody buys the company — they buy you.',
  founder: {
    '@type': 'Person',
    name: 'Francisco Herrera',
    jobTitle: 'Founder',
  },
  subOrganization: [
    {
      '@type': 'Organization',
      name: 'CRUDA Architecture & Design',
      url: 'https://www.thecruda.com/architecture-design',
    },
    {
      '@type': 'Organization',
      name: 'CRUDA Sports',
      url: 'https://www.thecruda.com/sports',
    },
    {
      '@type': 'Organization',
      name: 'CRUDA AI Concierge',
      url: 'https://www.thecruda.com/ai-concierge',
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }}
      />
      <div className="cruda-home-root cruda-home">
        <div className="shell">
          <main className="mid">
            <p className="mono etym">
              Cruda &middot; <span className="etym-raw">raw, in Spanish</span>
            </p>

            <h1 className="manifesto display">
              <span className="line-1">Find the essence.</span>
              <span className="line-2">Strip the bullshit.</span>
            </h1>

            <div className="say">
              <p className="say-2">We build people. Companies follow.</p>
              <p className="punch">Nobody buys the company. They buy you.</p>
            </div>

            <ul className="principles mono">
              <li>We find stories, we don&apos;t invent them</li>
              <li>No urgency, no bullshit, ever</li>
              <li>Raw over polished. Slow is fine</li>
            </ul>
          </main>

          <footer className="foot">
            <span className="mono yr">CRUDA &copy; 2026</span>
          </footer>
        </div>
      </div>
    </>
  );
}
