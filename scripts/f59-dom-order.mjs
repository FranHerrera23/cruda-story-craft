#!/usr/bin/env node
/* F59 QA §3 · lee el DOM de la home y lista los id/clase de las
   secciones del stack en orden del DOM.
   Esperado: hero → selected-work → narrative sparring → legacy →
   act2 → close. */

import { chromium } from 'playwright'

const URL = process.argv[2] || 'http://localhost:3100'

const browser = await chromium.launch({
  executablePath: '/opt/pw-browsers/chromium',
  args: ['--no-sandbox'],
})
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } })
const page = await ctx.newPage()
await page.goto(URL, { waitUntil: 'load' })

const sections = await page.evaluate(() => {
  const hero = document.getElementById('home-hero')
  const stack = document.getElementById('stack')
  const picks = []
  if (hero) picks.push(hero)
  if (stack) picks.push(...Array.from(stack.children))
  return picks.map((el) => ({
    id: el.id || '',
    classes: el.className,
    tag: el.tagName.toLowerCase(),
  }))
})

const EXPECTED = [
  'home-hero',
  'how-we-help',
  'selected-work',
  'narrative-sparring',
  'our-founder',
  'act2',
  'close',
]

console.log('N  TAG       ID                      CLASSES')
console.log('-'.repeat(78))
sections.forEach((s, i) => {
  console.log(
    String(i).padEnd(3) +
      s.tag.padEnd(10) +
      (s.id || '-').padEnd(24) +
      String(s.classes).slice(0, 60),
  )
})

const actualIds = sections.map((s) => s.id).filter(Boolean)
const sameOrder =
  actualIds.length === EXPECTED.length &&
  EXPECTED.every((e, i) => actualIds[i] === e)

console.log('-'.repeat(78))
console.log('expected:', EXPECTED.join(' → '))
console.log('actual:  ', actualIds.join(' → '))
console.log('result:  ', sameOrder ? 'PASS' : 'FAIL')

await browser.close()
process.exit(sameOrder ? 0 : 1)
