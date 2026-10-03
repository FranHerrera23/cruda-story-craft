#!/usr/bin/env node
/* F56 · capturas de /work/jack-yeager a 390 + 1440 con el bloque
   StartHere ya agregado (h2 genérico "Not sure which of the four fits?"). */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { chromium } from '../node_modules/playwright/index.mjs'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const BASE = process.env.BASE || 'http://localhost:3000'
const OUT = path.join(ROOT, 'scripts/.f56-qa')
fs.mkdirSync(OUT, { recursive: true })

async function main() {
  const browser = await chromium.launch({
    executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
  })
  for (const w of [390, 1440]) {
    const ctx = await browser.newContext({ viewport: { width: w, height: 900 } })
    const p = await ctx.newPage()
    await p.goto(BASE + '/work/jack-yeager?utm_source=qa', {
      waitUntil: 'networkidle',
      timeout: 30000,
    })
    await p.waitForTimeout(600)
    /* Scroll al StartHere block para que entre al viewport y pueda
       dispararse cualquier IntersectionObserver. */
    await p.evaluate(() => {
      const el = document.querySelector('.start-here')
      if (el) el.scrollIntoView({ block: 'center' })
    })
    await p.waitForTimeout(600)
    /* Capturo SOLO el bloque .start-here recortado para que sea
       claro ver el bloque entero sin el resto de la case page. */
    const bbox = await p.evaluate(() => {
      const el = document.querySelector('.start-here')
      if (!el) return null
      const r = el.getBoundingClientRect()
      return { x: r.x + window.scrollX, y: r.y + window.scrollY, width: r.width, height: r.height }
    })
    if (!bbox) {
      console.log(`✗ ${w} · .start-here NO encontrado en el DOM`)
      await ctx.close()
      continue
    }
    console.log(` ${w} · StartHere bbox: y=${bbox.y}, h=${bbox.height}`)
    await p.screenshot({
      path: path.join(OUT, `jack-starthere-${w}.png`),
      clip: { x: 0, y: bbox.y, width: w, height: Math.ceil(bbox.height) },
      fullPage: true,
    })
    console.log(` ${w} · captured jack-starthere-${w}.png`)
    await ctx.close()
  }
  await browser.close()
}

main().catch(e => { console.error(e); process.exit(1) })
