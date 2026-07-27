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
    'CRUDA creates, scales and invests in people who know that nobody buys the company. They buy you. Architecture & Design, Sports, AI Concierge.',
  alternates: { canonical: 'https://www.thecruda.com' },
  openGraph: {
    title: 'CRUDA — Find the essence. Strip the bullshit.',
    description:
      'We create, scale and invest in people who know that nobody buys the company. They buy you.',
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
    'CRUDA creates, scales and invests in people who know that nobody buys the company. They buy you.',
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
              <p className="say-2">
                We create, scale and invest in people who know that nobody buys the company.
              </p>
              <p className="punch">They buy you.</p>
            </div>
          </main>

          <footer className="foot">
            <div className="cos mono">
              <span>We find stories, we don&apos;t invent them</span>
              <span>No urgency, no bullshit, ever</span>
              <span>Raw over polished. Slow is fine</span>
            </div>
            <span className="mono yr">CRUDA &copy; 2026</span>
          </footer>
        </div>
      </div>
    </>
  );
}
