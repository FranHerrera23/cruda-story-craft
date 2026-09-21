import './home-karen-proof.css'

/* Home · LA PRUEBA · plano negro · F11.0 (21-sep · autónomo).

   Split D1: alcance y negocio en un solo plano; la home muestra
   sólo las tres cifras de alcance (C1 cerrado, cifras lockeadas
   como están en el prototipo). El grupo "THE BUSINESS" queda
   para /work/karen-mannheim en F17.1.

   Copy · prototipo home-v3, textual:
     eyebrow "What we built for her"
     name    "Thirty-three years of work, in front of the people
              who specify it."
     body    "Karen lights ten, twenty and fifty million dollar
              homes..." (párrafo firmado, prototipo).

   Cifras (lockeadas §2):
     605,050  · times her work appeared in front of someone on LinkedIn
                (365 days · 66% outside her network)
     96×      · more people than actually follow her
                (on 6,299 followers)
     $60,180  · a year · what buying that attention would have cost
                (LinkedIn $33,278 · Instagram $26,902 · CPMs floor 2026) */

export default function HomeKarenProof() {
  return (
    <section
      className="plane plane--black home-karen-proof"
      id="karen-proof"
      data-plane
    >
      <div className="plane__in">
        <div className="plane__top">
          <p className="eyebrow">What we built for her</p>
          <h2 className="name name--sm">
            Thirty-three years of work, in front of the people who
            specify it.
          </h2>
          <div className="rule" />
          <p className="body" style={{ maxWidth: '66ch' }}>
            Karen lights ten, twenty and fifty million dollar homes.
            Her buyers are developers, architects and high-end builders
            across the United States, Latin America and Spain — a few
            thousand people, not a market. The writing went to them.
          </p>
        </div>
        <div className="data">
          <div className="cell">
            <p className="cell__big">605,050</p>
            <p className="cell__v">
              times her work appeared in front of someone on LinkedIn
            </p>
            <p className="cell__n">365 days · 66% outside her network</p>
          </div>
          <div className="cell">
            <p className="cell__big">96×</p>
            <p className="cell__v">more people than actually follow her</p>
            <p className="cell__n">on 6,299 followers</p>
          </div>
          <div className="cell">
            <p className="cell__big">$60,180</p>
            <p className="cell__v">
              a year · what buying that attention would have cost
            </p>
            <p className="cell__n">
              LinkedIn $33,278 · Instagram $26,902. CPMs at the floor of
              published 2026 benchmarks. She paid a fraction of it, and
              the articles are still working.
            </p>
          </div>
        </div>
        <a className="go" href="/work/karen-mannheim">
          Read the case study →
        </a>
      </div>
    </section>
  )
}
