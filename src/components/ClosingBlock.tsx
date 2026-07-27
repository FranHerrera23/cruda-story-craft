/* Closing block — brief v5 tarea 6.

   Va al final de todos los ensayos y case studies. Sobre --cream,
   CTA al Calendly.

   Excepción portfolio (Mike, Girish): son portfolio, no clientes
   actuales. El heading NO puede decir "the people we represent" —
   afirmaría una relación comercial vigente que no existe. Variante
   sin la palabra representar.

   Tercera persona narrativa: "story" funciona para ambos formatos
   sin desalinearse con el brief. */

const CALENDLY = 'https://calendly.com/cruda-intro/narrative-sparring-live-1'

type Props = {
  kind?: 'essay' | 'case-study'
  variant?: 'client' | 'portfolio'
}

export default function ClosingBlock({
  kind = 'essay',
  variant = 'client',
}: Props) {
  const heading =
    variant === 'portfolio'
      ? 'This is the kind of work we do.'
      : 'This is what we do for the people we represent.'

  const noun = kind === 'case-study' ? 'story' : 'essay'

  return (
    <section className="cb" aria-label="Start a conversation">
      <p className="cb-head">{heading}</p>
      <p className="cb-body">
        This {noun} started as a 45-minute conversation. So does every story we
        tell &mdash; for founders, studios and athletes who built something worth
        seeing.
      </p>
      <a
        href={CALENDLY}
        target="_blank"
        rel="noopener"
        className="cb-cta mono"
      >
        Start a conversation
        <span className="cb-arrow" aria-hidden="true">→</span>
      </a>
    </section>
  )
}
