#!/usr/bin/env node
/* F58 · copy-check · 27-oct.
   Compara cada string textual del brief contra el DOM renderizado
   del preview. Usa fetch sobre la URL que recibe por argv o la env
   BASE_URL. Sin fallbacks ni fuzzy match: match literal (contiene).

   Uso:
     BASE_URL=https://cruda-story-craft-XXXX.vercel.app \
       node scripts/f58-copy-check.mjs

   Salida: tabla stdout con ok/miss por string y URL. Exit 0 si todo
   pasó, 1 si falta alguno. La salida es intencionalmente plana
   para pegarla sin editar en el reporte. */

const BASE =
  process.argv[2] ||
  process.env.BASE_URL ||
  'http://localhost:3000'

const CASES = [
  {
    url: '/',
    label: 'home · hero h1',
    needle: 'Famous to the few who matter.',
  },
  {
    url: '/',
    label: 'home · hero bajada',
    needle:
      'We find what makes you exceptional and put it in front of the people who should know.',
  },
  {
    url: '/',
    label: 'home · ns rótulo',
    needle: '01 · Newsletter',
  },
  {
    url: '/',
    label: 'home · ns h2',
    needle: 'Narrative Sparring',
  },
  {
    url: '/',
    label: 'home · ns lede L1',
    needle: 'A sparring partner hits back so you get stronger.',
  },
  {
    url: '/',
    label: 'home · ns lede L2',
    needle: 'Muhammad Ali had Larry Holmes.',
  },
  {
    url: '/',
    label: 'home · ns lede L3',
    needle: 'Warren Buffett had Charlie Munger.',
  },
  {
    url: '/',
    label: 'home · ns lede L4',
    needle: 'Your company has us.',
  },
  {
    url: '/',
    label: 'home · ns body intro',
    needle:
      'One essay a week on the stories that shape business and culture.',
  },
  {
    url: '/',
    label: 'home · ns body airbnb',
    needle:
      'Why a co-founder of Airbnb is now designing government forms.',
  },
  {
    url: '/',
    label: 'home · ns body neumann',
    needle:
      'Why Adam Neumann says he handed over the keys to his own story.',
  },
  {
    url: '/',
    label: 'home · ns body firma',
    needle: 'Written by Fran Herrera, in English and Spanish.',
  },
  {
    url: '/',
    label: 'home · selected work título',
    needle: 'Selected work.',
  },
  {
    url: '/',
    label: 'home · karen few',
    needle:
      'Architects, interior designers and developers of homes worth up to $200 million.',
  },
  {
    url: '/',
    label: 'home · josé description',
    needle:
      'Co-founder of AGP, supplier to the Pentagon, Tesla, Audi, the Saudi Navy and the popemobile.',
  },
  {
    url: '/',
    label: 'home · josé few',
    needle:
      'About 800 buyers of certified safety glass. In the whole world.',
  },
  {
    url: '/',
    label: 'home · ryan description',
    needle:
      "Eight years as Ferretti's designer in the US, now founder of M2Develop.",
  },
  {
    url: '/',
    label: 'home · ryan few',
    needle:
      'Yacht owners, brokers and the shipyards that build for them.',
  },
  {
    url: '/',
    label: 'home · marty description',
    needle:
      'One of the most recognized yacht interior designers in the US, turning forty years of work into a legacy of stories.',
  },
  {
    url: '/',
    label: 'home · marty few',
    needle: 'Her industry, and the women who see themselves in her story.',
  },
  {
    url: '/',
    label: 'home · all work',
    needle: 'All work →',
  },
  {
    url: '/',
    label: 'home · cierre rótulo',
    needle: 'Narrative Sparring',
  },
  {
    url: '/',
    label: 'home · cierre h2',
    needle: 'Every week, one story that changes how you tell yours.',
  },
  {
    url: '/',
    label: 'home · cierre work with us',
    needle: 'Work with us →',
  },
  {
    url: '/thinking',
    label: 'thinking · eyebrow',
    needle: 'Newsletter · One essay a week',
  },
  {
    url: '/thinking',
    label: 'thinking · h1',
    needle: 'Narrative Sparring',
  },
  {
    url: '/thinking',
    label: 'thinking · intro',
    needle:
      'One essay a week on the stories that shape business and culture. The full essay lives here; the email is how you know it went up.',
  },
  {
    url: '/thinking',
    label: 'thinking · helper',
    needle:
      'Unsubscribe anytime. Written by Fran Herrera, in English and Spanish.',
  },
  {
    url: '/thinking',
    label: 'thinking · all essays',
    needle: 'All essays',
  },
  {
    url: '/thinking',
    label: 'thinking · cierre h2',
    needle: 'Every week, one story that changes how you tell yours.',
  },
]

async function fetchText(path) {
  const res = await fetch(BASE + path + '?utm_source=qa', {
    redirect: 'follow',
    headers: { 'User-Agent': 'f58-copy-check' },
  })
  const html = await res.text()
  return { status: res.status, html, finalUrl: res.url }
}

const cache = new Map()

let ok = 0
let miss = 0
const rows = []

for (const c of CASES) {
  let entry = cache.get(c.url)
  if (!entry) {
    entry = await fetchText(c.url)
    cache.set(c.url, entry)
  }
  const hit = entry.html.includes(c.needle)
  if (hit) ok++
  else miss++
  rows.push({
    url: c.url,
    label: c.label,
    status: entry.status,
    hit,
    needle: c.needle,
  })
}

const COLS = {
  url: 18,
  label: 32,
  status: 6,
  hit: 4,
}
function pad(s, n) {
  s = String(s)
  if (s.length >= n) return s.slice(0, n)
  return s + ' '.repeat(n - s.length)
}

console.log(
  pad('URL', COLS.url) +
    pad('LABEL', COLS.label) +
    pad('HTTP', COLS.status) +
    pad('HIT', COLS.hit) +
    'NEEDLE',
)
console.log('-'.repeat(80))
for (const r of rows) {
  console.log(
    pad(r.url, COLS.url) +
      pad(r.label, COLS.label) +
      pad(r.status, COLS.status) +
      pad(r.hit ? 'ok' : 'MISS', COLS.hit) +
      JSON.stringify(r.needle).slice(0, 100),
  )
}
console.log('-'.repeat(80))
console.log(`total: ${CASES.length} · ok: ${ok} · miss: ${miss}`)
process.exit(miss > 0 ? 1 : 0)
