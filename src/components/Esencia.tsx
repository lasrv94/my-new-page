import React from 'react';

export const Esencia: React.FC = () => {
  return (
    <>
      <section className="intro reveal" id="esencia">
        <p className="section-kicker">La Perla Tapatía</p>
        <div>
          <h2>Una ciudad con ritmo propio.</h2>
          <p className="lead">
            Guadalajara mezcla memoria y movimiento: edificios históricos,
            barrios llenos de carácter, diseño contemporáneo y sabores que
            forman parte de la identidad mexicana.
          </p>
        </div>
      </section>

      <div className="cards" aria-label="Tres formas de descubrir Guadalajara">
        <article className="card reveal">
          <span className="card-number">01</span>
          <h3>Caminar</h3>
          <p>
            Recorre el Centro Histórico, mira las torres de la Catedral y cruza
            plazas donde la ciudad cuenta su historia.
          </p>
        </article>
        <article className="card reveal">
          <span className="card-number">02</span>
          <h3>Probar</h3>
          <p>
            Birria, tortas ahogadas, tejuino y jericallas: aquí la cocina es una
            forma deliciosa de conocer Jalisco.
          </p>
        </article>
        <article className="card reveal">
          <span className="card-number">03</span>
          <h3>Escuchar</h3>
          <p>
            El mariachi acompaña una escena cultural que también se expresa en
            galerías, foros, diseño y arte urbano.
          </p>
        </article>
      </div>
    </>
  );
};
