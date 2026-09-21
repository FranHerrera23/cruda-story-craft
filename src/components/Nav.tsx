'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

/* Nav global · F11.2 · 21-sep · autónomo.

   Cinco items en el orden firmado del brief §2:
     Work · Services · About · Thinking · Contact
   15px · 400 · sentence case · SIN tracking.

   FONDO + COLOR SIGUEN A LA SUPERFICIE
   La barra detecta qué plano vive debajo (elementFromPoint en la
   esquina superior derecha) y aplica:
     .bar         background --paper · color --ink
     .bar--dark   background --black · color --white
   Cero mix-blend-mode, cero contadores NN/10 ni NN/07.

   Detección: cualquier ancestor con clase .plane--black, .hero,
   .act1, .note pinta oscuro. Cualquier .plane--paper, .work,
   .act2 pinta paper. Default paper.

   El matcher regex por item se mantiene: sirve para marcar el
   activo aunque un 301 pise la URL (usePathname del cliente ve
   la vieja antes del redirect). */

const NAV_ITEMS = [
  { href: '/#selected-work', label: 'Work',    match: /^\/(work|architecture-design|resources\/case-studies|clients)/ },
  { href: '/services',       label: 'Services', match: /^\/(services|process|approach)/ },
  { href: '/about',          label: 'About',    match: /^\/(about|our-founder)/ },
  { href: '/thinking',       label: 'Thinking', match: /^\/(thinking|essays|resources\/essays)/ },
  { href: '/contact',        label: 'Contact',  match: /^\/contact/ },
] as const

