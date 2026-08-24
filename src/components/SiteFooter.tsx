import Link from 'next/link'

/* Site-wide footer — brief v4 UX §4.10.
   Grid-container aligned. Wordmark, capture placeholder (block 6 wires
   Substack backend), three nav columns, legal.
   Motion respects prefers-reduced-motion via token defaults. */

export default function SiteFooter() {
  const year = 2026
  return (
    <footer className="site-footer">
      <div className="grid-container site-footer__grid">
        <div className="site-footer__wordmark">CRUDA</div>

        {/* Capture placeholder — se implementa en block 6 (§4.8).
            Estructura visual reservada; backend Substack pendiente. */}
        <div className="site-footer__capture-slot" aria-hidden="true" />

        <nav className="site-footer__nav site-footer__nav--1" aria-label="Content">
          <Link href="/resources/essays" className="link">Essays</Link>
          <Link href="/resources/case-studies" className="link">Case studies</Link>
          <Link href="/newsletter" className="link">Newsletter</Link>
        </nav>

        <nav className="site-footer__nav site-footer__nav--2" aria-label="About">
          <Link href="/our-founder" className="link">About</Link>
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
          <a
            href="https://x.com/cruda"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            X
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </nav>

        <p className="site-footer__legal">
          &copy; {year} CRUDA. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
