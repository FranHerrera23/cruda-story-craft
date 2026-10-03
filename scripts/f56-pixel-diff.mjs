#!/usr/bin/env node
/* F56 · pixel-diff vs main · criterio F49.

   Pedido Fran 3-oct: sin reduced-motion, con ?utm_source=qa.
   Mismo bypass del F48 Loader + mismo masking de imágenes que
   f54-1-pixel-diff.mjs. Esperado:

   DIFF > 0 en:
     - /                                       (home · JP + José card)
     - /services                               (Second Look + CTAs)
     - /services/translated                    (StartHere actualizado)
     - /about                                  (FAQ + descriptors)
     - /contact                                (h1 + lede + link)
     - /work/*                                 (StartHere + token)
     - /thinking/steve-walls                   (StartHere)
     - /deck                                   (cta-stamp)

   DIFF 0 en:
     - /thinking (lista)
     - /thinking?lang=es
     - /newsletter
     - /thinking/find-your-larry-holmes
     - /thinking/im-from-the-government-and-im-here-to-help

   Nav 1440 noise ya identificado en F54.1 (control AFTER vs AFTER).

   Flujo:
     1. git checkout main && rm -rf .next && npm run build && start
        → MODE=before → ./scripts/.f56-diff/before/
     2. git checkout f56-second-look && rm -rf .next && npm run build && start
        → MODE=after → ./scripts/.f56-diff/after/
     3. MODE=diff → reporte + crops de las diffs > threshold.
*/

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { chromium } from '../node_modules/playwright/index.mjs'
import sharpMod from '../node_modules/sharp/lib/index.js'

const sharp = sharpMod.default || sharpMod
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const BASE = process.env.BASE || 'http://localhost:3000'
const MODE = process.env.MODE
const OUT = path.join(ROOT, 'scripts/.f56-diff')
fs.mkdirSync(path.join(OUT, 'before'), { recursive: true })
fs.mkdirSync(path.join(OUT, 'after'), { recursive: true })
fs.mkdirSync(path.join(OUT, 'crops'), { recursive: true })

const URLS = [
  /* Pages tocadas por el sweep · esperado DIFF > 0. */
  { slug: '/', name: 'home', isCase: false, expectDiff: true },
  { slug: '/about', name: 'about', isCase: false, expectDiff: true },
  { slug: '/services', name: 'services', isCase: false, expectDiff: true },
  { slug: '/services/translated', name: 'services-translated', isCase: false, expectDiff: true },
  { slug: '/contact', name: 'contact', isCase: false, expectDiff: true },
  /* Case studies · todos usan StartHere · esperado DIFF > 0. */
  { slug: '/work/karen-mannheim', name: 'work-karen', isCase: true, expectDiff: true },
  { slug: '/work/mike-kaeding', name: 'work-mike', isCase: true, expectDiff: true },
  { slug: '/work/girish-sehgal', name: 'work-girish', isCase: true, expectDiff: true },
  { slug: '/work/mannheim-trading', name: 'work-jose', isCase: true, expectDiff: true },
  { slug: '/work/juan-pablo-romero', name: 'work-jp', isCase: true, expectDiff: true },
  { slug: '/work/jack-yeager', name: 'work-jack', isCase: true, expectDiff: true },
  { slug: '/work/inout', name: 'work-inout', isCase: true, expectDiff: true },
  { slug: '/work/confidential-fashion-founder', name: 'work-conf', isCase: true, expectDiff: true },
  /* Ensayo con StartHere · esperado DIFF > 0. */
  { slug: '/thinking/steve-walls', name: 'essay-steve', isCase: true, expectDiff: true },
  /* Deck · cta-stamp cambia · esperado DIFF > 0. */
  { slug: '/deck', name: 'deck', isCase: false, expectDiff: true },
  /* Pages NO tocadas · esperado DIFF 0. */
  { slug: '/thinking', name: 'thinking', isCase: false, expectDiff: false },
  { slug: '/thinking?lang=es', name: 'thinking-es', isCase: false, expectDiff: false },
  { slug: '/newsletter', name: 'newsletter', isCase: false, expectDiff: false },
  { slug: '/thinking/find-your-larry-holmes', name: 'essay-larry', isCase: true, expectDiff: false },
  { slug: '/thinking/im-from-the-government-and-im-here-to-help', name: 'essay-gov', isCase: true, expectDiff: false },
]
const VIEWPORTS = [390, 1440]

async function shoot(mode) {
  const browser = await chromium.launch({
    executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
  })
  for (const u of URLS) {
    for (const w of VIEWPORTS) {
      const ctx = await browser.newContext({ viewport: { width: w, height: 900 } })
      const p = await ctx.newPage()
      const sep = u.slug.includes('?') ? '&' : '?'
      await p.goto(BASE + u.slug + sep + 'utm_source=qa', {
        waitUntil: 'networkidle',
        timeout: 30000,
      })
      await p.waitForTimeout(500)
      /* Mismo masking que f54-1-pixel-diff.mjs. */
      await p.addStyleTag({ content: `
        .t-featured__media,
        .e-card__media,
        .essay-cover,
        .sw-card__m,
        .sw-card__cover,
        .e-hero,
        .cs-hero figure,
        .work-hero figure,
        img, picture, video, canvas,
        [style*="background-image"] {
          visibility: hidden !important;
          background: #808080 !important;
        }
      `})
      await p.waitForTimeout(400)
      const name = `${u.name}-${w}`
      await p.screenshot({ path: path.join(OUT, mode, `${name}.png`), fullPage: true })
      await ctx.close()
    }
  }
  await browser.close()
  console.log('shots done · mode=' + mode)
}

