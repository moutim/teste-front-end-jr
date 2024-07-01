import React from 'react';
import './cardAd.scss';

interface CardAdProps {
  title: string;
}

const CardAd: React.FC<CardAdProps> = ({ title }) => {
  return (
    <article className='cardAd'>
      <h5>{title}</h5>
      <p>Lorem ipsum dolor sit <br /> amet, consectetur</p>
      <button>Confira</button>
    </article>
  );
};

export default CardAd;
