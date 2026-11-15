import spanish from './articles.json'
import english from './articles.en.json'

export const libraryArticles = [
  ...spanish.map(article => ({ ...article, language: 'es' as const, translationOf: article.slug })),
  ...english.map(article => ({ ...article, language: 'en' as const })),
]

export type LibraryArticleEntry = typeof libraryArticles[number]

export function articleTranslations(article: LibraryArticleEntry) {
  return libraryArticles.filter(entry => entry.translationOf === article.translationOf)
}