/* Para cada página con diff > threshold, encuentra la región vertical
   donde se concentra la diff y la recorta de both before y after. */
async function cropDiffRegion(name, w, bBuf, aBuf, W, H) {
  const channels = 3
  /* Agrupo diffs por fila. */
  const perRow = new Array(H).fill(0)
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const i = (y * W + x) * channels
      const d =
        Math.abs(bBuf[i] - aBuf[i]) +
        Math.abs(bBuf[i + 1] - aBuf[i + 1]) +
        Math.abs(bBuf[i + 2] - aBuf[i + 2])
      if (d > 10) perRow[y]++
    }
  }
  /* Encuentro bandas con pixels de diff. Threshold: filas con > 20px. */
  const bands = []
  let start = -1
  for (let y = 0; y < H; y++) {
    const hit = perRow[y] > 20
    if (hit && start === -1) start = y
    if (!hit && start !== -1) {
      /* Cierro banda si llevamos > 5 filas limpias. */
      let lookahead = 0
      for (let k = y; k < Math.min(y + 10, H); k++) if (perRow[k] <= 20) lookahead++
      if (lookahead >= 8) {
        bands.push([start, y - 1])
        start = -1
      }
    }
  }
  if (start !== -1) bands.push([start, H - 1])
  if (bands.length === 0) return []
  /* Merge adjacentes separados por < 30px, y expando 40px para contexto. */
  const merged = []
  for (const [s, e] of bands) {
    if (merged.length && s - merged[merged.length - 1][1] < 30) {
      merged[merged.length - 1][1] = e
    } else {
      merged.push([Math.max(0, s - 40), Math.min(H - 1, e + 40)])
    }
  }
  const crops = []
  for (let bi = 0; bi < merged.length; bi++) {
    const [s, e] = merged[bi]
    const cropH = Math.max(1, e - s + 1)
    const bOut = path.join(OUT, 'crops', `${name}-${w}-b${bi + 1}-before.png`)
    const aOut = path.join(OUT, 'crops', `${name}-${w}-b${bi + 1}-after.png`)
    await sharp(path.join(OUT, 'before', `${name}-${w}.png`))
      .extract({ left: 0, top: s, width: W, height: cropH })
      .toFile(bOut)
    await sharp(path.join(OUT, 'after', `${name}-${w}.png`))
      .extract({ left: 0, top: s, width: W, height: cropH })
      .toFile(aOut)
    crops.push({ band: [s, e], before: bOut, after: aOut })
  }
  return merged
}

async function diffAll() {
  console.log('# F56 · pixel-diff vs main · imágenes enmascaradas\n')
  console.log('| page | viewport | expected | diffPx | diffPct | threshold | pass? | diff regions (y) |')
  console.log('|---|---|---|---|---|---|---|---|')
  for (const u of URLS) {
    for (const w of VIEWPORTS) {
      const name = `${u.name}-${w}`
      const beforePath = path.join(OUT, 'before', `${name}.png`)
      const afterPath = path.join(OUT, 'after', `${name}.png`)
      if (!fs.existsSync(beforePath) || !fs.existsSync(afterPath)) {
        console.log(`| ${u.name} | ${w} | ${u.expectDiff ? 'diff' : '0'} | MISSING | - | - | - | - |`)
        continue
      }
      const bMeta = await sharp(beforePath).metadata()
      const aMeta = await sharp(afterPath).metadata()
      const H = Math.min(bMeta.height, aMeta.height)
      const W = Math.min(bMeta.width, aMeta.width)
      const bBuf = await sharp(beforePath)
        .extract({ left: 0, top: 0, width: W, height: H })
        .removeAlpha()
        .raw()
        .toBuffer()
      const aBuf = await sharp(afterPath)
        .extract({ left: 0, top: 0, width: W, height: H })
        .removeAlpha()
        .raw()
        .toBuffer()
      let diff = 0
      const channels = 3
      for (let i = 0; i < bBuf.length; i += channels) {
        if (Math.abs(bBuf[i] - aBuf[i]) + Math.abs(bBuf[i+1] - aBuf[i+1]) + Math.abs(bBuf[i+2] - aBuf[i+2]) > 10) diff++
      }
      const total = W * H
      const pct = ((diff / total) * 100).toFixed(3)
      const threshold = u.isCase ? 1.0 : 0.5
      const over = Number(pct) > threshold
      let pass
      if (u.expectDiff) {
        pass = over || diff > 100 ? '✅' : '⚠️  no diff'
      } else {
        pass = over ? '❌' : '✅'
      }
      let regions = '-'
      if (over) {
        const bands = await cropDiffRegion(u.name, w, bBuf, aBuf, W, H)
        if (bands.length) regions = bands.map(b => `${b[0]}..${b[1]}`).join(', ')
      }
      console.log(`| ${u.name} | ${w} | ${u.expectDiff ? 'diff' : '0'} | ${diff} | ${pct}% | ≤ ${threshold}% | ${pass} | ${regions} |`)
    }
  }
}

if (MODE === 'before' || MODE === 'after') {
  await shoot(MODE)
} else if (MODE === 'diff') {
  await diffAll()
} else {
  console.log('MODE env missing · set MODE=before, after, or diff')
  process.exit(1)
}
