import spanish from './articles.json'
import english from './articles.en.json'
import ibmSpanish from './article-ibm.es.json'
import ibmEnglish from './article-ibm.en.json'

export const libraryArticles = [
  ...[...spanish, ...ibmSpanish].map(article => ({ ...article, language: 'es' as const, translationOf: article.slug })),
  ...[...english, ...ibmEnglish].map(article => ({ ...article, language: 'en' as const })),
]

export type LibraryArticleEntry = typeof libraryArticles[number]

export function articleTranslations(article: LibraryArticleEntry) {
  return libraryArticles.filter(entry => entry.translationOf === article.translationOf)
}
