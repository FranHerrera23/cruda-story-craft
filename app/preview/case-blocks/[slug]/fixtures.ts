import type { CaseStudyV2 } from '@/components/case-blocks/types'

/* Task 11 · fixtures del preview route.

   Estos NO son data files por caso — son fixtures inline para validar
   el compositor y los 7 bloques del punto 3 del spec. INOUT, Girish,
   MTC y BAUHOME no se crean como data files hasta que Fran lo pida
   (§9 del spec).

   Contenido de "inout" tomado verbatim de cruda-case-inout.html
   (la referencia de implementación). Sólo usamos los 7 bloques
   implementados en esta iteración; los bloques que la composición
   real de INOUT declara y todavía no existen (slab, system, voice,
   specifiers, built) se omiten aquí para que el preview render sin
   log warnings. Cuando lleguen se rehidrata la composición completa
   en el data file real.

   Composición real de INOUT (§4 del spec):
     head · lead · band · pull · slab-verde · system · prose ·
     slab-azul · band · specifiers · voice · built · credits · next

   Composición de INOUT (Fran cerró contenido el 10-sep):
     head · lead · band · pull · slab-c2 { claim } · system ·
     prose · slab-c1 { manifesto } · band · series · spx · voice ·
     built · credits · next

   Cambios respecto de la referencia HTML:
   - INSIDERS pasa a su propio bloque `series`, no vive en el
     figcaption del band #2. spx queda sólo con los specifiers.
   - Los episodios se nombran por quiénes son.

   Contenido verbatim de cruda-case-inout.html — sin inventar copy. */

