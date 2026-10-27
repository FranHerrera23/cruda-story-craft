import './home-how-we-help.css'

/* Home · HOW WE HELP · F59 · 27-oct · Fran.

   Sección nueva · fondo cream (--cream, #EFEBDF), texto --ink.
   Después del hero. Rótulo + H2 + bajada + filete naranja + tabla
   con 4 filas. Las filas nombran a Karen, José, Ryan y Marty con
   sus "Their few" y "The work". Sin links · sin imágenes · sin CTA.

   Mobile: cada fila se apila, los rótulos THEIR FEW y THE WORK
   bajan dentro de cada fila y los encabezados de tabla se ocultan. */

type Row = {
  name: string
  sub: string
  few: string
  work: string
}

const ROWS: Row[] = [
  {
    name: 'Karen Mannheim',
    sub: 'Co-founder, TRAZZO Lighting',
    few: 'Architects, interior designers and developers of homes worth up to $200 million.',
    work: 'Her voice on LinkedIn and Instagram, PR strategy and pitch decks. Every week, for five years.',
  },
  {
    name: 'José Mannheim',
    sub: 'Co-founder of AGP, supplier to the Pentagon, Tesla, Audi, the Saudi Navy and the popemobile',
    few: 'About 800 buyers of certified safety glass. In the whole world.',
    work: 'Brand strategy and architecture for his new company, Mannheim Trading Corp.',
  },
  {
    name: 'Ryan Altman',
    sub: 'Founder, M2Develop',
    few: 'Yacht owners, brokers and the shipyards that build for them.',
    work: 'Putting his story and M2Develop’s in front of that audience.',
  },
  {
    name: 'Marty Lowe',
    sub: 'Yacht interior designer, United States',
    few: 'Her industry, and the women who see themselves in her story.',
    work: 'Turning forty-six years of work into a legacy of stories, on her website, a new blog and LinkedIn.',
  },
]

export default function HomeHowWeHelp() {
  return (
    <section
      className="hwh"
      id="how-we-help"
      aria-labelledby="hwh-h"
    >
      <div className="hwh__in">
        <p className="eyebrow hwh__eyebrow">How we help</p>
        <h2 id="hwh-h" className="hwh__h">
          Your buyers could fit in one room. Every one of them should know your name.
        </h2>
        <p className="hwh__lede">
          We sit with you, take the story out of your head and write it down. Then we put it where your few already look.
        </p>
        <div className="hwh__rule" aria-hidden="true" />

        <div className="hwh__table" role="table">
          <div className="hwh__thead" role="row">
            <span className="hwh__th hwh__th--who" role="columnheader">Who</span>
            <span className="hwh__th hwh__th--few" role="columnheader">Their few</span>
            <span className="hwh__th hwh__th--work" role="columnheader">The work</span>
          </div>

          {ROWS.map((r) => (
            <div className="hwh__row" role="row" key={r.name}>
              <div className="hwh__cell hwh__cell--who" role="cell">
                <p className="hwh__name">{r.name}</p>
                <p className="hwh__sub">{r.sub}</p>
              </div>
              <div className="hwh__cell hwh__cell--few" role="cell">
                <p className="hwh__m-label">Their few</p>
                <p className="hwh__text">{r.few}</p>
              </div>
              <div className="hwh__cell hwh__cell--work" role="cell">
                <p className="hwh__m-label">The work</p>
                <p className="hwh__text">{r.work}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
