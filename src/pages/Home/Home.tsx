import React from 'react';
import './home.scss';
import Banner from '../../components/Banner/Banner';
import Categories from '../../components/Categories/Categories';
import RelatedProducts from '../../components/RelatedProducts/RelatedProducts';
import ProductsAd from '../../components/ProductsAd/ProductsAd';
import Brands from '../../components/Brands/Brands';

const Home: React.FC = () => {
  return (
    <>
      <Banner />
      <Categories />
      <RelatedProducts />
      <ProductsAd />
      <Brands />
    </>
  );
};

export default Home;
