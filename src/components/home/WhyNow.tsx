import './why-now.css'

/* Home · why-now — design system unificado §6.

   Sale la composición de dos columnas con volado a la izquierda —
   era la firma de la referencia NDS. Entra una estructura de una
   sola columna, centrada, en medida de lectura (62ch). Es lo que
   hace Tetragrammaton y no se parece a nada de la referencia
   anterior.

   El título deja de ser "Half the Value¹" con superíndice y pasa
   a ser una frase completa en serif: "Half the value of your
   company is not on the balance sheet." Es epígrafe de sección,
   no headline — por eso la excepción a la regla de "serif solo
   en títulos ≤6 palabras".

   El dato del volado se dice en la prosa. El footnote con el
   placeholder de fuente se retira entero — sin cita no hay
   superíndice que sostener, y no queda placeholder en producción. */

export default function WhyNow() {
  return (
    <section id="why-now" className="why-now">
      <div className="why-now__in in">
        <h2>Half the value of your company is not on the balance sheet.</h2>
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
    </section>
  )
}
