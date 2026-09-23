import type { Work } from './types'

export const juanPabloRomero: Work = {
  slug: 'juan-pablo-romero',
  /* Fran §7: /work/juan-pablo-romero NO entra a SELECTED WORK. Este
     order queda como referencia interna (order > 100 lo saca del
     índice de home + /thinking · el resolvedor lo ignora). */
  order: 101,
  title:
    'From zero US market presence to clear positioning that architects, designers and developers understand before the first meeting',
  metaTitle: 'JP Romero · JURA · CRUDA',
  dek:
    'Positioning for JURA Plank and Connecting the Dots, so US architects and developers understand them before the first meeting.',
  client: {
    name: 'Juan Pablo Romero',
    role: 'Founder',
    company: 'JURA Plank & Connecting the Dots',
  },
  confidential: false,
  place: { to: 'Miami, Florida', city: 'Miami', country: 'United States' },
  period: { start: '2025', end: '2025' },
  via: 'CRUDA',
  door: { primary: 'translated', secondary: 'transmission' },
  axis: 'across',
  moment: 'market-entry',

  image: '/juan-pablo-romero.webp',
  heroFormat: 'portrait',
  heroObjectPosition: 'center 20%',

  capsule: [
    "Juan Pablo Romero came to the United States from Guatemala at seventeen. He learned hardwood flooring alongside his father, and after twenty years he built JURA Plank — a luxury hardwood company that carries every line, from Canadian hardwood to European engineered flooring — and Connecting the Dots, a consulting practice that helps international construction firms enter the US market.",
    'The technical expertise came from twenty years on job sites, starting beside his father. The market visibility was zero.',
    'CRUDA built the positioning that lets architects, designers and developers understand what makes JURA different before the first meeting.',
  ],
  takeaways: [
    "In competitive US construction, credibility isn't the problem — translation is. Twenty years of craft knowledge only travels once it's said in language buyers can act on.",
    'A market builder is a different animal from a founder. Positioning both JURA Plank and Connecting the Dots meant one voice pointing at two doors.',
    'The story exists first. The content follows. Product decisions get easier when the positioning is settled.',
  ],
  metrics: [],
  sections: [
    {
      h2: 'Two decades on the job site.',
      body: [
        "Juan Pablo Romero came to the United States from Guatemala at seventeen. He started learning flooring alongside his father, working job sites, understanding wood from the ground up. That was two decades ago.",
        "Today, Juan Pablo runs JURA Plank, a luxury hardwood company that carries every line, from Canadian hardwood to European engineered flooring: Black Forest oak, natural oil finishes, click-lock engineering. He also founded Connecting the Dots, a consulting practice that helps international construction companies navigate US markets.",
        "But none of that translated into market visibility. JURA had a product. Juan Pablo had the expertise. What they didn't have was a way to communicate why their approach to wood flooring — material, provenance, spec — was different before the first meeting.",
      ],
    },
    {
      h2: 'One voice, two companies.',
      body: [
        'Positioning both JURA Plank and Connecting the Dots meant one voice pointing at two doors: the product for architects and designers, the consulting practice for the firms bringing their brands into US markets.',
        'A market builder is a different animal from a founder. Juan Pablo is both. The narrative had to make that legible without competing with itself.',
      ],
    },
  ],
  built: [
    'Positioning · JURA Plank + Connecting the Dots',
    'Founder voice · Juan Pablo publishing under his own name',
    'Web + demand infrastructure',
  ],
  change: [],
  credit: 'CRUDA · Fran Herrera, Founder',
  faq: [],
  moreFrom: [],
  next: 'inout',
}
