import './home-hero.css'

/* Home · Hero — brief 12-sep §6.1.

   Sale entero el tipeo letra por letra: sin useEffect, sin useState,
   sin ghost span, sin cursor --signal. Componente server, copy nueva
   servida completa en el HTML.

   H1 en grot 500, --t-display, max-width limitado hasta que la
   frase rompa en las DOS oraciones que la componen (una por línea
   en desktop). El punto en el medio manda sobre el número.

   Dek en grot 400, --t-lead, sobre 52ch (más ancho que el H1 pero
   sigue siendo caja de lectura, no de headline).

   Reveal via data-reveal="text" del sistema — RevealScroll global
   lo encuentra y agrega .on al montar el DOM. */

const DEK =
  'CRUDA builds the narrative that founder-led companies need at the point where what they built stopped explaining itself.'

/* El H1 se compone de dos oraciones. Un <br/> entre ellas garantiza
   el corte exacto entre "story." y "We build" — el max-width solo
   no alcanza porque Archivo 500 es más angosto que el "0" y el
   navegador siempre encuentra hueco para "We" al final. Para SEO
   y screen readers el textContent se lee corrido; el <br> es visual. */
export default function HomeHero() {
  return (
    <section className="home-hero" data-reveal="text">
      <h1 className="home-hero__h1">
        Your company outgrew its own story.
        <br />
        We build the next one.
      </h1>
      <p className="home-hero__dek">{DEK}</p>
    </section>
  )
}
