import './home-close.css'

/* Home · CONTACT · plano paper · F11.0 (21-sep · autónomo).

   Refactor al apilado. Copy del prototipo home-v3 §13, textual:
     eyebrow "Start here"
     name    "One conversation."
     lede    "We ask what you are actually trying to do, and what
              the market currently believes about you."
     body    "If those two things are the same, you do not need us.
              If they are not, that gap is the work."
     mail    fran@thecruda.com */

export default function HomeClose() {
  return (
    <section
      className="plane plane--paper home-close"
      id="close"
      data-plane
    >
      <div className="plane__in">
        <div className="plane__top">
          <p className="eyebrow">Start here</p>
          <h2 className="name">One conversation.</h2>
          <div className="rule" />
          <p className="lede">
            We ask what you are actually trying to do, and what the
            market currently believes about you.
          </p>
          <p className="body">
            If those two things are the same, you do not need us. If
            they are not, that gap is the work.
          </p>
          {/* Enmienda 5-F · un solo CTA de conversación · Book the call
              como link primario → /contact. Email queda secundario. */}
          <a href="/contact" className="mail">
            Book the call →
          </a>
          <p className="home-close__mail-secondary">
            or write to{' '}
            <a href="mailto:fran@thecruda.com">fran@thecruda.com</a>
          </p>
        </div>
      </div>
    </section>
  )
}
