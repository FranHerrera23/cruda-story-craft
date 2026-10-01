#!/usr/bin/env node
/* F53 §7 · essay:evidence · reproducir las tres evidencias del
   SubscribeForm que pidió Fran en el reporte final:
     1. loader.js se inyecta con IntersectionObserver (una sola vez
        por página; no antes del scroll).
     2. min-height reservado en el contenedor + CLS medido (proxy
        por Δaltura) en 390 y 1440.
     3. medición del hero al ancho de la línea de firma en 1440.

   Uso:
     1. npm run build && npm run start   (prod server en :3000)
     2. node scripts/essay-evidence.mjs

   Output:
     stdout · reporte en texto plano (copiable al reporte final).
     scripts/.evidence/*.png · screenshots con SHA en el reporte.

   Playwright + Chromium del pre-installed /opt/pw-browsers/. */

import fs from 'node:fs'
import path from 'node:path'
import crypto from 'node:crypto'
import { fileURLToPath } from 'node:url'
import { chromium } from '../node_modules/playwright/index.mjs'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const OUT = path.join(ROOT, 'scripts', '.evidence')
fs.mkdirSync(OUT, { recursive: true })

const BASE = process.env.ESSAY_EVIDENCE_BASE || 'http://localhost:3000'

const browser = await chromium.launch({
  executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
})

function sha12(filePath) {
  return crypto.createHash('sha256').update(fs.readFileSync(filePath)).digest('hex').slice(0, 12)
}

/* ═════════ 1. Hero width + firma @ 1440 (ensayo con hero) ═════════ */
{
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } })
  const p = await ctx.newPage()
  await p.goto(`${BASE}/thinking/im-from-the-government-and-im-here-to-help`, { waitUntil: 'networkidle' })
  const m = await p.evaluate(() => {
    const rect = (el) => el ? el.getBoundingClientRect() : null
    return {
      article: rect(document.querySelector('.essay article')),
      h1: rect(document.querySelector('h1')),
      by: rect(document.querySelector('.e-by')),
      hero: rect(document.querySelector('.e-hero')),
      body: rect(document.querySelector('.e-body')),
    }
  })
  console.log('# Hero width @ 1440 · im-from-the-government')
  console.log('article w =', Math.round(m.article.width))
  console.log('h1       w =', Math.round(m.h1.width))
  console.log('firma    w =', Math.round(m.by.width))
  console.log('hero     w =', Math.round(m.hero.width))
  console.log('body     w =', Math.round(m.body.width))
  const shot = path.join(OUT, 'essay-1440.png')
  await p.screenshot({ path: shot, fullPage: true })
  console.log(`shot = ${shot} sha = ${sha12(shot)}`)
  await ctx.close()
}

/* ═════════ 2. IntersectionObserver + one-shot evidence ═════════ */
{
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } })
  const p = await ctx.newPage()
  const beehivRequests = []
  p.on('request', r => {
    if (r.url().includes('beehiiv.com')) {
      beehivRequests.push({ method: r.method(), url: r.url(), ts: Date.now() })
    }
  })
  await p.goto(`${BASE}/thinking/im-from-the-government-and-im-here-to-help`, { waitUntil: 'networkidle' })

  const pre = await p.evaluate(() => ({
    scriptsInDom: document.querySelectorAll('script[data-beehiiv-form]').length,
    scriptsInSub: document.querySelectorAll('.e-subscribe script').length,
    subMinHeight: getComputedStyle(document.querySelector('.e-subscribe')).minHeight,
    subRect: document.querySelector('.e-subscribe').getBoundingClientRect(),
  }))

  await p.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
  await p.waitForTimeout(1500)

  const post = await p.evaluate(() => ({
    scriptsInDom: document.querySelectorAll('script[data-beehiiv-form]').length,
    scriptsInSub: document.querySelectorAll('.e-subscribe script').length,
    subRectHeight: Math.round(document.querySelector('.e-subscribe').getBoundingClientRect().height),
  }))

  console.log('\n# IntersectionObserver + one-shot · ensayo con 1 caja')
  console.log('pre-scroll  scripts[data-beehiiv-form] en DOM:', pre.scriptsInDom, '· en .e-subscribe:', pre.scriptsInSub)
  console.log('post-scroll scripts[data-beehiiv-form] en DOM:', post.scriptsInDom, '· en .e-subscribe:', post.scriptsInSub)
  console.log('pre-scroll  min-height =', pre.subMinHeight, '· height render =', Math.round(pre.subRect.height))
  console.log('post-scroll height render =', post.subRectHeight)
  console.log('beehiiv network requests:', JSON.stringify(beehivRequests, null, 2))
  await ctx.close()
}

/* ═════════ 3. min-height / CLS @ 390 y 1440 ═════════ */
for (const [w, name] of [[390, '390'], [1440, '1440']]) {
  const ctx = await browser.newContext({ viewport: { width: w, height: 900 } })
  const p = await ctx.newPage()
  await p.goto(`${BASE}/newsletter`, { waitUntil: 'networkidle' })
  const pre = await p.evaluate(() => {
    const sub = document.querySelector('.e-subscribe')
    return {
      minHeight: getComputedStyle(sub).minHeight,
      height: Math.round(sub.getBoundingClientRect().height),
    }
  })
  await p.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
  await p.waitForTimeout(1500)
  const post = await p.evaluate(() => {
    const sub = document.querySelector('.e-subscribe')
    return {
      height: Math.round(sub.getBoundingClientRect().height),
      scripts: document.querySelectorAll('.e-subscribe script').length,
    }
  })
  console.log(`\n# /newsletter @ ${name} · reserva min-height`)
  console.log('pre  min-height =', pre.minHeight, '· height =', pre.height)
  console.log('post height =', post.height, '· scripts in sub =', post.scripts)
  console.log('CLS proxy (Δheight) =', post.height - pre.height, 'px')
  const shot = path.join(OUT, `newsletter-${name}.png`)
  await p.screenshot({ path: shot, fullPage: true })
  console.log(`shot = ${shot} sha = ${sha12(shot)}`)
  await ctx.close()
}

await browser.close()
