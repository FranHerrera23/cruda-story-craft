'use client'
import Link from 'next/link'
import {useEffect,useState} from 'react'
import './LibraryBrowser.css'
type Row={slug:string;href:string;title:string;dek?:string;language:string;readingMinutes?:number;publishedAt:string;kind:'articles'|'essays'}
export default function LibraryBrowser({rows,initialType='all',initialLang='all'}:{rows:Row[];initialType?:string;initialLang?:string}){
 const [type,setType]=useState(initialType),[lang,setLang]=useState(initialLang)
 useEffect(()=>{const onPop=()=>{const q=new URLSearchParams(location.search);setType(q.get('type')||'all');setLang(q.get('lang')||'all')};window.addEventListener('popstate',onPop);return()=>window.removeEventListener('popstate',onPop)},[])
 function change(t:string,l:string){setType(t);setLang(l);const u=new URL(location.href);t==='all'?u.searchParams.delete('type'):u.searchParams.set('type',t);l==='all'?u.searchParams.delete('lang'):u.searchParams.set('lang',l);window.history.replaceState(null,'',u.pathname+u.search)}
 const filtered=rows.filter(r=>(type==='all'||r.kind===type)&&(lang==='all'||r.language===lang))
 return <section className="library-browser" id="biblioteca" aria-label="Biblioteca Narrative Sparring">
 <div className="library-controls">
 <div className="library-segments" role="group" aria-label="Qué querés leer">{[['all','Todo'],['articles','Artículos'],['essays','Ensayos']].map(([v,label])=><button key={v} aria-pressed={type===v} onClick={()=>change(v,lang)}>{label}</button>)}</div>
 <label className="library-language">Idioma <select value={lang} onChange={e=>change(type,e.target.value)}><option value="all">Todos</option><option value="es">Español</option><option value="en">English</option></select></label>
 </div>
 <div className="library-context"><p>{type==='articles'?'Artículos: conceptos, casos y herramientas para tomar decisiones de marca y negocio.':type==='essays'?'Ensayos: la mirada de Fran sobre negocios, cultura y las historias que nos mueven.':'Artículos para tomar decisiones. Ensayos para abrir otra mirada.'}</p><span role="status" aria-live="polite">{filtered.length} publicaciones</span></div>
 <ul className="library-results">{filtered.map(r=><li key={r.slug}><Link href={r.href}><div className="library-row-meta"><span>{r.kind==='articles'?'Artículo':'Ensayo'} · {r.language==='es'?'Español':'English'}</span><time dateTime={r.publishedAt}>{new Date(r.publishedAt).toLocaleDateString('es',{day:'numeric',month:'short',year:'numeric',timeZone:'UTC'})}</time></div><h2>{r.title}</h2>{r.dek&&<p>{r.dek}</p>}<span className="library-read">{r.readingMinutes} min de lectura <span aria-hidden="true">↗</span></span></Link></li>)}</ul>
 {filtered.length===0&&<div className="library-empty"><p>No hay publicaciones con esta combinación todavía.</p><button onClick={()=>change(type,'all')}>Ver en todos los idiomas →</button></div>}
 </section>
}
