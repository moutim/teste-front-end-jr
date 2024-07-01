import React from 'react';
import './home.scss';
import Banner from '../../components/Banner/Banner';
import Categories from '../../components/Categories/Categories';

const Home: React.FC = () => {
  return (
    <>
      <Banner />
      <Categories />
    </>
  );
};

export default Home;
