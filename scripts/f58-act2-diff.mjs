#!/usr/bin/env node
/* F58 QA · pixel-diff de los 5 beats de #act2 entre pre-F58 (933c850,
   puerto 3200) y post-F58 (f58-fixes, puerto 3100).

   Mecánica · act2 vive dentro de un track sticky de alto >> 100vh.
   Para capturar cada beat, se scrollea a (track.offsetTop + i *
   track.scrollRange / 4) + espera a que el motor pinte. Después se
   recorta el viewport al <section id="act2"> actual con page.locator
   para que la foto sea idéntica aunque act2 esté en otra posición
   del DOM entre las dos builds. */

import { chromium } from 'playwright'
import { PNG } from 'pngjs'
import pixelmatch from 'pixelmatch'
import fs from 'node:fs'
import path from 'node:path'

const PRE = process.env.PRE_URL || 'http://localhost:3200'
const CUR = process.env.CUR_URL || 'http://localhost:3100'
const OUT = process.env.OUT_DIR || '/tmp/claude-0/-home-user-cruda-story-craft/560f6a6a-0bd6-51a4-9302-5b419b65f9ed/scratchpad/act2-shots'
const BEATS = 5
const BEAT_LABELS = ['busto-1', 'busto-2', 'libro-en-linea', 'libro-claro', 'libro-oscuro']
const VIEWPORT = { width: 1440, height: 900 }

fs.mkdirSync(OUT, { recursive: true })

async function shoot(label, url, beatIdx, totalBeats, outPath) {
  const browser = await chromium.launch({
    executablePath: '/opt/pw-browsers/chromium',
    args: ['--no-sandbox'],
  })
  const ctx = await browser.newContext({
    viewport: VIEWPORT,
    deviceScaleFactor: 1,
    reducedMotion: 'no-preference',
  })
  const page = await ctx.newPage()
  await page.addInitScript(() => {
    /* Deshabilitar Lenis para que window.scrollTo sea sincrónico. */
    try { window.__disableLenis = true } catch {}
  })
  await page.goto(url, { waitUntil: 'load', timeout: 45000 })
  await page.waitForTimeout(500)

  /* Medir track del act2 · acts-motor usa:
       p = -track.getBoundingClientRect().top / (track.offsetHeight - innerHeight)
     por lo que para p dado necesitamos
       scrollY = track.offsetTop + p * (offsetHeight - innerHeight). */
  const trackRange = await page.evaluate(() => {
    const el = document.getElementById('act2')
    if (!el) return null
    /* Resolver offsetTop absoluto en el documento (offsetTop solo
       devuelve relativo al offsetParent). */
    let offsetTopAbs = 0
    let node = el
    while (node) {
      offsetTopAbs += node.offsetTop
      node = node.offsetParent
    }
    return {
      offsetTop: offsetTopAbs,
      offsetHeight: el.offsetHeight,
      viewportH: window.innerHeight,
      scrollMax: document.documentElement.scrollHeight - window.innerHeight,
    }
  })
  if (!trackRange) {
    await browser.close()
    throw new Error('#act2 no encontrado en ' + url)
  }

  /* Midpoints de cada beat (p = 0.1, 0.3, 0.5, 0.7, 0.9). */
  const p = (beatIdx + 0.5) / totalBeats
  const trackRangePx = Math.max(1, trackRange.offsetHeight - trackRange.viewportH)
  const y = Math.max(0, Math.min(trackRange.scrollMax, trackRange.offsetTop + Math.round(p * trackRangePx)))

  await page.evaluate((yy) => window.scrollTo({ top: yy, behavior: 'instant' }), y)
  await page.waitForTimeout(1200)

  /* Act2 sticky · screenshot del viewport excluyendo la nav fija
     (76 px alto · --nav-h). El rename `Thinking → Narrative Sparring`
     en la nav es parte de A.8 del brief, no una regresión de act2. */
  const NAV_H = 76
  await page.screenshot({ path: outPath, type: 'png', clip: {
    x: 0, y: NAV_H, width: VIEWPORT.width, height: VIEWPORT.height - NAV_H,
  }})

  await browser.close()
}

function diff(aPath, bPath, diffPath) {
  const a = PNG.sync.read(fs.readFileSync(aPath))
  const b = PNG.sync.read(fs.readFileSync(bPath))
  const w = Math.min(a.width, b.width)
  const h = Math.min(a.height, b.height)
  const diff = new PNG({ width: w, height: h })
  const mismatched = pixelmatch(a.data, b.data, diff.data, w, h, {
    threshold: 0.1,
    diffColor: [255, 0, 0],
  })
  fs.writeFileSync(diffPath, PNG.sync.write(diff))
  const total = w * h
  return { mismatched, total, pct: (mismatched / total) * 100 }
}

const rows = []
for (let i = 0; i < BEATS; i++) {
  const label = BEAT_LABELS[i]
  const preP = path.join(OUT, `pre-${i}-${label}.png`)
  const curP = path.join(OUT, `cur-${i}-${label}.png`)
  const difP = path.join(OUT, `diff-${i}-${label}.png`)
  console.error(`[beat ${i}/${BEATS - 1} · ${label}]`)
  await shoot('pre', PRE, i, BEATS, preP)
  await shoot('cur', CUR, i, BEATS, curP)
  const r = diff(preP, curP, difP)
  rows.push({ beat: i, label, ...r })
}

console.log('BEAT  LABEL             MISMATCHED  TOTAL         PCT    PASS(≤0.5%)')
console.log('-'.repeat(78))
for (const r of rows) {
  const pass = r.pct <= 0.5 ? 'YES' : 'NO'
  console.log(
    String(r.beat).padEnd(6) +
      r.label.padEnd(18) +
      String(r.mismatched).padEnd(12) +
      String(r.total).padEnd(14) +
      r.pct.toFixed(3).padEnd(7) +
      pass,
  )
}
const anyFail = rows.some(r => r.pct > 0.5)
console.log('-'.repeat(78))
console.log('result:', anyFail ? 'FAIL' : 'PASS')
process.exit(anyFail ? 1 : 0)
