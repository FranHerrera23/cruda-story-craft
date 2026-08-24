'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import {
  allResources,
  countByKind,
  type ResourceKind,
} from '@/content/resources'

/* ------------------------------------------------------------------
   CRUDA — Nav (global) — Brief v5 T4 + Brief v6 T3.

   Nav madre:
     CRUDA · ABOUT · COMPANIES ▾ · RESOURCES ▾ · CONTACT

   Sub-nav por unidad (aparece dentro de una unidad, no en la madre):
     A&D          : Work · How it works · Pricing · Book a call
     Systems      : How it works · Pricing · Book a call
     Sports       : sin sub-nav (holding "coming soon")

   RESOURCES dropdown — brief v6 T3:
   - Label es Link a /resources (todo, sin filtro).
   - ▾ abre el menú de formatos, cada item lleva ?format=X en la URL.
     Cada formato pasa a ser una URL indexable propia.
   - Los items se construyen desde el conteo real (allResources). Si
     un formato tiene 0 piezas hoy, no aparece.
   - Company NO va acá (una sola opción hoy no aporta al nav).

   La madre declara filosofía. La unidad vende.
------------------------------------------------------------------- */

const CALENDLY = 'https://calendly.com/cruda-intro/narrative-sparring-live-1'

const COMPANIES = [
  { href: '/architecture-design', label: 'CRUDA for Architecture & Design' },
  { href: '/sports', label: 'CRUDA for Sports' },
  { href: '/systems', label: 'CRUDA Systems' },
] as const

// Format order in the dropdown — hardcoded editorial priority, not
// alphabetical. Case studies read first because they're the hero
// artifact of the site.
const KIND_ORDER: readonly ResourceKind[] = [
  'case-study',
  'essay',
  'conversation',
  'playbook',
]

// Plural labels for the nav (kindLabel is singular).
const KIND_LABEL_PLURAL: Record<ResourceKind, string> = {
  essay: 'Essays',
  conversation: 'Conversations',
  playbook: 'Playbooks',
  'case-study': 'Case studies',
}

const KIND_COUNTS = countByKind(allResources)
const ACTIVE_FORMATS = KIND_ORDER.filter((k) => KIND_COUNTS[k] > 0)

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
  '/systems': [
    { kind: 'link', href: '/systems#how-it-works', label: 'How it works' },
    { kind: 'link', href: '/systems#pricing', label: 'Pricing' },
    { kind: 'external', href: CALENDLY, label: 'Book a call' },
  ],
  '/sports': null,
}

function unitForPath(pathname: string): string | null {
  if (pathname === '/architecture-design' || pathname.startsWith('/architecture-design/'))
    return '/architecture-design'
  if (pathname === '/systems' || pathname.startsWith('/systems/'))
    return '/systems'
  if (pathname === '/sports') return '/sports'
  return null
}

