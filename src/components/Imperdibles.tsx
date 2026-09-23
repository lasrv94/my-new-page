import React from 'react';

export const Imperdibles: React.FC = () => {
  const places = [
    { name: 'Hospicio Cabañas', tag: 'Arte' },
    { name: 'Centro Histórico', tag: 'Arquitectura' },
    { name: 'Mercado San Juan de Dios', tag: 'Sabor' },
    { name: 'Tlaquepaque', tag: 'Tradición' },
  ];

  return (
    <section className="places reveal" id="imperdibles">
      <div>
        <p className="section-kicker">Para empezar</p>
        <h2>Cuatro imperdibles.</h2>
        <ul className="place-list">
          {places.map((place, i) => (
            <li key={i}>
              {place.name} <span>{place.tag}</span>
            </li>
          ))}
        </ul>
      </div>

      <aside className="agave-panel">
        <div>
          <strong>
            Jalisco
            <br />
            es México
          </strong>
          <p>
            Una identidad hecha de música, hospitalidad, oficio y paisajes que
            comienzan muy cerca de la ciudad.
          </p>
        </div>
      </aside>
    </section>
  );
};
