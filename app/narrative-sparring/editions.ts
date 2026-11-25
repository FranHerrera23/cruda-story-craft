type Credit = {
  label: string
  headline: string
  body: string | string[]
  credits?: string
}

export const career: Record<'es' | 'en', Credit[]> = {
  es: [
    {
      label: 'Convocar gente',
      headline: 'En Argentina aprendí a convocar a un público.',
      body: 'Coproduje shows de Lucho Mellera y Lucas Lauriente, Lucas Lezin, Grego Rossello, Lucas Castel y Mariano Bondar. Entre esos shows de comedia vinieron más de 3.000 personas.',
    },
    {
      label: 'Teatro y música',
      headline: 'Integré los equipos de producción de Axel, Les Luthiers y el musical Sugar.',
      body: 'También trabajé en el concierto «De Broadway a Hollywood». Gerónimo Rauch cantó con una orquesta sinfónica dirigida por Gerardo Gardelín.',
    },
    {
      label: 'Campañas con creadores',
      headline: 'Las campañas con creadores en las que trabajé superaron los 30 millones de vistas.',
      body: 'A los 18, mi primer cliente fue Mary Kay. Más tarde coordiné a los creadores para el lanzamiento de TikTok en Argentina.',
      credits: 'En campañas para marcas trabajé con Pablo Granados, Mike Chouhy, Pipa Barbato, Agustín Battioni, Chapu Martínez, PedritoVM, Dai Hernández, Lucas Rodríguez y Roberto Galati, entre otros.',
    },
    {
      label: 'Luna PR · Prensa',
      headline: 'Mi primer trabajo en Dubái fue en Luna PR.',
      body: 'Llevé la prensa de clientes de una agencia internacional de comunicación que se hizo un nombre trabajando con empresas de blockchain y del mercado de capitales.',
      credits: 'Entre las decisiones de mi carrera estuvo la de rechazar una oferta de trabajo de Aramco, la empresa que más petróleo crudo produce en el mundo.',
    },
    {
      label: 'Norhart · Construcción',
      headline: 'En Estados Unidos trabajé dentro de Norhart, una empresa de Minnesota que diseña, construye y alquila departamentos.',
      body: 'Su CEO, Mike Kaeding, quería reducir a la mitad el costo de construir una vivienda. Para entonces ya había abierto una fábrica donde producían sus propios paneles de pared. Con Mike definí cómo presentar esa apuesta ante públicos con preguntas muy distintas. Un inversor quería entender los números. Su equipo necesitaba saber por qué estaban cambiando la forma de construir.',
      credits: 'De ese trabajo salieron sus presentaciones a inversores, charlas, entrevistas y cartas internas. Cuando fundé CRUDA en 2024, Mike siguió trabajando conmigo.',
    },
    {
      label: 'CRUDA · Moda',
      headline: 'Con el CEO de un grupo de moda de USD 300 millones trabajé sobre una parte de su historia que pocos conocían.',
      body: 'Había construido la empresa, la había perdido y había vuelto a empezar. Lo ayudé a contar qué había aprendido la primera vez y qué decidió hacer distinto la segunda.',
    },
    {
      label: 'CRUDA · Salud y hotelería',
      headline: '¿Qué puede aprender un hospital de un buen hotel?',
      body: 'Con Girish Sehgal, que trabajó en Four Seasons Chicago y pasó a dirigir la experiencia del paciente en un hospital de Abu Dabi, escribimos sobre algo que conocía de primera mano. Hasta el modo en que un guardia recibe a una familia en la puerta puede cambiar cómo se siente adentro.',
    },
    {
      label: 'CRUDA · Arquitectura y diseño',
      headline: 'Desde 2021 trabajo con Karen Mannheim en la estrategia y la dirección creativa de su marca personal.',
      body: [
        'Cuando empezamos, su firma de iluminación ya llevaba 25 años en Perú. En Lima había trabajado en edificios de Robert A.M. Stern Architects, el estudio que diseñó dos residencias de Yale, la ampliación de la Harvard Kennedy School y la torre de Nueva York donde la venta de un penthouse marcó un récord nacional en 2019.',
        'Una foto de un edificio terminado puede llevar la firma del arquitecto y dejar fuera de cuadro todas las decisiones de quien lo iluminó. Con Karen hicimos visibles esas decisiones. Ese criterio guía las historias que contamos sobre su carrera, los proyectos que llevamos a video y la forma en que su equipo presenta el estudio ante un posible cliente.',
        'Florida fue un capítulo de ese trabajo. Para un arquitecto en Miami, conocer el nombre de Robert A.M. Stern era una cosa. Entender qué había aportado Karen a un proyecto suyo en Lima le daba una razón concreta para querer trabajar con ella. Después llegaron los proyectos con Wecselman Design, Kobi Karp y Oppenheim Architecture. Entre las residencias que iluminó su equipo están la de un futbolista que vistió la camiseta del Barça y la de un cantante ganador de un Grammy.',
      ],
    },
  ],
  en: [
    {
      label: 'Bringing people together',
      headline: 'In Argentina I learned how to bring an audience together.',
      body: 'I co-produced shows for Lucho Mellera and Lucas Lauriente, two Argentine comics with Netflix specials. More than 3,000 people attended across the comedy shows I co-produced.',
    },
    {
      label: 'Stage production',
      headline: 'From Broadway to Hollywood, live in Argentina.',
      body: 'I worked on the production team for a concert with Gerónimo Rauch, who played the Phantom in London’s West End. Gerardo Gardelín, who wrote music for Tanguera at New York City Center, conducted the orchestra.',
    },
    {
      label: 'Creator campaigns',
      headline: 'I worked on creator campaigns that drew over 30 million views.',
      body: 'I coordinated creators for TikTok’s Argentina launch. My campaign work also included PedritoVM and Dai Hernández. Their YouTube channels have about 4.4 million and 3 million subscribers, respectively (November 2026).',
    },
    {
      label: 'Luna PR · Media relations',
      headline: 'My first job in Dubai was at Luna PR.',
      body: 'I handled press for clients at an international communications agency that made its name in blockchain and capital markets.',
      credits: 'One career decision I made was to turn down a job offer from Aramco, the world’s largest crude oil producer.',
    },
    {
      label: 'Norhart · Construction',
      headline: 'In the US, I worked in-house at Norhart, a Minnesota company that designs, builds and rents apartments.',
      body: 'Its CEO, Mike Kaeding, wanted to cut the cost of building a home in half. He had already opened a factory to produce wall panels. Mike and I worked out how to explain that bet to people with very different questions. An investor wanted to understand the numbers. His team needed to know why they were changing how they built.',
      credits: 'That work shaped his investor presentations, talks, interviews and letters to the team. When I founded CRUDA in 2024, Mike kept working with me.',
    },
    {
      label: 'CRUDA · Fashion',
      headline: 'I worked with the CEO of a $300 million fashion group on a part of his story few people knew.',
      body: 'He had built the business, lost it and started again. I helped him tell the story of what he learned the first time and what he chose to do differently the second time.',
    },
    {
      label: 'CRUDA · Healthcare and hospitality',
      headline: 'What can a hospital learn from a good hotel?',
      body: 'Girish Sehgal worked at Four Seasons Chicago before leading patient experience at a hospital in Abu Dhabi. We wrote about details he knew firsthand, down to how the security guard at the door can make a family feel safe.',
    },
    {
      label: 'CRUDA · Architecture and design',
      headline: 'Since 2021, I’ve worked with Karen Mannheim on the strategy and creative direction of her personal brand.',
      body: [
        'When we started, her lighting design firm had been working in Peru for 25 years. In Lima, her team had worked on buildings by Robert A.M. Stern Architects, the firm behind two residential colleges at Yale, the Harvard Kennedy School expansion and the New York tower where a penthouse sale set a national record in 2019.',
        'A photograph of a finished building can credit the architect and leave every decision the lighting designer made outside the frame. Karen and I brought those decisions into view. They guide the stories we tell about her career, the projects we document on film and the way her team presents the studio to a prospective client.',
        'Florida was one chapter of that work. An architect in Miami might already know Robert A.M. Stern’s name. Seeing what Karen had contributed to one of his firm’s projects in Lima gave that architect a reason to work with her. Projects with Wecselman Design, Kobi Karp and Oppenheim Architecture followed. Among the homes her team has lit are one for a footballer who wore the Barça shirt and another for a Grammy-winning singer.',
      ],
    },
  ],
}
