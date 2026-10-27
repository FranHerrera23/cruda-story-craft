import NewsletterCTA from '@/components/NewsletterCTA'
import './home-hero.css'

/* Home · Hero v2 · F58 · 27-oct.

   Una sola pantalla, estática, oscura. LCP de la home. Sin acto,
   sin scroll fijado, sin JS, sin reveals. Todo visible desde el
   primer cuadro (sin opacity:0 inicial). Reemplaza a Act1Hero en
   el render de la home; Act1Hero queda como dead code. */

export default function HomeHero() {
  return (
    <section className="home-hero" id="home-hero">
      <div className="home-hero__in">
        <h1 className="home-hero__h">Famous to the few who matter.</h1>
        <p className="home-hero__lede">
          We find what makes you exceptional and put it in front of the people who should know.
        </p>
        <NewsletterCTA variant="dark" />
      </div>
    </section>
  )
}
