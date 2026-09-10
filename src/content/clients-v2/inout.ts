import type { CaseStudyV2 } from '@/components/case-blocks/types'

/* INOUT — data file v2. Migrado del preview fixture + correcciones
   L53-L57 aplicadas.

   Composición cerrada (Fran 10-sep):
     head · lead · band · pull · slab-c2 { claim } · system · prose ·
     slab-c1 { manifesto · series } · line · band · spx · voice ·
     built · credits · next

   Correcciones aplicadas:
   - L55: manifesto.lines es prosa de CRUDA (no voz del cliente).
   - L56: manifesto y series (INSIDERS) van en el mismo slab-c1.
   - L57: bloque `line` con el código fotográfico antes del
          segundo band (INSIDERS still). Es la regla de imagen que
          enlaza con INSIDERS.
   - L39: system es grilla de 4 con decisiones (Construcción 22X/3X,
          Morfología de los dos ejes, los dos Pantones en una celda
          dividida, Montserrat 14pt) sobre #F7F7F7, aspect-ratio 1.
   - L39: spx Male Figueroa con obra publicada específica (El Tipal,
          mayo 2022, con Neobox). Los demás sin fecha ni cifra.
   - L39: credits sin línea de Bushido.
   - voice de Germán va con draft:true — se sirve en preview, no
     sale a producción hasta que Fran encuentre el testimonio. */

export const inout: CaseStudyV2 = {
  slug: 'inout',
  title: 'INOUT',
  oneLiner:
    'Brand and narrative system for a frameless door line built by the founder of the leading glass manufacturer in northern Argentina.',
  moment: 'new-entity',
  identity: {
    c1: '#1600FF',
    c2: '#3E4B41',
    type: 'montserrat',
    head: {
      weight: 200,
      tracking: '.18em',
      size: 'clamp(44px, 8vw, 116px)',
      boldWeight: 600,
      boldTracking: '.1em',
    },
    system: {
      cellAspect: '1 / 1',
      cellBg: '#F7F7F7',
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
          kind: 'decision',
          title: 'Construcción 22X/3X',
          body:
            'Morfología del logo sobre grilla modular — proporciones fijas por múltiplos de X.',
        },
        {
          kind: 'decision',
          title: 'Morfología de los dos ejes',
          body:
            'Contemplación y movimiento en una figura. La marca traza una apertura con un lente en el centro.',
        },
        {
          kind: 'swatch',
          tone: 'both',
          pantone: 'Pantone 4736 C',
          hex: '#1600FF',
          friendly: 'Azul eléctrico',
          pantone2: 'Pantone 418 C',
          hex2: '#3E4B41',
          friendly2: 'Verde cemento',
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
        {
          type: 'series',
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
      ],
    },
    /* L57 · el código fotográfico como línea display, entre la
       INSIDERS slab y la banda que muestra el still. Prosa nuestra:
       enlaza el claim ("de qué lado estar") con el formato
       (INSIDERS) y con la regla de imagen. */
    {
      type: 'line',
      text: 'Toda foto de INOUT se toma desde adentro.',
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
      type: 'spx',
      label: 'Who specifies the system',
      items: [
        { title: 'Sergio Cabrera Arquitectos', meta: 'Architecture' },
        { title: 'Horizontal Arquitectos', meta: 'Architecture' },
        { title: 'Estudio A Group', meta: 'Development' },
        { title: 'Proyecto Norte', meta: 'Construction' },
        {
          title: 'Male Figueroa',
          meta: 'Interiors · El Tipal, mayo 2022, con Neobox',
        },
      ],
    },
    /* Voice del cliente va como draft — Fran lo tiene pero todavía
     no lo pasó. La composición ya declara el bloque para ver el
     ritmo en preview; producción lo salta hasta que llegue el
     testimonio real. */
    {
      type: 'voice',
      draft: true,
      label: 'The client',
      quote: '[Testimonio de Germán — pendiente.]',
      attribution: 'Germán Noël — Founder, INOUT. Founder, Cristalizando',
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
    {
      type: 'next',
      slug: 'girish-sehgal',
      label: 'Girish Sehgal',
      oneLiner:
        'Narrative and positioning for a hospitality executive moving into healthcare, with twenty-five years of work no search would find.',
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
}
