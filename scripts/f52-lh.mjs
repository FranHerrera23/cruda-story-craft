#!/usr/bin/env node
/* F52 · Lighthouse mobile mediana de 3 corridas por URL.
   URLs del brief: /, /services, /about, /second-look, /thinking, /work/karen-mannheim.
   Pre-req: server corriendo en localhost:3000. */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { execSync } from 'node:child_process'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const BASE = process.env.BASE || 'http://localhost:3000'
const PHASE = process.env.PHASE || 'before'    // before | after
const OUT = path.join(ROOT, 'scripts/.f52-lh', PHASE)
fs.mkdirSync(OUT, { recursive: true })

const URLS = [
  { slug: '/',                     name: 'home' },
  { slug: '/services',             name: 'services' },
  { slug: '/about',                name: 'about' },
  { slug: '/second-look',          name: 'second-look' },
  { slug: '/thinking',             name: 'thinking' },
  { slug: '/work/karen-mannheim',  name: 'work-karen' },
]
const RUNS = 3

function runLH(url, output) {
  execSync(
    `CHROME_PATH=/opt/pw-browsers/chromium-1194/chrome-linux/chrome lighthouse "${url}" ` +
    `--only-categories=performance ` +
    `--chrome-flags="--headless --no-sandbox --disable-gpu" ` +
    `--output=json --output-path="${output}" --quiet`,
    { stdio: ['ignore', 'ignore', 'pipe'], timeout: 180_000 },
  )
}

function readMetrics(file) {
  const r = JSON.parse(fs.readFileSync(file, 'utf8'))
  return {
    perf: Math.round(r.categories.performance.score * 100),
    lcp: r.audits['largest-contentful-paint'].numericValue,
    cls: r.audits['cumulative-layout-shift'].numericValue,
    tbt: r.audits['total-blocking-time'].numericValue,
    fcp: r.audits['first-contentful-paint'].numericValue,
    si: r.audits['speed-index'].numericValue,
  }
}

function median(arr) {
  const s = [...arr].sort((a, b) => a - b)
  return s[Math.floor(s.length / 2)]
}

async function main() {
  console.log(`# F52 · Lighthouse mobile · phase=${PHASE}`)
  console.log()
  console.log('| page | run 1 perf/LCP/CLS/TBT | run 2 | run 3 | median perf | median LCP | median CLS | median TBT |')
  console.log('|---|---|---|---|---|---|---|---|')

  const summary = []
  for (const u of URLS) {
    const url = BASE + u.slug + (u.slug.includes('?') ? '&' : '?') + 'utm_source=qa'
    const files = []
    for (let i = 1; i <= RUNS; i++) {
      const out = path.join(OUT, `${u.name}-run${i}.json`)
      files.push(out)
      try {
        runLH(url, out)
      } catch (e) {
        console.error(`  ✗ ${u.name} run ${i} failed: ${e.message?.slice(0, 100)}`)
      }
    }
    const metrics = files.filter(f => fs.existsSync(f)).map(readMetrics)
    if (metrics.length === 0) {
      console.log(`| ${u.name} | — | — | — | — | — | — | — |`)
      continue
    }
    const perfs = metrics.map(m => m.perf)
    const lcps = metrics.map(m => m.lcp)
    const clss = metrics.map(m => m.cls)
    const tbts = metrics.map(m => m.tbt)
    const row = [
      u.name,
      `${metrics[0].perf}/${Math.round(metrics[0].lcp)}/${metrics[0].cls.toFixed(3)}/${Math.round(metrics[0].tbt)}`,
      metrics[1] ? `${metrics[1].perf}/${Math.round(metrics[1].lcp)}/${metrics[1].cls.toFixed(3)}/${Math.round(metrics[1].tbt)}` : '—',
      metrics[2] ? `${metrics[2].perf}/${Math.round(metrics[2].lcp)}/${metrics[2].cls.toFixed(3)}/${Math.round(metrics[2].tbt)}` : '—',
      median(perfs),
      Math.round(median(lcps)),
      median(clss).toFixed(3),
      Math.round(median(tbts)),
    ]
    console.log('| ' + row.join(' | ') + ' |')
    summary.push({
      name: u.name,
      perf: median(perfs),
      lcp: Math.round(median(lcps)),
      cls: Number(median(clss).toFixed(3)),
      tbt: Math.round(median(tbts)),
    })
  }

  fs.writeFileSync(path.join(OUT, 'summary.json'), JSON.stringify(summary, null, 2))
  console.log()
  console.log(`summary.json written to ${OUT}`)
}

main().catch(e => { console.error(e); process.exit(1) })
