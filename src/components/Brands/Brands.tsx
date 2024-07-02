import React, { useState } from 'react';
import arrowLeft from '../../assets/seta-esquerda.png';
import arrowRight from '../../assets/seta-direita.png';
import CardBrand from './CardBrand/CardBrand';
import './brands.scss';

const Brands: React.FC = () => {
  const [index,setIndex] = useState<number>(0);

  const next = () => {
    if(index == 5) return setIndex(0);
    setIndex(index + 1);
  };

  const prev = () => {
    if(index <=  0) return setIndex(0);
    setIndex(index - 1);
  };

  return (
    <section className='brands limiter'>
      <div className='container-title'>
        <h5>Navegue por marcas</h5>
      </div>

      <div className='container-brands'>
        <div className='buttons-prev-next'>
          {
            index > 0 && (
              <button onClick={prev} className='prev'><img src={arrowLeft} alt="Ícone de uma seta para a esquerda" /></button>
            )
          }
          <button onClick={next} className='next'><img src={arrowRight} alt="Ícone de uma seta para a direita" /></button>
        </div>

        <div 
          className='brand-cards'
          style={{
            left: `-${index * 251}px`,
            width: 'calc(251px * 10)'
          }}
        >
          {
            Array.from(Array(10), (_, key) => (<CardBrand key={key} />))
          }
        </div>
      </div>
    </section>
  );
};

export default Brands;