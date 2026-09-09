'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

/* Brief v2 Task 4 — nav de 5 items:

     About  ·  Work  ·  Approach  ·  Essays  ·  Contact

   Fuera de la nav: la COMPANIES dropdown entera (retirada), la
   RESOURCES dropdown (colapsada — Essays vive standalone ahora, y
   Work vive standalone también). Fuera del sitio: /sports y /systems
   devuelven 410 desde middleware.ts.

   About → /our-founder (D2). Nav flat, sin dropdowns. */

const NAV_ITEMS = [
  { href: '/our-founder', label: 'About', match: /^\/(our-founder|about)/ },
  { href: '/work', label: 'Work', match: /^\/(work|architecture-design|resources\/case-studies|clients)/ },
  { href: '/approach', label: 'Approach', match: /^\/approach/ },
  { href: '/essays', label: 'Essays', match: /^\/(essays|resources\/essays|thinking)/ },
  { href: '/contact', label: 'Contact', match: /^\/contact/ },
] as const

export default function Nav() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  /* B2 — hover es opacidad. Inactivos en --color-muted (~60% de ink),
     activo (currentPage) siempre 100%. La página actual se destaca,
     las demás se apagan hasta hover. Transición color viene del
     global de globals.css. */
  const linkStyle = (isActive: boolean): React.CSSProperties => ({
    color: isActive ? 'var(--color-ink)' : 'var(--color-muted)',
    textDecoration: 'none',
    fontFamily: 'var(--mono)',
    fontWeight: 500,
    fontSize: '12px',
    letterSpacing: '.14em',
    textTransform: 'uppercase',
  })

  return (
    <>
      <nav className="cruda-global-nav">
        <div className="cruda-global-nav-in">
          <Link href="/" className="cruda-global-nav-brand" aria-label="CRUDA home">
            CRUDA
          </Link>

          <div className="cruda-global-nav-menu">
            {NAV_ITEMS.map((item) => {
              const isActive = item.match.test(pathname)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="link"
                  style={linkStyle(isActive)}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>

          <button
            type="button"
            className="cruda-global-nav-mobile-toggle"
            aria-expanded={mobileOpen}
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {mobileOpen && (
          <div className="cruda-global-nav-mobile">
            {NAV_ITEMS.map((item) => {
              const isActive = item.match.test(pathname)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  style={linkStyle(isActive)}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>
        )}
      </nav>

      <style jsx global>{`
        .cruda-global-nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 110;
          /* Brief v4 UX §4.1 — bg opaco. NO transparente, NO blur. */
          background: var(--color-surface);
          border-bottom: 1px solid var(--color-rule);
        }
        .cruda-global-nav-in {
          max-width: var(--max, 1360px);
          margin: 0 auto;
          padding: 30px var(--gut, clamp(24px, 5vw, 80px));
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }
        .cruda-global-nav-brand {
          font-weight: 700;
          font-size: 19px;
          letter-spacing: 0.04em;
          color: var(--color-ink);
          text-decoration: none;
        }
        .cruda-global-nav-menu {
          display: flex;
          align-items: center;
          gap: 32px;
        }
        .cruda-global-nav-mobile-toggle {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          gap: 5px;
          flex-direction: column;
        }
        .cruda-global-nav-mobile-toggle span {
          display: block;
          width: 22px;
          height: 1.5px;
          background: var(--color-ink);
        }
        .cruda-global-nav-mobile {
          padding: 0 var(--gut, clamp(24px, 5vw, 80px)) 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        @media (max-width: 900px) {
          .cruda-global-nav-menu { display: none; }
          .cruda-global-nav-mobile-toggle { display: flex; }
        }
        @media (min-width: 901px) {
          .cruda-global-nav-mobile { display: none !important; }
        }
      `}</style>
    </>
  )
}
