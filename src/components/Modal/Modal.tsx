import React, { useState } from 'react';
import './modal.scss';
import { IoMdClose } from 'react-icons/io';
import { RiArrowDropRightLine } from 'react-icons/ri';
import { FaMinus, FaPlus } from 'react-icons/fa6';

interface ModalProps {
  productName: string;
  price: string;
  productDescription: string;
  srcImg: string;
  closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ productName, productDescription, price, srcImg, closeModal }) => {
  const [quantity, setQuantity] = useState(1);

  const changeQuantity = (plusOrMinus: boolean) => {
    if (plusOrMinus) {
      setQuantity(quantity + 1);
    } else if (!plusOrMinus && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div className='modal'>
      <article>
        <div>
          <img src={srcImg} alt={productDescription} />
        </div>

        <div className='modal-infos'>
          <div className='container-i-close'>
            <i onClick={() => closeModal()}><IoMdClose /></i>
          </div>

          <div className='container-product-info'>
            <h5>{productName}</h5>
            <p className='price'>{price}</p>
            <p className='description'>{productDescription}</p>
            <p className='details'>Veja mais detalhes do produto <i><RiArrowDropRightLine /></i></p>

            <button className='button-quantity'>
              <i><FaMinus onClick={ () => changeQuantity(false)} /></i>
              {quantity} 
              <i><FaPlus onClick={ () => changeQuantity(true)} /></i>
            </button>

            <button className='button-buy'>Comprar</button>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Modal;
