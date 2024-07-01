import React from 'react';
import './newsletter.scss';

const Newsletter: React.FC = () => {
  return (
    <article className='newsletter'>
      <h6>Cadastre-se e Receba nossas <br /> <span>novidades e promoções</span></h6>
      <p>Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia lorem ipsum</p>

      <div className='container-input'>
        <input type="text" placeholder='SEU EMAIL' />
        <button>Ok</button>
      </div>
    </article>
  );
};

export default Newsletter;