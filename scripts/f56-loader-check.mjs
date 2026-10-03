#!/usr/bin/env node
/* F56 · verifico que el Loader NO aparece en /second-look (desktop
   ni mobile), y que SÍ aparece en / solo la primera vez de la
   sesión en desktop. */

import { chromium } from '../node_modules/playwright/index.mjs'

const BASE = process.env.BASE || 'http://localhost:3000'

async function loaderVisibleAt(url, width) {
  const browser = await chromium.launch({
    executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
  })
  /* Contexto fresco · sessionStorage vacío para simular primera visita. */
  const ctx = await browser.newContext({ viewport: { width, height: 900 } })
  const p = await ctx.newPage()
  await p.goto(BASE + url, { waitUntil: 'commit' })
  /* Loader renderea un <div class="loader"> con background --ink en el
     primer paint. Lo detecto. */
  const loader = await p.locator('.loader, [data-loader], .cruda-loader').count()
  /* Fallback: si no hay selector específico, miro el documentElement
     dataset loader. */
  const htmlLoader = await p.evaluate(() => document.documentElement.dataset.loader || '')
  await ctx.close()
  await browser.close()
  return { loaderNodes: loader, htmlLoader }
}

async function waitForLoaderGone(ctx, p, timeout = 4000) {
  const start = Date.now()
  while (Date.now() - start < timeout) {
    const stillThere = await p.evaluate(() =>
      document.documentElement.dataset.loader === 'show',
    )
    if (!stillThere) return true
    await p.waitForTimeout(100)
  }
  return false
}

async function main() {
  const browser = await chromium.launch({
    executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
  })

  console.log('# F56 · loader policy check\n')

  for (const [label, url, w] of [
    ['/second-look @ 1440 (desktop)', '/second-look', 1440],
    ['/second-look @ 390 (mobile)', '/second-look', 390],
    ['/about @ 1440 (desktop · ex-bug)', '/about', 1440],
    ['/services @ 1440 (desktop · ex-bug)', '/services', 1440],
    ['/ @ 1440 (desktop · first visit, no UTM, SHOULD show)', '/', 1440],
    ['/ @ 1440 (desktop · with UTM, should NOT show)', '/?utm_source=qa', 1440],
  ]) {
    const ctx = await browser.newContext({ viewport: { width: w, height: 900 } })
    const p = await ctx.newPage()
    await p.goto(BASE + url, { waitUntil: 'load' })
    /* Espero más tiempo para dejar que React hidrate y useEffect
       corra. En desktop prod el bundle entero se evalúa primero. */
    await p.waitForTimeout(1800)
    const state = await p.evaluate(() => {
      const loaderEl = document.querySelector('.loader')
      return {
        hasLoaderDiv: Boolean(loaderEl),
        wasVisible: loaderEl ? window.getComputedStyle(loaderEl).display !== 'none' : false,
      }
    })
    console.log(` ${label}`)
    console.log(`   .loader div present: ${state.hasLoaderDiv} ${state.hasLoaderDiv ? '· visible: ' + state.wasVisible : ''}`)
    await ctx.close()
  }

  await browser.close()
}

main().catch(e => { console.error(e); process.exit(1) })
