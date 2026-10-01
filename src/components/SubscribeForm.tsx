'use client'

import { useEffect, useRef } from 'react'

/* F53 §7 · SubscribeForm · embed hosted de beehiiv (EN only).
   Fran 30-sep · reemplaza el CaptureForm in-house al final de los
   ensayos EN (/thinking/<slug-en>) y en /newsletter.

   Foco 100% inglés (Fran 30-sep · ajuste posterior):
   - En ensayos ES no se renderiza · la línea de newsletter del
     .md se mantiene como itálica con link a /newsletter.
   - No hay prop lang · no hay formulario ES ni campo language.
   - Cuando exista una versión ES separada, se agrega un
     componente propio o se re-introduce el prop; hoy no aplica.

   Reglas de carga (Fran 30-sep):
   1. El script `loader.js` no va en <head> ni al cargar la página.
      Se inyecta con IntersectionObserver cuando la caja está a
      ~300px de entrar en pantalla (rootMargin: '300px 0px').
   2. Aunque haya más de un SubscribeForm en la página, el script
      se inyecta UNA SOLA vez. Segunda instancia usa el loader ya
      cargado por la primera.
   3. Reservamos altura con `min-height` en el contenedor para que
      la aparición del iframe no genere CLS. Valores medidos en
      390 y 1440 (ver docs/essays.md §6). */

const BEEHIIV_SRC = 'https://subscribe-forms.beehiiv.com/v3/loader.js'
const BEEHIIV_FORM_ID = 'c7cb08c8-b381-4b1e-a20f-76c86ce39552'

/* One-shot module-level guard: si otra instancia ya inyectó el
   loader en esta pageview, no lo repetimos. Se resetea con cada
   navegación full-page (recarga del módulo). En navegaciones
   client-side de Next, se preserva · lo que es correcto porque
   el script sigue vivo en el DOM. */
let loaderInjected = false

export default function SubscribeForm() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
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
         entre navegaciones client-side. */
    }
  }, [])

  return (
    <div
      ref={ref}
      className="e-subscribe"
      /* Reserva CLS · la caja beehiiv v3 mide ~340px en 390 y
         ~280px en 1440. Reservamos 360 para cubrir ambos. */
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
