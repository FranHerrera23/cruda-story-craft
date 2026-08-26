'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'

/* F3.1 — Transición de página.

   Envuelve el <main> en layout.tsx. Intercepta clicks en cualquier <a>
   interno (next/link renderea <a>, así que quedan cubiertos) y ejecuta
   una transición de página opacity-only.

     · Salida: opacity 1→0 en 300ms (--dur-hover) con --ease-ui
     · scrollTo(0,0) con behavior:'instant' — bypasea el
       scroll-behavior:smooth global. Ocurre DURANTE el fade.
     · Entrada: opacity 0→1 en 500ms (--dur-overlay) con --ease-overlay
     · Sin translate, sin slide, sin scale. Solo opacidad.

   Dos caminos según soporte del browser:

   1. Chrome/Edge/Safari (con document.startViewTransition):
      Wrap navegación + scroll dentro de startViewTransition. El fade
      out/in vive en globals.css bajo ::view-transition-old/new(root).

   2. Firefox (sin startViewTransition) — F3.1 fallback:
      Estado local phase = 'idle' | 'leaving' | 'entering'. En
      'leaving' el wrapper aplica opacity 1→0 vía data-attribute + CSS
      transition. Setimeout(300ms) hace scroll + push. Cuando cambia
      pathname, phase pasa a 'entering' (opacity 0→1 vía animation
      cruda-page-fade-in). Setimeout(500ms) vuelve a 'idle'.

   Fran: mismo comportamiento en Firefox y en Chrome — no depende del
   browser.

   prefers-reduced-motion cancela ambos caminos (CSS). */

type StartViewTransitionFn = (callback: () => void) => { finished: Promise<void> }
type Phase = 'idle' | 'leaving' | 'entering'

const LEAVE_MS = 300
const ENTER_MS = 500

export default function PageShell({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const [phase, setPhase] = useState<Phase>('idle')
  const pendingHref = useRef<string | null>(null)
  const prevPath = useRef(pathname)
  const enterTimer = useRef<number | null>(null)

  /* Intercept: uso un listener por click con cleanup. Router + hasVT
     no cambian, así que el effect se monta una sola vez. */
  useEffect(() => {
    if (typeof document === 'undefined') return

    const startViewTransition = (
      document as unknown as { startViewTransition?: StartViewTransitionFn }
    ).startViewTransition
    const hasVT = typeof startViewTransition === 'function'

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

      e.preventDefault()

      if (hasVT) {
        startViewTransition!(() => {
          window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
          router.push(href)
        })
      } else {
        /* Fallback: fade-out → nav → fade-in con estado React. */
        pendingHref.current = href
        setPhase('leaving')
        window.setTimeout(() => {
          window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
          router.push(href)
          /* No cambiamos phase acá — el effect de pathname lo hace
             cuando el nuevo path llega. Mientras tanto seguimos en
             'leaving' (opacity 0), y el nuevo contenido renderea
             invisible bajo esa opacidad. */
        }, LEAVE_MS)
      }
    }

    document.addEventListener('click', onClick)
    return () => {
      document.removeEventListener('click', onClick)
    }
  }, [router])

  /* Cuando el pathname cambia por el fallback, arrancamos 'entering'.
     Para Chrome no importa: pendingHref queda null porque VT no lo
     usa. */
  useEffect(() => {
    if (pendingHref.current && prevPath.current !== pathname) {
      pendingHref.current = null
      setPhase('entering')
      if (enterTimer.current) clearTimeout(enterTimer.current)
      enterTimer.current = window.setTimeout(() => {
        setPhase('idle')
        enterTimer.current = null
      }, ENTER_MS)
    }
    prevPath.current = pathname
    return () => {
      if (enterTimer.current) {
        clearTimeout(enterTimer.current)
        enterTimer.current = null
      }
    }
  }, [pathname])

  return <div data-page-phase={phase}>{children}</div>
}
