'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

/* ------------------------------------------------------------------
   CRUDA — Nav (global) — Brief v5, tarea 4.

   Nav madre:
     CRUDA    ABOUT    COMPANIES ▾    RESOURCES    CONTACT

   Sub-nav por unidad (aparece dentro de una unidad, no en la madre):
     A&D          : Work · How it works · Pricing · Book a call
     AI Concierge : How it works · Pricing · Book a call
     Sports       : sin sub-nav (holding "coming soon")

   La madre declara filosofía. La unidad vende.
------------------------------------------------------------------- */

const CALENDLY = 'https://calendly.com/cruda-intro/narrative-sparring-live-1'

const COMPANIES = [
  { href: '/architecture-design', label: 'CRUDA for Architecture & Design' },
  { href: '/sports', label: 'CRUDA for Sports' },
  { href: '/ai-concierge', label: 'CRUDA AI Concierge' },
] as const

type SubItem =
  | { kind: 'link'; href: string; label: string }
  | { kind: 'external'; href: string; label: string }

const SUBNAV: Record<string, SubItem[] | null> = {
  '/architecture-design': [
    { kind: 'link', href: '/architecture-design#work', label: 'Work' },
    { kind: 'link', href: '/architecture-design#how-it-works', label: 'How it works' },
    { kind: 'link', href: '/pricing', label: 'Pricing' },
    { kind: 'external', href: CALENDLY, label: 'Book a call' },
  ],
  '/ai-concierge': [
    { kind: 'link', href: '/ai-concierge#how-it-works', label: 'How it works' },
    { kind: 'link', href: '/ai-concierge#pricing', label: 'Pricing' },
    { kind: 'external', href: CALENDLY, label: 'Book a call' },
  ],
  '/sports': null,
}

function unitForPath(pathname: string): string | null {
  if (pathname === '/architecture-design' || pathname.startsWith('/architecture-design/'))
    return '/architecture-design'
  if (pathname === '/ai-concierge' || pathname.startsWith('/ai-concierge/'))
    return '/ai-concierge'
  if (pathname === '/sports') return '/sports'
  return null
}

