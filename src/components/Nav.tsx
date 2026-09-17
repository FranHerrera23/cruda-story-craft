'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

/* Brief v2 Task 4 — nav de 5 items:

     About  ·  Work  ·  Process  ·  Essays  ·  Contact

   Fuera de la nav: la COMPANIES dropdown entera (retirada), la
   RESOURCES dropdown (colapsada — Essays vive standalone ahora, y
   Work vive standalone también). Fuera del sitio: /sports y /systems
   devuelven 410 desde middleware.ts.

   About → /about (Brief 02, 14-sep · /our-founder redirige 301
   permanente). Nav flat, sin dropdowns.

   Regla lockeada — ver docs/decisions.md #nombres-de-rutas-retiradas.
   El regex `match: /^\/(about|our-founder)/` mantiene el nombre
   viejo (`our-founder`) como matcher. El 308 dispara desde el
   servidor, pero durante el frame antes de que resuelva,
   usePathname() del cliente devuelve la URL vieja. Sin ese matcher
   el estado activo se pierde por un frame. NO LIMPIAR mientras
   exista el redirect. */

const NAV_ITEMS = [
  { href: '/about', label: 'About', match: /^\/(about|our-founder)/ },
  /* Home · Selected Work (brief 10-sep §9 paso 5) — WORK apunta al
     ancla en la home. Las rutas hijas /work/[slug] siguen matcheando
     el activo por la regex; en la home el activo lo dispara /work
     via el fragment. */
  { href: '/#selected-work', label: 'Work', match: /^\/(work|architecture-design|resources\/case-studies|clients)/ },
  /* Brief 03 (14-sep) · /approach → /process. El regex incluye
     el nombre viejo por la ventana de un frame antes de que el
     301 resuelva (ver docs/decisions.md #nombres-de-rutas-retiradas). */
  { href: '/process', label: 'Process', match: /^\/(process|approach)/ },
  { href: '/essays', label: 'Essays', match: /^\/(essays|resources\/essays|thinking)/ },
  { href: '/contact', label: 'Contact', match: /^\/contact/ },
] as const

export default function Nav() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [away, setAway] = useState(false)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  /* Brief 11-sep §5 — cada link entra desde abajo con delays
     escalonados. `ready` se dispara en mount (post-hydration) para
     que la transición corra desde el estado inicial `translateY(100%)`
     al final `translateY(0)`. Cinco items con stagger de 75ms. */
  useEffect(() => {
    setReady(true)
  }, [])

  /* Motion v3 §10 · brief F8 §3 (17-sep) — la nav se oculta al
     bajar y vuelve al subir. Dos correcciones sobre la versión
     anterior:

     1 · umbral de delta acumulado. Antes: `y > last` con estricta
         desigualdad. Con Lenis smooth-scroll el `scrollY` se
         interpola cada frame y el sample rAF ve deltas de 1–3px.
         Al scrollear despacio dentro de un acto (wheelMultiplier
         0.35), la dirección instantánea entre frames se puede
         invertir por el jitter de la interpolación y `.away`
         togglea varias veces por segundo · la nav parece saltar
         entre subir y bajar. Con delta acumulado de DELTA_MIN
         (12px) la dirección requerida es real, no ruido.

     2 · inicialización de `last` con la posición actual al
         montar. Antes arrancaba en 0; si la página se refresca
         en scrollY alto, el primer sample daba delta enorme y
         forzaba `.away` aunque el usuario no hubiera scrolleado
         todavía.

     Passive listener; el trabajo se agrupa en rAF para no
     correr por cada evento de scroll. */
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
        if (y <= HIDE_AFTER) {
          setAway(false)
        } else if (delta > 0) {
          setAway(true)
        } else {
          setAway(false)
        }
        last = y
        ticking = false
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Brief 11-sep §3 — nav en var(--grot), tamaño chico, mismo peso
     para todos. El activo se marca por --color-ink; los demás en
     --ink hasta hover. */
  const linkStyle = (isActive: boolean): React.CSSProperties => ({
    color: isActive ? 'var(--ink)' : 'var(--ink)',
    textDecoration: 'none',
    fontFamily: 'var(--grot)',
    fontWeight: 500,
    fontSize: '12px',
    letterSpacing: '.14em',
    textTransform: 'uppercase',
  })

  const navClass = [
    'cruda-global-nav',
    away && !mobileOpen ? 'away' : '',
    ready ? 'ready' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <>
      <nav className={navClass}>
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
                    style={linkStyle(isActive)}
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
          background: var(--paper);
          border-bottom: 1px solid var(--rule);
          /* §5.1 — la nav se retira al bajar con .away.
             Transform + transition; sin ocupar espacio del layout.
             Motion system: --t-3 y --ease. */
          transform: translateY(0);
          transition: transform var(--dur-3) var(--ease);
          will-change: transform;
        }
        .cruda-global-nav.away {
          transform: translateY(-100%);
        }
        /* reduce global vive en globals.css (motion §6). */
        .cruda-global-nav-in {
          /* §2 · un solo margen izq en todo el sitio; el nav
             tampoco se centra. Max-width 1600 como guardia. */
          max-width: 1600px;
          margin-inline: 0;
          padding: 30px var(--pad);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }
        .cruda-global-nav-brand {
          font-weight: 700;
          font-size: 19px;
          letter-spacing: 0.04em;
          color: var(--ink);
          text-decoration: none;
        }
        .cruda-global-nav-menu {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        /* Brief 11-sep §5 — reveal del nav.
           Cada item envuelto en .nav__item con overflow:hidden. El
           link interno arranca en translateY(100%); cuando la nav
           tiene .ready, translateY(0). Cinco items con stagger de
           75ms. */
        .nav__item {
          display: inline-block;
          overflow: hidden;
        }
        .nav__item .link {
          display: inline-block;
          position: relative;
          transform: translateY(100%);
          /* Motion §3.5 — entrada desde máscara con --ease-exit y --t-3. */
          transition: transform var(--dur-3) var(--ease-exit);
        }
        .cruda-global-nav.ready .nav__item .link {
          transform: translateY(0);
        }
        /* Stagger de cinco items en múltiplos de --stagger (75ms). */
        .cruda-global-nav-menu .nav__item:nth-child(1) .link { transition-delay: 0; }
        .cruda-global-nav-menu .nav__item:nth-child(2) .link { transition-delay: var(--stagger); }
        .cruda-global-nav-menu .nav__item:nth-child(3) .link { transition-delay: calc(2 * var(--stagger)); }
        .cruda-global-nav-menu .nav__item:nth-child(4) .link { transition-delay: calc(3 * var(--stagger)); }
        .cruda-global-nav-menu .nav__item:nth-child(5) .link { transition-delay: calc(4 * var(--stagger)); }

        /* Subrayado del link — crece desde la derecha en salida y
           desde la izquierda en hover. El cambio de origin es lo que
           lo hace sentir intencional. */
        .nav__item .link::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -3px;
          width: 100%;
          height: 1px;
          background: currentColor;
          transform: scaleX(0);
          transform-origin: right;
          transition: transform var(--dur-4) var(--ease);
        }
        .nav__item .link:hover::after,
        .nav__item .link:focus-visible::after {
          transform: scaleX(1);
          transform-origin: left;
        }

        /* reduce global (motion §6) apaga transitions y fija
           .nav__item > * en transform:none. Sin regla local. */

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
          background: var(--ink);
        }
        .cruda-global-nav-mobile {
          padding: 0 var(--pad) 24px;
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
