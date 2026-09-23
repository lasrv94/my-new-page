import React from 'react';
import { destinationsData } from '../data/destinations';
import { DestinationCard } from './DestinationCard';

export const Destinations: React.FC = () => {
  return (
    <section className="destinations-section reveal" id="destinos">
      <div className="destinations-head">
        <p className="section-kicker">Escapadas desde Guadalajara</p>
        <h2>Destinos cercanos: del mar a la sierra.</h2>
        <p>
          A pocas horas de la Perla Tapatía encontrarás playas de fama mundial,
          pueblos mágicos entre bosques y el corazón de la cultura agavera.
        </p>
      </div>

      <div className="destinations-grid">
        {destinationsData.map((dest) => (
          <DestinationCard key={dest.id} destination={dest} />
        ))}
      </div>
    </section>
  );
};
