import Link from 'next/link'
import { Globe } from 'lucide-react'
import { articleTranslations, type LibraryArticleEntry } from '@/content/library-articles'

export default function ArticleLanguage({ article }: { article: LibraryArticleEntry }) {
  const options = articleTranslations(article)
  if (options.length < 2) return null

  return (
    <nav className="article-language" aria-label={article.language === 'es' ? 'Idioma del artículo' : 'Article language'}>
      <Globe size={17} aria-hidden="true" />
      {options.map(({ slug, language }) => (
        <Link
          key={language}
          href={`/thinking/${slug}`}
          hrefLang={language}
          lang={language}
          aria-current={language === article.language ? 'page' : undefined}
        >
          {language === 'es' ? 'Español' : 'English'}
        </Link>
      ))}
    </nav>
  )
}
