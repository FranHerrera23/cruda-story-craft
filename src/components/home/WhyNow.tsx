import WhyNowFocus from './WhyNowFocus'
import './why-now.css'

/* Home · why-now — brief 12-sep §6.2.

   Dos columnas: título sticky a la izquierda mientras los cuatro
   párrafos pasan a la derecha. Foco por opacidad — el párrafo más
   cercano al centro del viewport va a --ink, los otros bajan a 28%.

   Reglas duras:
   · Sin scroll hijacking. El scroll es el nativo. position:sticky
     y nada más.
   · Los cuatro párrafos enteros en el HTML servido. Nada escondido,
     nada montado por JS.
   · Sin contador de progreso, sin índice lateral.

   Abajo de 900px vuelve a una columna y el sticky se desactiva —
   a ese ancho el titular ocuparía media pantalla y los párrafos
   no tienen por dónde pasar. */

export default function WhyNow() {
  return (
    <section id="why-now" className="why-now">
      <div className="why-now__in in">
        <div className="why-now__head">
          <h2>Half the value of your company is not on the balance sheet.</h2>
        </div>
        <div className="why-now__body">
          <p>
            Roughly half of what your company is worth sits in you. Who
            trusts you. Who recommends you. Who picks up when you call.
            It doesn&apos;t appear on any balance sheet and it is the
            most valuable thing the business owns.
          </p>
          <p>
            That holds until something shifts. A generation hands over.
            Two studios become one. You move into a category that has
            never heard of you. You start again.
          </p>
          <p>
            The reputation stays where it was. It doesn&apos;t transfer.
            And the story you have is the story of the company you used
            to be — which means half the value is sitting in a version
            of you that no longer exists.
          </p>
          <p>
            Narrative is business infrastructure. Most companies only
            find that out at the moment they need it to hold.
          </p>
        </div>
      </div>
      <WhyNowFocus />
    </section>
  )
}
