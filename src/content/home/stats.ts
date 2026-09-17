import type { WorkCardData } from '@/components/home/SelectedWork'

/* Rule 25 (ledger, 16-sep) · nunca contar en prosa. Todo conteo
   de casos, founders, ciudades y países se deriva de la fuente
   de datos, nunca se escribe a mano. Este módulo es el punto
   único de derivación · lo consume el bloque TRANSLATED (v6 F4)
   y en el futuro cualquier surface que necesite un conteo. */

const US_STATES = new Set([
  'AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID',
  'IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS',
  'MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK',
  'OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY',
])

const NUM_WORDS: Record<number, string> = {
  0: 'Zero', 1: 'One', 2: 'Two', 3: 'Three', 4: 'Four', 5: 'Five',
  6: 'Six', 7: 'Seven', 8: 'Eight', 9: 'Nine', 10: 'Ten',
  11: 'Eleven', 12: 'Twelve', 13: 'Thirteen', 14: 'Fourteen',
  15: 'Fifteen', 16: 'Sixteen', 17: 'Seventeen', 18: 'Eighteen',
  19: 'Nineteen', 20: 'Twenty',
}

export type WorkStats = {
  founders: number
  cities: number
  countries: number
  /* Versiones textuales para prosa · "Nine founders. Eight cities.
     Five countries." · nada se escribe manual. */
  foundersWord: string
  citiesWord: string
  countriesWord: string
}

/* Parse un location string y extrae la ciudad de referencia y el país.
   Convenciones observadas:
     "Panamá City, Panamá"           → city Panamá City, country Panamá
     "Abu Dhabi, UAE"                → city Abu Dhabi, country UAE
     "Jacksonville · Miami, FL"      → cities [Jacksonville, Miami], US
     "Design District, Miami, FL"    → city Miami, US
     "Midtown Miami, FL"             → city Midtown Miami (un solo token)
     "Sherman Oaks, Los Angeles, CA" → city Los Angeles, US

   Regla: separar por comas. Si el último segmento es un state
   code US (2 letras mayúsculas), country = US y city viene del
   segundo-a-último. Si el segundo-a-último tiene " · ", son
   múltiples ciudades. Caso contrario, country = último segmento
   y city = penúltimo (o único si no hay coma). */
function parseLocation(location: string): { cities: string[]; country: string } {
  const parts = location.split(',').map((s) => s.trim())
  const last = parts[parts.length - 1]
  const isUS = US_STATES.has(last)
  const country = isUS ? 'US' : last
  const cityPart = parts.length >= 2 ? parts[parts.length - 2] : parts[0]
  const cities = cityPart.split(' · ').map((c) => c.trim()).filter(Boolean)
  return { cities, country }
}

export function computeWorkStats(cards: WorkCardData[]): WorkStats {
  const visible = cards.filter((c) => !c.draft)
  const cities = new Set<string>()
  const countries = new Set<string>()
  for (const card of visible) {
    const { cities: cs, country } = parseLocation(card.location)
    for (const c of cs) cities.add(c)
    countries.add(country)
  }
  const founders = visible.length
  return {
    founders,
    cities: cities.size,
    countries: countries.size,
    foundersWord: NUM_WORDS[founders] ?? String(founders),
    citiesWord: NUM_WORDS[cities.size] ?? String(cities.size),
    countriesWord: NUM_WORDS[countries.size] ?? String(countries.size),
  }
}
