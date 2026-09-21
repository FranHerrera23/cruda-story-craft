import type { Work } from './types'

export const inout: Work = {
  slug: 'inout',
  order: 6,
  /* Enmienda 6-B · INOUT queda en el índice (sin imagen ni tile). */
  title:
    'Brand and narrative system for a frameless door line built by the founder of the leading glass manufacturer in northern Argentina',
  metaTitle: 'Germán Noel · INOUT — CRUDA',
  dek:
    'Brand and narrative system for INOUT — a frameless door line built by the founder of the leading glass manufacturer in northern Argentina.',
  /* Enmienda 6-B · display "Germán Noel" en SELECTED WORK índice. */
  client: { name: 'Germán Noel', role: 'Founder', company: 'INOUT · Cristalizando' },
  confidential: false,
  place: { to: 'Salta, Argentina', city: 'Salta', country: 'Argentina' },
  period: { start: '2020', end: '2022' },
  via: 'CRUDA',
  door: { primary: 'translated' },
  axis: 'outward',
  moment: 'new-entity',

  proof: {
    type: 'change',
    text: 'INSIDERS still in production — by the client, without us',
  },

  capsule: [
    'Germán Noel had built Cristalizando into the leading glass and high-performance openings manufacturer in northern Argentina: an industrial plant, façades for hospitals and towers, contracts won on volume and price.',
    'INOUT was the opposite. A frameless system he engineered himself — 20mm vertical profiles, insulated glass — quoted project by project, for houses that wanted the wall to disappear.',
    'CRUDA built the brand and the narrative system for the new line. Five years on, the flagship format — INSIDERS — is still in production, by the client, without us.',
  ],
  takeaways: [
    "Being already known was the problem. Cristalizando's reputation as a reliable supplier does not travel up to the tier where studios are buying authorship rather than specification.",
    'The mark is drawn from the product\'s own geometry — right angles, vertices, intersections. That is not execution; that is the argument of the brand resolved as a system.',
    'INSIDERS is the format: INOUT never explains its own quality. It hosts the people whose judgment sets it.',
  ],
  metrics: [
    { value: '5 years', label: 'INSIDERS still in production', source: 'Client, verified', period: '2021–2026' },
    { value: '20mm', label: 'vertical profiles · frameless system', source: 'INOUT technical spec', period: '2020' },
  ],
  sections: [
    {
      h2: 'He was already known. That was the problem.',
      body: [
        'Known as the reliable supplier, and that reputation does not travel up to the tier where studios are buying authorship rather than specification.',
        'INOUT was engineered in the opposite direction: a frameless system, quoted project by project, for houses that wanted the wall to disappear. The product did not change; the meaning had to.',
      ],
      pull: 'Vos elegís de qué lado estar. You choose which side to be on.',
    },
    {
      h2: 'The identity system.',
      body: [
        "The mark is drawn from the product's own geometry — right angles, vertices, intersections. The lines trace an opening and, at the centre, a camera lens: the brand's two axes, contemplation and movement, in a single figure.",
        'The palette runs from electric blue to cement green because the thesis is industrial architecture plus sky and nature. That is not execution. That is the argument of the brand resolved as a system.',
      ],
    },
    {
      h2: 'INSIDERS.',
      body: [
        'The format: the brand interviewing the architects who decide what gets built in the region. INOUT never explains its own quality. It hosts the people whose judgment sets it. This is where the method starts.',
        'Five years on, INSIDERS is still in production — by the client, without us. A system that outlasts the engagement proves more than one that requires us to keep running it.',
      ],
    },
  ],
  built: [
    'Identity system · logo, palette, typographic system',
    'INSIDERS · interview format',
    'Web + demand infrastructure',
  ],
  change: [
    'INSIDERS still in production, five years after the engagement ended.',
  ],
  credit: 'CRUDA · Fran Herrera, Founder',
  faq: [],
  moreFrom: [],
  next: 'confidential-fashion-founder',
}
