import React from 'react';
import { Destination } from '../types';

interface DestinationCardProps {
  destination: Destination;
}

export const DestinationCard: React.FC<DestinationCardProps> = ({ destination }) => {
  return (
    <article className={`destination-card reveal ${destination.featured ? 'featured' : ''}`}>
      <div className="dest-img-wrap">
        <img
          src={destination.image}
          alt={destination.name}
          loading="lazy"
        />
        <span className="dest-img-badge">{destination.badge}</span>
      </div>

      <div className="dest-content">
        <div>
          <h3>{destination.name}</h3>
          <p>{destination.description}</p>
        </div>
        <div className="destination-footer">
          <span>{destination.travelTime}</span>
          <span>{destination.highlight}</span>
        </div>
      </div>
    </article>
  );
};
