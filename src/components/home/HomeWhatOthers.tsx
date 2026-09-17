import './home-what-others.css'

/* Home · WHAT OTHER PEOPLE STARTED SAYING (v6 F4 §4.4)
   Cobertura ganada · Forbes Perú (Karen), ABC/Fox/CBS (Mike),
   Drapers (Confidential).

   Los logos son placeholders con la clase `.home-what-others__logo`
   que renderea el nombre entre corchetes. Si los archivos SVG/PNG
   llegan al repo, se cambia el markup para usar <img>.

   Regla del brief · "Si los archivos no están, el bloque se
   construye con los contenedores vacíos marcados. No se descargan
   de internet ni se sustituyen por texto estilizado." Los
   corchetes son el marcado. */

type LogoSlot = { name: string; src?: string }

function Logo({ name, src }: LogoSlot) {
  if (src) {
    return (
      <span className="home-what-others__logo home-what-others__logo--img">
        <img src={src} alt={name} />
      </span>
    )
  }
  /* Contenedor marcado con el nombre entre corchetes. El brief
     autoriza este formato explícitamente. */
  return (
    <span className="home-what-others__logo" data-slot={name}>
      [ {name} ]
    </span>
  )
}

export default function HomeWhatOthers() {
  return (
    <section id="what-others" className="home-what-others">
      <div className="home-what-others__inner">
        <p className="home-what-others__eyebrow">
          WHAT OTHER PEOPLE STARTED SAYING
        </p>

        <hr className="home-what-others__rule" aria-hidden="true" />

        {/* Karen · Forbes */}
        <div className="home-what-others__item">
          <p className="home-what-others__prose">
            Karen Mannheim was named to Forbes Perú&rsquo;s &ldquo;Las 50
            mujeres m&aacute;s poderosas de Per&uacute; en 2026.&rdquo; No
            pitch, no placement.
          </p>
          <div className="home-what-others__logos">
            <Logo name="FORBES" />
            <Logo name="ARCHITECTURAL DIGEST" />
          </div>
        </div>

        <hr className="home-what-others__rule" aria-hidden="true" />

        {/* Mike · triple network */}
        <div className="home-what-others__item">
          <p className="home-what-others__prose">
            Mike Kaeding went from a builder nobody outside Minnesota
            had heard of to a source three networks call.
          </p>
          <div className="home-what-others__logos">
            <Logo name="ABC" />
            <Logo name="FOX NEWS" />
            <Logo name="CBS" />
          </div>
          <p className="home-what-others__meta">
            56,000 followers · 2M impressions generated per year
          </p>
          <p className="home-what-others__attribution">
            Mike Kaeding · Norhart · July 2023 — October 2024
          </p>
        </div>

        <hr className="home-what-others__rule" aria-hidden="true" />

        {/* Confidential · Drapers */}
        <div className="home-what-others__item">
          <div className="home-what-others__logos">
            <Logo name="DRAPERS" />
          </div>
          <p className="home-what-others__attribution">
            Confidential · Dubai, UAE · 2026
          </p>
        </div>
      </div>
    </section>
  )
}
