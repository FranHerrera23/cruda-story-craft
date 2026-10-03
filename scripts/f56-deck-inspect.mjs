#!/usr/bin/env node
/* F56 · investigación anomalía deck 390 0 diff.
   Verifico en el DOM si .cta-stamp renderiza, con qué texto y si
   queda dentro del área capturada fullPage. */

import { chromium } from '../node_modules/playwright/index.mjs'

const BASE = process.env.BASE || 'http://localhost:3000'

async function main() {
  const browser = await chromium.launch({
    executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
  })

  for (const w of [390, 1440]) {
    const ctx = await browser.newContext({ viewport: { width: w, height: 900 } })
    const p = await ctx.newPage()
    await p.goto(BASE + '/deck?utm_source=qa', { waitUntil: 'networkidle' })
    await p.waitForTimeout(500)

    const docH = await p.evaluate(() => document.documentElement.scrollHeight)
    const info = await p.evaluate(() => {
      const stamps = Array.from(document.querySelectorAll('.cta-stamp'))
      if (stamps.length === 0) return { count: 0 }
      return {
        count: stamps.length,
        details: stamps.map(s => {
          const r = s.getBoundingClientRect()
          const cs = window.getComputedStyle(s)
          return {
            text: s.textContent.trim(),
            y: r.y + window.scrollY,
            x: r.x,
            w: r.width,
            h: r.height,
            visible: cs.display !== 'none' && cs.visibility !== 'hidden' && cs.opacity !== '0',
            display: cs.display,
            visibility: cs.visibility,
            opacity: cs.opacity,
            color: cs.color,
            fontSize: cs.fontSize,
          }
        }),
      }
    })

    console.log(`\n## /deck @ ${w}px · documentHeight=${docH}`)
    console.log(`.cta-stamp count: ${info.count}`)
    if (info.count > 0) {
      for (const d of info.details) {
        console.log(`  text: "${d.text}"`)
        console.log(`  position: x=${d.x}, y=${d.y}, w=${d.w}, h=${d.h}`)
        console.log(`  visible: ${d.visible}, display=${d.display}, visibility=${d.visibility}, opacity=${d.opacity}`)
        console.log(`  color=${d.color}, fontSize=${d.fontSize}`)
        console.log(`  within fullPage capture? ${d.y + d.h <= docH ? '✓' : '✗'}`)
      }
    }

    await ctx.close()
  }

  await browser.close()
}

main().catch(e => { console.error(e); process.exit(1) })
