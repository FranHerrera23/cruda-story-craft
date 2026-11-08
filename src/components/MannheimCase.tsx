import article from '@/content/work/mannheim-trading-article.json'
import './MannheimCase.css'

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://www.thecruda.com/work/mannheim-trading#article",
  "mainEntityOfPage": "https://www.thecruda.com/work/mannheim-trading",
  "headline": "Mannheim Trading: una empresa nueva, décadas de reputación",
  "description": "Estrategia de marca, identidad visual, desarrollo web y copywriting para Mannheim Trading, fundada por José Mannheim.",
  "inLanguage": "es",
  "datePublished": "2026-09-21",
  "dateModified": "2026-11-08",
  "image": [
    "https://www.thecruda.com/jose-mannheim.webp"
  ],
  "author": {
    "@type": "Person",
    "name": "Fran Herrera",
    "url": "https://www.thecruda.com/about#fran-herrera"
  },
  "publisher": {
    "@type": "Organization",
    "name": "CRUDA",
    "url": "https://www.thecruda.com"
  },
  "about": [
    {
      "@type": "Organization",
      "name": "Mannheim Trading Corp",
      "url": "https://mannheimtrading.com/"
    },
    {
      "@type": "Person",
      "name": "José Mannheim"
    }
  ]
}

/** Trusted editorial HTML, rendered on the server for readers and search engines. */
export default function MannheimCase() {
  return <div className="mannheim-case" lang="es">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
    <div className="mtc-wrap" dangerouslySetInnerHTML={{ __html: article.html }} />
  </div>
}
