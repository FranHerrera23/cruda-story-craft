'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import CaptureForm from './CaptureForm'
import { CAPTURE_ENABLED } from '@/lib/flags'

/* Site-wide footer — brief v4 UX §4.10.
   Grid-container aligned. Wordmark, capture form (backend Substack,
   §4.8), three nav columns, legal.

   Client component: necesita usePathname para ocultar la capture en
   /newsletter cuando el flag está prendido (esa ruta trae una capture
   full arriba y una segunda en el footer duplicaría).

   F0 — CAPTURE_ENABLED apagado: el slot entero (wrapper + form) no
   renderea en ninguna ruta. Sin hueco, sin gap huérfano. */

const ROUTES_WITHOUT_CAPTURE = new Set(['/newsletter'])

export default function SiteFooter() {
  const pathname = usePathname()
  const showCapture =
    CAPTURE_ENABLED && !ROUTES_WITHOUT_CAPTURE.has(pathname)
  const year = 2026
  return (
    <footer className="site-footer">
      <div className="grid-container site-footer__grid">
        {/* F22 · wordmark del footer pasa a ser el logo negro.
            alt="CRUDA" y sin link (el nav ya sirve de home). */}
        <div className="site-footer__wordmark">
          <img
            className="site-footer__wordmark-logo"
            src="/cruda-logo-black.png"
            alt="CRUDA"
          />
        </div>

        {showCapture && (
          <div className="site-footer__capture-slot">
            <CaptureForm lang="en" variant="compact" />
          </div>
        )}

        <nav className="site-footer__nav site-footer__nav--1" aria-label="Content">
          <Link href="/thinking" className="link">Thinking</Link>
          <Link href="/#selected-work" className="link">Case studies</Link>
          <Link href="/newsletter" className="link">Newsletter</Link>
        </nav>

        <nav className="site-footer__nav site-footer__nav--2" aria-label="About">
          <Link href="/about" className="link">About</Link>
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
