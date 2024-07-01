import React from 'react';
import logo from '../../../assets/logo.svg';
import './cardBrand.scss';

const CardBrand: React.FC = () => {
  return (
    <div className='card-brand'>
      <img src={logo} alt="Logo VTEX" />
    </div>
  );
};

export default CardBrand;