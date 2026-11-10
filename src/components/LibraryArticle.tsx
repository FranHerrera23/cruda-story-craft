import Link from 'next/link'
import articles from '@/content/articles.json'
import './LibraryArticle.css'

type Article = typeof articles[number]
export default function LibraryArticle({article:a}:{article:Article}) {
 const url = `https://www.thecruda.com/thinking/${a.slug}`
 const schema = {'@context':'https://schema.org','@type':'Article',headline:a.title,description:a.description,inLanguage:'es',datePublished:a.publishedAt,dateModified:a.publishedAt,mainEntityOfPage:url,author:{'@type':'Person',name:'Fran Herrera',url:'https://www.thecruda.com/about'},publisher:{'@type':'Organization',name:'CRUDA',url:'https://www.thecruda.com'}}
 return <div className="library-article" lang="es">
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,'\\u003c')}} />
  <header className="library-meta"><Link href="/thinking?type=articles&lang=es">← Narrative Sparring / Artículos</Link><p>Por <Link href="/about">Fran Herrera</Link> · CRUDA<br/><time dateTime={a.publishedAt}>10 de noviembre de 2026</time> · {a.minutes} min de lectura</p></header>
  <article dangerouslySetInnerHTML={{__html:a.html}} />
  <aside className="library-related"><h2>Seguí explorando</h2>{articles.filter(b=>b.slug!==a.slug).map(b=><p key={b.slug}><Link href={`/thinking/${b.slug}`}>{b.title} →</Link></p>)}<p><Link href="/work/mannheim-trading">Mannheim Trading: una empresa nueva, décadas de reputación →</Link></p><p><Link href="/contact">Conversemos sobre tu empresa →</Link></p></aside>
 </div>
}
