#!/usr/bin/env node
/* F59 copy-check · 27-oct · revisado (HowWeHelp + About + negativos).

   Positivos: cada string del brief que debe aparecer en el DOM
   renderizado (literal `includes`).
   Negativos: strings viejos que NO deben aparecer en /, /about.

   Uso: node scripts/f59-copy-check.mjs [BASE_URL]
   Default BASE_URL = http://localhost:3100. */

const BASE = process.argv[2] || process.env.BASE_URL || 'http://localhost:3100'

const POSITIVES = [
  // Hero
  { url: '/', label: 'home · hero h1', needle: 'Famous to the few who matter.' },
  { url: '/', label: 'home · hero bajada', needle: 'We find what makes you exceptional and put it in front of the people who should know.' },

  // How we help
  { url: '/', label: 'home · hwh rótulo', needle: 'How we help' },
  { url: '/', label: 'home · hwh h2', needle: 'Your buyers could fit in one room. Every one of them should know your name.' },
  { url: '/', label: 'home · hwh bajada', needle: 'We sit with you, take the story out of your head and write it down. Then we put it where your few already look.' },
  { url: '/', label: 'home · hwh karen sub', needle: 'Co-founder, TRAZZO Lighting' },
  { url: '/', label: 'home · hwh karen few', needle: 'Architects, interior designers and developers of homes worth up to $200 million.' },
  { url: '/', label: 'home · hwh karen work', needle: 'Her voice on LinkedIn and Instagram, PR strategy and pitch decks. Every week, for five years.' },
  { url: '/', label: 'home · hwh josé sub', needle: 'Co-founder of AGP, supplier to the Pentagon, Tesla, Audi, the Saudi Navy and the popemobile' },
  { url: '/', label: 'home · hwh josé few', needle: 'About 800 buyers of certified safety glass. In the whole world.' },
  { url: '/', label: 'home · hwh josé work', needle: 'Brand strategy and architecture for his new company, Mannheim Trading Corp.' },
  { url: '/', label: 'home · hwh ryan sub', needle: 'Founder, M2Develop' },
  { url: '/', label: 'home · hwh ryan few', needle: 'Yacht owners, brokers and the shipyards that build for them.' },
  { url: '/', label: 'home · hwh ryan work', needle: 'Putting his story and M2Develop’s in front of that audience.' },
  { url: '/', label: 'home · hwh marty sub', needle: 'Yacht interior designer, United States' },
  { url: '/', label: 'home · hwh marty few', needle: 'Her industry, and the women who see themselves in her story.' },
  { url: '/', label: 'home · hwh marty work', needle: 'Turning forty-six years of work into a legacy of stories, on her website, a new blog and LinkedIn.' },

  // Narrative Sparring (plano)
  { url: '/', label: 'home · ns rótulo', needle: 'Newsletter' },
  { url: '/', label: 'home · ns h2', needle: 'Narrative Sparring' },
  { url: '/', label: 'home · ns lede L1', needle: 'A sparring partner hits back so you get stronger.' },
  { url: '/', label: 'home · ns lede L2', needle: 'Muhammad Ali had Larry Holmes.' },
  { url: '/', label: 'home · ns lede L3', needle: 'Warren Buffett had Charlie Munger.' },
  { url: '/', label: 'home · ns lede L4', needle: 'Your company has us.' },
  { url: '/', label: 'home · ns body firma', needle: 'Written by Fran Herrera, in English and Spanish.' },

  // Selected work
  { url: '/', label: 'home · sw título', needle: 'Selected work.' },
  { url: '/', label: 'home · sw ryan desc', needle: '50+ boats for leading European yacht brands, now founder of M2Develop.' },
  { url: '/', label: 'home · sw marty desc', needle: 'One of the most recognized yacht interior designers in the US, turning forty-six years of work into a legacy of stories.' },

  // Cierre
  { url: '/', label: 'home · cierre h2', needle: 'Every week, one story that changes how you tell yours.' },

  // About
  { url: '/about', label: 'about · faq what-is-cruda', needle: 'CRUDA makes founders and companies famous to the few who matter. We find what makes them exceptional and put it in front of the people who should know. Fran Herrera founded it in February 2024.' },
  { url: '/about', label: 'about · section II párrafo', needle: 'CRUDA makes founders and companies famous to the few who matter. We find what makes them exceptional and put it in front of the people who should know.' },
]

const NEGATIVES = [
  { url: '/', needle: 'communications company' },
  { url: '/', needle: 'narrative and demand systems' },
  { url: '/', needle: 'forty years' },
  { url: '/', needle: 'Ferretti' },
  { url: '/', needle: '01 · Newsletter' },
  { url: '/about', needle: 'communications company' },
  { url: '/about', needle: 'narrative and demand systems' },
]

async function fetchText(path) {
  const res = await fetch(BASE + path + '?utm_source=qa', { redirect: 'follow' })
  return { status: res.status, html: await res.text() }
}

const cache = new Map()
async function get(url) {
  if (!cache.has(url)) cache.set(url, await fetchText(url))
  return cache.get(url)
}

const posRows = []
let posOk = 0, posMiss = 0
for (const c of POSITIVES) {
  const e = await get(c.url)
  const hit = e.html.includes(c.needle)
  if (hit) posOk++; else posMiss++
  posRows.push({ url: c.url, label: c.label, status: e.status, hit, needle: c.needle })
}

const negRows = []
let negOk = 0, negFail = 0
for (const c of NEGATIVES) {
  const e = await get(c.url)
  const absent = !e.html.includes(c.needle)
  if (absent) negOk++; else negFail++
  negRows.push({ url: c.url, status: e.status, absent, needle: c.needle })
}

function pad(s, n) { s = String(s); return s.length >= n ? s.slice(0, n) : s + ' '.repeat(n - s.length) }

console.log('── POSITIVOS ──')
console.log(pad('URL', 10) + pad('LABEL', 32) + pad('HTTP', 6) + pad('HIT', 4) + 'NEEDLE')
console.log('-'.repeat(80))
for (const r of posRows) {
  console.log(pad(r.url, 10) + pad(r.label, 32) + pad(r.status, 6) + pad(r.hit ? 'ok' : 'MISS', 4) + JSON.stringify(r.needle).slice(0, 90))
}
console.log('-'.repeat(80))
console.log(`positivos: ${POSITIVES.length} · ok: ${posOk} · miss: ${posMiss}`)

console.log('\n── NEGATIVOS (deben NO aparecer) ──')
console.log(pad('URL', 10) + pad('HTTP', 6) + pad('ABSENT', 8) + 'NEEDLE')
console.log('-'.repeat(80))
for (const r of negRows) {
  console.log(pad(r.url, 10) + pad(r.status, 6) + pad(r.absent ? 'ok' : 'LEAK', 8) + JSON.stringify(r.needle))
}
console.log('-'.repeat(80))
console.log(`negativos: ${NEGATIVES.length} · ok: ${negOk} · fail: ${negFail}`)

const totalMiss = posMiss + negFail
process.exit(totalMiss > 0 ? 1 : 0)
