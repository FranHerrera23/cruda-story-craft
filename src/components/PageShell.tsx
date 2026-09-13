'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'

/* Motion v3 §8 — Transición de ruta con máscara.

   Reemplaza la transición opacity-only (motion §3.2 / F3.1). Un
   panel de ancho completo en --ink entra desde abajo, la ruta
   cambia detrás, y el panel destapa hacia arriba.

   Reglas duras del brief:
     · La salida (destape) es más lenta que la entrada (cubrir).
       Cubrir es funcional; destapar es el momento que se mira.
       Cubrir --dur-3 con --ease (in); destapar --dur-4 con
       --ease-exit (out).
     · El scroll se resetea mientras está cubierto, nunca antes.
     · Lenis se para durante la transición: lenis.stop() al cubrir,
       lenis.start() al destapar.

   Se dispara sobre clicks internos (next/link renderea <a>, así
   que quedan cubiertos). Hash-only (misma pathname, cambia hash)
   se salta — ahí actúa Lenis anchors, no la máscara.

   Back button del navegador: el `popstate` es fast direct, sin
   máscara. Cuando la nueva URL llega vía popstate, pendingRef está
   en null y el useEffect de pathname no dispara 'revealing'. No es
   una regresión, es una decisión: la máscara marca navegación
   dirigida, no historial.

   Motion §3.1 · fade de hidratación en `.page-root` se conserva —
   no depende de la transición y da la sensación de página que
   entra al cargar la primera vez.

   prefers-reduced-motion: la máscara se apaga por CSS
   (display:none). El click sigue haciendo router.push directo. */

type State = 'idle' | 'covering' | 'revealing'

type LenisApi = {
  stop?: () => void
  start?: () => void
}

/* SmoothScroll (motion v3 §4) expone la instancia en window.__lenis.
   Vive fuera del árbol React; el shell la consume por window. */
function getLenis(): LenisApi | null {
  if (typeof window === 'undefined') return null
  const w = window as unknown as { __lenis?: LenisApi }
  return w.__lenis ?? null
}

/* Ventana de cubrir tiene que quedar sincronizada con --dur-3, y
   ventana de destapar con --dur-4. Si algún día cambian los tokens
   estos números tienen que seguir. */
const COVER_MS = 500
const REVEAL_MS = 600

export default function PageShell({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const [state, setState] = useState<State>('idle')
  const [ready, setReady] = useState(false)
  const pendingHref = useRef<string | null>(null)
  const prevPath = useRef(pathname)
  const revealTimer = useRef<number | null>(null)

  useEffect(() => {
    setReady(true)
  }, [])

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
         anchors se ocupa. La máscara no se dispara. */
      const url = new URL(href, window.location.href)
      if (url.pathname === window.location.pathname) return

      /* Reduced motion: la máscara ya está en display:none por CSS,
         pero además no queremos meter un COVER_MS de delay para una
         nav que va a saltar sin transición. Dejamos que next/link
         maneje el click normalmente — client nav instantáneo. */
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return
      }

      e.preventDefault()

      pendingHref.current = href
      setState('covering')
      getLenis()?.stop?.()

      window.setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
        router.push(href)
      }, COVER_MS)
    }

    /* Capture phase: document listener corre ANTES del onClick que
       next/link agrega en el <a>. Sin esto, next/link ya llamó a
       router.push sincrónicamente para cuando corre nuestro handler
       — la URL cambió, la comparación con window.location.pathname
       da igualdad y bailamos sin haber montado la máscara. Con
       capture, preventDefault corre primero y next/link no llega
       a disparar. */
    document.addEventListener('click', onClick, true)
    return () => document.removeEventListener('click', onClick, true)
  }, [router])

  useEffect(() => {
    if (pendingHref.current && prevPath.current !== pathname) {
      pendingHref.current = null
      setState('revealing')
      getLenis()?.start?.()
      if (revealTimer.current) window.clearTimeout(revealTimer.current)
      revealTimer.current = window.setTimeout(() => {
        setState('idle')
        revealTimer.current = null
      }, REVEAL_MS)
    }
    prevPath.current = pathname
    return () => {
      if (revealTimer.current) {
        window.clearTimeout(revealTimer.current)
        revealTimer.current = null
      }
    }
  }, [pathname])

  return (
    <div className={`page-root${ready ? ' ready' : ''}`}>
      {children}
      <div className="route-mask" data-state={state} aria-hidden="true">
        <div className="route-mask__panel" />
      </div>
    </div>
  )
}
