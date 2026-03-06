const fs = require('fs');

const content = \/**
 * Configuración de Proyectos de NOCTILUCA
 * Actualizada con información amplia, técnica y real de cada show/tour.
 */

const projects = [
  {
    id: 'visuales-vina-2023',
    title: 'Festival de Viña del Mar 2023',
    description: 'Desarrollo integral de contenido visual y animaciones para el escenario más importante de Latinoamérica. Se creó una línea estética moderna para el certamen, sincronizando escenografías inmersivas en más de 800 metros cuadrados de pantallas LED. El proyecto abarcó desde el opening oficial del festival, diseño visual de cortinas para competencias, hasta la supervisión de resoluciones técnicas, garantizando sincronización milimétrica para la transmisión televisiva internacional en vivo (Canal 13 y TVN).',
    shortDescription: 'Creación de línea visual y broadcast para Viña del Mar 2023.',
    image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=1600&q=80',
    category: 'Festival Production / Broadcast',
    year: 2023,
    client: 'Festival de Viña del Mar / Bizarro',
    gallery: [
      'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=1200&q=80',
      'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=1200&q=80'
    ],
    videos: [],
    details: {
      role: 'Dirección de Visuales y Contenido',
      tools: ['Unreal Engine', 'After Effects', 'Cinema 4D', 'Resolume'],
      scale: 'Quinta Vergara / +15,000 en vivo / Millones en Broadcast'
    }
  },
  {
    id: 'teleton-estudio-quinta-2023',
    title: 'Teletón Chile 2023',
    description: 'Desarrollo de visuales inmersivos y diseño escenográfico digital completo para la transmisión de las 27 horas de Teletón 2023. Se construyeron dos universos atmosféricos: uno estructurado y cálido para el set televisivo tradicional (Teatro Teletón), y otro de estética monumental y épica para el gran cierre en el escenario de la Quinta Vergara, integrando gráficas de donación en tiempo real y homenajes visuales sincronizados a las presentaciones musicales de los artistas invitados.',
    shortDescription: 'Escenografía digital y visuals en tiempo real para transmisión de 27 horas.',
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1600&q=80',
    category: 'Broadcast & Event Design',
    year: 2023,
    client: 'Fundación Teletón',
    gallery: [],
    videos: [],
    details: {
      role: 'Diseño de Escenario & Dirección de Contenido',
      tools: ['Unreal Engine', 'TouchDesigner', 'Disguise', 'Cinema 4D'],
      scale: 'Cadena Nacional / +15,000 en Quinta Vergara'
    }
  },
  {
    id: 'visuales-vina-2024',
    title: 'Festival de Viña del Mar 2024',
    description: 'Para la edición 2024, elevamos el nivel tecnológico del Festival implementando una nueva era de experiencias inmersivas con mapeo de pixeles complejos, introduciendo flujos de trabajo de renderizado en tiempo real generados con Unreal Engine y Notch. Colaboramos estrechamente con equipos técnicos internacionales y las producciones de los artistas estelares para adaptar de forma dinámica fondos volumétricos y asegurar transiciones televisivas (Canal 13 y TVN) que no presentaran pérdida de señal ni desfases.',
    shortDescription: 'Integración tecnológica avanzada (Real-time y 3D) para Viña 2024.',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1600&q=80',
    category: 'Real-Time Content / Festival',
    year: 2024,
    client: 'Festival de Viña del Mar / Bizarro',
    gallery: [],
    videos: [],
    details: {
      role: 'Ingeniería Visual & Creación 3D',
      tools: ['Notch', 'Resolume Arena', 'Unreal Engine', 'After Effects'],
      scale: 'Transmisión Internacional (Star+ / Billboard)'
    }
  },
  {
    id: 'diseno-escenografico-vina-2025',
    title: 'Diseño Escenográfico Viña 2025',
    description: 'Innovación arquitectónica y diseño conceptual desde la raíz del escenario para el Festival de Viña del Mar 2025. Conceptualizamos la escultura LED principal, la disposición orgánica de las pantallas parilla y pórtico, además del tratamiento de rigging luminoso. Esta preproducción estableció la identidad espacial del primer año de la nueva licitación (Mega), combinando líneas vanguardistas que potencian la profundidad del escenario y la espectacularidad en tomas de cámara largas.',
    shortDescription: 'Arquitectura y concepto de iluminación y escenario para gran certamen.',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1600&q=80',
    category: 'Stage Architecture',
    year: 2025,
    client: 'Megamedia / Bizarro',
    gallery: [],
    videos: [],
    details: {
      role: 'Stage Design & Pre-viz',
      tools: ['Vectorworks', 'AutoCAD', 'Unreal Engine 5', 'Depence'],
      scale: 'Escenario Internacional / Estructural'
    }
  },
  {
    id: 'visuales-vina-2025',
    title: 'Visuales Viña del Mar 2025',
    description: 'Acompañando nuestra propia línea de diseño escenográfico, nos dedicamos a la producción del Branding visual oficial y a las dinámicas pantallas de toda la edición del Festival 2025. Esto incluyó la obertura de alto impacto, bumpers, viñetas de competencia y acompañamientos estelares en vivo. Generamos una sinergia total entre la física estructural del escenario Mega y el extenso universo digital propuesto para la nueva era televisiva.',
    shortDescription: 'Brand Visual completo y operación VJ integral del Festival.',
    image: 'https://images.unsplash.com/photo-1533174000273-df0fa04356f5?w=1600&q=80',
    category: 'Festival Production',
    year: 2025,
    client: 'Megamedia / Bizarro',
    gallery: [],
    videos: [],
    details: {
      role: 'Content Creation & Live VJ',
      tools: ['Resolume Arena', 'TouchDesigner', 'Cinema 4D'],
      scale: 'Quinta Vergara / Broadcast'
    }
  },
  {
    id: 'visuales-vina-2026',
    title: 'Viña 2026 (En Desarrollo)',
    description: 'Nos encontramos definiendo la vanguardia para el Festival de Viña 2026, apostando por formatos audiovisuales aún no explorados a cabalidad en el escenario hispano. El proyecto actualmente abarca la pre-producción de contenido volumétrico envolvente, integración de iluminación robótica directamente vinculada a servidores de media por red sACN/Art-Net, y una profunda exploración estética utilizando modelos de Inteligencia Artificial para concept art hiperrealista.',
    shortDescription: 'Formatos audiovisuales de siguiente generación para el festival de festivales.',
    image: 'https://images.unsplash.com/photo-1516280440502-65f536af1217?w=1600&q=80',
    category: 'R&D / Pre-Production',
    year: 2026,
    client: 'Megamedia / Bizarro',
    gallery: [],
    videos: [],
    details: {
      role: 'Creative Tech & Concept Design',
      tools: ['AI Generation', 'Unreal Engine 5', 'Disguise (Pre-viz)'],
      scale: 'En Desarrollo'
    }
  },
  {
    id: 'tour-ana-gabriel-2025',
    title: 'Ana Gabriel - "Un Deseo Más" Tour',
    description: 'Desarrollo visual para la icónica gira "Un Deseo Más" (2024-2025) celebrando los 50 años de trayectoria de la leyenda de la balada, Ana Gabriel. Generamos un catálogo de visuales enfocadas en la elegancia, texturas lumínicas suaves, polvo de estrellas y puestas de sol cinemáticas que lograron abrazar cada una de sus interpretaciones y rancheras, elevando el valor de producción a lo largo de coliseos y estadios en toda América Latina y Norteamérica.',
    shortDescription: 'Atmósferas cálidas, elegantes y cinemáticas para la gira 50 Aniversario.',
    image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=1600&q=80',
    category: 'Tour Visuals',
    year: 2025,
    client: 'Ana Gabriel',
    gallery: [],
    videos: [],
    details: {
      role: 'Creación de Contenidos 3D y 2D',
      tools: ['After Effects', 'Cinema 4D', 'Premiere Pro'],
      scale: 'Arena Tour en NA & LATAM'
    }
  },
  {
    id: 'tour-mana-2025-2026',
    title: 'Maná - Tour Mundial',
    description: 'Para continuar la fuerza de la gira "México Lindo y Querido" y las fechas globales 2025-2026 de Maná, desarrollamos puestas en escena enérgicas e inmersivas. El trabajo incluye desde entornos 3D ambientalistas y concientizadores—sello de la banda—hasta océanos fotorealistas en movimiento y lluvias de partículas que reaccionan a los potentes solos de batería y al emblemático catálogo rockero que llenó estadios internacionales.',
    shortDescription: 'Gran formato 3D hiperrealista para leyendas del rock latino.',
    image: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=1600&q=80',
    category: 'Tour Visuals',
    year: 2025,
    client: 'Maná / Live Nation',
    gallery: [],
    videos: [],
    details: {
      role: 'Dirección Creativa, Animación 3D y Notch',
      tools: ['Notch', 'Unreal Engine 5', 'Resolume'],
      scale: 'Stadium Tour Global'
    }
  },
  {
    id: 'tour-humbe-2026',
    title: 'Humbe - "Esencia" Tour Visuals',
    description: 'Nos sumergimos en el universo alternativo y nostálgico del fenómeno pop Humbe para nutrir su Tour 2025-2026. A través de un enfoque altamente estético, creamos paisajes surrealistas modelados en 3D en tonos pastel, flora que florece al ritmo de las baladas electrónicas y elementos etéreos. El set visual está diseñado para conectar directamente con el lado emocional e introspectivo de las millones de personas que conforman su leal fanbase joven.',
    shortDescription: 'Entornos surrealistas florales y paleta de ensueño.',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1600&q=80',
    category: 'Tour Visuals',
    year: 2026,
    client: 'Humbe',
    gallery: [],
    videos: [],
    details: {
      role: '3D Art Direction & Motion Design',
      tools: ['Blender', 'Octane Render', 'After Effects'],
      scale: 'Auditorios y Teatros Internacionales'
    }
  },
  {
    id: 'latin-grammy-visuals',
    title: 'Latin Grammys - Performances',
    description: 'Participamos en el exigente pipeline visual de los Premios Latin Grammy. Nuestro rol consistió en desarrollar y conformar contenido de alto impacto ("bumpers" y loops perimetrales temáticos) para diversas cápsulas de transición y actuaciones musicales en vivo. Este desafío exigió el estándar de pixel riguroso y los estrictos protocolos de color, timecode (SMPTE) y latencia requeridos por la transmisión oficial de Univision y La Academia.',
    shortDescription: 'Gráficos de estándares mundiales directos para la gran noche de la música latina.',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=1600&q=80',
    category: 'Broadcast & Awards',
    year: 2024,
    client: 'The Latin Recording Academy',
    gallery: [],
    videos: [],
    details: {
      role: 'VFX / Environment / Technical Support',
      tools: ['After Effects', 'TouchDesigner', 'Resolume'],
      scale: 'Mandalay / Transmisión Televisiva Global'
    }
  },
  {
    id: 'tour-arjorna-2026',
    title: 'Ricardo Arjona - Escenografía Digital',
    description: 'Acompañamiento escénico vanguardista para la introspectiva gira 2026 del aclamado cantautor guatemalteco Ricardo Arjona. Llevamos a cabo un riguroso trabajo de diseño de entornos virtuales teatrales: calles lluviosas en perspectiva forzada ilusoria, habitaciones melancólicas, trenes nocturnos y cafés bohemios. Todo esto proyectado mediante videomapping sobre superficies fragmentadas, fortaleciendo el peso narrativo e intimidad de sus letras.',
    shortDescription: 'Storytelling virtual interactivo mapeado a la estructura del escenario.',
    image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=1600&q=80',
    category: 'Theatrical Visuals / Tour',
    year: 2026,
    client: 'Metamorfosis / Ricardo Arjona',
    gallery: [],
    videos: [],
    details: {
      role: 'Environment Design & 3D Mapping',
      tools: ['Unreal Engine', 'Disguise', 'Cinema 4D'],
      scale: 'Arena Tour Global'
    }
  },
  {
    id: 'tour-julion-alvarez',
    title: 'Julión Álvarez - Experiencia 360',
    description: 'Se rediseñó la experiencia de los masivos shows en formato palenque de Julión Álvarez mediante visuales expansivas proyectadas en estructuras circulares (360 grados). El contenido, rico en iconografía del folclore mexicano modernizado, luces volumétricas simuladas en oro y plata, e infografías cinéticas explosivas, impulsó la fiesta incesante que caracteriza al "Rey de la Taquilla" logrando una conexión hipnótica en todas las áreas de la tribuna.',
    shortDescription: 'Contenidos 360°, dorados y épicos para shows estilo Palenque/Arena.',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1600&q=80',
    category: 'Tour Visuals / 360',
    year: 2025,
    client: 'Julión Álvarez',
    gallery: [],
    videos: [],
    details: {
      role: 'Arquitectura de Contenido 360',
      tools: ['Cinema 4D', 'Redshift', 'Resolume'],
      scale: 'Palenques Monumentales y Estadios'
    }
  },
  {
    id: 'arte-conceptual-superbowl-bad-bunny',
    title: 'Superbowl Halftime Concept - Bad Bunny',
    description: 'Participación confidencial de altísimo perfil en el desarrollo visual, concept art (arte conceptual) y previz volumétrica durante la fase de pitch de diseño para la emblemática aparición de Bad Bunny en el Superbowl Halftime Show (2020). Creamos moodboards, animatics luminosos y pruebas de material holográfico que ayudaron a consolidar su deslumbrante estética plateada y neón que invadió a más de 100 millones de pantallas a nivel mundial.',
    shortDescription: 'Concept Art confidencial y prueba de previz para el show de medio tiempo.',
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1600&q=80',
    category: 'Creative Pitch & Concept',
    year: 2020,
    client: 'Bad Bunny Entertainment / NFL',
    gallery: [],
    videos: [],
    details: {
      role: 'Concept Artist / Pre-viz Volumétrico',
      tools: ['Unreal Engine', 'Photoshop', 'Octane'],
      scale: 'Pitch Global de Medio Tiempo'
    }
  },
  {
    id: 'visuales-yeison-jimenes',
    title: 'Yeison Jimenez - Invicto Tour',
    description: 'Abordamos la producción del repertorio visual del contundente artista colombiano Yeison Jimenez para su imponente "Invicto Tour" e "Invicto Fest". Construimos escenas dinámicas en lienzos ultrawide, priorizando transiciones impactantes, estéticas lujosas urbanas y folclóricas. Reforzamos las interpretaciones en vivo con un pulso VJ altamente reactivo que inyecta adrenalina constante a toda la presentación de banda.',
    shortDescription: 'Visuales de alto voltaje y estética imperial colombiana para arenas.',
    image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=1600&q=80',
    category: 'Tour Visuals / VJing',
    year: 2024,
    client: 'Yeison Jimenez',
    gallery: [],
    videos: [],
    details: {
      role: 'Animador Senior / Dirección de Pantallas',
      tools: ['After Effects', 'Notch', 'Blender'],
      scale: 'Tour Colombia & LatAm (Arenas y Estadios)'
    }
  },
  {
    id: 'tour-marco-antonio-solis',
    title: 'Marco Antonio Solís - El Buki World Tour',
    description: 'Se llevó a cabo una producción audiovisual distinguida y monumental para la legendaria gira mundial de "El Buki", Marco Antonio Solís. Realizamos un exhaustivo trabajo de diseño de escenarios clásicos virtuales en 3D (arquitecturas antiguas europeas, panteones, jardines majestuosos), así como meticulosas restauraciones digitales para secuencias biográficas que acompañaron las baladas y éxitos generacionales del ídolo, brindando un marco elegante e inolvidable.',
    shortDescription: 'Monumentales piezas orquestales en 3D para una atmósfera clásica intemporal.',
    image: 'https://images.unsplash.com/photo-1516280440502-65f536af1217?w=1600&q=80',
    category: 'Tour Visuals',
    year: 2024,
    client: 'Marco Antonio Solís',
    gallery: [],
    videos: [],
    details: {
      role: 'Dirección de Arte y Animación Fotorrealista',
      tools: ['Unreal Engine', 'Cinema 4D', 'Premiere'],
      scale: 'Estadios (América, Europa)'
    }
  },
  {
    id: 'visuales-kid-voodoo',
    title: 'Kidd Voodoo - Los Rompecorazones',
    description: 'Diseñamos y ejecutamos desde el núcleo el universo estético de la nueva estrella del rock/urbano chileno: Kidd Voodoo. Un lenguaje visual centrado en tintes góticos, cultura skater americana de los 2000s, cyberpunk y glitch-art saturado. Durante shows multitudinarios operamos en vivo efectos de generadores en tiempo real (TouchDesigner) que fusionan tipografías derretidas interactivas con las cámaras del directo para desatar un pogo frenético.',
    shortDescription: 'Estética hiper-sintética, oscura e interactiva (Glitch & Cyberpunk).',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1600&q=80',
    category: 'VJing & Interactive Content',
    year: 2024,
    client: 'Kidd Voodoo / Bizarro',
    gallery: [],
    videos: [],
    details: {
      role: 'Live VJ & Visual Synthesis',
      tools: ['TouchDesigner', 'Resolume Arena', 'Blender'],
      scale: 'Movistar Arena & Lollapalooza'
    }
  },
  {
    id: 'visuales-cris-mj',
    title: 'Cris MJ - Urbano Inmersivo',
    description: 'Para consolidar los históricos Sold Outs y la gira mundial del superventas de música urbana, Cris MJ, entregamos un paquete audiovisual renderizado a 60fps de altísimo nivel. El contenido presenta atmósferas callejeras oscuras, vehículos deportivos moldeados en 3D hiperrealista, fuego simulado tridimensional, motores de fluidos y escaneos lídar del propio artista que mantuvieron encendida por completo la atención de millones de fans en las grandes arenas internacionales.',
    shortDescription: 'Render súper a nivel, simulaciones de fuego y estética trap monumental.',
    image: 'https://images.unsplash.com/photo-1533174000273-df0fa04356f5?w=1600&q=80',
    category: '3D Content & VJing',
    year: 2024,
    client: 'Cris MJ',
    gallery: [],
    videos: [],
    details: {
      role: 'Director de Entornos Virtuales y FX en vivo',
      tools: ['Notch', 'Unreal Engine 5', 'Resolume'],
      scale: 'Tour Mundial (Estadios y Arenas)'
    }
  }
];

export default projects;
\

fs.writeFileSync('z:/projects/NOCTILUCA REEL/webpage/src/projects/projects.config.js', content, 'utf8');
