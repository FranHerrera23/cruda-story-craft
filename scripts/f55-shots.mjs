#!/usr/bin/env node
/* F55 · capturas con hash de /about en 390, 768, 1024, 1440 y 1920. */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import crypto from 'node:crypto'
import { chromium } from '../node_modules/playwright/index.mjs'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const BASE = process.env.BASE || 'http://localhost:3000'
const OUT = path.join(ROOT, 'scripts/.f55-shots')
fs.mkdirSync(OUT, { recursive: true })

const VIEWPORTS = [390, 768, 1024, 1440, 1920]

async function main() {
  const browser = await chromium.launch({
    executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
  })
  for (const w of VIEWPORTS) {
    const ctx = await browser.newContext({ viewport: { width: w, height: 900 } })
    const p = await ctx.newPage()
    await p.goto(BASE + '/about?utm_source=qa', {
      waitUntil: 'networkidle',
      timeout: 30000,
    })
    await p.waitForTimeout(800)
    const file = path.join(OUT, `about-${w}.png`)
    await p.screenshot({ path: file, fullPage: true })
    const hash = crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex').slice(0, 12)
    console.log(` ${w}  about-${w}.png  sha256=${hash}`)
    await ctx.close()
  }
  await browser.close()
}

main().catch(e => { console.error(e); process.exit(1) })
