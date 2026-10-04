#!/usr/bin/env node
/* F56 · QA · back/forward preserva state + fallback mailto. */

import { chromium } from '../node_modules/playwright/index.mjs'

const BASE = process.env.BASE || 'http://localhost:3000'

async function main() {
  const browser = await chromium.launch({
    executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
  })
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } })
  const p = await ctx.newPage()

  await p.goto(BASE + '/second-look?utm_source=qa', { waitUntil: 'networkidle' })
  await p.waitForTimeout(500)

  /* Avanzo 1 → 2 → 3, lleno form. */
  await p.locator('.sl-step.sl-on .sl-btn:not(.sl-btn--ghost)').first().click()
  await p.waitForTimeout(400)
  await p.locator('.sl-step.sl-on .sl-btn:not(.sl-btn--ghost)').first().click()
  await p.waitForTimeout(400)
  await p.fill('#sl-company', 'ACME Industries')
  await p.locator('.sl-step.sl-on fieldset').first().locator('.sl-opt').nth(1).click()
  await p.locator('.sl-step.sl-on fieldset').nth(1).locator('.sl-opt').nth(1).click()
  await p.waitForTimeout(200)

  const hashBefore = await p.evaluate(() => window.location.hash)
  console.log('hash en step 3:', hashBefore)

  /* Back del browser via history.back(). Espero popstate + render. */
  await p.evaluate(() => window.history.back())
  await p.waitForFunction(() => window.location.hash === '#step-2', { timeout: 3000 })
  await p.waitForTimeout(500)
  const onStep2 = await p.locator('.sl-step[data-step="2"].sl-on').count()
  console.log('después de 1 back: step 2 visible:', onStep2 === 1 ? '✓' : '✗')

  await p.evaluate(() => window.history.back())
  await p.waitForFunction(() => window.location.hash === '#step-1', { timeout: 3000 })
  await p.waitForTimeout(500)
  const onStep1 = await p.locator('.sl-step[data-step="1"].sl-on').count()
  console.log('después de 2 back: step 1 visible:', onStep1 === 1 ? '✓' : '✗')

  /* Forward dos veces. */
  await p.evaluate(() => window.history.forward())
  await p.waitForFunction(() => window.location.hash === '#step-2', { timeout: 3000 })
  await p.waitForTimeout(500)
  await p.evaluate(() => window.history.forward())
  await p.waitForFunction(() => window.location.hash === '#step-3', { timeout: 3000 })
  await p.waitForTimeout(500)

  const onStep3 = await p.locator('.sl-step[data-step="3"].sl-on').count()
  console.log('después de 2 forward: step 3 visible:', onStep3 === 1 ? '✓' : '✗')

  const company = await p.inputValue('#sl-company')
  const revPressed = await p.locator('.sl-step.sl-on fieldset').first().locator('[aria-pressed="true"]').textContent().catch(() => '(none)')
  const budPressed = await p.locator('.sl-step.sl-on fieldset').nth(1).locator('[aria-pressed="true"]').textContent().catch(() => '(none)')
  console.log('company conservado:', JSON.stringify(company), company === 'ACME Industries' ? '✓' : '✗')
  console.log('revenue conservado:', JSON.stringify(revPressed), revPressed === '$1–5M' ? '✓' : '✗')
  console.log('budget conservado:', JSON.stringify(budPressed), budPressed === '$5–20K' ? '✓' : '✗')

  /* Verifico fallback mailto en paso 4 (sin env var). */
  await p.locator('.sl-step.sl-on button[type="submit"]').click()
  await p.waitForFunction(() => window.location.hash === '#step-4', { timeout: 3000 })
  await p.waitForTimeout(600)
  const hasCalendlyWidget = await p.locator('.sl-calendly').count()
  const hasFallback = await p.locator('.sl-fallback').count()
  const fallbackText = hasFallback ? await p.locator('.sl-fallback').textContent() : ''
  console.log('\n## Paso 4 sin env var ·')
  console.log(' .sl-calendly presente:', hasCalendlyWidget, '(should be 0)')
  console.log(' .sl-fallback presente:', hasFallback, '(should be 1)')
  console.log(' fallback text:', JSON.stringify(fallbackText.trim()))

  await ctx.close()
  await browser.close()
}

main().catch(e => { console.error(e); process.exit(1) })
