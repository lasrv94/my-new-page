import { Destination } from '../types';

export const destinationsData: Destination[] = [
  {
    id: 'vallarta',
    name: 'Puerto Vallarta',
    badge: 'Costa · Pacífico',
    image: 'assets/vallarta-sunset.jpg',
    description: 'Playas doradas, su icónico malecón, alta gastronomía marina y atardeceres legendarios sobre la Bahía de Banderas. Con la nueva autopista vía corta se llega en aprox. 2.5 a 3 horas.',
    travelTime: '🚗 ~2.5 - 3 h',
    highlight: 'Playa y Malecón',
    featured: true
  },
  {
    id: 'tequila',
    name: 'Tequila',
    badge: 'Pueblo Mágico',
    image: 'assets/tequila.jpg',
    description: 'Tierra del destilado insignia de México y paisajes agaveros declarados Patrimonio Mundial por la UNESCO. Destilerías legendarias y recorridos en tren turístico.',
    travelTime: '🚗 ~1 h',
    highlight: 'Ruta del Agave'
  },
  {
    id: 'chapala',
    name: 'Chapala y Ajijic',
    badge: 'Ribera & Arte',
    image: 'assets/chapala.jpg',
    description: 'El lago más grande de México. Ajijic cautiva con su ambiente bohemio, galerías de arte, paseos sobre el malecón, nieves tradicionales y clima privilegiado.',
    travelTime: '🚗 ~50 min',
    highlight: 'Ribera del Lago'
  },
  {
    id: 'mazamitla',
    name: 'Mazamitla y Tapalpa',
    badge: 'Sierra & Bosque',
    image: 'assets/mazamitla.jpg',
    description: 'El encanto de la montaña jalisciense: acogedoras cabañas con chimenea, niebla entre los pinos, cascadas cristalinas y aventura al aire libre en la sierra.',
    travelTime: '🚗 ~2 h',
    highlight: 'Montaña y Cabañas'
  }
];
