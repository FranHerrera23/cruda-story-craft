'use client'

import { useEffect, useRef } from 'react'

/* F53 · SubscribeForm · embed hosted de beehiiv.
   Fran 30-sep · reemplaza el CaptureForm in-house al final de los
   ensayos (/thinking/*). El script de beehiiv se carga on-mount
   dentro del div (no en <head>) para que:
   - No bloquee el render de la página.
   - Se limpie en el cleanup del efecto cuando el componente
     desmonta (evita duplicados en navegaciones client-side).

   El form ID `c7cb08c8-b381-4b1e-a20f-76c86ce39552` corresponde a
   la publicación de CRUDA en beehiiv. Si cambia, se toca acá y
   listo (no hay wrapper de env vars — el ID es público).

   /newsletter mantiene el CaptureForm in-house de F0 hasta que
   Fran defina el cambio de estrategia también en esa ruta. */

const BEEHIIV_SRC = 'https://subscribe-forms.beehiiv.com/v3/loader.js'
const BEEHIIV_FORM_ID = 'c7cb08c8-b381-4b1e-a20f-76c86ce39552'

export default function SubscribeForm() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    /* Capturamos el nodo en variable local para que el cleanup
       use la misma referencia que el mount (React puede haber
       hecho detach del ref.current cuando corre cleanup). */
    const el = ref.current
    if (!el) return
    const s = document.createElement('script')
    s.src = BEEHIIV_SRC
    s.async = true
    s.setAttribute('data-beehiiv-form', BEEHIIV_FORM_ID)
    el.appendChild(s)
    return () => {
      el.innerHTML = ''
    }
  }, [])

  return <div ref={ref} className="e-subscribe" />
}
