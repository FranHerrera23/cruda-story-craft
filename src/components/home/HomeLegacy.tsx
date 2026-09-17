import './home-legacy.css'

/* Home · LEGACY (v6 F4 §4.2)
   Bloque nuevo. Reemplaza la ausencia de legacy en la home
   anterior. Retrato de Fran a escala de firma (~180px), no de
   portada, con copy verbatim del brief · lista de clientes de
   la era in-house y agencia (Mondelez, AB InBev, Delivery Hero,
   Nestlé, TikTok, UN · NO Purina, CCU, DirecTV, Natura).

   El retrato entra desde `/public/fran-herrera.webp`. Encontrado
   en el grep de F4.2 (fran-herrera.png + fran-herrera.webp en
   /public/, más variantes en src/assets/). No hace falta el
   hueco reservado.

   Pentagram-style: la empresa es el sujeto, las personas son la
   prueba. El párrafo final ("the person on your first call writes
   your last line") es el argumento operativo. */

export default function HomeLegacy() {
  return (
    <section id="legacy" className="home-legacy">
      <div className="home-legacy__inner">
        <div className="home-legacy__portrait">
          <img
            src="/fran-herrera.webp"
            alt="Fran Herrera"
            className="home-legacy__img"
          />
        </div>
        <div className="home-legacy__body">
          <p className="home-legacy__name">Fran Herrera</p>
          <p className="home-legacy__role">
            FOUNDER · BETWEEN UAE AND RUSSIA
          </p>
          <p className="home-legacy__copy">
            Ten years building brands across three continents,
            in-house and agency side. Mondelez, AB InBev, Delivery
            Hero, Nestlé, TikTok, the United Nations.
          </p>
          <p className="home-legacy__copy">
            Now ten to twelve founders a year, and the person on your
            first call writes your last line.
          </p>
        </div>
      </div>
    </section>
  )
}
