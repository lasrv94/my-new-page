import React from 'react';
import { restaurantsData } from '../data/restaurants';

export const Foodie: React.FC = () => {
  return (
    <div className="foodie-wrap" id="foodie">
      <div className="foodie">
        <div className="foodie-head reveal">
          <div>
            <p className="section-kicker">Guadalajara foodie</p>
            <h2>Tres mesas, tres formas de saborear la ciudad.</h2>
          </div>
          <p className="foodie-intro">
            Dos experiencias contemporáneas reconocidas por la Guía Michelin y
            una institución de la birria tapatía. Las reseñas son resúmenes de
            las publicaciones más recientes visibles en Google Maps.
          </p>
        </div>

        <div className="foodie-grid">
          {restaurantsData.map((restaurant) => (
            <article key={restaurant.id} className="restaurant reveal">
              <div className="restaurant-meta">
                <span className="restaurant-type">{restaurant.cuisine}</span>
                <h3>{restaurant.name}</h3>
                <p className="rating">
                  <strong>{restaurant.rating}</strong> ★ · {restaurant.reviewsCount}
                </p>
                <p>{restaurant.summary}</p>
                <a
                  className="map-link"
                  href={`https://www.google.com/maps/search/?api=1&query=${restaurant.mapsQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver en Google Maps ↗
                </a>
              </div>

              <div
                className="review-grid"
                aria-label={`Reseñas recientes de ${restaurant.name}`}
              >
                {restaurant.reviews.map((review, i) => (
                  <div key={i} className="review">
                    <div className="review-top">
                      <span className="review-name">{review.author}</span>
                      <span className="review-time">{review.timeAgo}</span>
                    </div>
                    <span className="stars">
                      {'★'.repeat(review.stars)}
                      {'☆'.repeat(5 - review.stars)}
                    </span>
                    <p>{review.text}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        <p className="foodie-note">
          Datos consultados en Google Maps al 23 de septiembre de 2026. Las
          calificaciones, cantidades y reseñas pueden cambiar con el tiempo.
        </p>
      </div>
    </div>
  );
};
