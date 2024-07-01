import React from 'react';
import StylizedTitle from '../StylizedTitle/StylizedTitle';
import CardAd from '../CardAd/CardAd';
import './productsAd.scss';

const ProductsAd: React.FC = () => {
  return (
    <article className='products-ad limiter'>
      <div className='container-title'>
        <StylizedTitle title='Produtos relacionados' />
        <p>Ver todos</p>
      </div>

      <div className='container-cards-ad'>
        <CardAd title='Produtos' />
        <CardAd title='Produtos' />
      </div>
    </article>
  );
};

export default ProductsAd;