import type { Resource } from '@/content/resources'

const BASE = 'https://www.thecruda.com'

/* Brief v12 T3 follow-up — CollectionPage schema para los hubs de
   /resources. Antes los hubs no tenían JSON-LD y la IA no sabía
   que la página era una colección de piezas. */

type Args = {
  url: string
  name: string
  description: string
  items: Resource[]
}

export function collectionPageSchema({ url, name, description, items }: Args) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${url}#collection`,
    name,
    description,
    url,
    isPartOf: {
      '@type': 'WebSite',
      name: 'CRUDA',
      url: BASE,
    },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: items.length,
      itemListElement: items.map((r, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `${BASE}${r.href}`,
        name: r.title,
      })),
    },
  }
}
