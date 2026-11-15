'use client'

import Link from 'next/link'
import { Globe } from 'lucide-react'
import { useEffect, useState } from 'react'
import './LibraryBrowser.css'

type Row = {
  slug: string
  href: string
  title: string
  dek?: string
  language: string
  translationOf?: string
  readingMinutes?: number
  publishedAt: string
  kind: 'articles' | 'essays'
}

export default function LibraryBrowser({
  rows, initialType = 'all', initialLang = 'all',
}: { rows: Row[]; initialType?: string; initialLang?: string }) {
  const [type, setType] = useState(initialType)
  const [lang, setLang] = useState(initialLang)
  const isEnglish = lang === 'en'

  useEffect(() => {
    const onPop = () => {
      const query = new URLSearchParams(location.search)
      setType(query.get('type') || 'all')
      setLang(query.get('lang') || 'all')
    }
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  function change(nextType: string, nextLang: string) {
    setType(nextType)
    setLang(nextLang)
    const url = new URL(location.href)
    for (const [key, value] of [['type', nextType], ['lang', nextLang]]) {
      if (value === 'all') url.searchParams.delete(key)
      else url.searchParams.set(key, value)
    }
    window.history.replaceState(null, '', url.pathname + url.search + url.hash)
  }

  const filtered = rows.filter(row =>
    (type === 'all' || row.kind === type) &&
    (lang === 'all' ? !row.translationOf || row.language === 'es' : row.language === lang),
  )
  const types = isEnglish ? ['All', 'Articles', 'Essays'] : ['Todo', 'Artículos', 'Ensayos']
  const context = type === 'articles'
    ? (isEnglish ? 'Ideas, cases, and tools for brand and business decisions.' : 'Artículos: conceptos, casos y herramientas para tomar decisiones de marca y negocio.')
    : type === 'essays'
      ? (isEnglish ? 'Fran’s essays on business, culture, and the stories that move us.' : 'Ensayos: la mirada de Fran sobre negocios, cultura y las historias que nos mueven.')
      : (isEnglish ? 'Articles to make decisions. Essays to see things differently.' : 'Artículos para tomar decisiones. Ensayos para abrir otra mirada.')

  return (
    <section className="library-browser" id="biblioteca" lang={isEnglish ? 'en' : 'es'} aria-label="Narrative Sparring">
      <div className="library-controls">
        <div className="library-segments" role="group" aria-label={isEnglish ? 'Publication type' : 'Tipo de publicación'}>
          {['all', 'articles', 'essays'].map((value, index) => (
            <button key={value} aria-pressed={type === value} onClick={() => change(value, lang)}>{types[index]}</button>
          ))}
        </div>
        <div className="library-language" role="group" aria-label={isEnglish ? 'Reading language' : 'Idioma de lectura'}>
          <Globe size={17} aria-hidden="true" />
          {[['all', isEnglish ? 'All' : 'Todos'], ['es', 'Español'], ['en', 'English']].map(([value, label]) => (
            <button key={value} lang={value === 'all' ? undefined : value} aria-pressed={lang === value} onClick={() => change(type, value)}>
              {label}
            </button>
          ))}
        </div>
      </div>
      <div className="library-context">
        <p>{context}</p>
        <span role="status" aria-live="polite">{filtered.length} {isEnglish ? 'pieces' : 'publicaciones'}</span>
      </div>
      <ul className="library-results">
        {filtered.map(row => {
          const englishRow = row.language === 'en'
          const label = row.kind === 'articles' ? (englishRow ? 'Article' : 'Artículo') : (englishRow ? 'Essay' : 'Ensayo')
          return (
            <li key={row.slug} lang={row.language}>
              <Link href={row.href}>
                <div className="library-row-meta">
                  <span>{label} · {englishRow ? 'English' : 'Español'}</span>
                  <time dateTime={row.publishedAt}>
                    {new Date(row.publishedAt).toLocaleDateString(englishRow ? 'en-US' : 'es', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' })}
                  </time>
                </div>
                <h2>{row.title}</h2>
                {row.dek && <p>{row.dek}</p>}
                <span className="library-read">{row.readingMinutes} {englishRow ? 'min read' : 'min de lectura'} <span aria-hidden="true">↗</span></span>
              </Link>
            </li>
          )
        })}
      </ul>
      {filtered.length === 0 && (
        <div className="library-empty">
          <p>{isEnglish ? 'There are no publications with these filters yet.' : 'No hay publicaciones con esta combinación todavía.'}</p>
          <button onClick={() => change(type, 'all')}>{isEnglish ? 'Browse all languages' : 'Ver en todos los idiomas'} →</button>
        </div>
      )}
    </section>
  )
}
