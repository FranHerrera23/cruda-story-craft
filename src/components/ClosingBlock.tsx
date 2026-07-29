/* Closing block — brief v5 T6 + brief v8 (soporte de idioma).

   Va al final de todos los ensayos y case studies. Sobre --cream,
   CTA al Calendly.

   Excepción portfolio (Mike, Girish): son portfolio, no clientes
   actuales. El heading NO puede decir "the people we represent" —
   afirmaría una relación comercial vigente que no existe. Variante
   sin la palabra representar.

   El texto español se traduce respetando la voz de la casa. */

const CALENDLY = 'https://calendly.com/cruda-intro/narrative-sparring-live-1'

type Kind = 'essay' | 'case-study'
type Variant = 'client' | 'portfolio'
type Lang = 'en' | 'es'

type Props = {
  kind?: Kind
  variant?: Variant
  lang?: Lang
}

type Copy = {
  heading: string
  body: string
  cta: string
}

const COPY: Record<Lang, Record<Variant, Record<Kind, Copy>>> = {
  en: {
    client: {
      essay: {
        heading: 'This is what we do for the people we represent.',
        body:
          'This essay started as a 45-minute conversation. So does every story we tell — for founders, studios and athletes who built something worth seeing.',
        cta: 'Start a conversation',
      },
      'case-study': {
        heading: 'This is what we do for the people we represent.',
        body:
          'This story started as a 45-minute conversation. So does every story we tell — for founders, studios and athletes who built something worth seeing.',
        cta: 'Start a conversation',
      },
    },
    portfolio: {
      essay: {
        heading: 'This is the kind of work we do.',
        body:
          'This essay started as a 45-minute conversation. So does every story we tell — for founders, studios and athletes who built something worth seeing.',
        cta: 'Start a conversation',
      },
      'case-study': {
        heading: 'This is the kind of work we do.',
        body:
          'This story started as a 45-minute conversation. So does every story we tell — for founders, studios and athletes who built something worth seeing.',
        cta: 'Start a conversation',
      },
    },
  },
  es: {
    client: {
      essay: {
        heading: 'Esto es lo que hacemos para la gente que representamos.',
        body:
          'Este ensayo salió de una conversación de 45 minutos. Como todas las historias que contamos — para founders, estudios y atletas que construyeron algo que vale la pena ver.',
        cta: 'Empezá una conversación',
      },
      'case-study': {
        heading: 'Esto es lo que hacemos para la gente que representamos.',
        body:
          'Esta historia salió de una conversación de 45 minutos. Como todas las historias que contamos — para founders, estudios y atletas que construyeron algo que vale la pena ver.',
        cta: 'Empezá una conversación',
      },
    },
    portfolio: {
      essay: {
        heading: 'Este es el tipo de trabajo que hacemos.',
        body:
          'Este ensayo salió de una conversación de 45 minutos. Como todas las historias que contamos — para founders, estudios y atletas que construyeron algo que vale la pena ver.',
        cta: 'Empezá una conversación',
      },
      'case-study': {
        heading: 'Este es el tipo de trabajo que hacemos.',
        body:
          'Esta historia salió de una conversación de 45 minutos. Como todas las historias que contamos — para founders, estudios y atletas que construyeron algo que vale la pena ver.',
        cta: 'Empezá una conversación',
      },
    },
  },
}

export default function ClosingBlock({
  kind = 'essay',
  variant = 'client',
  lang = 'en',
}: Props) {
  const copy = COPY[lang][variant][kind]

  return (
    <section className="cb" aria-label="Start a conversation">
      <p className="cb-head">{copy.heading}</p>
      <p className="cb-body">{copy.body}</p>
      <a
        href={CALENDLY}
        target="_blank"
        rel="noopener"
        className="cb-cta mono"
      >
        {copy.cta}
        <span className="cb-arrow" aria-hidden="true">→</span>
      </a>
    </section>
  )
}
