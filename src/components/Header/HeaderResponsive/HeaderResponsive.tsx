import React from 'react';
import { BsBoxSeam } from 'react-icons/bs';
import { IoIosSearch, IoMdClose } from 'react-icons/io';
import { IoHeartOutline } from 'react-icons/io5';
import {  PiCrownSimple, PiShoppingCart, PiUserCircleLight } from 'react-icons/pi';
import './headerResponsive.scss';

interface HeaderResponsiveProps {
  changeMenu: () => void;
}

const HeaderResponsive: React.FC<HeaderResponsiveProps> = ({ changeMenu }) => {
  return (
    <div className="header-responsive">
      <div className='button-close'>
        <button onClick={changeMenu}><IoMdClose /></button>
      </div>

      <div className='header-input-mobile'>
        <input type="text" placeholder='O que você está buscando?' />
        <button><i><IoIosSearch /></i></button>
      </div>

      <div className='header-buttons-mobile'>
        <button><i><BsBoxSeam /></i></button>
        <button><i><IoHeartOutline /></i></button>
        <button><i><PiUserCircleLight /></i></button>
        <button><i><PiShoppingCart /></i></button>
      </div>

      <nav className='nav-mobile'>
        <ul>
          <li><a href="#">Todas as categorias</a></li>
          <li><a href="#">Supermercado</a></li>
          <li><a href="#">Livros</a></li>
          <li><a href="#">Moda</a></li>
          <li><a href="#">Lançamentos</a></li>
          <li><a href="#"><span>Ofertas do dia</span></a></li>
          <li><i><PiCrownSimple /></i><a href="#">Assinatura</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderResponsive;