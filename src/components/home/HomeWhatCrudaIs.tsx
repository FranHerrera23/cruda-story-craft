import './home-what-cruda-is.css'

/* Home · QUÉ ES CRUDA (F9 §2.4 · posición 02 · Commit 7 F9.4)

   Copy FIRMADO · 19-sep · se usa TEXTUAL.
   Se escribe una vez y aparece en TRES lugares:

     1  home · posición 02       ← este componente
     2  /services · plano 00     ← F9.5
     3  /about · §01 (h1 + lede) ← este commit, más abajo

   En los tres lugares las palabras son idénticas. El
   tratamiento visual puede variar.

   Wrapping · el h-display ("We translate cultures into
   business.") va en UNA línea en 1440/1024/768 y DOS líneas
   en 390. Sin nowrap, sin auto-fit. El corte de mobile se
   fuerza envolviendo "into business." en un <span> con
   white-space: nowrap · si el navegador quiere partir, sólo
   puede hacerlo antes de "into", no entre "into" y "business".

   Regla del hero NO aplica acá · esta sección es de lectura,
   no de una-frase-por-pantalla. */

export default function HomeWhatCrudaIs() {
  return (
    <section
      id="what-cruda-is"
      className="home-wci"
      data-reveal-seq
    >
      <div className="home-wci__inner">
        <p
          className="home-wci__label"
          data-reveal="text"
          data-seq="eyebrow"
        >
          WHAT CRUDA IS
        </p>

        <p
          className="home-wci__sub"
          data-reveal="text"
          data-seq="eyebrow"
        >
          CRUDA is a communications company.
        </p>

        {/* data-reveal="text" (no "lines") — LineReveals TIRA los
            elementos hijos que no son <br> (los reemplaza al
            reconstruir línea por texto plano). El
            <span class="home-wci__nobreak"> tiene que sobrevivir al
            reveal · esta línea reveala como bloque, no por línea.
            Bug LineReveals · registrar en build-incidents. */}
        <h2
          className="home-wci__display"
          data-reveal="text"
          data-seq="title"
        >
          We translate cultures{' '}
          <span className="home-wci__nobreak">into business.</span>
        </h2>

        <dl className="home-wci__distances" data-seq="body">
          <div className="home-wci__row" data-reveal="text">
            <dd className="home-wci__row-body">
              Between a founder and a market that never heard
              of them.
            </dd>
          </div>
          <div className="home-wci__row" data-reveal="text">
            <dd className="home-wci__row-body">
              Between a company and its own people.
            </dd>
          </div>
          <div className="home-wci__row" data-reveal="text">
            <dd className="home-wci__row-body">
              Between capital from one part of the world and
              the country it just landed in.
            </dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
