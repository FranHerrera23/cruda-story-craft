import './home-first90.css'

/* Home · The First 90 Days — brief 12-sep §6.5.

   Sección nueva. Va después de inside-cruda. Contesta la pregunta
   "qué obtengo si te pago", que hoy no se contesta en ninguna parte
   del sitio.

   Layout de dos columnas 1fr / 1.4fr — el mismo de inside-cruda,
   con filete entre filas. La columna izquierda leída sola es el
   argumento: "Three calls → One call → One call". El costo en
   tiempo del cliente baja mes a mes. */

const ROWS = [
  {
    month: 'Month 1',
    pace: 'Three calls a week',
    head: 'Anyone who looks you up finds something that backs you up.',
    body: 'A client deciding. A partner weighing you up. An investor doing diligence. Someone you are trying to hire. Today they find a phone number. By the end of the month they find where you stand — what you believe about this work, in your words, written down well enough to forward.',
  },
  {
    month: 'Month 2',
    pace: 'One call a week',
    head: 'People who never heard of you start reading you.',
    body: 'Your reputation stops depending on who already knows you. The writing travels to rooms you were never in.',
  },
  {
    month: 'Month 3',
    pace: 'One call a week',
    head: 'You stop hoping the right people see it and start deciding.',
    body: 'Paid extends what is already working. Media budget is yours and sits outside the fee.',
  },
] as const

export default function HomeFirst90() {
  return (
    <section id="first-90" className="home-first90">
      <div className="home-first90__inner in">
        <p className="home-first90__eyebrow">The First 90 Days</p>
        <h2 className="home-first90__lede">
          One hour a week, talking about what you already know.
        </h2>

        {ROWS.map((row, i) => (
          <div
            key={row.month}
            className="f9-row"
            data-reveal="text"
            data-stagger={String(i)}
          >
            <div className="f9-row__label">
              <span className="f9-row__month">{row.month}</span>
              <span className="f9-row__pace">{row.pace}</span>
            </div>
            <div className="f9-row__body">
              <h3 className="f9-row__head">{row.head}</h3>
              <p>{row.body}</p>
            </div>
          </div>
        ))}

        <p className="home-first90__coda">
          And after the ninety days, none of it expires. A campaign
          ends and you are back where you started, paying again. This
          keeps working while you do nothing.
        </p>
      </div>
    </section>
  )
}
