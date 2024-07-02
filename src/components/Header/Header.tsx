import React, { useState } from 'react';
import { 
  PiShieldCheckBold,
  PiTruckBold, 
  PiCreditCardBold,
  PiShoppingCart,
  PiCrownSimple
} from 'react-icons/pi';
import { IoIosSearch } from 'react-icons/io';
import { IoHeartOutline } from 'react-icons/io5';
import { PiUserCircleLight } from 'react-icons/pi';
import { BsBoxSeam } from 'react-icons/bs';
import { IoMdMenu } from 'react-icons/io';
import './header.scss';
import logo from '../../assets/logo.svg';
import HeaderResponsive from './HeaderResponsive/HeaderResponsive';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const changeMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className='limiter'>
      {
        menuOpen && <HeaderResponsive changeMenu={changeMenu} />
      }
      
      <div className='header-infos'>
        <ul>
          <li>
            <i><PiShieldCheckBold /></i>
            <p>Compra <span>100% segura</span></p>
          </li>
          
          <li>
            <i><PiTruckBold /></i>
            <p><span>Frete grátis</span> acima de R$ 200</p>
          </li>

          <li>
            <i><PiCreditCardBold /></i>
            <p><span>Parcele</span> suas compras</p>
          </li>
        </ul>
      </div>

      <div className='header-search'>
        <div className='header-logo'>
          <img src={logo} alt="Logo da VTEX" />
        </div>

        <div className='header-input'>
          <input type="text" placeholder='O que você está buscando?' />
          <button><i><IoIosSearch /></i></button>
        </div>

        <div className='header-buttons'>
          <button><i><BsBoxSeam /></i></button>
          <button><i><IoHeartOutline /></i></button>
          <button><i><PiUserCircleLight /></i></button>
          <button><i><PiShoppingCart /></i></button>
        </div>

        <div className='header-menu-responsive'>
          <button onClick={changeMenu}><i><IoMdMenu /></i></button>
        </div>
      </div>
      
      <nav>
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
    </header>
  );
};

export default Header;