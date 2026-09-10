import type { CaseStudyV2 } from '@/components/case-blocks/types'

/* Mannheim Trading Corp — data file v2. Slug: `mannheim-trading`
   (sin sigla, sin forma societaria). El H1 y la ficha muestran
   "Mannheim Trading Corp" — que es como José firma.

   Correcciones cerradas antes del data file:
   - L49: apellido "Mannheim" bien escrito en el sitio. Sin nota
          de warning. La línea del brief de traspaso era errónea.
   - Slabs en `tone: 'c1'` (azul petróleo #2C687A) — el ref HTML
     los pintaba negros, era bug. Si el caso declara identidad,
     el token resuelve al color; si no declara, cae a negro.
   - Voice de José como `draft: true` — testimonio pendiente,
     se sirve en preview y NO en producción hasta que Fran lo
     encuentre.
   - Figures 3-col (5fr/3fr/3fr) — primer case que ejercita ese
     layout. INOUT no las usaba. */

export const mannheimTrading: CaseStudyV2 = {
  slug: 'mannheim-trading',
  title: 'Mannheim Trading Corp',
  oneLiner:
    'Narrative and positioning for a new company founded by a man whose name has carried an industry for sixty years — and who has never wanted to be seen.',
  moment: 'new-entity',
  identity: {
    c1: '#2C687A',           // azul petróleo, primario
    c2: '#59C2A1',           // verde turquesa, secundario
    type: 'figtree',         // clave del manifest de fuentes
  },
  blocks: [
    {
      type: 'head',
      title: 'Mannheim<br>Trading Corp',
      oneLiner:
        'Narrative and positioning for a new company founded by a man whose name has carried an industry for sixty years — and who has never wanted to be seen.',
      facts: [
        { label: 'Client', value: 'José Mannheim' },
        { label: 'Moment', value: 'New entity' },
        { label: 'Sector', value: 'Industrial materials' },
        { label: 'Hub', value: 'Panama' },
        { label: 'Year', value: '2025' },
      ],
    },
    {
      type: 'lead',
      asset: {
        slotName: 'Key visual — planta con la máscara del isologo',
        slotSpec:
          'Foto de fábrica recortada por la geometría de la marca. 78vh, mínimo 2800px.',
      },
    },
    {
      type: 'prose',
      label: 'The client',
      paragraphs: [
        'The Mannheims built their first glass factory in Germany more than a century ago. In 1965, José Mannheim and his father founded Autoglass Peruana in Lima — a country with a growing automotive market and a construction sector that needed high-performance glass. Within four years they were exporting more than half of what they made.',
        'In the eighties they made the decision the whole company turns on. They could not win on volume, so they stopped trying. They took their first patents in bullet-resistant glass and moved into high-value products, just as political instability across Latin America turned security from a luxury into a requirement.',
        'That company became AGP Group.',
      ],
    },
    {
      type: 'figures',
      items: [
        {
          value: '4 in 10',
          label: 'Armoured vehicles on earth carry AGP glass',
          hint: 'agpglass.com',
        },
        {
          value: '1,000+',
          label: 'Corporate clients, in 45 countries',
          hint: 'agpglass.com',
        },
        {
          value: '180+',
          label: 'Certified ballistic formulas, across 1,500+ vehicle models',
          hint: 'agpglass.com',
        },
      ],
    },
    {
      type: 'spx',
      label: 'What sixty years built',
      items: [
        { title: 'Knoxville, Tennessee', meta: 'AGP USA opens, 1988' },
        {
          title: 'Brazil, Mexico, Asia',
          meta: 'Expansion, partly through an alliance with North Glass Japan',
        },
        {
          title: 'Lotus UK',
          meta: 'Key supplier to the sports car division, 2000',
        },
        { title: 'The Pentagon', meta: 'Curved armoured glass solutions' },
        {
          title: '8,950 military vehicles',
          meta: 'Manufactured for the United States, 2004, deployed across the Middle East',
        },
        {
          title: 'Tesla · BMW · Range Rover · Audi · VW · Toyota',
          meta: 'OEM programmes. Tesla supplier since 2021',
        },
        {
          title: 'The "Cielo" windshield',
          meta: "World's first panoramic windshield fully integrated with a car roof — Opel Astra GTC",
        },
        {
          title: 'AGP B.33',
          meta: 'Ballistic glass 30% lighter and thinner, setting a new category standard',
        },
        {
          title: 'The Popemobile',
          meta: "Glass for John Paul II. AGP's own materials say heads of state, ministers, soldiers and Popes; José names the one that mattered to him",
        },
      ],
      src:
        'Published by AGP, or stated publicly by José Mannheim under his own name.',
    },
    {
      type: 'prose',
      label: 'And what the market did about it',
      paragraphs: [
        'Goldman Sachs Private Capital Investing took a minority position in 2018, after the group tripled its global revenues in five years. BDT Capital Partners followed in 2021, describing the investment as a partnership with the Mannheim family. A $250M credit line with OMERS and BMO in 2022. An $800M investment announced in Mexico in 2023.',
        "Arturo Mannheim runs it now, as CEO and Chairman. The company is in the family's hands and out of José's.",
        'Then, at eighty, he started something new.',
      ],
    },
    {
      type: 'pull',
      quote: 'Then, at eighty, he started something new.',
    },
    {
      type: 'prose',
      label: 'The narrative problem',
      paragraphs: [
        "Mannheim Trading Corp supplies polycarbonate, polyurethane and other critical materials to armoured glass manufacturers. Which means it sells to AGP's competitors.",
        'So the obvious move — lead with sixty years of AGP — is the one move unavailable. The history is the credibility and the history is the conflict, at the same time, in the same sentence.',
        'That one is an architecture problem. It gets solved by deciding what the company says and in what order.',
        "The second problem is harder. José's only commercial asset is his name, and being seen has never been something he wanted. A man like that will not publish a company profile about himself. He will not do a founder video. Ask him to sell and he stops.",
      ],
    },
    {
      type: 'slab',
      tone: 'c1',
      children: [
        {
          type: 'thesis',
          statement:
            'His only asset was his name, and he had spent sixty years not using it.',
          reading: 'The problem was never positioning. It was voice.',
        },
      ],
    },
    {
      type: 'prose',
      label: 'The market',
      paragraphs: [
        'There is a detail that reorders everything. Worldwide, the number of companies that buy what Mannheim Trading Corp sells is at most a thousand, and that is a generous count. It is a narrower market than AGP’s, by a wide margin: ultra B2B, very high ticket, with an operational hub in Panama.',
        'So the job was never reach. In a market that size a reputation is not a marketing asset — it is the whole distribution. The task was to make sure those few hundred buyers could place him without AGP standing in the way.',
      ],
    },
    {
      type: 'pull',
      quote:
        'In a market that size a reputation is not a marketing asset — it is the whole distribution.',
    },
    {
      type: 'prose',
      label: 'The intervention',
      paragraphs: [
        'The register is memory, not sales. Every piece opens where he opens: my story began in Lima, back in 1965. It moves through an industry he was present at the founding of — the patents, the plants, the decade they chose innovation over volume because they could not win on volume. Mannheim Trading Corp arrives at the end, almost as a consequence.',
        'Nobody is promoting anything. Someone is remembering. For a man who dislikes exposure, that is the only kind of writing he will put his name to — and it happens to be the most credible kind there is.',
        'Read where he lands it: technology evolves, materials change, but reputation and trust are built slowly and deliberately. That is a man in his eighties talking about his trade. It is also, without a seam, the commercial argument for the new company.',
      ],
    },
    {
      type: 'passages',
      label: 'His words',
      featured: [
        {
          title: 'The one that starts in 1965',
          paragraphs: [
            'He opens in Lima and walks forward: the first patents in bullet-resistant glass in the eighties, taken because volume was a race they could not win. Knoxville in 1988. Brazil, Mexico, Asia. Lotus. The Pentagon. The first panoramic windshield built into a car roof.',
            'Mannheim Trading Corp appears in the final third, in one paragraph, described as what he does now.',
          ],
          venue: 'LinkedIn',
          language: 'English',
        },
        {
          title: 'The one that starts before 1965',
          paragraphs: [
            'The Spanish version reaches back further: a family that built its first glass factory in Germany more than a century ago, and a son who chose to write his own chapter in Peru. Violence in the region in the eighties turned security from a luxury into a necessity, and the company turned with it.',
            'It is the same career told as inheritance rather than as achievement. That is the version that makes a new company at eighty read as continuity.',
          ],
          venue: 'LinkedIn',
          language: 'Spanish',
        },
      ],
    },
    {
      type: 'prose',
      label: 'The second voice',
      paragraphs: [
        'When the subject will not take the centre, presence gets built from outside it. So Karen Mannheim writes about her father. What he cannot say about himself she can say with more authority, because self-praise does not count and someone else’s does.',
        'She had the same problem first. Her own words, five years earlier: any founder who spent decades building something good knows it — the work is excellent and nobody outside your circle finds out. She had it for twenty-eight years.',
        'She hired CRUDA in 2021 to solve it. The visibility she built then is now the instrument that builds her father’s.',
      ],
    },
    {
      type: 'slab',
      tone: 'c1',
      children: [
        {
          type: 'thesis',
          statement:
            'One problem, two generations, and the one who solved it first became the way through for the other.',
        },
      ],
    },
    {
      type: 'system',
      label: 'The identity',
      cells: [
        {
          kind: 'swatch',
          tone: 'c1',
          pantone: 'Azul petróleo',
          hex: '#2C687A',
          friendly: 'Primary',
        },
        {
          kind: 'swatch',
          tone: 'c2',
          pantone: 'Verde turquesa',
          hex: '#59C2A1',
          friendly: 'Secondary',
        },
        {
          kind: 'type',
          ladder: [
            { weight: 400, text: 'Figtree Regular' },
            { weight: 500, text: 'Figtree Medium' },
            { weight: 600, text: 'Figtree Semibold' },
            { weight: 700, text: 'Figtree Bold' },
          ],
          note: 'Geometric sans. Clear at text sizes, strong in caps.',
        },
        {
          kind: 'slot',
          slotName: 'Construcción del isologo',
          slotSpec:
            'Vidrio laminado + M + volumen = marca. La lámina del brand book.',
        },
        {
          kind: 'slot',
          slotName: 'Key visual — versión línea',
          slotSpec:
            'La misma planta con el patrón geométrico en línea blanca.',
        },
      ],
    },
    {
      type: 'prose',
      label: 'The mark',
      paragraphs: [
        'The isologo is a three-dimensional M, solid and modular, drawn from the geometry of a laminated glass panel — the finished product the materials MTC distributes end up inside. Technical precision and layered construction, in one figure.',
        'It came last, not first. A mark built before the argument is decoration; built after it, it is the argument holding at a smaller scale.',
      ],
    },
    {
      type: 'voice',
      draft: true,
      label: 'The client',
      quote: '[Testimonio de José — pendiente.]',
      attribution: 'José Mannheim — Founder, Mannheim Trading Corp. Founder, AGP Group',
    },
    {
      type: 'built',
      built: [
        'Narrative platform',
        'Category positioning',
        'Message architecture',
        'Brand identity and brand book',
        'Website',
        "Founder narrative, including Karen's voice",
      ],
      changes: [
        'Go-to-market defined and running, with an operational hub in Panama',
        'A company that states its own case without naming AGP',
        'A founder who publishes under his own name, at eighty',
      ],
    },
    {
      type: 'credits',
      facts: [
        { label: 'Client', value: 'José Mannheim' },
        { label: 'Moment', value: 'New entity' },
        { label: 'Year', value: '2025' },
        { label: 'Team', value: 'Fran Herrera' },
      ],
      attribution:
        "CRUDA built the narrative, the positioning, the brand identity and the website. There was no naming — the company arrived with its name. The supply chain, the financing and sixty years of industry standing are José Mannheim's. CRUDA has never worked with AGP Group; every figure about AGP here is published by AGP or stated publicly by José himself.",
    },
  ],
  credits: {
    facts: [
      { label: 'Client', value: 'José Mannheim' },
      { label: 'Moment', value: 'New entity' },
      { label: 'Year', value: '2025' },
      { label: 'Team', value: 'Fran Herrera' },
    ],
    attribution:
      "CRUDA built the narrative, the positioning, the brand identity and the website. There was no naming — the company arrived with its name. The supply chain, the financing and sixty years of industry standing are José Mannheim's. CRUDA has never worked with AGP Group; every figure about AGP here is published by AGP or stated publicly by José himself.",
  },
}
