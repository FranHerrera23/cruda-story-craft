'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'

/* PageShell · F23.1 · 22-sep.

   Reemplaza la máscara ink de Motion v3 §8 por un crossfade de 250ms
   entre rutas internas, via View Transitions API. La nav queda fija:
   se le da su propio `view-transition-name: cruda-nav` (globals.css)
   y su cross-fade se apaga con `animation:none`.

   Fallback sin transición: si el browser no soporta la API, hacemos
   router.push directo — la ruta cambia sin animación. Fran, F23.1
   §2.4: "con fallback sin transición".

   `prefers-reduced-motion`: sin transición. En capture, si el media
   query está activo, dejamos que next/link maneje el click (Link
   nativo, client nav instantáneo).

   F23.1 §2.3 · scroll por ruta.
   Antes de disparar una nav interna, guardamos la posición actual
   en sessionStorage[SCROLL_KEY][previousPath]. En popstate (back /
   forward) marcamos el flag `isPop`; en el useEffect de pathname, si
   isPop está activo, restauramos la Y guardada. En una nav dirigida
   (click en un link) reseteamos a 0 salvo que la URL nueva traiga
   hash (Lenis / #ancla lo maneja).

   El wrapper .route-mask se conserva en el DOM (dead) pero NUNCA se
   le setea data-state: el panel queda translateY(100%) fuera del
   viewport, sin coste visual. Cleanup en un follow-up. */

type LenisApi = {
  stop?: () => void
  start?: () => void
}

function getLenis(): LenisApi | null {
  if (typeof window === 'undefined') return null
  const w = window as unknown as { __lenis?: LenisApi }
  return w.__lenis ?? null
}

/* Sessionstorage key + mini API para persistir la posición de scroll
   por ruta. Cada entrada es `{ [pathname]: number }`. */
const SCROLL_KEY = 'cruda-scroll-history'

function readScrollHistory(): Record<string, number> {
  try {
    const raw = sessionStorage.getItem(SCROLL_KEY)
    return raw ? (JSON.parse(raw) as Record<string, number>) : {}
  } catch {
    return {}
  }
}

function saveScroll(path: string, y: number) {
  try {
    const data = readScrollHistory()
    data[path] = y
    sessionStorage.setItem(SCROLL_KEY, JSON.stringify(data))
  } catch {}
}

function getSavedScroll(path: string): number | undefined {
  return readScrollHistory()[path]
}

type StartViewTransitionApi = (cb: () => void) => { finished?: Promise<void> }

function supportsViewTransitions(): boolean {
  if (typeof document === 'undefined') return false
  return typeof (document as unknown as { startViewTransition?: StartViewTransitionApi })
    .startViewTransition === 'function'
}

