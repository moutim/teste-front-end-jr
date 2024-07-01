import React from 'react';
import './home.scss';
import Banner from '../../components/Banner/Banner';
import Categories from '../../components/Categories/Categories';
import RelatedProducts from '../../components/RelatedProducts/RelatedProducts';

const Home: React.FC = () => {
  return (
    <>
      <Banner />
      <Categories />
      <RelatedProducts />
    </>
  );
};

export default Home;
