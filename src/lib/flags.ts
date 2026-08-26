/* CRUDA — feature flags.
   Un solo lugar para prender/apagar features sin tocar callsites.
   El objetivo NO es un panel de flags remoto — es que un cambio
   binario ("apagá el newsletter") sea un one-liner reversible. */

/* F0 — Captura de email apagada.
   Fran no está usando Substack (ni Supabase) por ahora. Con este flag
   en false:
   - CaptureForm devuelve null en todas las ubicaciones.
   - Los wrappers (site-footer capture slot, sección de CTA en essay
     y case study, cuerpo de /newsletter) tampoco renderean —
     cero huecos vacíos ni márgenes huérfanos.
   - /newsletter pierde su lugar en el sitemap y recibe noindex a
     nivel meta hasta que el flag vuelva a true.
   - /api/subscribe sigue vivo por si mañana entra un proveedor.
     Sin SUBSTACK_PUBLICATION seteada devuelve 500, pero como el
     form no se renderiza, nadie lo llama.

   Cambiar a true cuando entre Substack, beehiiv u otro proveedor,
   y setear la env var correspondiente. Nada más. */
export const CAPTURE_ENABLED = false;
