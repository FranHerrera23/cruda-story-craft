import './home-fit.css'

/* Home · FIT (v6 F4 §4.5 · F8 §9.3 corrección 17-sep)
   Registro de observación. Cero imperativos, cero condicionales,
   cero CTA. Los cinco síntomas de compañías donde CRUDA aplica.

   F8 §9.3 · el lede "We do not ask about revenue, industry or
   geography. We ask where the company is standing." se mueve a
   /contact. FIT sigue en la home con los dos grupos y el cierre.

   Copy · VERBATIM del brief v6 F4 §4.5. */

export default function HomeFit() {
  return (
    <section id="fit" className="home-fit">
      <div className="home-fit__inner">
        <div className="home-fit__group">
          <p className="home-fit__head">
            Something is about to change, or already has.
          </p>
          <ul className="home-fit__list">
            <li>A company being born.</li>
            <li>A category that does not exist yet.</li>
            <li>A market that has never heard of you.</li>
            <li>A generation handing over to the next.</li>
            <li>A company that outgrew what it used to say.</li>
          </ul>
        </div>

        <hr className="home-fit__rule" aria-hidden="true" />

        <div className="home-fit__group">
          <p className="home-fit__head">
            You are the reason people buy, and you are the bottleneck.
          </p>
          <ul className="home-fit__list">
            <li>The people who trust you most are the ones who met you.</li>
            <li>
              Someone is deciding about you right now, and what they
              find does not match what you are.
            </li>
          </ul>
        </div>

        <hr className="home-fit__rule" aria-hidden="true" />

        <p className="home-fit__close">
          If none of this is you, this is not for you.
        </p>
      </div>
    </section>
  )
}
