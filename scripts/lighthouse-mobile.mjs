#!/usr/bin/env node
/* F53 · Lighthouse mobile · reporte pre-merge.
   Requiere `npm run build` + `npm run start` (prod build).
   Corre 3 pases por URL, reporta el mejor score y las métricas
   Core Web Vitals principales.

   Uso:
     node scripts/lighthouse-mobile.mjs
   Genera:
     scripts/.lh/<slug>-<n>.json  · reportes crudos
     scripts/.lh/summary.json     · agregado
     stdout                        · tabla markdown */

import fs from 'node:fs'
import path from 'node:path'
import { spawn } from 'node:child_process'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const OUT = path.join(ROOT, 'scripts/.lh')
fs.mkdirSync(OUT, { recursive: true })

const URLS = [
  ['thinking-en', 'http://localhost:3000/thinking'],
  ['newsletter', 'http://localhost:3000/newsletter'],
]
const RUNS = 3

/* Chrome flags for CI-ish reproducibility + container proxy.
   Beehiiv script no cargará (proxy bloquea), pero eso lo dice
   el reporte, no invalida el LH del layout. */
const CHROME_FLAGS = [
  '--headless=new',
  '--disable-gpu',
  '--no-sandbox',
  '--disable-dev-shm-usage',
].join(' ')

function runLh(url, idx) {
  return new Promise((resolve, reject) => {
    const out = path.join(OUT, `${idx}.json`)
    const args = [
      url,
      '--quiet',
      '--only-categories=performance,accessibility,best-practices,seo',
      '--form-factor=mobile',
      '--output=json',
      '--output-path=' + out,
      '--chrome-flags=' + CHROME_FLAGS,
    ]
    const child = spawn('lighthouse', args, {
      env: {
        ...process.env,
        CHROME_PATH: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
      },
      stdio: ['ignore', 'pipe', 'pipe'],
    })
    let stderr = ''
    child.stderr.on('data', d => (stderr += d.toString()))
    child.on('close', (code) => {
      if (code === 0 && fs.existsSync(out)) resolve(out)
      else reject(new Error(`lh exit ${code}: ${stderr.slice(-500)}`))
    })
  })
}

function readMetrics(reportPath) {
  const j = JSON.parse(fs.readFileSync(reportPath, 'utf-8'))
  const cat = j.categories
  const a = j.audits
  return {
    performance: Math.round((cat.performance?.score ?? 0) * 100),
    accessibility: Math.round((cat.accessibility?.score ?? 0) * 100),
    bestPractices: Math.round((cat['best-practices']?.score ?? 0) * 100),
    seo: Math.round((cat.seo?.score ?? 0) * 100),
    fcp: Math.round(a['first-contentful-paint']?.numericValue ?? 0),
    lcp: Math.round(a['largest-contentful-paint']?.numericValue ?? 0),
    tbt: Math.round(a['total-blocking-time']?.numericValue ?? 0),
    cls: (a['cumulative-layout-shift']?.numericValue ?? 0).toFixed(3),
    si: Math.round(a['speed-index']?.numericValue ?? 0),
  }
}

const summary = []
for (const [slug, url] of URLS) {
  const runs = []
  for (let i = 1; i <= RUNS; i++) {
    const idx = `${slug}-${i}`
    try {
      const p = await runLh(url, idx)
      const m = readMetrics(p)
      runs.push(m)
      console.error(`  ${idx} · perf ${m.performance} · LCP ${m.lcp} · CLS ${m.cls}`)
    } catch (e) {
      console.error(`  ${idx} · ERROR ${e.message.slice(0, 200)}`)
    }
  }
  /* Median (Lighthouse recomienda median de 3+ runs). */
  if (runs.length === 0) continue
  const median = {}
  const keys = Object.keys(runs[0])
  for (const k of keys) {
    const vals = runs.map(r => parseFloat(r[k])).sort((a, b) => a - b)
    median[k] = vals[Math.floor(vals.length / 2)]
  }
  summary.push({ slug, url, runs, median })
}

fs.writeFileSync(path.join(OUT, 'summary.json'), JSON.stringify(summary, null, 2))

console.log('# Lighthouse mobile · median de ' + RUNS + ' runs\n')
console.log('| slug | perf | a11y | bp | seo | FCP ms | LCP ms | TBT ms | CLS | SI ms |')
console.log('|---|---|---|---|---|---|---|---|---|---|')
for (const s of summary) {
  const m = s.median
  console.log(
    `| ${s.slug} | ${m.performance} | ${m.accessibility} | ${m.bestPractices} | ${m.seo} | ` +
    `${m.fcp} | ${m.lcp} | ${m.tbt} | ${m.cls} | ${m.si} |`,
  )
}
