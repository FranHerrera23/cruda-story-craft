#!/usr/bin/env node
/* F52 chequeo post-approval: medir CLS en / sin loader y buscar
   salto del h1 por fitAllPhrases.

   Dos escenarios:
     A) /?utm_source=qa (loader skipped siempre).
     B) / sin UTM, DOS visitas: la 1a con loader, la 2a con el
        sessionStorage LOADER_SEEN_KEY ya seteado → sin loader.

   En cada caso:
     - trace de CLS acumulado.
     - frames capturados de los primeros 500 ms del h1
       (.beat__phrase) para detectar salto visible del font-size. */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { chromium } from '../node_modules/playwright/index.mjs'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const BASE = process.env.BASE || 'http://localhost:3000'
const OUT = path.join(ROOT, 'scripts/.f52-home-cls')
fs.mkdirSync(OUT, { recursive: true })

async function measure(ctx, label, url) {
  const p = await ctx.newPage()
  const frames = []
  /* CLS tracking via PerformanceObserver inyectado antes del load. */
  await p.addInitScript(() => {
    window.__cls = 0
    window.__shifts = []
    window.__phraseSizes = []
    const po = new PerformanceObserver(list => {
      for (const entry of list.getEntries()) {
        if (!entry.hadRecentInput) {
          window.__cls += entry.value
          window.__shifts.push({ t: entry.startTime, v: entry.value })
        }
      }
    })
    po.observe({ type: 'layout-shift', buffered: true })
    /* Captura el font-size del primer .beat__phrase cada 50ms,
       primeros 1500ms, para ver si hay salto. */
    const start = performance.now()
    const sampleTimer = setInterval(() => {
      const el = document.querySelector('.beat__phrase')
      const now = performance.now() - start
      if (el) {
        const cs = getComputedStyle(el)
        window.__phraseSizes.push({ t: Math.round(now), size: cs.fontSize })
      }
      if (now > 1500) clearInterval(sampleTimer)
    }, 50)
  })
  await p.goto(BASE + url, { waitUntil: 'load', timeout: 30000 })
  /* Capturo screenshots cada 100ms durante 2 s para hacer un flipbook. */
  const screenshots = []
  const t0 = Date.now()
  while (Date.now() - t0 < 2000) {
    const bytes = await p.screenshot({ type: 'png', clip: { x: 0, y: 0, width: 390, height: 300 } })
    screenshots.push(bytes)
    await p.waitForTimeout(100)
  }
  /* Datos finales. */
  const data = await p.evaluate(() => ({
    cls: window.__cls,
    shifts: window.__shifts,
    phraseSizes: window.__phraseSizes,
    phraseFontFamily: getComputedStyle(document.querySelector('.beat__phrase') || document.body).fontFamily,
  }))
  const session = await p.evaluate(() => ({
    loaderSeen: sessionStorage.getItem('cruda-loader-seen'),
  }))
  await p.close()
  console.log(`\n## ${label}`)
  console.log(`  CLS total: ${data.cls.toFixed(4)}`)
  console.log(`  shifts count: ${data.shifts.length}`)
  for (const s of data.shifts.slice(0, 5)) console.log(`    · t=${Math.round(s.t)}ms v=${s.v.toFixed(4)}`)
  console.log(`  phrase font-size samples (first 10):`)
  for (const s of data.phraseSizes.slice(0, 10)) console.log(`    · t=${s.t}ms size=${s.size}`)
  /* Detectar salto del h1: si hay > 1 valor distinto en las muestras post-100ms. */
  const distinct = [...new Set(data.phraseSizes.filter(s => s.t > 100).map(s => s.size))]
  console.log(`  distinct phrase sizes after 100ms: ${distinct.length} · ${distinct.join(' → ')}`)
  const label2 = label.replace(/[^a-z0-9]/gi, '-')
  for (let i = 0; i < screenshots.length; i++) {
    fs.writeFileSync(path.join(OUT, `${label2}-f${String(i).padStart(2, '0')}.png`), screenshots[i])
  }
  console.log(`  frames: ${screenshots.length} · saved as ${label2}-f*.png`)
  return { cls: data.cls, distinct: distinct.length, loaderSeen: session.loaderSeen }
}

async function main() {
  const browser = await chromium.launch({
    executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
  })

  /* Scenario A · utm_source=qa (loader skipped via F48 gate) */
  {
    const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } })
    await measure(ctx, 'A · 1440 ?utm_source=qa', '/?utm_source=qa')
    await ctx.close()
  }

  /* Scenario B · 2 visitas misma sesión, mobile */
  {
    const ctx = await browser.newContext({ viewport: { width: 390, height: 844 } })
    await measure(ctx, 'B1 · 390 primera visita (con loader)', '/')
    await measure(ctx, 'B2 · 390 segunda visita (loader skipped por sessionStorage)', '/')
    await ctx.close()
  }

  /* Scenario C · 2 visitas misma sesión, desktop (loader sólo en /) */
  {
    const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } })
    await measure(ctx, 'C1 · 1440 primera visita (con loader)', '/')
    await measure(ctx, 'C2 · 1440 segunda visita', '/')
    await ctx.close()
  }

  await browser.close()
}

main().catch(e => { console.error(e); process.exit(1) })
