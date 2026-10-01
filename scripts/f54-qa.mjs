#!/usr/bin/env node
/* F54 QA · captures con hash + mediciones + aside check.
   Fran 1-oct · reportable sin editar.

   Uso: npm run build && npm run start → node scripts/f54-qa.mjs */

import fs from 'node:fs'
import path from 'node:path'
import crypto from 'node:crypto'
import { fileURLToPath } from 'node:url'
import { chromium } from '../node_modules/playwright/index.mjs'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const OUT = path.join(ROOT, 'scripts', '.f54')
fs.mkdirSync(OUT, { recursive: true })

const BASE = process.env.BASE || 'http://localhost:3000'
const URLS = [
  { slug: '/thinking', name: 'thinking-en' },
  { slug: '/thinking?lang=es', name: 'thinking-es' },
  { slug: '/newsletter', name: 'newsletter' },
]
const VIEWPORTS = [390, 768, 1024, 1440, 1920]

function sha12(f) {
  return crypto.createHash('sha256').update(fs.readFileSync(f)).digest('hex').slice(0, 12)
}

const browser = await chromium.launch({
  executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
})

console.log('# F54 · shots + mediciones\n')
console.log('| url | viewport | shot | sha | bytes |')
console.log('|---|---|---|---|---|')

const measurements = []
for (const u of URLS) {
  for (const w of VIEWPORTS) {
    const ctx = await browser.newContext({ viewport: { width: w, height: 900 } })
    const p = await ctx.newPage()
    await p.goto(BASE + u.slug, { waitUntil: 'networkidle', timeout: 30000 })
    /* Scroll previo para disparar lazy images + IntersectionObserver
       del SubscribeForm (brief §7). */
    await p.evaluate(async () => {
      await new Promise(r => {
        let y = 0
        const step = () => {
          y += 200
          window.scrollTo(0, y)
          if (y < document.body.scrollHeight) requestAnimationFrame(step)
          else { window.scrollTo(0, 0); setTimeout(r, 400) }
        }
        step()
      })
    })
    await p.waitForTimeout(800)
    const shot = path.join(OUT, `${u.name}-${w}.png`)
    await p.screenshot({ path: shot, fullPage: true })
    const sha = sha12(shot)
    const bytes = fs.statSync(shot).size
    console.log(`| ${u.slug} | ${w} | ${path.relative(ROOT, shot)} | ${sha} | ${bytes} |`)

    /* Mediciones solo a 390 y 1440 (brief §7). */
    if (w === 390 || w === 1440) {
      const m = await p.evaluate(() => {
        const q = (s) => document.querySelector(s)
        const rect = (el) => el ? el.getBoundingClientRect() : null
        const styles = (el, props) => {
          if (!el) return null
          const cs = getComputedStyle(el)
          const o = {}
          for (const p of props) o[p] = cs[p]
          return o
        }
        return {
          /* /thinking */
          h1: rect(q('.t-hero__h')),
          h1Styles: styles(q('.t-hero__h'), ['fontSize','lineHeight','fontWeight','letterSpacing']),
          intro: rect(q('.t-hero__intro')),
          introStyles: styles(q('.t-hero__intro'), ['fontSize','maxWidth']),
          toggleGap: styles(q('.t-hero__lang'), ['gap','marginTop']),
          aside: rect(q('.t-hero__sub')),
          asideStyles: styles(q('.t-hero__sub'), ['borderTopWidth','paddingTop']),
          asideSub: rect(q('.t-hero__sub .e-subscribe')),
          asideSubStyles: styles(q('.t-hero__sub .e-subscribe'), ['minHeight','width']),
          featuredMedia: rect(q('.t-featured__media')),
          featuredText: rect(q('.t-featured__text')),
          gridFirstMedia: rect(q('.t-grid .e-card__media')),
          /* /newsletter */
          nHero: rect(q('.n-hero__inner')),
          nHeroH: rect(q('.n-hero__h')),
          nHeroHStyles: styles(q('.n-hero__h'), ['fontSize','lineHeight','letterSpacing']),
          nSub: rect(q('.n-hero__sub')),
          nSubStyles: styles(q('.n-hero__sub'), ['maxWidth','marginTop']),
          nSubEmbed: rect(q('.n-hero__sub .e-subscribe')),
          nSubEmbedStyles: styles(q('.n-hero__sub .e-subscribe'), ['minHeight','width','maxWidth','marginTop']),
          nRecentGrid: rect(q('.n-recent__grid')),
          nBand: rect(q('.n-band__inner')),
          nBandCta: rect(q('.n-band__cta')),
          nBandCtaStyles: styles(q('.n-band__cta'), ['minHeight','background','color','borderRadius']),
        }
      })
      measurements.push({ url: u.slug, viewport: w, m })
    }
    await ctx.close()
  }
}

console.log('\n## Mediciones (1440 y 390)\n')
console.log('```')
for (const row of measurements) {
  console.log('--- ' + row.url + ' @ ' + row.viewport + ' ---')
  console.log(JSON.stringify(row.m, null, 2))
}
console.log('```')

await browser.close()
