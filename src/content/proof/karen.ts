/* Proof · Karen Mannheim · TRAZZO.
   Brief 03 P3 + Brief 04 P3 (14-sep).

   Una sola fuente de datos para las dos superficies:
     · /process — densidad completa, dos bandas
     · home — densidad reducida, tres números

   Regla lockeada — ver docs/decisions.md #fechas-de-engagement.
   El período `2021—2026` es la ÚNICA excepción para engagement
   dates en la home + /process: la duración es el argumento del
   bloque (los tres meses arman el sistema, cinco años prueban
   que sigue funcionando). Sin la duración impresa, el pitch se
   cae.

   Regla lockeada — ver docs/decisions.md #tiempo-verbal.
   Tiempo verbal pasado en todo el bloque. `WHAT WE BUILT`, no
   `what we build`. La colaboración cerró en agosto 2026.

   Regla lockeada — ver docs/decisions.md #regla-de-ratios.
   Ningún múltiplo del fee en los números. `21x el fee` prohibido
   sin excepción. */

export type ProofStat = {
  /* Número héroe. Se renderea como bloque display, no como counter. */
  value: string
  /* Línea principal debajo del número. */
  label: string
  /* Nota adicional debajo del label (ventana de tiempo, condición). */
  detail?: string
}

export type ProofBand = {
  /* Encabezado de la banda. Va en caps grot pequeñas, mismo lenguaje
     de eyebrow. */
  label: string
  /* Filas de la banda. Cada fila 3 columnas (Grid en desktop; 1 col
     mobile). */
  rows: ProofStat[][]
}

/* Encabezado del bloque — verbatim del Addendum A §3.
   Constata un hecho: los tres meses construyen el sistema, y
   Karen lo probó cinco años. */
export const PROOF_HEADER = {
  h2: [
    'The three months build the system.',
    'Karen ran hers for five years.',
  ],
  attribution: 'Karen Mannheim · TRAZZO',
  /* Único lugar donde la duración es el argumento — regla 12,
     excepción de proof block. */
  period: 'A five-year period of engagement · 2021—2026',
}

/* Densidad completa · /process P3. Dos bandas.
   Banda 1 · What we built · producto del trabajo, se reclama entero.
   Banda 2 · The business, over the same period · lo que hizo la
   empresa mientras el trabajo corría. El encabezado 'over the same
   period' ya dice 'not because of us' — no agregar aclaratoria. */
export const PROOF_FULL: ProofBand[] = [
  {
    label: 'What we built',
    rows: [
      [
        {
          value: '605,050',
          label: 'LinkedIn impressions',
          detail: '365 days · 66% off-network',
        },
        {
          value: '165,513',
          label: 'people reached',
        },
        {
          value: '96x',
          label: 'reach multiplier',
          detail: 'on 6,299 followers',
        },
      ],
      [
        {
          value: '560,715',
          label: 'Instagram views',
          detail: '90 days · 0% paid',
        },
        {
          value: '19,000',
          label: 'followers',
          detail: 'from ~1,000',
        },
        {
          value: '58%',
          label: 'of reach',
          detail: 'aged 35—44',
        },
      ],
    ],
  },
  {
    label: 'The business, over the same period',
    rows: [
      [
        {
          value: '+46%',
          label: 'revenue growth',
          detail: '2025 vs 2024',
        },
        {
          value: '+27%',
          label: 'approved quotes',
        },
        {
          value: '$380K',
          label: 'largest close',
        },
      ],
    ],
  },
]

/* Densidad reducida · home P3. Tres números.
   Si va idéntico entre home y /process, alguien que pasa de una
   a la otra lo ve repetido en dos minutos. Los tres de la home
   son los que más pesan solos, sin el contexto de la banda. */
export const PROOF_COMPACT: ProofStat[] = [
  {
    value: '605,050',
    label: 'LinkedIn impressions',
    detail: '365 days',
  },
  {
    value: '96x',
    label: 'reach multiplier',
    detail: 'on 6,299 followers',
  },
  {
    value: '$380K',
    label: 'largest close',
  },
]
