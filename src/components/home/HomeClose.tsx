import './home-close.css'

/* Home · cierre — brief 11-sep §B.

   Último bloque de la home, sobre --color-ink. Va ARRIBA del footer
   existente, no lo reemplaza. Copy verbatim del cierre de /approach
   —§B.2, tres líneas—. Sin CTA button, sin "Get in touch", sin
   "Start a conversation". El mail es el call to action y se muestra
   como lo que es.

   Provisorio por diseño: cuando exista el formulario de intake, el
   mail se reemplaza por el link al formulario y este bloque no
   cambia nada más.

   Movimiento §B.5: h2, p y mail con data-reveal="text" y stagger
   0/1/2. HomeChrome los observa. */

export default function HomeClose() {
  return (
    <section id="close" className="home-close">
      <div className="home-close__inner in">
        <h2>
          One conversation. We ask what you are actually trying to do, and
          what the market currently believes about you.
        </h2>
        <p>
          If those two things are the same, you do not need us. If they are
          not, that gap is the work.
        </p>
        <a href="mailto:fran@thecruda.com" className="home-close__mail">
          fran@thecruda.com
        </a>
      </div>
    </section>
  )
}
