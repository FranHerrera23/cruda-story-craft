#!/usr/bin/env node
/* F56 · verifico que el h1 del paso 1 entra en el primer pantallazo
   mobile (390×844). Captura solo el viewport (fullPage: false). */

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
  /* iPhone 12/13 viewport · 390×844 lógico. */
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 } })
  const p = await ctx.newPage()
  await p.goto(BASE + '/second-look?utm_source=qa', { waitUntil: 'networkidle' })
  await p.waitForTimeout(600)
  const name = 'step1-390x844-fold'
  await p.screenshot({ path: path.join(OUT, `${name}.png`), fullPage: false })

  const info = await p.evaluate(() => {
    const portrait = document.querySelector('.sl-portrait')
    const h1 = document.querySelector('#sl-s1')
    const btn = document.querySelector('.sl-step[data-step="1"] .sl-btn')
    const foldY = window.innerHeight
    const portraitRect = portrait?.getBoundingClientRect()
    const h1Rect = h1?.getBoundingClientRect()
    const btnRect = btn?.getBoundingClientRect()
    return {
      viewportH: foldY,
      portrait: portraitRect ? { x: portraitRect.x, y: portraitRect.y, w: portraitRect.width, h: portraitRect.height, bottom: portraitRect.bottom } : null,
      h1: h1Rect ? { x: h1Rect.x, y: h1Rect.y, w: h1Rect.width, h: h1Rect.height, bottom: h1Rect.bottom } : null,
      btn: btnRect ? { y: btnRect.y, h: btnRect.height, bottom: btnRect.bottom } : null,
    }
  })

  console.log(`capture · ${name}.png (390×844 viewport, no fullPage)`)
  console.log('viewport height:', info.viewportH)
  console.log('portrait:', info.portrait, info.portrait && info.portrait.bottom < info.viewportH ? '✓ visible' : '✗ cut off')
  console.log('h1:', info.h1, info.h1 && info.h1.bottom < info.viewportH ? '✓ in fold' : '✗ below fold')
  console.log('btn (See how it works):', info.btn, info.btn && info.btn.bottom < info.viewportH ? '✓ in fold' : '✗ below fold')

  await ctx.close()
  await browser.close()
}

main().catch(e => { console.error(e); process.exit(1) })
