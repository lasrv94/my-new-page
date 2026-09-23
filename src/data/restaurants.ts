import { Restaurant } from '../types';

export const restaurantsData: Restaurant[] = [
  {
    id: 'alcalde',
    name: 'Alcalde',
    cuisine: 'Cocina mexicana contemporánea',
    rating: 4.6,
    reviewsCount: '1,751 opiniones',
    summary: 'Menú de degustación preciso y creativo, ideal para una ocasión especial.',
    mapsQuery: 'Restaurante%20Alcalde%20Guadalajara',
    reviews: [
      {
        author: 'Javier Chacón',
        timeAgo: 'Hace 3 días',
        stars: 4,
        text: 'Califica comida y servicio con 5; valoración general de cuatro estrellas.'
      },
      {
        author: 'Francisco Tames',
        timeAgo: 'Hace 5 días',
        stars: 4,
        text: 'Dejó una valoración reciente de cuatro estrellas, sin comentario escrito.'
      },
      {
        author: 'David Cruz',
        timeAgo: 'Hace 5 días',
        stars: 5,
        text: 'Destaca el servicio personalizado, la tranquilidad y el salbute de cangrejo.'
      },
      {
        author: 'Sam Strain',
        timeAgo: 'Hace 1 semana',
        stars: 4,
        text: 'Elogia la presentación; considera que algunos sabores y el precio no terminan de equilibrarse.'
      }
    ]
  },
  {
    id: 'xokol',
    name: 'Xokol',
    cuisine: 'Maíz · técnica · territorio',
    rating: 4.5,
    reviewsCount: '1,256 opiniones',
    summary: 'Una experiencia centrada en el maíz criollo, con menú ceremonial y cocina de autor.',
    mapsQuery: 'Xokol%20Guadalajara',
    reviews: [
      {
        author: 'M. Daniela Zepahua',
        timeAgo: 'Hace 4 horas',
        stars: 5,
        text: 'Valoración máxima y comida calificada con 5.'
      },
      {
        author: 'Maytte García',
        timeAgo: 'Hace 8 horas',
        stars: 5,
        text: 'Otorga cinco estrellas y califica comida y servicio con la máxima nota.'
      },
      {
        author: 'Lichs O',
        timeAgo: 'Hace 10 horas',
        stars: 5,
        text: 'Recomienda el lugar y destaca el buen servicio.'
      },
      {
        author: 'Karina Caracas',
        timeAgo: 'Hace 11 horas',
        stars: 4,
        text: 'Lo describe como un espacio agradable para cocina mexicana con acentos del mar.'
      }
    ]
  },
  {
    id: '9-esquinas',
    name: 'Birriería Las 9 Esquinas',
    cuisine: 'Tradición tapatía',
    rating: 4.5,
    reviewsCount: '13,719 opiniones',
    summary: 'Birria de chivo y sabores clásicos en uno de los rincones más tradicionales del Centro Histórico.',
    mapsQuery: 'Birrier%C3%ADa%20las%209%20Esquinas%20Guadalajara',
    reviews: [
      {
        author: 'José Adolfo García',
        timeAgo: 'Hace 10 horas',
        stars: 5,
        text: 'Valoración reciente de cinco estrellas, sin comentario escrito.'
      },
      {
        author: 'Jessica Flores',
        timeAgo: 'Hace 10 horas',
        stars: 5,
        text: 'Resume su experiencia en una palabra: deliciosa.'
      },
      {
        author: 'Christian Carballido',
        timeAgo: 'Hace 13 horas',
        stars: 5,
        text: 'Destaca el ambiente, la rapidez del servicio y la birria tatemada.'
      },
      {
        author: 'Diego Rodríguez',
        timeAgo: 'Hace 22 horas',
        stars: 5,
        text: 'Da 4 a la comida y 5 al servicio dentro de una valoración general máxima.'
      }
    ]
  }
];
