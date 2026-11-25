type Credit = {
  label: string
  headline: string
  body: string
  credits?: string
  link?: { href: string; label: string }
}

export const career: Record<'es' | 'en', Credit[]> = {
  es: [
    {
      label: 'Argentina · Comedia',
      headline: 'Coproduje shows de Lucho Mellera y Lucas Lauriente.',
      body: 'También coproduje shows de Lucas Lezin, Grego Rossello, Lucas Castel y Mariano Bondar.',
    },
    {
      label: 'Argentina · Teatro y música',
      headline: 'Integré los equipos de producción de Axel, Les Luthiers y el musical Sugar.',
      body: 'También trabajé en el concierto «De Broadway a Hollywood». Gerónimo Rauch cantó con la Orquesta Sinfónica de Salta, dirigida por Gerardo Gardelín.',
    },
    {
      label: 'Argentina · Campañas',
      headline: 'Las campañas con creadores en las que trabajé superaron los 30 millones de vistas.',
      body: 'A los 18, mi primer cliente fue Mary Kay. Más tarde coordiné a los creadores para el lanzamiento de TikTok en Argentina.',
      credits: 'En campañas para marcas trabajé con Pablo Granados, Mike Chouhy, Pipa Barbato, Agustín Battioni, Chapu Martínez, PedritoVM, Dai Hernández, Lucas Rodríguez y Roberto Galati, entre otros.',
      link: { href: '#campanas', label: 'Ver las marcas' },
    },
    {
      label: 'Emiratos Árabes Unidos',
      headline: 'Armé el equipo de estrategia de marca de Luna PR en Dubái.',
      body: 'Después, en CRUDA, ayudé a Girish Sehgal a contar qué podía aprender un hospital de un buen hotel. Venía de trabajar en Four Seasons y JW Marriott cuando pasó a dirigir la atención al paciente en Abu Dabi.',
      link: { href: '/work/girish-sehgal', label: 'Leer la historia de Girish' },
    },
    {
      label: 'Estados Unidos',
      headline: 'Escribí con Mike Kaeding, director de la constructora Norhart.',
      body: 'Contamos cómo su empresa fabrica sus propias piezas para bajar el costo de construir viviendas. Escribí sus charlas, publicaciones y presentaciones a inversores. Empecé dentro de Norhart y seguí con Mike cuando fundé CRUDA en 2024.',
      link: { href: '/work/mike-kaeding', label: 'Ver el trabajo con Mike' },
    },
    {
      label: 'Perú',
      headline: 'Con Karen Mannheim llevé la marca y las redes de su estudio de iluminación.',
      body: 'Su equipo trabajó en proyectos con RAMSA, Wecselman Design, Oppenheim Architecture y Kobi Karp. Juntos elegimos qué historias contar. Escribí los textos y los llevé hasta su publicación.',
      credits: 'Su comunidad pasó de 1.000 a 26.000 seguidores. Entre LinkedIn e Instagram, sus publicaciones se mostraron un millón de veces al año.',
      link: { href: '/work/karen-mannheim', label: 'Ver el trabajo con Karen' },
    },
  ],
  en: [
    {
      label: 'Argentina · Live comedy',
      headline: 'I co-produced live shows for Lucho Mellera and Lucas Lauriente.',
      body: 'Both Argentine comedians have their own Netflix stand-up specials.',
    },
    {
      label: 'Argentina · Stage production',
      headline: 'From Broadway to Hollywood, live in Salta.',
      body: 'I worked on the production team for a concert with Gerónimo Rauch, who played the Phantom in London’s West End. Gerardo Gardelín, who wrote music for Tanguera at New York City Center, conducted the Salta Symphony Orchestra.',
    },
    {
      label: 'Argentina · Brand campaigns',
      headline: 'I worked on creator campaigns that drew over 30 million views.',
      body: 'I coordinated creators for TikTok’s Argentina launch. My campaign work also included PedritoVM and Dai Hernández. Their YouTube channels have about 4.4 million and 3 million subscribers, respectively (November 2026).',
    },
    {
      label: 'United Arab Emirates',
      headline: 'I built the brand strategy team at Luna PR in Dubai.',
      body: 'At CRUDA, I worked with Girish Sehgal, a Four Seasons and JW Marriott veteran, to tell the story of what hotels could teach an Abu Dhabi hospital about caring for patients.',
      link: { href: '/work/girish-sehgal', label: 'Read Girish’s story' },
    },
    {
      label: 'United States',
      headline: 'I wrote with Mike Kaeding, CEO of Minnesota homebuilder Norhart.',
      body: 'We turned the work inside his factories into talks, investor presentations and stories about the cost of housing. I started on his team and kept working with him when I founded CRUDA in 2024.',
      link: { href: '/work/mike-kaeding', label: 'See the work with Mike' },
    },
    {
      label: 'Peru',
      headline: 'I ran brand marketing and social media for Karen Mannheim’s lighting studio.',
      body: 'Her team worked on projects with RAMSA, Wecselman Design, Oppenheim Architecture and Kobi Karp. I took stories from the first conversation with Karen through publication. Her audience grew from 1,000 to 26,000 followers. Her posts drew a million impressions a year across Instagram and LinkedIn.',
      link: { href: '/work/karen-mannheim', label: 'See the work with Karen' },
    },
  ],
}
