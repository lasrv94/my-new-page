import React from 'react';

const items = [
  '🌊 Puerto Vallarta · Vía Corta 2.5h',
  '🌅 Atardeceres Dorados del Pacífico',
  '🥃 Tequila & Campos de Agave Azul',
  '⛵ Ajijic & Lago de Chapala',
  '🌲 Cabañas y Bosques de Mazamitla',
  '🌮 Tortas Ahogadas & Birria Tapatía',
  '🎻 Cuna del Mariachi Tradicional',
  '🏺 Tlaquepaque & Tonalá Artesanal',
];

export const MarqueeTicker: React.FC = () => {
  return (
    <div className="marquee-band" aria-hidden="true">
      <div className="marquee-track">
        {items.map((item, index) => (
          <span key={`item-1-${index}`}>{item}</span>
        ))}
        {items.map((item, index) => (
          <span key={`item-2-${index}`}>{item}</span>
        ))}
      </div>
    </div>
  );
};
