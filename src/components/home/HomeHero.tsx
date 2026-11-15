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
        <h1 className="home-hero__h">Famous to the<br className="hero-break" /> <span className="brand-circle">few<svg viewBox="0 0 240 130" preserveAspectRatio="none" aria-hidden="true"><path d="M228 30C183-4 69-3 23 31C-20 64 12 119 78 123C146 130 233 111 235 65C238 18 129-10 53 14C6 29-5 66 12 91" /></svg></span> who matter.</h1>
        <p className="home-hero__lede">
          We find what makes you exceptional and put it in front of the people who should know.
        </p>
        <NewsletterCTA variant="dark" />
      </div>
    </section>
  )
}
