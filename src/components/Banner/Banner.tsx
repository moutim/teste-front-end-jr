import React from 'react';
import './banner.scss';

const Banner: React.FC = () => {
  return (
    <section className='banner-home'>
      <h1>Veha conhecer nossas <br /> promoções</h1>
      <h2>50% Off nos produtos</h2>
      <button>Ver produtos</button>
    </section>
  );
};

export default Banner;