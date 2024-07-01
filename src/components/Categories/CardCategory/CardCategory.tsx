import React from 'react';
import './cardCategory.scss';

interface CardCategoryProps {
  srcIcon: string;
  altIcon: string;
  text: string;
  selected?: boolean;
}

const CardCategory: React.FC<CardCategoryProps> = ({ srcIcon, text, altIcon, selected }) => {
  return (
    <button className={`button-category ${selected ? 'category-selected' : ''}`}>
      <i><img src={srcIcon} alt={altIcon} /></i>
      {text}
    </button>
  );
};

export default CardCategory;
