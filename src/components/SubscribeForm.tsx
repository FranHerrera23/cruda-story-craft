'use client'

import { useEffect, useRef } from 'react'

/* F53 · SubscribeForm · embed hosted de beehiiv.
   Fran 30-sep · reemplaza el CaptureForm in-house al final de los
   ensayos (/thinking/*) y en /newsletter.

   Reglas de carga (Fran 30-sep):
   1. El script `loader.js` no va en <head> ni al cargar la página.
      Se inyecta con IntersectionObserver cuando la caja está a
      ~300px de entrar en pantalla (rootMargin: '300px 0px').
   2. Aunque haya más de un SubscribeForm en la página, el script
      se inyecta UNA SOLA vez. Segunda instancia usa el loader ya
      cargado por la primera.
   3. Reservamos altura con `min-height` en el contenedor para que
      la aparición del iframe no genere CLS. Valores medidos en
      390 y 1440 (ver docs/essays.md §6 y F53 pixel-diff report).

   Substack sale del formulario en un commit aparte, mergeable
   antes que el resto de F53. Este componente nunca lo toca.

   El form ID es público (no secret) y vive hardcodeado. La
   versión ES viene con un ID propio cuando Fran lo cree en
   beehiiv (`lang="es"` prop → id_es); por ahora la misma caja
   sirve para EN y ES. */

const BEEHIIV_SRC = 'https://subscribe-forms.beehiiv.com/v3/loader.js'
const BEEHIIV_FORM_ID = 'c7cb08c8-b381-4b1e-a20f-76c86ce39552'

/* One-shot module-level guard: si otra instancia ya inyectó el
   loader en esta pageview, no lo repetimos. Se resetea con cada
   navegación full-page (recarga del módulo). En navegaciones
   client-side de Next, se preserva · lo que es correcto porque
   el script sigue vivo en el DOM. */
let loaderInjected = false

export default function SubscribeForm({
  lang = 'en',
}: {
  lang?: 'en' | 'es'
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    /* IntersectionObserver · rootMargin 300px arriba/abajo para
       que la carga empiece antes de que la caja entre en pantalla.
       Con `once` en la primera intersección desconectamos. */
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue
          io.disconnect()
          injectLoader(el)
        }
      },
      { rootMargin: '300px 0px' },
    )
    io.observe(el)
    return () => {
      io.disconnect()
      /* No vaciamos el nodo en unmount para preservar el iframe
         entre navegaciones client-side · si el user vuelve al
         ensayo, la caja está lista. Beehiiv maneja su propio
         lifecycle interno. */
    }
  }, [])

  return (
    <div
      ref={ref}
      className="e-subscribe"
      data-lang={lang}
      /* Reserva CLS · valores fijos por breakpoint (min-height).
         Los valores exactos se derivan del reporte pixel-diff:
         la caja beehiiv v3 mide ~340px en 390 y ~280px en 1440.
         Ambos escenarios reservan un poco más para dar margen. */
      style={{ minHeight: 360 }}
    />
  )
}

function injectLoader(target: HTMLElement) {
  if (loaderInjected) {
    /* El script ya está en el DOM · el loader v3 detecta nuevos
       nodos con data-beehiiv-form vía MutationObserver interno,
       así que sólo hace falta ponerle el marker al target. */
    const marker = document.createElement('div')
    marker.setAttribute('data-beehiiv-form', BEEHIIV_FORM_ID)
    target.appendChild(marker)
    return
  }
  loaderInjected = true
  const s = document.createElement('script')
  s.src = BEEHIIV_SRC
  s.async = true
  s.setAttribute('data-beehiiv-form', BEEHIIV_FORM_ID)
  target.appendChild(s)
}
