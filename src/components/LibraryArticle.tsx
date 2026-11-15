import Link from 'next/link'
import { libraryArticles, type LibraryArticleEntry } from '@/content/library-articles'
import ArticleLanguage from './ArticleLanguage'
import './LibraryArticle.css'

export default function LibraryArticle({ article }: { article: LibraryArticleEntry }) {
  const { title, language, slug, publishedAt, minutes, html } = article
  const isEnglish = language === 'en'
  const publishedDate = new Intl.DateTimeFormat(isEnglish ? 'en-US' : 'es', {
    dateStyle: 'long',
    timeZone: 'UTC',
  }).format(new Date(publishedAt))
  const dek = html.match(/<p class="dek">([\s\S]*?)<\/p>/)?.[1] || ''
  const body = html.replace(/<h1[^>]*>[\s\S]*?<\/h1>/, '').replace(/<p class="dek">[\s\S]*?<\/p>/, '')
  const url = `https://www.thecruda.com/thinking/${slug}`
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: article.description,
    inLanguage: language,
    datePublished: publishedAt,
    dateModified: publishedAt,
    mainEntityOfPage: url,
    author: { '@type': 'Person', name: 'Fran Herrera', url: 'https://www.thecruda.com/about' },
    publisher: { '@type': 'Organization', name: 'CRUDA', url: 'https://www.thecruda.com' },
  }
  const related = libraryArticles.filter(entry => entry.language === language && entry.slug !== slug)

  return (
    <div className="library-article" lang={language}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
      <header className="library-heading">
        <div className="article-toolbar">
          <Link className="library-back" href={`/thinking?type=articles&lang=${language}#biblioteca`}>
            ← Narrative Sparring / {isEnglish ? 'Articles' : 'Artículos'}
          </Link>
          <ArticleLanguage article={article} />
        </div>
        <p className="library-date"><time dateTime={publishedAt}>{publishedDate}</time></p>
        <h1>{title}</h1>
        <p className="dek" dangerouslySetInnerHTML={{ __html: dek }} />
        <div className="library-author">
          <Link href="/about"><img src="/fran-herrera.webp" alt="Fran Herrera" width="44" height="44" /></Link>
          <span><Link href="/about">Fran Herrera</Link> · Founder, CRUDA</span>
          <span>{minutes} {isEnglish ? 'min read' : 'min de lectura'}</span>
        </div>
      </header>
      <article dangerouslySetInnerHTML={{ __html: body }} />
      <aside className="library-related">
        <h2>{isEnglish ? 'Keep reading' : 'Seguí explorando'}</h2>
        {related.map(entry => <p key={entry.slug}><Link href={`/thinking/${entry.slug}`}>{entry.title} →</Link></p>)}
        <p><Link href="/work/mannheim-trading">{isEnglish ? 'Mannheim Trading: a new company, decades of reputation' : 'Mannheim Trading: una empresa nueva, décadas de reputación'} →</Link></p>
        <p><Link href="/contact">{isEnglish ? 'Let’s talk about your company' : 'Conversemos sobre tu empresa'} →</Link></p>
      </aside>
    </div>
  )
}
