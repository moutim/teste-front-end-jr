import React, { useEffect, useState } from 'react';
import StylizedTitle from '../StylizedTitle/StylizedTitle';
import './relatedProducts.scss';
import CardProduct from '../CardProduct/CardProduct';
import { MdOutlineKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import fetchProducts from '../../utils/fetchProducts';

interface ReturnAPI {
  success: boolean,
    products: {
      productName: string,
      photo: string,
      price: number,
      descriptionShort: string
    }[]
}

interface Product {
  productName: string;
  photo: string;
  price: number;
  descriptionShort: string;
}

const RelatedProducts: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([
    {
      'productName': 'Iphone 11 PRO MAX BRANCO 1',
      'descriptionShort': 'Iphone 11 PRO MAX BRANCO 1',
      'photo': 'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png',
      'price': 15000
    },
    {
      'productName': 'IPHONE 13 MINI 1',
      'descriptionShort': 'IPHONE 13 MINI 1',
      'photo': 'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png',
      'price': 9000
    },
    {
      'productName': 'Iphone 11 PRO MAX BRANCO 2',
      'descriptionShort': 'Iphone 11 PRO MAX BRANCO 2',
      'photo': 'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png',
      'price': 14990
    },
    {
      'productName': 'IPHONE 13 MINI 2',
      'descriptionShort': 'IPHONE 13 MINI 2',
      'photo': 'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png',
      'price': 12000
    },
    {
      'productName': 'Iphone 11 PRO MAX BRANCO 3',
      'descriptionShort': 'Iphone 11 PRO MAX BRANCO 3',
      'photo': 'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png',
      'price': 4550
    },
    {
      'productName': 'IPHONE 13 MINI 3',
      'descriptionShort': 'IPHONE 13 MINI 3',
      'photo': 'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png',
      'price': 38000
    },
    {
      'productName': 'Iphone 11 PRO MAX BRANCO 4',
      'descriptionShort': 'Iphone 11 PRO MAX BRANCO 4',
      'photo': 'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png',
      'price': 42000
    },
    {
      'productName': 'IPHONE 13 MINI 4',
      'descriptionShort': 'IPHONE 13 MINI 4',
      'photo': 'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png',
      'price': 520
    },
    {
      'productName': 'Iphone 11 PRO MAX BRANCO 5',
      'descriptionShort': 'Iphone 11 PRO MAX BRANCO 5',
      'photo': 'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png',
      'price': 149990
    },
    {
      'productName': 'IPHONE 13 MINI 5',
      'descriptionShort': 'IPHONE 13 MINI 5',
      'photo': 'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png',
      'price': 100000
    }
  ]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const getProducts = async () => {
      const result: ReturnAPI = await fetchProducts();

      if (result.success) setProducts(result.products);
    };

    getProducts();
  });

  const showNextProduct = () => {
    if (index + 1 < products.length) {
      setIndex(index + 1);
    }
  };

  const showPrevProduct = () => {
    if (index - 1 >= 0) {
      setIndex(index - 1);
    }
  };

  return (
    <article className='related-products'>
      <StylizedTitle title='Produtos relacionados' />

      <nav className='limiter'>
        <ul>
          <li>Celular</li>
          <li>Acessórios</li>
          <li>Tablets</li>
          <li>Notebooks</li>
          <li>Tvs</li>
          <li>Ver todos</li>
        </ul>
      </nav>

      <section className='products'>
        <i onClick={showPrevProduct}><MdOutlineKeyboardArrowLeft /></i>

        <div className='limiter container-products'>
          {
            products.slice(index, index + 4).map((item, index) => {
              return (
                <CardProduct
                  key={index}
                  productDescription={item.descriptionShort}
                  srcImg={item.photo}
                  oldPrice={item.price}
                  newPrice={item.price - (item.price * 0.05)}
                  priceDivided={(item.price / 2)}
                />
              );
            })
          }
        </div>
    
        <i onClick={showNextProduct}><MdKeyboardArrowRight /></i>
      </section>
    </article>
  );
};

export default RelatedProducts;