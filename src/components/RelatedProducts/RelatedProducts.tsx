import React, { useEffect, useState } from 'react';
import StylizedTitle from '../StylizedTitle/StylizedTitle';
import './relatedProducts.scss';
import CardProduct from '../CardProduct/CardProduct';
import { MdOutlineKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import fetchProducts from '../../utils/fetchProducts';
import CardAd from '../CardAd/CardAd';
import mockProducts from '../../mocks/products';

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
  const [products, setProducts] = useState<Product[]>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const result: ReturnAPI = await fetchProducts();
        if (result.success) {
          setProducts(result.products);
          return;
        }
      } catch(e) {
        console.log(e);
      }

      setProducts(mockProducts);
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
            products.length > 0 && products.slice(index, index + 4).map((item, index) => {
              return (
                <CardProduct
                  key={index}
                  productName={item.productName}
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

      <section className='section-partners limiter'>
        <CardAd title='Parceiros' />
        <CardAd title='Parceiros' />
      </section>
    </article>
  );
};

export default RelatedProducts;