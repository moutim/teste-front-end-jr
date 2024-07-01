import React from 'react';
import Newsletter from '../Newsletter/Newsletter';
import './footer.scss';
import { FaFacebookF, FaYoutube } from 'react-icons/fa'; 
import { FaInstagram } from 'react-icons/fa6';

import alelo from '../../assets/alelo.png';
import amex from '../../assets/amex.png';
import dinners from '../../assets/dinners.png';
import elo from '../../assets/elo.png';
import ifood from '../../assets/ifood.png';
import mastercard from '../../assets/mastercard.png';
import pix from '../../assets/pix.png';
import sodexo from '../../assets/sodexo.png';
import ticket from '../../assets/ticket.png';
import visa from '../../assets/visa.png';

import logoEconverse from '../../assets/logo-econverse.svg';
import logoVTEXWhite from '../../assets/logo-branco.svg';

const Footer: React.FC = () => {
  return (
    <footer>
      <section className='limiter infos-and-newsletter'>
        <div className='container-infos-footer'>
          <nav className='nav-about-us'>
            <h6>Sobre nós</h6>

            <ul>
              <li><a href="#">Conheça</a></li>
              <li><a href="#">Como comprar</a></li>
              <li><a href="#">Indicação e desconto</a></li>
            </ul>

            <div className='social-media'>
              <i><FaFacebookF /></i>
              <i><FaInstagram /></i>
              <i><FaYoutube /></i>
            </div>
          </nav>

          <nav>
            <h6>Informações úteis</h6>

            <ul>
              <li><a href="#">Fale conosco</a></li>
              <li><a href="#">Dúvidas</a></li>
              <li><a href="#">Prazos de entrega</a></li>
              <li><a href="#">Formas de pagamento</a></li>
              <li><a href="#">Política de privacidade</a></li>
              <li><a href="#">Trocas e devoluções</a></li>
            </ul>
          </nav>

          <section>
            <h6>Formas de pagamento</h6>

            <div className='container-payments'>
              <img src={visa} alt="Logo do cartão visa" />
              <img src={elo} alt="Logo do cartão elo" />
              <img src={alelo} alt="Logo do cartão alelo" />
              <img src={dinners} alt="Logo do cartão dinners" />
              <img src={ifood} alt="Logo do ifood" />
              <img src={mastercard} alt="Logo do cartão mastercard" />
              <img src={pix} alt="Logo do pix" />
              <img src={amex} alt="Logo do cartão amex" />
              <img src={ticket} alt="Logo do cartão alelo" />
              <img src={sodexo} alt="Logo do cartão sodexo" />
            </div>
          </section>
        </div>
      
        <Newsletter />
      </section>

      <section className='footer-copyright'>
        <div className='limiter container-footer-copyright'>
          <div>
            <p>Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas imagens são de propriedade de seus respectivos donos. <br /> 
          É vedada a reprodução, total ou parcial, de qualquer conteúdo sem expressa autorização.</p>
          </div>

          <div>
            <img src={logoEconverse} alt="Logo da Econverse" />
            <img src={logoVTEXWhite} alt="Logo da VTEX Branco" />
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;