export default function Nav() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [away, setAway] = useState(false)
  const [ready, setReady] = useState(false)
  const [dark, setDark] = useState(false)

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    setReady(true)
  }, [])

  /* Hide-on-scroll-down. Comportamiento heredado. */
  useEffect(() => {
    const HIDE_AFTER = 80
    const DELTA_MIN = 12
    let last = window.scrollY
    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const y = window.scrollY
        const delta = y - last
        if (Math.abs(delta) < DELTA_MIN) {
          ticking = false
          return
        }
        if (y <= HIDE_AFTER) setAway(false)
        else if (delta > 0) setAway(true)
        else setAway(false)
        last = y
        ticking = false
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* barTheme · qué hay debajo de la nav. La nav está fija encima,
     así que `elementFromPoint` la devolvería a ella. En vez de eso
     buscamos entre todos los planos y secciones etiquetadas cuál
     está intersectando la línea superior del viewport.

     Sin mix-blend-mode. Corre en scroll, resize y al montar. */
  useEffect(() => {
    let raf = 0
    let tick = false
    const DARK = ['plane--black', 'hero', 'act1', 'note']
    const PAPER = ['plane--paper', 'act2', 'home-work']
    const decide = () => {
      const probeY = 24
      const probeX = window.innerWidth - 24
      /* Con planos sticky, varios pueden aparentar rect.top=0 al
         mismo tiempo. El apilado se resuelve por z-index de DOM
         (posterior = arriba). elementFromPoint respeta z-index,
         pero devolvería la propia .bar. Solución: pointer-events:
         none temporal en la nav, hit-test, restore. */
      const nav = document.querySelector<HTMLElement>('.cruda-global-nav')
      let pe = ''
      if (nav) {
        pe = nav.style.pointerEvents
        nav.style.pointerEvents = 'none'
      }
      const el = document.elementFromPoint(probeX, probeY)
      if (nav) nav.style.pointerEvents = pe
      let n: Element | null = el
      let d: boolean | null = null
      while (n && n !== document.body) {
        const cl = (n as HTMLElement).classList
        if (cl) {
          if (DARK.some(k => cl.contains(k))) { d = true; break }
          if (PAPER.some(k => cl.contains(k))) { d = false; break }
          if (cl.contains('plane')) { d = false; break }
        }
        n = n.parentElement
      }
      setDark(d === true)
      tick = false
    }
    const on = () => {
      if (tick) return
      tick = true
      raf = requestAnimationFrame(decide)
    }
    decide()
    window.addEventListener('scroll', on, { passive: true })
    window.addEventListener('resize', on, { passive: true })
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', on)
      window.removeEventListener('resize', on)
    }
  }, [])

  const navClass = [
    'cruda-global-nav bar',
    dark ? 'bar--dark' : '',
    away && !mobileOpen ? 'away' : '',
    ready ? 'ready' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <>
      <nav className={navClass} data-nav>
        <div className="cruda-global-nav-in">
          <Link href="/" className="cruda-global-nav-brand" aria-label="CRUDA home">
            CRUDA
          </Link>

          <div className="cruda-global-nav-menu">
            {NAV_ITEMS.map((item) => {
              const isActive = item.match.test(pathname)
              return (
                <span key={item.href} className="nav__item">
                  <Link
                    href={item.href}
                    className="link"
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                </span>
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
                  className="link"
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
        .cruda-global-nav.bar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 110;
          /* F11.2 · fondo + color siguen a la superficie. Sin borde
             ni franja para no marcar el corte entre planos. */
          background: transparent;
          color: var(--ink, #0D0D0D);
          border-bottom: 0;
          transform: translateY(0);
          transition:
            transform var(--dur-3, 500ms) var(--ease, cubic-bezier(.16,1,.3,1)),
            color 260ms cubic-bezier(.16,1,.3,1);
          will-change: transform;
        }
        .cruda-global-nav.bar.bar--dark {
          color: var(--white, #FAF9F7);
        }
        .cruda-global-nav.away {
          transform: translateY(-100%);
        }
        .cruda-global-nav-in {
          max-width: 1600px;
          margin-inline: 0;
          padding: 18px var(--pad, clamp(20px, 4.5vw, 72px));
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }
        .cruda-global-nav-brand {
          font-family: var(--font-archivo), 'Archivo', 'Helvetica Neue', Helvetica, Arial, sans-serif;
          font-weight: 700;
          font-size: 16px;
          letter-spacing: .04em;
          color: inherit;
          text-decoration: none;
        }
        .cruda-global-nav-menu {
          display: flex;
          align-items: center;
          gap: clamp(16px, 1.9vw, 26px);
        }
        .nav__item {
          display: inline-block;
          overflow: hidden;
        }
        .nav__item .link {
          display: inline-block;
          position: relative;
          /* F11.2 §2 · 15px · 400 · sentence case · SIN tracking. */
          font-family: var(--font-archivo), 'Archivo', 'Helvetica Neue', Helvetica, Arial, sans-serif;
          font-weight: 400;
          font-size: 15px;
          letter-spacing: -.005em;
          text-transform: none;
          color: inherit;
          text-decoration: none;
          transform: translateY(100%);
          transition: transform var(--dur-3, 500ms) var(--ease-exit, cubic-bezier(.33,1,.68,1));
        }
        .cruda-global-nav.ready .nav__item .link {
          transform: translateY(0);
        }
        .cruda-global-nav-menu .nav__item:nth-child(1) .link { transition-delay: 0; }
        .cruda-global-nav-menu .nav__item:nth-child(2) .link { transition-delay: var(--stagger, 75ms); }
        .cruda-global-nav-menu .nav__item:nth-child(3) .link { transition-delay: calc(2 * var(--stagger, 75ms)); }
        .cruda-global-nav-menu .nav__item:nth-child(4) .link { transition-delay: calc(3 * var(--stagger, 75ms)); }
        .cruda-global-nav-menu .nav__item:nth-child(5) .link { transition-delay: calc(4 * var(--stagger, 75ms)); }
        .nav__item .link::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 100%;
          height: 1px;
          background: currentColor;
          transform: scaleX(0);
          transform-origin: right;
          transition: transform var(--dur-4, 600ms) var(--ease, cubic-bezier(.16,1,.3,1));
        }
        .nav__item .link:hover::after,
        .nav__item .link:focus-visible::after {
          transform: scaleX(1);
          transform-origin: left;
        }
        .cruda-global-nav-mobile-toggle {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          gap: 5px;
          flex-direction: column;
          color: inherit;
        }
        .cruda-global-nav-mobile-toggle span {
          display: block;
          width: 22px;
          height: 1.5px;
          background: currentColor;
        }
        .cruda-global-nav-mobile {
          padding: 0 var(--pad, clamp(20px, 4.5vw, 72px)) 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .cruda-global-nav-mobile .link {
          font-size: 15px;
          font-weight: 400;
          letter-spacing: -.005em;
          color: inherit;
          text-decoration: none;
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
