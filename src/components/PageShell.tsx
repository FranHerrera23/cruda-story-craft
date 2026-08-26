'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

/* Type-narrowing local para document.startViewTransition. Dependiendo
   del target de TS lib puede o no estar declarado en Document; usamos
   un type-cast en el callsite en lugar de aumentar la interfaz. */
type StartViewTransitionFn = (callback: () => void) => { finished: Promise<void> }

/* F3.1 — Transición de página.

   Envuelve el <main> en layout.tsx. Intercepta clicks en cualquier <a>
   interno (next/link renderea <a>, así que quedan cubiertos) y arranca
   una view transition:

     · Salida: opacity 1→0 en 300ms con --ease-ui
     · scrollTo(0,0) ocurre DENTRO del callback, es decir mientras
       el fade está corriendo — no después.
     · Entrada: opacity 0→1 en 500ms con --ease-overlay
     · Sin translate, sin slide, sin scale. Solo opacidad.

   La animación real vive en globals.css bajo ::view-transition-old(root)
   / ::view-transition-new(root).

   Fallback: browsers sin document.startViewTransition (Firefox al
   momento de escribir) navegan normalmente; el reveal existente del
   .route-transition-wrapper les da el fade-in de entrada.

   prefers-reduced-motion cancela las animaciones (definido en CSS). */

export default function PageShell({ children }: { children: React.ReactNode }) {
  const router = useRouter()

  useEffect(() => {
    if (typeof document === 'undefined') return
    const startViewTransition = (document as unknown as { startViewTransition?: StartViewTransitionFn }).startViewTransition
    if (typeof startViewTransition !== 'function') return

    function onClick(e: MouseEvent) {
      // Solo click primario, sin modificadores (permitimos abrir en pestaña con cmd/ctrl+click).
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return
      const target = e.target as HTMLElement | null
      if (!target) return
      const anchor = target.closest('a') as HTMLAnchorElement | null
      if (!anchor) return
      const href = anchor.getAttribute('href')
      if (!href) return
      // Solo links internos absolutos ("/algo") — no anclas, no protocolos, no // externos.
      if (!href.startsWith('/') || href.startsWith('//')) return
      // download / target="_blank" quedan afuera.
      if (anchor.target && anchor.target !== '_self') return
      if (anchor.hasAttribute('download')) return

      e.preventDefault()
      startViewTransition!(() => {
        window.scrollTo(0, 0)
        router.push(href)
      })
    }

    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [router])

  return <>{children}</>
}
