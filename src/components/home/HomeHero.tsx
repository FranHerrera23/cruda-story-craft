import Link from 'next/link'
import './home-hero.css'

/* Home · Hero — brief 12-sep §6.1 + Brief 04 P0 (14-sep).

   H1 en grot 500, --t-display. Copy servida completa en el HTML.

   Brief 04 P0 (14-sep) — corte del H1 pasa a TRES líneas autoradas.
   La versión anterior tenía solo un <br/> después de 'story.', así
   que el primer corte lo hacía el browser: salían tres líneas con
   rag 100%/35%/90% (una línea corta en el medio) y `LineReveals`
   medía lo que el browser producía, así que el delay del cuerpo
   cambiaba con el viewport.

   Fix: tres <br/> autorados. 'Your company' como primera línea
   abre mejor que 'Your company outgrew', que deja al lector
   colgado de un verbo. Rag ~45%/85%/90%.

   Regla lockeada — ver docs/decisions.md #cortes-de-titulos-display.

   Brief 04 §4.1a (14-sep, Addendum A) · la línea TRANSLATED bajo
   el lede. Link, no CTA — sin caja, sin botón, sin card. Es dónde
   se nombra el paquete en la home. Nunca front-cargar la venta
   antes del argumento.

   Motion v3 §2 — la sección lleva `data-reveal-seq` +
   `data-hero-entry`: RevealScroll no la observa, se dispara con
   la salida del loader. */

const DEK =
  'CRUDA builds the narrative that founder-led companies need at the point where what they built stopped explaining itself.'

/* Copy del TRANSLATED line · verbatim del Addendum A §4.1a. */
const TRANSLATED_LINE = 'TRANSLATED — three months. Your expertise, translated.'

export default function HomeHero() {
  return (
    <section className="home-hero" data-reveal-seq data-hero-entry>
      <h1
        className="home-hero__h1"
        data-reveal="lines"
        data-seq="title"
        data-line-stagger="140"
      >
        Your company
        <br />
        outgrew its own story.
        <br />
        We build the next one.
      </h1>
      <p className="home-hero__dek" data-reveal="text" data-seq="body">
        {DEK}
      </p>
      <p
        className="home-hero__translated"
        data-reveal="text"
        data-seq="body"
      >
        <Link href="/process">{TRANSLATED_LINE}</Link>
      </p>
    </section>
  )
}
