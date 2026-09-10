import type { CaseStudyV2 } from '@/components/case-blocks/types'

/* Task 11 · fixtures del preview route.

   Fixtures inline para validar el compositor. Cuando un caso migra
   a data file real en src/content/clients-v2/, se retira de acá.

   INOUT migró a src/content/clients-v2/inout.ts y ahora vive en
   /work/inout. Se retira del preview.

   passages-lab sigue como scaffold para validar B13 hasta que
   Girish migre — cuando eso pase, se retira también. */

export const previewFixtures: Record<string, CaseStudyV2> = {}

previewFixtures['passages-lab'] = {
  slug: 'passages-lab',
  title: 'Passages · layout lab',
  oneLiner:
    'Internal scaffold for validating the B13 passages block. Not a case study — swap with Girish real data when it lands.',
  moment: 'category-shift',
  blocks: [
    {
      type: 'head',
      title: 'Passages · lab',
      oneLiner:
        'Internal scaffold for validating the B13 passages block. Not a case study — swap with Girish real data when it lands.',
      facts: [
        { label: 'Purpose', value: 'Design validation' },
        { label: 'Block', value: 'B13 · passages' },
      ],
    },
    {
      type: 'passages',
      label: 'The writing',
      featured: [
        {
          title: 'Sample piece · title of the essay',
          excerpt:
            'Excerpt would render here at reading size — one or two paragraphs of client-authored copy showing the shape of the argument, quoted long enough that the reader can decide whether to open the source.',
          venue: 'Publication A',
          year: '2024',
          url: 'https://example.com/piece-a',
        },
        {
          title: 'Sample piece · second title',
          excerpt:
            'A second featured passage. Same shape, different length — the block should degrade cleanly whether the excerpt is one line or five.',
          venue: 'Publication B',
          year: '2023',
        },
      ],
      archive: [
        { title: 'Archive item · title', venue: 'Publication A', year: '2024' },
        { title: 'Archive item · title', venue: 'Publication B', year: '2023' },
        { title: 'Archive item · title', venue: 'Publication C', year: '2023' },
        { title: 'Archive item · title', venue: 'Publication A', year: '2022' },
        { title: 'Archive item · title', venue: 'Publication D', year: '2022' },
        { title: 'Archive item · title', venue: 'Publication B', year: '2021' },
      ],
    },
    {
      type: 'credits',
      facts: [
        { label: 'Purpose', value: 'Design validation' },
        { label: 'Block', value: 'B13' },
      ],
      attribution:
        'Scaffold slug. Not published, not indexed. Retires when Girish data lands.',
    },
  ],
  credits: {
    facts: [
      { label: 'Purpose', value: 'Design validation' },
      { label: 'Block', value: 'B13' },
    ],
    attribution:
      'Scaffold slug. Not published, not indexed. Retires when Girish data lands.',
  },
  next: {
    slug: 'inout',
    label: 'INOUT',
    oneLiner:
      'Back to the real INOUT case at /work/inout — validates the block system in production shape.',
  },
}

/* Añadir el bloque `next` al final de blocks[] usando el `next` del
   objeto raíz — el compositor no toma el `next` de la raíz por sí solo
   porque cada block es explícito. */
for (const cs of Object.values(previewFixtures)) {
  cs.blocks.push({
    type: 'next',
    slug: cs.next.slug,
    label: cs.next.label,
    oneLiner: cs.next.oneLiner,
  })
}
