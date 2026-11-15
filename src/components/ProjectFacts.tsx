import type { Work } from '@/content/work/types'
export function ProjectFacts({ industry, location, scope, className = '' }: { industry?: string; location?: string; scope?: string[]; className?: string }) {
  return <dl className={`project-facts ${className}`}>
    {industry && <div><dt>Industry</dt><dd>{industry}</dd></div>}
    {location && <div><dt>Location</dt><dd>{location}</dd></div>}
    {!!scope?.length && <div className="project-facts__scope"><dt>Scope</dt><dd>{scope.join(' · ')}</dd></div>}
  </dl>
}
const scopes: Record<string, string[]> = {
 'karen-mannheim': ['Narrative strategy', 'Editorial content', 'Presentations'],
 'mannheim-trading': ['Brand strategy', 'Visual identity', 'Web development', 'Copywriting'],
 'mike-kaeding': ['Positioning', 'Founder-led content'],
 'girish-sehgal': ['Narrative strategy', 'Editorial content'],
 'jack-yeager': ['Brand strategy', 'Narrative strategy', 'Editorial content', 'Trade positioning'],
 'juan-pablo-romero': ['Positioning', 'Founder voice', 'Editorial content', 'Web'],
 'inout': ['Naming', 'Visual identity', 'Verbal identity', 'Communications'],
 'confidential-fashion-founder': ['Narrative strategy', 'Executive communications'],
}
export function workScope(w: Work): string[] {
  if (scopes[w.slug]) return scopes[w.slug]
  return (w.built || []).map(item => typeof item === 'string' ? item : item.name)
}
