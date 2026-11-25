type Credit = {
  featured?: boolean
  label: string
  headline: string
  body: string
  credits?: string
  link?: { href: string; label: string }
}

export const career: Record<'es' | 'en', Credit[]> = {
  es: [
    {
      featured: true,
      label: 'Convocar gente',
      headline: 'A los 17 organicé mi primer evento. Vinieron 300 personas.',
      body: 'Fue Fuck Up Nights, una noche para hablar en público de lo que salió mal. Después coproduje shows de Lucho Mellera y Lucas Lauriente, Lucas Lezin, Grego Rossello, Lucas Castel y Mariano Bondar.',
      credits: 'Entre todos esos shows de comedia vinieron más de 3.000 personas.',
    },
    {
      label: 'Teatro y música',
      headline: 'Integré los equipos de producción de Axel, Les Luthiers y el musical Sugar.',
      body: 'También trabajé en el concierto «De Broadway a Hollywood». Gerónimo Rauch cantó con una orquesta sinfónica dirigida por Gerardo Gardelín.',
    },
    {
      featured: true,
      label: 'Campañas con creadores',
      headline: 'Las campañas con creadores en las que trabajé superaron los 30 millones de vistas.',
      body: 'A los 18, mi primer cliente fue Mary Kay. Más tarde coordiné a los creadores para el lanzamiento de TikTok en Argentina.',
      credits: 'En campañas para marcas trabajé con Pablo Granados, Mike Chouhy, Pipa Barbato, Agustín Battioni, Chapu Martínez, PedritoVM, Dai Hernández, Lucas Rodríguez y Roberto Galati, entre otros.',
    },
    {
      label: 'Prensa',
      headline: 'Mi primer trabajo en Dubái fue en Luna PR.',
      body: 'Llevé las relaciones con la prensa de clientes de la agencia.',
    },
    {
      label: 'Salud y hotelería',
      headline: '¿Qué puede aprender un hospital de un buen hotel?',
      body: 'En CRUDA trabajé esa pregunta con Girish Sehgal. Venía de Four Seasons y JW Marriott cuando pasó a dirigir la atención al paciente en un hospital de Abu Dabi.',
      link: { href: '/work/girish-sehgal', label: 'Leer la historia de Girish' },
    },
    {
      label: 'Escribir con fundadores',
      headline: 'Escribí con Mike Kaeding, director de la constructora Norhart.',
      body: 'Contamos cómo su empresa fabrica sus propias piezas para bajar el costo de construir viviendas. Escribí sus charlas, publicaciones y presentaciones a inversores. Empecé dentro de Norhart y seguí con Mike cuando fundé CRUDA en 2024.',
      link: { href: '/work/mike-kaeding', label: 'Ver el trabajo con Mike' },
    },
    {
      featured: true,
      label: 'Marca y redes',
      headline: 'Con Karen Mannheim llevé la marca y las redes de su estudio de iluminación.',
      body: 'Su equipo trabajó en proyectos con RAMSA, Wecselman Design, Oppenheim Architecture y Kobi Karp. Juntos elegimos qué historias contar. Escribí los textos y los llevé hasta su publicación.',
      credits: 'Su comunidad pasó de 1.000 a 26.000 seguidores. Entre LinkedIn e Instagram, sus publicaciones se mostraron un millón de veces al año.',
      link: { href: '/work/karen-mannheim', label: 'Ver el trabajo con Karen' },
    },
  ],
  en: [
    {
      featured: true,
      label: 'Bringing people together',
      headline: 'I was 17 when I organized my first event. Three hundred people came.',
      body: 'It was Fuck Up Nights, a night for people to talk openly about things that went wrong. Later I co-produced shows for Lucho Mellera and Lucas Lauriente, two Argentine comics with Netflix specials.',
      credits: 'Across all the comedy shows I co-produced, more than 3,000 people attended.',
    },
    {
      label: 'Stage production',
      headline: 'From Broadway to Hollywood, live in Argentina.',
      body: 'I worked on the production team for a concert with Gerónimo Rauch, who played the Phantom in London’s West End. Gerardo Gardelín, who wrote music for Tanguera at New York City Center, conducted the orchestra.',
    },
    {
      featured: true,
      label: 'Creator campaigns',
      headline: 'I worked on creator campaigns that drew over 30 million views.',
      body: 'I coordinated creators for TikTok’s Argentina launch. My campaign work also included PedritoVM and Dai Hernández. Their YouTube channels have about 4.4 million and 3 million subscribers, respectively (November 2026).',
    },
    {
      label: 'Media relations',
      headline: 'My first job in Dubai was at Luna PR.',
      body: 'I handled media relations for the agency’s clients.',
    },
    {
      label: 'Healthcare and hospitality',
      headline: 'What can a hospital learn from a good hotel?',
      body: 'At CRUDA, I explored that question with Girish Sehgal. He had worked at Four Seasons and JW Marriott before taking charge of the patient experience at a hospital in Abu Dhabi.',
      link: { href: '/work/girish-sehgal', label: 'Read Girish’s story' },
    },
    {
      label: 'Writing with founders',
      headline: 'I wrote with Mike Kaeding, CEO of Minnesota homebuilder Norhart.',
      body: 'We turned the work inside his factories into talks, investor presentations and stories about the cost of housing. I started on his team and kept working with him when I founded CRUDA in 2024.',
      link: { href: '/work/mike-kaeding', label: 'See the work with Mike' },
    },
    {
      featured: true,
      label: 'Brand and social',
      headline: 'I ran brand marketing and social media for Karen Mannheim’s lighting studio.',
      body: 'Her team worked on projects with RAMSA, Wecselman Design, Oppenheim Architecture and Kobi Karp. I took stories from the first conversation with Karen through publication. Her audience grew from 1,000 to 26,000 followers. Her posts drew a million impressions a year across Instagram and LinkedIn.',
      link: { href: '/work/karen-mannheim', label: 'See the work with Karen' },
    },
  ],
}
