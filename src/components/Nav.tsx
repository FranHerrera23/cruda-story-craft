'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

/* ------------------------------------------------------------------
   CRUDA — Nav (global)
   CRUDA    Our Founder · Our Companies ▾ · Thinking
   Reusable across /ai-concierge, /our-founder, /thinking,
   /architecture-design, /sports. Click-driven dropdown (no hover).
------------------------------------------------------------------- */

const COMPANIES = [
  { href: '/architecture-design', label: 'Architecture & Design' },
  { href: '/sports', label: 'Sports' },
  { href: '/ai-concierge', label: 'AI Concierge' },
] as const

export default function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const companiesActive = COMPANIES.some((c) => pathname === c.href)

  // Close on click outside + Escape
  useEffect(() => {
    if (!open) return
    function onDown(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  // Close on route change
  useEffect(() => {
    setOpen(false)
    setMobileOpen(false)
  }, [pathname])

  const linkStyle = (href: string): React.CSSProperties => ({
    color: pathname === href ? 'var(--red)' : 'var(--ink)',
    textDecoration: 'none',
    fontFamily: 'var(--mono)',
    fontWeight: 500,
    fontSize: '12px',
    letterSpacing: '.14em',
    textTransform: 'uppercase',
  })

  return (
    <nav className="cruda-global-nav">
      <div className="cruda-global-nav-in">
        <Link href="/" className="cruda-global-nav-brand" aria-label="CRUDA home">
          CRUDA
        </Link>

        {/* Desktop menu */}
        <div className="cruda-global-nav-menu">
          <Link
            href="/our-founder"
            style={linkStyle('/our-founder')}
            aria-current={pathname === '/our-founder' ? 'page' : undefined}
          >
            Our Founder
          </Link>

          <div className="cruda-global-nav-dropdown" ref={dropdownRef}>
            <button
              type="button"
              className={`cruda-global-nav-dropdown-btn${open ? ' open' : ''}`}
              aria-haspopup="true"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              style={{
                color: companiesActive ? 'var(--red)' : 'var(--ink)',
              }}
            >
              Our Companies
              <span className="cruda-global-nav-dropdown-arrow" aria-hidden="true">▾</span>
            </button>
            <ul
              className={`cruda-global-nav-dropdown-menu${open ? ' open' : ''}`}
              role="menu"
              aria-hidden={!open}
            >
              {COMPANIES.map((c) => (
                <li key={c.href} role="none">
                  <Link
                    href={c.href}
                    role="menuitem"
                    tabIndex={open ? 0 : -1}
                    aria-current={pathname === c.href ? 'page' : undefined}
                    style={{
                      color: pathname === c.href ? 'var(--red)' : 'var(--ink)',
                    }}
                    onClick={() => setOpen(false)}
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <Link
            href="/thinking"
            style={linkStyle('/thinking')}
            aria-current={pathname === '/thinking' ? 'page' : undefined}
          >
            Thinking
          </Link>
        </div>

        {/* Mobile toggle */}
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

      {/* Mobile menu — untouched behavior: <details> stays expanded inline */}
      {mobileOpen && (
        <div className="cruda-global-nav-mobile">
          <Link
            href="/our-founder"
            style={linkStyle('/our-founder')}
            aria-current={pathname === '/our-founder' ? 'page' : undefined}
            onClick={() => setMobileOpen(false)}
          >
            Our Founder
          </Link>
          <details>
            <summary
              style={{
                color: companiesActive ? 'var(--red)' : 'var(--ink)',
                fontFamily: 'var(--mono)',
                fontWeight: 500,
                fontSize: '12px',
                letterSpacing: '.14em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                listStyle: 'none',
              }}
            >
              Our Companies
            </summary>
            <ul style={{ listStyle: 'none', paddingLeft: 16, marginTop: 8 }}>
              {COMPANIES.map((c) => (
                <li key={c.href} style={{ padding: '6px 0' }}>
                  <Link
                    href={c.href}
                    aria-current={pathname === c.href ? 'page' : undefined}
                    style={{
                      color: pathname === c.href ? 'var(--red)' : 'var(--ink)',
                      textDecoration: 'none',
                      fontFamily: 'var(--mono)',
                      fontSize: '12px',
                      letterSpacing: '.14em',
                      textTransform: 'uppercase',
                    }}
                    onClick={() => setMobileOpen(false)}
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </details>
          <Link
            href="/thinking"
            style={linkStyle('/thinking')}
            aria-current={pathname === '/thinking' ? 'page' : undefined}
            onClick={() => setMobileOpen(false)}
          >
            Thinking
          </Link>
        </div>
      )}

      <style jsx global>{`
        .cruda-global-nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          background: rgba(255, 255, 255, 0.94);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--rule-2, #EFEDE8);
        }
        .cruda-global-nav-in {
          max-width: var(--max, 1360px);
          margin: 0 auto;
          padding: 20px var(--gut, clamp(24px, 5vw, 80px));
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }
        .cruda-global-nav-brand {
          font-weight: 700;
          font-size: 19px;
          letter-spacing: 0.04em;
          color: var(--ink, #0A0A0A);
          text-decoration: none;
        }
        .cruda-global-nav-menu {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        /* Dropdown wrapper: relative for the absolute panel */
        .cruda-global-nav-dropdown {
          position: relative;
        }

        /* Trigger button — matches nav link typography */
        .cruda-global-nav-dropdown-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--mono);
          font-weight: 500;
          font-size: 12px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--ink, #0A0A0A);
        }

        /* Arrow: rotates 180° when open */
        .cruda-global-nav-dropdown-arrow {
          display: inline-block;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .cruda-global-nav-dropdown-btn.open .cruda-global-nav-dropdown-arrow {
          transform: rotate(180deg);
        }

        /* Panel — always rendered, animated in/out via class */
        .cruda-global-nav-dropdown-menu {
          position: absolute;
          top: 100%;
          right: 0;
          margin-top: 8px;
          min-width: 236px;
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(16px);
          border: 1px solid var(--rule, #E2E0DA);
          box-shadow: 0 12px 40px rgba(10, 10, 10, 0.07);
          padding: 10px 0;
          list-style: none;
          opacity: 0;
          visibility: hidden;
          transform: translateY(-8px);
          transition: opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.3s cubic-bezier(0.16, 1, 0.3, 1),
                      visibility 0.3s;
          z-index: 30;
        }
        .cruda-global-nav-dropdown-menu.open {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }
        .cruda-global-nav-dropdown-menu li a {
          display: block;
          padding: 14px 22px;
          white-space: nowrap;
          text-decoration: none;
          font-family: var(--mono);
          font-size: 12px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          transition: color 0.2s, background 0.2s;
        }
        .cruda-global-nav-dropdown-menu li a:hover {
          color: var(--red);
          background: #FAFAF8;
        }

        /* Mobile toggle (hamburger) */
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
          background: var(--ink, #0A0A0A);
        }
        .cruda-global-nav-mobile {
          padding: 0 var(--gut, clamp(24px, 5vw, 80px)) 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        @media (max-width: 900px) {
          .cruda-global-nav-menu {
            display: none;
          }
          .cruda-global-nav-mobile-toggle {
            display: flex;
          }
        }
        @media (min-width: 901px) {
          .cruda-global-nav-mobile {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  )
}
