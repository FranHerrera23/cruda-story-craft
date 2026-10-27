import Link from 'next/link'
import NewsletterCTA from '@/components/NewsletterCTA'
import './home-close.css'

/* Home · CIERRE · plano negro · F58 · 27-oct.
   Reemplaza el bloque `StartHere` por el cierre nuevo de Narrative
   Sparring. El componente `StartHere` NO se toca ni se borra; sigue
   usándose en las demás páginas (/work/:slug, /services, /about). */

export default function HomeClose() {
  return (
    <section
      className="plane plane--black home-close home-close--v2"
      id="close"
      data-plane
    >
      <div className="plane__in">
        <p className="eyebrow">Narrative Sparring</p>
        <h2 className="name home-close__h">
          Every week, one story that changes how you tell yours.
        </h2>
        <div className="rule" />
        <div className="home-close__cta">
          <NewsletterCTA variant="dark" />
        </div>
        <Link className="home-close__work" href="/services">
          Work with us →
        </Link>
      </div>
    </section>
  )
}
