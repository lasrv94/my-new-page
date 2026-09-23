import { VallartaSpotlightTab, VallartaStat } from '../types';

export const vallartaTabsData: VallartaSpotlightTab[] = [
  {
    id: 'sunset',
    tabLabel: '🌅 El Malecón al Atardecer',
    title: 'El Malecón & Los Arcos',
    badge: 'Atardecer Dorado',
    image: 'assets/vallarta-sunset.jpg',
    description: 'El paseo más emblemático del Pacífico mexicano: brisa marina, esculturas de bronce, música en vivo y una vista inigualable mientras el sol se oculta en el horizonte sobre la Bahía de Banderas.',
    mapsQuery: 'Malecon+Puerto+Vallarta'
  },
  {
    id: 'playa',
    tabLabel: '🏖️ Muelle & Playa Los Muertos',
    title: 'Muelle de Playa Los Muertos',
    badge: 'Playa & Pacífico',
    image: 'assets/vallarta-playa.jpg',
    description: 'Diseño arquitectónico moderno en forma de vela náutica, aguas cálidas y cristalinas, restaurantes sobre la arena y actividades acuáticas para disfrutar todo el día.',
    mapsQuery: 'Muelle+Playa+Los+Muertos+Puerto+Vallarta'
  },
  {
    id: 'romantica',
    tabLabel: '🌺 La Zona Romántica',
    title: 'La Zona Romántica (Viejo Vallarta)',
    badge: 'Encanto & Tradición',
    image: 'assets/vallarta-romantica.jpg',
    description: 'Arquitectura tradicional mexicana con bugambilias fucsias, calles de adoquín, tiendas de artesanías de autor, bistrós íntimos y el ambiente más cosmopolita del destino.',
    mapsQuery: 'Zona+Romantica+Puerto+Vallarta'
  }
];

export const vallartaStatsData: VallartaStat[] = [
  {
    icon: '🚗',
    title: '2.5 - 3 Horas',
    desc: 'Por la nueva autopista vía corta directa desde Guadalajara.'
  },
  {
    icon: '🏖️',
    title: '+30 Playas',
    desc: 'Desde caletas escondidas como Yelapa hasta Las Ánimas y Mismaloya.'
  },
  {
    icon: '🐋',
    title: 'Ballenas Jorobadas',
    desc: 'Espectacular avistamiento en libertad de diciembre a marzo.'
  },
  {
    icon: '🍹',
    title: 'Capital Culinaria',
    desc: 'Festivales gourmet internacionales, raicilla jalisciense y zarandeado.'
  }
];
