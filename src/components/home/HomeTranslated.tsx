import { selectedWorkCards } from '@/content/home/selected-work'
import { computeWorkStats } from '@/content/home/stats'
import './home-translated.css'

/* Home · TRANSLATED (v6 F4 §4.3)
   Reemplaza a TranslationInPractice. Bloque largo que
   explica qué es TRANSLATED, para quién, dónde movió el
   negocio y a qué sección quedó atada.

   Copy · VERBATIM del brief v6 F4 §4.3. No se reescribe.

   Rule 25 · el conteo "N founders. M cities. K countries." se
   deriva de selectedWorkCards, nunca se escribe a mano. Ver
   src/content/home/stats.ts.

   Los cinco sub-bloques van separados por rule del sistema
   (border-top al 12%). Ese es el patrón de wireframe del brief. */

export default function HomeTranslated() {
  const stats = computeWorkStats(selectedWorkCards)
  return (
    <section id="translated" className="home-translated">
      <div className="home-translated__inner">
        <p className="home-translated__eyebrow">TRANSLATED</p>

        <h2 className="home-translated__h2">
          Reputation you already earned,<br />
          working in rooms you will never enter.
        </h2>

        <div className="home-translated__prose">
          <p>
            Two thousand years of rhetoric, and one person who takes
            the call, does the thinking and writes the last line.
            Nobody is going to hand you off to an account manager, a
            junior or somebody who read a book about this last year.
            Nothing gets invented here. What is already true gets
            made legible to people who were never in the room.
          </p>
        </div>

        <hr className="home-translated__rule" aria-hidden="true" />

        <div className="home-translated__section">
          <p className="home-translated__section-label">
            WHO IT HOLDS FOR
          </p>
          <div className="home-translated__prose">
            <p>A glass manufacturer supplying Tesla and the Pentagon.</p>
            <p>A lighting designer on houses up to $200M.</p>
            <p>
              A builder with $230M in assets and 1,000 units delivered.
            </p>
            <p>A $300M fashion founder in Dubai.</p>
          </div>
          <p className="home-translated__count">
            {stats.foundersWord} founders. {stats.citiesWord} cities.{' '}
            {stats.countriesWord} countries.
          </p>
          <p className="home-translated__prose home-translated__prose--tight">
            No industry, no revenue band, no map.
          </p>
        </div>

        <hr className="home-translated__rule" aria-hidden="true" />

        <div className="home-translated__section">
          <p className="home-translated__section-label">
            DATA IS DIRECTIONAL AT BEST
          </p>
          <div className="home-translated__prose">
            <p>
              Some of what matters cannot be counted. We bring the
              figures we have and we do not dress up the rest.
            </p>
          </div>
        </div>

        <hr className="home-translated__rule" aria-hidden="true" />

        <div className="home-translated__section">
          <p className="home-translated__section-label">
            WHERE IT MOVED THE BUSINESS
          </p>
          <div className="home-translated__numbers">
            <div className="home-translated__num">
              <div className="home-translated__num-value">+46%</div>
              <div className="home-translated__num-label">revenue growth</div>
            </div>
            <div className="home-translated__num">
              <div className="home-translated__num-value">+27%</div>
              <div className="home-translated__num-label">approved quotes</div>
            </div>
            <div className="home-translated__num">
              <div className="home-translated__num-value">$380K</div>
              <div className="home-translated__num-label">largest close</div>
            </div>
          </div>
          <p className="home-translated__attribution">
            Karen Mannheim · TRAZZO · 2021—2026
          </p>
          <p className="home-translated__sources">
            LinkedIn Analytics, August 2026 · TRAZZO internal review, 2025
          </p>
        </div>

        <hr className="home-translated__rule" aria-hidden="true" />

        <div className="home-translated__section">
          <p className="home-translated__section-label">
            WHERE THE COMPANY CAN NOW WALK IN ALONE
          </p>
          <div className="home-translated__prose">
            <p>
              Where the buyers are four a year and each one is seven
              figures, counting is the wrong instrument. What matters
              is whether the company is legible when the founder is not
              in the room.
            </p>
            <p>
              Positioning, identity, and the infrastructure underneath
              it.
            </p>
          </div>
          <p className="home-translated__attribution">
            José Mannheim · Germán Noel · Arman Keshishian · JP Romero
          </p>
        </div>

        <hr className="home-translated__rule" aria-hidden="true" />

        <div className="home-translated__prose home-translated__prose--close">
          <p>
            Ten to twelve engagements a year. Never more. Nothing here
            expires on day ninety.
          </p>
        </div>
      </div>
    </section>
  )
}