export default function Nav() {
  const pathname = usePathname()
  const [companiesOpen, setCompaniesOpen] = useState(false)
  const [resourcesOpen, setResourcesOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const companiesRef = useRef<HTMLDivElement>(null)
  const resourcesRef = useRef<HTMLDivElement>(null)

  const companiesActive = COMPANIES.some(
    (c) => pathname === c.href || pathname.startsWith(`${c.href}/`),
  )
  const unit = unitForPath(pathname)
  const subItems = unit ? SUBNAV[unit] : null

  // Click outside + Escape closes whichever dropdown is open.
  useEffect(() => {
    if (!companiesOpen && !resourcesOpen) return
    function onDown(e: MouseEvent) {
      const target = e.target as Node
      if (companiesRef.current && !companiesRef.current.contains(target)) {
        setCompaniesOpen(false)
      }
      if (resourcesRef.current && !resourcesRef.current.contains(target)) {
        setResourcesOpen(false)
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setCompaniesOpen(false)
        setResourcesOpen(false)
      }
    }
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [companiesOpen, resourcesOpen])

  useEffect(() => {
    setCompaniesOpen(false)
    setResourcesOpen(false)
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
  const isResources =
    pathname === '/resources' ||
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

            {/* Companies dropdown — click-driven, one label as button. */}
            <div className="cruda-global-nav-dropdown" ref={companiesRef}>
              <button
                type="button"
                className={`cruda-global-nav-dropdown-btn${companiesOpen ? ' open' : ''}`}
                aria-haspopup="true"
                aria-expanded={companiesOpen}
                onClick={() => {
                  setResourcesOpen(false)
                  setCompaniesOpen((v) => !v)
                }}
                style={{
                  color: companiesActive ? 'var(--ink-2)' : 'var(--ink)',
                }}
              >
                Companies
                <span className="cruda-global-nav-dropdown-arrow" aria-hidden="true">▾</span>
              </button>
              <ul
                className={`cruda-global-nav-dropdown-menu${companiesOpen ? ' open' : ''}`}
                role="menu"
                aria-hidden={!companiesOpen}
              >
                {COMPANIES.map((c) => {
                  const active =
                    pathname === c.href || pathname.startsWith(`${c.href}/`)
                  return (
                    <li key={c.href} role="none">
                      <Link
                        href={c.href}
                        role="menuitem"
                        tabIndex={companiesOpen ? 0 : -1}
                        aria-current={active ? 'page' : undefined}
                        style={{
                          color: active ? 'var(--ink-2)' : 'var(--ink)',
                        }}
                        onClick={() => setCompaniesOpen(false)}
                      >
                        {c.label}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>

            {/* Resources — split-button. Label navigates; caret opens menu. */}
            <div className="cruda-global-nav-dropdown cruda-global-nav-resources" ref={resourcesRef}>
              <Link
                href="/resources"
                style={linkStyle(isResources)}
                aria-current={isResources ? 'page' : undefined}
                className="cruda-global-nav-resources-link"
              >
                Resources
              </Link>
              <button
                type="button"
                className={`cruda-global-nav-resources-caret${resourcesOpen ? ' open' : ''}`}
                aria-haspopup="true"
                aria-expanded={resourcesOpen}
                aria-label="Filter resources by format"
                onClick={() => {
                  setCompaniesOpen(false)
                  setResourcesOpen((v) => !v)
                }}
              >
                <span className="cruda-global-nav-dropdown-arrow" aria-hidden="true">▾</span>
              </button>
              <ul
                className={`cruda-global-nav-dropdown-menu${resourcesOpen ? ' open' : ''}`}
                role="menu"
                aria-hidden={!resourcesOpen}
              >
                {ACTIVE_FORMATS.map((k) => {
                  /* Brief v12 T2 — cada formato tiene su ruta real
                     con title/canonical propios. El nav apunta a las
                     rutas directas, no a query params. */
                  const href =
                    k === 'case-study'
                      ? '/resources/case-studies'
                      : k === 'essay'
                        ? '/resources/essays'
                        : `/resources?format=${k}`
                  return (
                    <li key={k} role="none">
                      <Link
                        href={href}
                        role="menuitem"
                        tabIndex={resourcesOpen ? 0 : -1}
                        onClick={() => setResourcesOpen(false)}
                      >
                        {KIND_LABEL_PLURAL[k]}{' '}
                        <span className="cruda-global-nav-dropdown-count">
                          ({KIND_COUNTS[k]})
                        </span>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>

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
            <details>
              <summary
                style={{
                  color: isResources ? 'var(--ink-2)' : 'var(--ink)',
                  fontFamily: 'var(--mono)',
                  fontWeight: 500,
                  fontSize: '12px',
                  letterSpacing: '.14em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  listStyle: 'none',
                }}
              >
                Resources
              </summary>
              <ul style={{ listStyle: 'none', paddingLeft: 16, marginTop: 8 }}>
                <li style={{ padding: '6px 0' }}>
                  <Link
                    href="/resources"
                    style={{
                      color: 'var(--ink)',
                      textDecoration: 'none',
                      fontFamily: 'var(--mono)',
                      fontSize: '12px',
                      letterSpacing: '.14em',
                      textTransform: 'uppercase',
                    }}
                    onClick={() => setMobileOpen(false)}
                  >
                    All resources
                  </Link>
                </li>
                {ACTIVE_FORMATS.map((k) => {
                  const href =
                    k === 'case-study'
                      ? '/resources/case-studies'
                      : k === 'essay'
                        ? '/resources/essays'
                        : `/resources?format=${k}`
                  return (
                    <li key={k} style={{ padding: '6px 0' }}>
                      <Link
                        href={href}
                        style={{
                          color: 'var(--ink)',
                          textDecoration: 'none',
                          fontFamily: 'var(--mono)',
                          fontSize: '12px',
                          letterSpacing: '.14em',
                          textTransform: 'uppercase',
                        }}
                        onClick={() => setMobileOpen(false)}
                      >
                        {KIND_LABEL_PLURAL[k]} ({KIND_COUNTS[k]})
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </details>
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
              {unit === '/systems' && 'CRUDA Systems'}
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
        .cruda-global-nav-dropdown-btn.open .cruda-global-nav-dropdown-arrow,
        .cruda-global-nav-resources-caret.open .cruda-global-nav-dropdown-arrow {
          transform: rotate(180deg);
        }
        .cruda-global-nav-dropdown-menu {
          position: absolute;
          top: 100%;
          right: 0;
          margin-top: 8px;
          min-width: 260px;
          /* Brief v4 UX §4.1 — bg opaco también en el dropdown panel. */
          background: var(--color-surface);
          border: 1px solid var(--color-rule);
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
          color: var(--ink);
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
        .cruda-global-nav-dropdown-count {
          opacity: 0.5;
          margin-left: 4px;
        }

        /* Resources — split-button: text is a link, caret is a button. */
        .cruda-global-nav-resources {
          display: inline-flex;
          align-items: center;
          gap: 2px;
        }
        .cruda-global-nav-resources-link {
          padding-right: 2px;
        }
        .cruda-global-nav-resources-caret {
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px 2px;
          display: inline-flex;
          align-items: center;
          color: var(--ink);
          font-size: 12px;
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

        /* ---------- Sub-nav (brief v6 T4) ---------- */
        .cruda-subnav {
          position: sticky;
          top: 68px;
          left: 0;
          right: 0;
          z-index: 90;
          background: var(--white);
          border-top: 1px solid var(--rule);
          border-bottom: 1px solid var(--rule);
        }
        .cruda-subnav-in {
          max-width: var(--max, 1360px);
          margin: 0 auto;
          padding: 10px var(--gut, clamp(24px, 5vw, 80px));
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }
        .cruda-subnav-brand {
          color: var(--ink-2);
          font-size: 11px;
        }
        .cruda-subnav-list {
          list-style: none;
          display: flex;
          align-items: center;
          gap: 28px;
          padding: 0;
          margin: 0;
        }
        .cruda-subnav-link {
          font-family: var(--mono);
          font-weight: 500;
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          text-decoration: none;
          color: var(--ink-2);
          transition: color 0.2s;
        }
        .cruda-subnav-link:hover { color: var(--ink); }
        .cruda-subnav-cta {
          font-family: var(--mono);
          font-weight: 500;
          font-size: 12px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          text-decoration: none;
          background: var(--ink);
          color: var(--white, #FFFFFF);
          padding: 12px 22px;
          transition: background-color 0.2s;
        }
        .cruda-subnav-cta:hover { background: var(--accent, #E8623A); }

        @media (max-width: 900px) {
          .cruda-subnav {
            top: 60px;
          }
          .cruda-subnav-in {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
            padding: 10px var(--gut, clamp(24px, 5vw, 80px));
          }
          .cruda-subnav-brand { display: none; }
          .cruda-subnav-list {
            gap: 18px;
            flex-wrap: wrap;
          }
        }
      `}</style>
    </>
  )
}
