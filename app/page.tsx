import type { Metadata } from 'next';
import Link from 'next/link';
import './home.css';

/* ------------------------------------------------------------------
   CRUDA — Home (`/`). Brief v7 rewrite.

   Un solo protagonista: el titular. Todo lo demás claramente
   subordinado. La zona inferior es un bloque tranquilo con un solo
   punto de color — el subrayado de `you`.

   Copy locked. La madre no captura nada más allá del CTA de texto:
   el botón macizo vive en las unidades, no acá.
------------------------------------------------------------------- */

export const metadata: Metadata = {
  title: 'CRUDA — Find the essence. Strip the bullshit.',
  description:
    'CRUDA builds people. Companies follow. Nobody buys the company — they buy you. Architecture & Design, Sports, Systems.',
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
      name: 'CRUDA Systems',
      url: 'https://www.thecruda.com/systems',
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

            {/* Lower block — un solo bloque gris, contenido a 680px.
                Punch + define son dos líneas del mismo nivel. */}
            <div className="lower">
              <div className="say">
                <p>
                  Nobody buys the company. They buy{' '}
                  <span className="say-you">you</span>.
                </p>
                <p>
                  Three companies. One method.
                  {/* Hard break después de "One method." — la frase entera no
                     entra en el contenedor de 680px (aprox 82ch a 20px medium
                     ≈ ~660-720px de ancho medido), así que forzamos el corte
                     en el pivot semántico correcto. En mobile con ancho aún
                     menor, la segunda frase wrappea internamente — inevitable
                     y aceptable a esa escala. */}
                  <br />
                  Marketing built around the founder, not the logo.
                </p>
              </div>

              <p className="principles mono">
                We find stories &middot; No urgency &middot; Raw over polished
              </p>

              <Link href="/contact" className="cta">
                Start a conversation{' '}
                <span className="cta-arrow" aria-hidden="true">→</span>
              </Link>
            </div>
          </main>

          <footer className="foot">
            <span className="mono yr">CRUDA &copy; 2026</span>
          </footer>
        </div>
      </div>
    </>
  );
}
