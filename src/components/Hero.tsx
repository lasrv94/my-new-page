import React from 'react';
import { Navbar } from './Navbar';

export const Hero: React.FC = () => {
  return (
    <header className="hero" id="inicio">
      <div
        className="hero-bg"
        style={{
          backgroundImage:
            'linear-gradient(90deg, rgba(9,31,52,.88) 0%, rgba(9,31,52,.46) 40%, rgba(9,31,52,.05) 72%), linear-gradient(0deg, rgba(9,31,52,.62), transparent 55%), url("assets/guadalajara-hero.png")',
        }}
        aria-hidden="true"
      />
      <Navbar />
      <div className="hero-content">
        <a href="#vallarta" className="hero-badge-pill">
          <span className="pulsing-dot" />
          Nueva Vía Corta: ¡Puerto Vallarta a solo 2.5h! ↗
        </a>
        <p className="eyebrow">20° 40′ N · 103° 21′ O</p>
        <h1>Guadalajara</h1>
        <p className="hero-copy">
          Tradición viva, arquitectura de cantera y una energía creativa que se
          disfruta entre plazas, mercados y sobremesas.
        </p>
        <span className="hero-note">Capital de Jalisco · México</span>
      </div>
    </header>
  );
};

