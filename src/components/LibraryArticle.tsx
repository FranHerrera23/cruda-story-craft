import Link from 'next/link'
import articles from '@/content/articles.json'
import './LibraryArticle.css'

type Article = typeof articles[number]
export default function LibraryArticle({article:a}:{article:Article}) {
 const title = a.title
 const publishedDate = new Intl.DateTimeFormat('es', {
   dateStyle: 'long',
   timeZone: 'UTC',
 }).format(new Date(a.publishedAt))
 const dek = a.html.match(/<p class="dek">([\s\S]*?)<\/p>/)?.[1] || ''
 const body = a.html.replace(/<h1[^>]*>[\s\S]*?<\/h1>/,'').replace(/<p class="dek">[\s\S]*?<\/p>/,'')
 const url = `https://www.thecruda.com/thinking/${a.slug}`
 const schema = {'@context':'https://schema.org','@type':'Article',headline:a.title,description:a.description,inLanguage:'es',datePublished:a.publishedAt,dateModified:a.publishedAt,mainEntityOfPage:url,author:{'@type':'Person',name:'Fran Herrera',url:'https://www.thecruda.com/about'},publisher:{'@type':'Organization',name:'CRUDA',url:'https://www.thecruda.com'}}
 return <div className="library-article" lang="es">
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,'\\u003c')}} />
  <header className="library-heading"><Link className="library-back" href="/thinking?type=articles&lang=es#biblioteca">← Narrative Sparring / Artículos</Link><p className="library-date"><time dateTime={a.publishedAt}>{publishedDate}</time></p><h1>{title}</h1><p className="dek" dangerouslySetInnerHTML={{__html:dek}}/><div className="library-author"><Link href="/about"><img src="/fran-herrera.webp" alt="Fran Herrera" width="44" height="44"/></Link><span><Link href="/about">Fran Herrera</Link> · Founder, CRUDA</span><span>{a.minutes} min de lectura</span></div></header>
  <article dangerouslySetInnerHTML={{__html:body}} />
  <aside className="library-related"><h2>Seguí explorando</h2>{articles.filter(b=>b.slug!==a.slug).map(b=><p key={b.slug}><Link href={`/thinking/${b.slug}`}>{b.title} →</Link></p>)}<p><Link href="/work/mannheim-trading">Mannheim Trading: una empresa nueva, décadas de reputación →</Link></p><p><Link href="/contact">Conversemos sobre tu empresa →</Link></p></aside>
 </div>
}
