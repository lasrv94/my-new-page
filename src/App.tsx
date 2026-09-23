import React, { useEffect } from 'react';
import { initGA } from './utils/analytics';
import { ScrollProgress } from './components/ScrollProgress';
import { Hero } from './components/Hero';
import { MarqueeTicker } from './components/MarqueeTicker';
import { Esencia } from './components/Esencia';
import { QuoteBand } from './components/QuoteBand';
import { VallartaSpotlight } from './components/VallartaSpotlight';
import { Destinations } from './components/Destinations';
import { Foodie } from './components/Foodie';
import { Imperdibles } from './components/Imperdibles';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';

export const App: React.FC = () => {
  useEffect(() => {
    // Inicializar Google Analytics 4
    initGA();

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => revealObserver.observe(el));

    return () => {
      elements.forEach((el) => revealObserver.unobserve(el));
      revealObserver.disconnect();
    };
  }, []);

  return (
    <>
      <ScrollProgress />
      <Hero />
      <MarqueeTicker />

      <main>
        <Esencia />
        <QuoteBand />
        <VallartaSpotlight />
        <Destinations />
        <Foodie />
        <Imperdibles />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
};

export default App;
