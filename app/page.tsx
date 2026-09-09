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

/* Brief v2 Task 5 — Organization schema se mueve al layout raíz
   (sitio-wide, referenciable por @id desde Person y Article schemas).
   subOrganization retirada: /architecture-design está en 301, /systems
   y /sports en 410. La schema anterior apuntaba a URLs muertas. */

export default function HomePage() {
  return (
    <>
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

            {/* Lower block — un solo bloque gris, contenido a 680px. */}
            <div className="lower">
              <div className="say">
                <p>
                  Nobody buys the company. They buy{' '}
                  <span className="say-you">you</span>.
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
        </div>
      </div>
    </>
  );
}
