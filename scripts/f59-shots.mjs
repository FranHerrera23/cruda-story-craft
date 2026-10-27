#!/usr/bin/env node
/* F59 QA §4 · capturas de la home a 2000×1130, 1440×900, 1280×800,
   390×844. Para cada viewport, guarda:
     - hero · primer viewport entero (nav + hero + eventual nav dark)
     - selected-work-row1 · rect del selected work hasta cerrar la fila 1
     - work-to-newsletter · rect que va del final del selected work
       hasta la cabecera del plano Narrative Sparring (transición). */

import { chromium } from 'playwright'
import fs from 'node:fs'
import path from 'node:path'

const URL = process.env.CUR_URL || 'http://localhost:3100'
const OUT = process.env.OUT_DIR || path.resolve('docs/F59-shots')
const VIEWPORTS = [
  { label: '2000x1130', width: 2000, height: 1130 },
  { label: '1440x900', width: 1440, height: 900 },
  { label: '1280x800', width: 1280, height: 800 },
  { label: '390x844', width: 390, height: 844 },
]

fs.mkdirSync(OUT, { recursive: true })

const browser = await chromium.launch({
  executablePath: '/opt/pw-browsers/chromium',
  args: ['--no-sandbox'],
})

for (const vp of VIEWPORTS) {
  console.error(`[viewport ${vp.label}]`)
  const ctx = await browser.newContext({
    viewport: { width: vp.width, height: vp.height },
    deviceScaleFactor: 1,
  })
  const page = await ctx.newPage()
  await page.goto(URL, { waitUntil: 'load' })
  /* Esperar que el Loader salga (HOLD_MS 1500 + EXIT_MS 600 + buffer). */
  await page.waitForTimeout(2500)

  // Hero · primer viewport
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }))
  await page.waitForTimeout(300)
  await page.screenshot({
    path: path.join(OUT, `hero-${vp.label}.png`),
    type: 'png',
    clip: { x: 0, y: 0, width: vp.width, height: vp.height },
  })

  // Selected work · scrollear al top del título "Selected work." + 0px
  // (de modo que la fila 1 completa quede abajo del título).
  const swLoc = page.locator('#selected-work').first()
  if (await swLoc.count()) {
    await swLoc.evaluate((el) => el.scrollIntoView({ block: 'start', behavior: 'instant' }))
    /* Correr un poco más abajo para enfocar las tarjetas y no el título. */
    await page.evaluate(() => window.scrollBy({ top: 140, behavior: 'instant' }))
    await page.waitForTimeout(500)
    await page.screenshot({
      path: path.join(OUT, `sw-row1-${vp.label}.png`),
      type: 'png',
      clip: { x: 0, y: 0, width: vp.width, height: vp.height },
    })
  }

  // Transición Work → Newsletter · scrollear a #narrative-sparring - vp*0.5
  const nsLoc = page.locator('#narrative-sparring').first()
  if (await nsLoc.count()) {
    await nsLoc.evaluate((el, h) => {
      const y = el.getBoundingClientRect().top + window.scrollY - Math.round(h * 0.5)
      window.scrollTo({ top: Math.max(0, y), behavior: 'instant' })
    }, vp.height)
    await page.waitForTimeout(500)
    await page.screenshot({
      path: path.join(OUT, `work-to-newsletter-${vp.label}.png`),
      type: 'png',
      clip: { x: 0, y: 0, width: vp.width, height: vp.height },
    })
  }

  await ctx.close()
}

await browser.close()

const files = fs.readdirSync(OUT).sort()
console.log('OUT:', OUT)
for (const f of files) console.log(' -', path.join(OUT, f))