export default function PageShell({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const [ready, setReady] = useState(false)
  const prevPath = useRef(pathname)
  const isPop = useRef(false)

  useEffect(() => {
    setReady(true)
  }, [])

  /* Popstate flag · marcamos el próximo pathname change como back
     button para que el useEffect de pathname restaure el scroll
     guardado en vez de resetearlo a 0. También cubrimos el caso de
     full-load con navigation.type === 'back_forward' (browser sin
     bfcache que hace una navegación completa al volver): en ese
     caso el layout re-monta y no hay popstate para escuchar. */
  useEffect(() => {
    if (typeof window === 'undefined') return
    function onPop() {
      isPop.current = true
    }
    window.addEventListener('popstate', onPop)
    /* Full-load con back/forward · restauramos scroll de la ruta
       actual desde sessionStorage, con el mismo rAF loop. */
    const navEntry = performance.getEntriesByType('navigation')[0] as
      | (PerformanceNavigationTiming & { type: string })
      | undefined
    if (navEntry && navEntry.type === 'back_forward') {
      const y = getSavedScroll(window.location.pathname)
      if (typeof y === 'number') {
        let tries = 0
        const attempt = () => {
          if (tries++ > 120) return
          const maxY =
            document.documentElement.scrollHeight - window.innerHeight
          if (maxY >= y) {
            window.scrollTo(0, y)
          } else {
            window.requestAnimationFrame(attempt)
          }
        }
        window.requestAnimationFrame(attempt)
      }
    }
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  /* Click interceptor · guarda el scroll de la ruta actual antes de
     navegar, y dispara la nav dentro de startViewTransition para el
     crossfade. */
  useEffect(() => {
    if (typeof document === 'undefined') return

    function onClick(e: MouseEvent) {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return
      const target = e.target as HTMLElement | null
      if (!target) return
      const anchor = target.closest('a') as HTMLAnchorElement | null
      if (!anchor) return
      const href = anchor.getAttribute('href')
      if (!href) return
      if (!href.startsWith('/') || href.startsWith('//')) return
      if (anchor.target && anchor.target !== '_self') return
      if (anchor.hasAttribute('download')) return

      /* Hash-only: misma pathname, cambia solo el fragmento. Lenis
         anchors se ocupa. Ni transición ni scroll reset. */
      const url = new URL(href, window.location.href)
      if (url.pathname === window.location.pathname) return

      /* F23.1 · guardamos la posición actual antes de irnos. */
      saveScroll(window.location.pathname, window.scrollY)

      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

      /* Cross-fade solo si la API existe y motion no está reducido.
         Fallback: router.push directo. */
      if (!reduce && supportsViewTransitions()) {
        e.preventDefault()
        getLenis()?.stop?.()
        /* Brief 14-sep P0.1 · linesReady flag persiste entre rutas
           en Next SPA. Lo limpiamos para que RevealScroll re-mida
           en la ruta nueva. */
        delete document.documentElement.dataset.linesReady
        /* Llamamos startViewTransition sobre el propio document
           para preservar el `this`. Extraerla en una variable y
           llamarla suelta rompe el binding y tira. */
        const vt = (document as unknown as {
          startViewTransition: StartViewTransitionApi
        }).startViewTransition(() => {
          router.push(href)
        })
        if (vt.finished) {
          vt.finished.finally(() => getLenis()?.start?.())
        } else {
          getLenis()?.start?.()
        }
      }
      /* Reduced motion o browser sin VT: dejamos que next/link haga
         su client nav nativo. No preventDefault. */
    }

    /* Capture phase: nuestro handler tiene que correr antes del de
       next/link para preventDefault. */
    document.addEventListener('click', onClick, true)
    return () => document.removeEventListener('click', onClick, true)
  }, [router])

  /* Restore de scroll cuando la ruta cambia. En popstate (isPop),
     restauramos la Y guardada. En nav dirigida, dejamos que Loader
     (carga completa) o next/link (client nav) hagan el reset a 0. */
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (prevPath.current === pathname) return
    prevPath.current = pathname
    if (isPop.current) {
      isPop.current = false
      const y = getSavedScroll(pathname)
      if (typeof y === 'number') {
        /* Esperamos a que el documento tenga altura suficiente
           antes de restaurar. El apilado (PlanesStack) hace su
           cálculo en useEffect al montar; hasta entonces la
           altura total puede ser menor que la Y guardada. rAF loop
           con tope ~1s para no colgar si la ruta no llega a esa
           altura (ej. contenido cambió). */
        let tries = 0
        const attempt = () => {
          if (tries++ > 60) return
          const maxY =
            document.documentElement.scrollHeight - window.innerHeight
          if (maxY >= y) {
            window.scrollTo(0, y)
          } else {
            window.requestAnimationFrame(attempt)
          }
        }
        window.requestAnimationFrame(attempt)
      }
    }
  }, [pathname])

  return (
    <div className={`page-root${ready ? ' ready' : ''}`}>
      {children}
      {/* F23.1 · route-mask queda en el DOM pero nunca se activa.
          La transición ahora es View Transitions API (globals.css). */}
      <div className="route-mask" data-state="idle" aria-hidden="true">
        <div className="route-mask__panel" />
      </div>
    </div>
  )
}
