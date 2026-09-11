import type { Metadata } from 'next';
import Link from 'next/link';
import SelectedWork from '@/components/home/SelectedWork';
import './home.css';

/* ------------------------------------------------------------------
   CRUDA — Home (`/`). Brief v7 rewrite.

   Un solo protagonista: el titular. Todo lo demás claramente
   subordinado. La zona inferior es un bloque tranquilo con un solo
   punto de color — el subrayado de `you`.

   Copy locked. La madre no captura nada más allá del CTA de texto:
   el botón macizo vive en las unidades, no acá.
------------------------------------------------------------------- */

/* A.1.1 — description interina autorizada por Fran. Reemplaza la copy
   que anunciaba rutas retiradas (/sports, /systems en 410) y contenía
   la frase "Nobody buys the company — they buy you" retracted por
   home v2. Se reemplaza otra vez cuando Phase C corra la home. */
const HOME_DESCRIPTION =
  'Fran Herrera, Founder & CEO of CRUDA. Narrative and brand work for founder-led companies — Purina, Brahma, CCU, and independent studios across the Americas and Europe.'

export const metadata: Metadata = {
  title: 'CRUDA — Find the essence. Strip the bullshit.',
  description: HOME_DESCRIPTION,
  alternates: { canonical: 'https://www.thecruda.com' },
  openGraph: {
    title: 'CRUDA — Find the essence. Strip the bullshit.',
    description: HOME_DESCRIPTION,
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

            {/* Lower block — un solo bloque gris, contenido a 680px.
                A.3.2 — reemplazo interino autorizado por Fran. Retira
                "Nobody buys the company. They buy you." (categoría
                sin cerrar) sin usar el subtitle de home v2 (mismo
                motivo). Este string se reemplaza entero cuando corra
                el bloque 1 de home en Phase C. */}
            <div className="lower">
              <div className="say">
                <p>
                  The work is good. Outside your circle, nobody finds out.
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
      {/* Home · Selected Work (brief 10-sep). Shell + grilla; los
          9 cards se agregan en paso 3 del brief. */}
      <SelectedWork />
    </>
  );
}
