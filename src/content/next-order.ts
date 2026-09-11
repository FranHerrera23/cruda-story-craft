import { findClientV2 } from '@/content/clients-v2'
import { allClients } from '@/content/clients'

/* Orden canónico de los nueve casos — fuente única del `next` chain.

   Definido por Fran junto al brief de Home · Selected Work (10-sep).
   El mismo orden que la grilla de la home; separa a José de Karen y
   manda el confidencial al final:

     José → Girish → Germán/INOUT → JP → Mike →
     Karen → Arman/BAUHOME → Jack/Mistiva → Confidencial → (loop)

   BAUHOME y Mistiva figuran en el array pero todavía no tienen data
   file ni ruta. La cadena los salta en vez de linkear a un 404: si
   getNextInfo() no encuentra data para un slug, avanza al siguiente
   existente. Cuando esos casos tengan data, el chain los incorpora
   sin cambios acá.

   Los labels son los display-names de cada caso (persona o brand):
   son la única duplicación intencional respecto de los data files —
   cada caso decide cómo se muestra como TARGET del next, y eso puede
   diferir del title interno (INOUT como brand vs. Germán Noël como
   persona). El oneLiner se lee del data file — sin duplicación. */

type OrderEntry = {
  slug: string
  label: string
}

export const CASE_ORDER: readonly OrderEntry[] = [
  { slug: 'mannheim-trading', label: 'José Mannheim' },
  { slug: 'girish-sehgal', label: 'Girish Sehgal' },
  { slug: 'inout', label: 'Germán Noël' },
  { slug: 'juan-pablo-romero', label: 'JP Romero' },
  { slug: 'mike-kaeding', label: 'Mike Kaeding' },
  { slug: 'karen-mannheim', label: 'Karen Mannheim' },
  { slug: 'bauhome', label: 'Arman Keshishian' },
  { slug: 'mistiva', label: 'Jack' },
  { slug: 'confidential-fashion-founder', label: 'An on-demand fashion founder' },
] as const

function lookupOneLiner(slug: string): string | undefined {
  const v2 = findClientV2(slug)
  if (v2) return v2.oneLiner
  const v1 = allClients.find((c) => c.slug === slug)
  if (v1) return v1.oneLiner ?? v1.answerCapsule
  return undefined
}

/* Devuelve el siguiente caso EXISTENTE en el chain a partir del
   currentSlug. Existente = tiene data en clients-v2 o en clients.
   Salta slugs sin data (BAUHOME, Mistiva mientras no migren) y
   nunca devuelve el propio currentSlug. Si nada existe, undefined
   — no rendereá next block. */
export function getNextInfo(
  currentSlug: string,
):
  | { slug: string; label: string; oneLiner: string }
  | undefined {
  const idx = CASE_ORDER.findIndex((e) => e.slug === currentSlug)
  if (idx === -1) return undefined
  for (let i = 1; i <= CASE_ORDER.length; i++) {
    const entry = CASE_ORDER[(idx + i) % CASE_ORDER.length]
    if (entry.slug === currentSlug) continue
    const oneLiner = lookupOneLiner(entry.slug)
    if (oneLiner) {
      return { slug: entry.slug, label: entry.label, oneLiner }
    }
  }
  return undefined
}
