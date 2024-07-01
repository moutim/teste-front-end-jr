import React, { useState } from 'react';
import CardBrand from './CardBrand/CardBrand';
import './brands.scss';
import arrowLeft from '../../assets/seta-esquerda.png';
import arrowRight from '../../assets/seta-direita.png';

const Brands: React.FC = () => {
  const [index, setIndex] = useState<number>(0);

  const next = () => {
    if(index === 5) {
      return setIndex(0);
    }

    setIndex(index + 1);
  };

  const prev = () => {
    if(index <=  0) {
      return setIndex(0);
    }

    setIndex(index - 1);
  };

  return (
    <section className='brands limiter'>
      <div className='container-title'>
        <h5>Navegue por marcas</h5>
      </div>

      <div className='container-brands'>
        {index > 0 && (
          <i onClick={prev}><img src={arrowLeft} alt="Ícone de uma seta para a esquerda" /></i>
        )}
        <div className='brands-carousel'>
          {
            Array.from(Array(10), (_brand, index) => (
              <CardBrand key={index} />
            ))
          }
        </div>
        <i onClick={next}><img src={arrowRight} alt="Ícone de uma seta para a direita" /></i>
      </div>
    </section>
  );
};

export default Brands;
