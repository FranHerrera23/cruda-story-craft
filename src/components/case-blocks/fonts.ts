import type { NextFont } from 'next/dist/compiled/@next/font'
import { Source_Serif_4, Montserrat, Figtree } from 'next/font/google'

/* Task 11 · sistema de fuentes.

   ─ Fuente del sistema ────────────────────────────────────────────
   Source Serif 4 es la face del cuerpo (--s). Archivo (--g) viene
   de app/layout.tsx.

   ─ Manifest de fuentes de cliente ────────────────────────────────
   Cada case study declara identity.type como una CLAVE. El
   compositor resuelve clave → CSS variable de next/font.

   Ventajas contra el <link> por ruta (que estaba antes):
     - Un data file no controla el <head> del documento.
     - Dos casos con la misma tipografía la cargan UNA vez.
     - next/font puede optimizar (subset, self-host, preload).

   Cuando llegue un caso con una tipografía no registrada acá,
   se registra acá (una línea) y el data file ya la puede pedir
   por clave. Si el data file pide una clave inexistente, el
   compositor cae a --g (Archivo) y loguea en dev — mismo patrón
   que los blocks desconocidos. */

export const sourceSerif4 = Source_Serif_4({
  subsets: ['latin'],
  weight: ['400', '600'],
  display: 'swap',
  variable: '--font-source-serif-4',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-client-montserrat',
})

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-client-figtree',
})

/* Manifest — clave → { font, cssVar, family }.
   `font`  → el objeto de next/font (expone .variable con la
              custom property que activa la face).
   `cssVar`→ nombre de la CSS variable que se inyecta como --c-type.
   `family`→ font-family stack de fallback usado dentro de la CSS
              variable (ej. `'Montserrat', sans-serif`).

   Para añadir una tipografía: importarla arriba desde next/font,
   pushear la entrada acá con una `variable` propia (no colisionar).
*/
export type ClientFontKey = 'montserrat' | 'figtree'

type ClientFontEntry = {
  font: NextFont & { variable: string }
  cssVar: string
  family: string
}

export const CLIENT_FONTS: Record<ClientFontKey, ClientFontEntry> = {
  montserrat: {
    font: montserrat,
    cssVar: '--font-client-montserrat',
    family: "'Montserrat', sans-serif",
  },
  figtree: {
    font: figtree,
    cssVar: '--font-client-figtree',
    family: "'Figtree', system-ui, sans-serif",
  },
}

/* Devuelve la lista de fuentes activas para el <html> — el
   compositor las inyecta como variables CSS en el contenedor
   del caso. Para la iteración actual devolvemos TODAS: son 2 y
   el costo de carga es marginal. Cuando crezca, se puede filtrar
   por la clave del caso servido. */
export function allClientFontVariables(): string {
  return Object.values(CLIENT_FONTS)
    .map((e) => e.font.variable)
    .join(' ')
}

/* Resuelve identity.type → font-family stack a inyectar en --c-type.
   Devuelve null cuando la clave no existe (compositor cae a --g). */
export function resolveClientType(
  key: string | undefined
): { family: string; variableClass: string } | null {
  if (!key) return null
  const entry = CLIENT_FONTS[key as ClientFontKey]
  if (!entry) return null
  return {
    // Referencia a la CSS variable en el mismo string family, para
    // que --c-type funcione tanto con la fuente cargada como sin.
    family: `var(${entry.cssVar}), ${entry.family}`,
    variableClass: entry.font.variable,
  }
}
