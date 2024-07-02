import React, { useState } from 'react';
import './cardProduct.scss';
import Modal from '../Modal/Modal';

interface CardProductProps {
  productName: string;
  productDescription: string;
  srcImg: string;
  oldPrice: number;
  newPrice: number;
  priceDivided: number;
}

const CardProduct: React.FC<CardProductProps> = ({ productDescription, srcImg, oldPrice, newPrice, priceDivided, productName }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const formatCurrency = (value: number) => {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  const changeModal = () => setModalOpen(!modalOpen);

  return (
    <>
      {
        modalOpen && <Modal
          productName={productName}
          productDescription={productDescription}
          srcImg={srcImg}
          price={formatCurrency(oldPrice)}
          closeModal={changeModal}
        />
      }
      <article className='card-product'>
        <figure>
          <img src={srcImg} alt={productDescription} />
          <figcaption>{productDescription}</figcaption>
        </figure>

        <div className='price-infos'>
          <p className='old-price'>{formatCurrency(oldPrice)}</p>
          <p className='new-price'>{formatCurrency(newPrice)}</p>
          <p className='price-divided'>ou 2x de {formatCurrency(priceDivided)} sem juros</p>
          <p className='free-shipping'>Frete grátis</p>
        </div>
      
        <button onClick={changeModal}>Comprar</button>
      </article>
    </>
  );
};

export default CardProduct;