export default function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const companiesActive = COMPANIES.some(
    (c) => pathname === c.href || pathname.startsWith(`${c.href}/`),
  )
  const unit = unitForPath(pathname)
  const subItems = unit ? SUBNAV[unit] : null

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

  useEffect(() => {
    setOpen(false)
    setMobileOpen(false)
  }, [pathname])

  const linkStyle = (isActive: boolean): React.CSSProperties => ({
    color: isActive ? 'var(--ink-2)' : 'var(--ink)',
    textDecoration: 'none',
    fontFamily: 'var(--mono)',
    fontWeight: 500,
    fontSize: '12px',
    letterSpacing: '.14em',
    textTransform: 'uppercase',
  })

  const isAbout = pathname === '/our-founder'
  // /thinking today, /resources when T7 lands. Nav label is "Resources"
  // from now on — the 301 keeps clicks working during the migration.
  const isResources =
    pathname === '/resources' ||
    pathname === '/thinking' ||
    pathname.startsWith('/thinking/') ||
    pathname.startsWith('/resources/')
  const isContact = pathname === '/contact'

  return (
    <>
      <nav className="cruda-global-nav">
        <div className="cruda-global-nav-in">
          <Link href="/" className="cruda-global-nav-brand" aria-label="CRUDA home">
            CRUDA
          </Link>

          <div className="cruda-global-nav-menu">
            <Link
              href="/our-founder"
              style={linkStyle(isAbout)}
              aria-current={isAbout ? 'page' : undefined}
            >
              About
            </Link>

            <div className="cruda-global-nav-dropdown" ref={dropdownRef}>
              <button
                type="button"
                className={`cruda-global-nav-dropdown-btn${open ? ' open' : ''}`}
                aria-haspopup="true"
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
                style={{
                  color: companiesActive ? 'var(--ink-2)' : 'var(--ink)',
                }}
              >
                Companies
                <span className="cruda-global-nav-dropdown-arrow" aria-hidden="true">▾</span>
              </button>
              <ul
                className={`cruda-global-nav-dropdown-menu${open ? ' open' : ''}`}
                role="menu"
                aria-hidden={!open}
              >
                {COMPANIES.map((c) => {
                  const active =
                    pathname === c.href || pathname.startsWith(`${c.href}/`)
                  return (
                    <li key={c.href} role="none">
                      <Link
                        href={c.href}
                        role="menuitem"
                        tabIndex={open ? 0 : -1}
                        aria-current={active ? 'page' : undefined}
                        style={{
                          color: active ? 'var(--ink-2)' : 'var(--ink)',
                        }}
                        onClick={() => setOpen(false)}
                      >
                        {c.label}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>

            <Link
              href="/resources"
              style={linkStyle(isResources)}
              aria-current={isResources ? 'page' : undefined}
            >
              Resources
            </Link>

            <Link
              href="/contact"
              style={linkStyle(isContact)}
              aria-current={isContact ? 'page' : undefined}
            >
              Contact
            </Link>
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
            <Link
              href="/our-founder"
              style={linkStyle(isAbout)}
              aria-current={isAbout ? 'page' : undefined}
              onClick={() => setMobileOpen(false)}
            >
              About
            </Link>
            <details>
              <summary
                style={{
                  color: companiesActive ? 'var(--ink-2)' : 'var(--ink)',
                  fontFamily: 'var(--mono)',
                  fontWeight: 500,
                  fontSize: '12px',
                  letterSpacing: '.14em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  listStyle: 'none',
                }}
              >
                Companies
              </summary>
              <ul style={{ listStyle: 'none', paddingLeft: 16, marginTop: 8 }}>
                {COMPANIES.map((c) => {
                  const active =
                    pathname === c.href || pathname.startsWith(`${c.href}/`)
                  return (
                    <li key={c.href} style={{ padding: '6px 0' }}>
                      <Link
                        href={c.href}
                        aria-current={active ? 'page' : undefined}
                        style={{
                          color: active ? 'var(--ink-2)' : 'var(--ink)',
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
                  )
                })}
              </ul>
            </details>
            <Link
              href="/resources"
              style={linkStyle(isResources)}
              aria-current={isResources ? 'page' : undefined}
              onClick={() => setMobileOpen(false)}
            >
              Resources
            </Link>
            <Link
              href="/contact"
              style={linkStyle(isContact)}
              aria-current={isContact ? 'page' : undefined}
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </nav>

      {subItems && subItems.length > 0 && (
        <nav className="cruda-subnav" aria-label={`${unit} section navigation`}>
          <div className="cruda-subnav-in">
            <span className="mono cruda-subnav-brand">
              {unit === '/architecture-design' && 'CRUDA for Architecture & Design'}
              {unit === '/ai-concierge' && 'CRUDA AI Concierge'}
            </span>
            <ul className="cruda-subnav-list">
              {subItems.map((item) => (
                <li key={item.href}>
                  {item.kind === 'external' ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener"
                      className="cruda-subnav-cta"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link href={item.href} className="cruda-subnav-link">
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </nav>
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
        .cruda-global-nav-dropdown { position: relative; }
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
        .cruda-global-nav-dropdown-arrow {
          display: inline-block;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .cruda-global-nav-dropdown-btn.open .cruda-global-nav-dropdown-arrow {
          transform: rotate(180deg);
        }
        .cruda-global-nav-dropdown-menu {
          position: absolute;
          top: 100%;
          right: 0;
          margin-top: 8px;
          min-width: 300px;
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
          color: var(--ink-2);
          background: #FAFAF8;
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
          background: var(--ink, #0A0A0A);
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

        /* ---------- Sub-nav ---------- */
        .cruda-subnav {
          position: fixed;
          top: 68px;
          left: 0;
          right: 0;
          z-index: 90;
          background: var(--cream, #F5F1E8);
          border-bottom: 1px solid var(--rule, #E2E0DA);
        }
        .cruda-subnav-in {
          max-width: var(--max, 1360px);
          margin: 0 auto;
          padding: 14px var(--gut, clamp(24px, 5vw, 80px));
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }
        .cruda-subnav-brand {
          color: var(--ink, #0A0A0A);
          font-size: 11px;
        }
        .cruda-subnav-list {
          list-style: none;
          display: flex;
          gap: 32px;
          padding: 0;
          margin: 0;
        }
        .cruda-subnav-link, .cruda-subnav-cta {
          font-family: var(--mono);
          font-weight: 500;
          font-size: 12px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          text-decoration: none;
          color: var(--ink, #0A0A0A);
          transition: color 0.2s;
        }
        .cruda-subnav-link:hover { color: var(--ink-2, #4A4A4A); }
        .cruda-subnav-cta {
          background: var(--ink);
          color: var(--white, #FFFFFF);
          padding: 10px 18px;
          transition: background-color 0.2s;
        }
        .cruda-subnav-cta:hover { background: var(--accent, #E8623A); }

        @media (max-width: 900px) {
          .cruda-subnav-in {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
            padding: 12px var(--gut, clamp(24px, 5vw, 80px));
          }
          .cruda-subnav-brand { display: none; }
          .cruda-subnav-list {
            gap: 20px;
            flex-wrap: wrap;
          }
        }
      `}</style>
    </>
  )
}
