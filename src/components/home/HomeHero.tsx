import NewsletterCTA from '@/components/NewsletterCTA'
import './home-hero.css'

/* Home · Hero v2 · F58 · 27-oct.

   Una sola pantalla, estática, oscura. LCP de la home. Sin acto,
   sin scroll fijado, sin JS, sin reveals. Todo visible desde el
   primer cuadro (sin opacity:0 inicial). Reemplaza a Act1Hero en
   el render de la home; Act1Hero queda como dead code. */

export default function HomeHero() {
  /* F59 §B · `on-black` lo detecta Nav.tsx para pintar la barra en
     modo oscuro mientras el hero está debajo de ella; al salir el
     hero, Nav vuelve al modo paper. */
  return (
    <section className="home-hero on-black" id="home-hero">
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
