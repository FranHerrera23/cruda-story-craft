import type { Work } from './types'
import { karenMannheim } from './karen-mannheim'
import { mikeKaeding } from './mike-kaeding'
import { girishSehgal } from './girish-sehgal'
import { jackYeager } from './jack-yeager'
import { mannheimTrading } from './mannheim-trading'
import { inout } from './inout'
import { confidentialFashionFounder } from './confidential-fashion-founder'
import { armanKeshishian } from './arman-keshishian'
import { juanPabloRomero } from './juan-pablo-romero'

/* F18.0 · fuente única. Orden importante: `order` de cada caso
   define el ordinal en SELECTED WORK. Casos con `order > 100`
   quedan fuera del índice (Fran §7 · Juan Pablo Romero). */

export const allWork: Work[] = [
  karenMannheim,
  mikeKaeding,
  girishSehgal,
  jackYeager,
  mannheimTrading,
  inout,
  confidentialFashionFounder,
  armanKeshishian,
  juanPabloRomero,
]

/* Casos que entran a SELECTED WORK · order asc, order ≤ 100. */
export const selectedWork: Work[] = allWork
  .filter(w => w.order <= 100)
  .sort((a, b) => a.order - b.order)

export function findWork(slug: string): Work | null {
  return allWork.find(w => w.slug === slug) ?? null
}

/* Ciudades / países únicos para el titular de SELECTED WORK. */
export function workGeoStats() {
  const cities = new Set<string>()
  const countries = new Set<string>()
  for (const w of selectedWork) {
    if (w.place.city) cities.add(w.place.city)
    if (w.place.country) countries.add(w.place.country)
  }
  return {
    founders: selectedWork.length,
    cities: cities.size,
    countries: countries.size,
    cityList: Array.from(cities),
    countryList: Array.from(countries),
  }
}