export const previewFixtures: Record<string, CaseStudyV2> = {
  inout: {
    slug: 'inout',
    title: 'INOUT',
    oneLiner:
      'Brand and narrative system for a frameless door line built by the founder of the leading glass manufacturer in northern Argentina.',
    moment: 'new-entity',
    identity: {
      c1: '#1600FF',
      c2: '#3E4B41',
      type: 'montserrat',
      /* INOUT tiene un display display-typography particular en el
         head: weight 200 con wide-tracking .18em. Se declara acá
         y el compositor lo inyecta como tokens; los otros casos
         usan los defaults 700 / -.03em. */
      head: {
        weight: 200,
        tracking: '.18em',
        size: 'clamp(44px, 8vw, 116px)',
        boldWeight: 600,
        boldTracking: '.1em',
      },
    },
    blocks: [
      {
        type: 'head',
        title: 'IN<b>OUT</b>',
        oneLiner:
          'Brand and narrative system for a frameless door line built by the founder of the leading glass manufacturer in northern Argentina.',
        facts: [
          { label: 'Moment', value: 'New entity' },
          { label: 'Sector', value: 'Architecture' },
          { label: 'Where', value: 'Salta, Argentina' },
          { label: 'Years', value: '2020–2022' },
        ],
      },
      {
        type: 'lead',
        asset: {
          slotName: 'Lead media — producto instalado',
          slotSpec:
            'Obra terminada, fotografía original. No render, no catálogo. 78vh, mínimo 2800px.',
        },
      },
      {
        type: 'band',
        asset: {
          slotName: 'Instalación — plano general',
          slotSpec: '68vh.',
        },
        caption: '[Proyecto, estudio, año.]',
        groups: [
          {
            label: 'The moment',
            paragraphs: [
              'Germán Noël had built Cristalizando into the leading glass and high-performance openings manufacturer in northern Argentina: an industrial plant, façades for hospitals and towers, contracts won on volume and price.',
              'INOUT was the opposite. A frameless system he engineered himself — 20mm vertical profiles, insulated glass — quoted project by project, for houses that wanted the wall to disappear.',
            ],
          },
          {
            label: 'The narrative problem',
            paragraphs: [
              'He was already known. That was the problem. Known as the reliable supplier, and that reputation does not travel up to the tier where studios are buying authorship rather than specification.',
            ],
          },
        ],
      },
      {
        type: 'pull',
        quote: 'He was already known. That was the problem.',
      },
      {
        type: 'slab',
        tone: 'c2',
        children: [
          {
            type: 'claim',
            text: 'Vos elegís<br>de qué lado <b>estar.</b>',
            gloss: 'You choose which side to be on.',
            note:
              'Launched in August 2021, with half the world still shut indoors. The line turns inside and outside from a condition into a choice. The product did not change; the meaning was built out of the moment.',
          },
        ],
      },
      {
        type: 'system',
        label: 'The identity system',
        cells: [
          {
            kind: 'swatch',
            tone: 'c1',
            pantone: 'Pantone 4736 C',
            hex: '#1600FF',
            friendly: 'Azul eléctrico',
          },
          {
            kind: 'swatch',
            tone: 'c2',
            pantone: 'Pantone 418 C',
            hex: '#3E4B41',
            friendly: 'Verde cemento',
          },
          {
            kind: 'type',
            ladder: [
              { weight: 100, text: 'FRAMELESS' },
              { weight: 300, text: 'SLIDING' },
              { weight: 500, text: 'DOORS' },
              { weight: 700, text: 'INOUT' },
            ],
            note: 'Montserrat · tracking 14pt',
          },
          {
            kind: 'slot',
            slotName: 'Morfología',
            slotSpec: 'Construcción del logo sobre grilla 22X.',
          },
          {
            kind: 'slot',
            wide: true,
            slotName: 'Manual de marca — spread',
            slotSpec: 'Doble página.',
          },
          {
            kind: 'slot',
            wide: true,
            slotName: 'Brochure — spread',
            slotSpec: 'Doble página.',
          },
        ],
      },
      {
        type: 'prose',
        label: 'The system',
        paragraphs: [
          "The mark is drawn from the product's own geometry — right angles, vertices, intersections. The lines trace an opening and, at the centre, a camera lens: the brand's two axes, contemplation and movement, in a single figure.",
          'The palette runs from electric blue to cement green because the thesis is industrial architecture plus sky and nature. That is not execution. That is the argument of the brand resolved as a system.',
        ],
      },
      {
        type: 'slab',
        tone: 'c1',
        children: [
          {
            type: 'manifesto',
            who: 'INSIDERS',
            paragraphs: [
              'The format: the brand interviewing the architects who decide what gets built in the region. INOUT never explains its own quality. It hosts the people whose judgment sets it.',
              'This is where the method starts. Five years on, CRUDA still runs it — the interview as authority, putting the brand in the room with whoever decides.',
            ],
            lines: [
              'INSIDERS are the ones who <b>dream awake.</b>',
              'The mad ones who know they are mad.',
              'The ones who <b>contemplate</b>, not the ones who look.',
              'The ones who turn up the volume on silence.',
              'The ones who <b>slow time down.</b>',
              'The ones who make wherever they are their place.',
              'Not the strongest — <b>the ones who adapt fastest.</b>',
            ],
          },
        ],
      },
      {
        type: 'band',
        asset: {
          slotName: 'INSIDERS — still',
          slotSpec: 'Episodio con el arquitecto en pantalla. 68vh.',
        },
        groups: [
          {
            label: 'The intervention',
            paragraphs: [
              'A supplier does not get to convene that room. An author does.',
              'We built the format and produced the first episodes. INOUT has been making it without us ever since — the clearest evidence a system was built rather than delivered.',
            ],
          },
        ],
      },
      {
        type: 'series',
        label: 'INSIDERS',
        subtitle:
          'Una mirada introspectiva sobre los espacios, entrevistando a las mentes más brillantes de la arquitectura del norte argentino.',
        episodes: [
          {
            number: '#01',
            title: 'Salvador Pepi',
            meta: 'Infinito al Cuadrado · agosto 2021',
          },
          { number: '#02', title: 'Sergio Cabrera' },
          { number: '#03', title: 'Horizontal Arquitectos' },
        ],
        note: 'The series continues, produced by the client.',
      },
      {
        type: 'spx',
        label: 'Who specifies the system',
        items: [
          { title: 'Sergio Cabrera Arquitectos', meta: 'Architecture' },
          { title: 'Horizontal Arquitectos', meta: 'Architecture' },
          { title: 'Estudio A Group', meta: 'Development' },
          { title: 'Proyecto Norte', meta: 'Construction' },
          { title: 'Male Figueroa', meta: 'Interiors · El Tipal, 2022' },
        ],
      },
      {
        type: 'voice',
        label: 'The client',
        quote: '[Testimonio de Germán — Fran lo tiene.]',
        attribution:
          'Germán Noël — Founder, INOUT. Founder, Cristalizando',
      },
      {
        type: 'built',
        built: [
          'Naming',
          'Brand strategy',
          'Visual identity',
          'Verbal identity',
          'Communications',
          'INSIDERS',
        ],
        changes: [
          'Specified by the leading practices in the region',
          'The system still in use, unchanged, five years on',
          'INSIDERS still in production — by the client, without us',
          'The format became the method CRUDA runs today',
        ],
      },
      {
        type: 'credits',
        facts: [
          { label: 'Client', value: 'Germán Noël' },
          { label: 'Moment', value: 'New entity' },
          { label: 'Years', value: '2020–2022' },
          { label: 'Team', value: 'Fran Herrera' },
        ],
        attribution:
          "CRUDA built the naming, the brand and the formats. The engineering, the patent and the company are Germán's.",
      },
    ],
    credits: {
      facts: [
        { label: 'Client', value: 'Germán Noël' },
        { label: 'Moment', value: 'New entity' },
        { label: 'Years', value: '2020–2022' },
        { label: 'Team', value: 'Fran Herrera' },
      ],
      attribution:
        "CRUDA built the naming, the brand and the formats. The engineering, the patent and the company are Germán's.",
    },
    next: {
      slug: 'girish-sehgal',
      label: 'Girish Sehgal',
      oneLiner:
        'Narrative and positioning for a hospitality executive moving into healthcare, with twenty-five years of work no search would find.',
    },
  },
}

/* Slug adicional — `passages-lab`. Scaffold explícito para validar
   B13 antes de que exista el data file de Girish (§9 del spec:
   Girish no se crea todavía). Los strings son placeholders honestos,
   no copy: "Sample piece · A", "Excerpt would render here..." — para
   ver la forma del bloque sin confundirla con contenido real.

   Cuando Girish tenga data file, este slug se retira y el bloque se
   ejercita con la escritura real. */
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
    label: 'INOUT (preview)',
    oneLiner:
      'Back to the INOUT preview to see the block system in a real case shape.',
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
