import Link from 'next/link'

/* Site-wide footer — brief v4 UX §4.10.
   Grid-container aligned. Wordmark, three nav columns, legal.

   F53 §7 · Fran 30-sep · la captura de email se centraliza en
   /newsletter y en el final de cada ensayo EN con el embed de
   beehiiv (SubscribeForm). El footer ya no incluye un capture
   slot propio · simplifica y evita duplicados cuando el visitante
   está en /newsletter. */

export default function SiteFooter() {
  const year = 2026
  return (
    <footer className="site-footer">
      <div className="grid-container site-footer__grid">
        {/* F22 · wordmark del footer pasa a ser el logo negro.
            alt="CRUDA" y sin link (el nav ya sirve de home). */}
        <div className="site-footer__wordmark">
          {/* F49 §3.2 · width/height explícitos + loading=lazy · sin las
              dimensiones intrínsecas el browser reservaba 0px hasta que
              cargaba el PNG, y al cargar reflowaba el resto de la página
              (subitem del CLS 0.206 medido en Paso 1 tras destapar el
              gate .page-root). Con 708×284 el aspect-ratio de la CSS
              (width: clamp(240px, 40vw, 560px); height: auto;) reserva
              alto correcto desde el server-render. `lazy` porque el
              footer está fuera del primer fold en todas las páginas. */}
          <img
            className="site-footer__wordmark-logo"
            src="/cruda-logo-black.png"
            alt="CRUDA"
            width={708}
            height={284}
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* F23.1 v2 · tres columnas en 1440 (§2.5).
              Col 1 · Work · Services · About
              Col 2 · Thinking · Newsletter · Contact
              Col 3 · LinkedIn · X
            "Case studies" desaparece — Work la reemplaza.
            En 390 stackean a 2 cols (case-study.css). */}
        <nav className="site-footer__nav site-footer__nav--1" aria-label="Site">
          <Link href="/#selected-work" className="link">Work</Link>
          <Link href="/services" className="link">Services</Link>
          <Link href="/about" className="link">About</Link>
        </nav>
        <nav className="site-footer__nav site-footer__nav--2" aria-label="More">
          <Link href="/thinking" className="link">Thinking</Link>
          <Link href="/newsletter" className="link">Newsletter</Link>
          <Link href="/contact" className="link">Contact</Link>
        </nav>
        <nav className="site-footer__nav site-footer__nav--3" aria-label="Social">
          <a
            href="https://www.linkedin.com/company/thecrudaspace/"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            LinkedIn
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          {/* F38 · X link retirado · F37 pide no linkear a cuentas no
              confirmadas · si @cruda no es nuestra, es un tercero con
              nuestro nombre. Vuelve cuando exista la cuenta oficial. */}
        </nav>

        <p className="site-footer__legal">
          &copy; {year} CRUDA. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
