import React from 'react';
import CardCategory from './CardCategory/CardCategory';
import './categories.scss';

import iconeTecnologia from '../../assets/monitor-tablet-e-smartphone.png';
import iconeSupermercado from '../../assets/supermercado.png';
import iconeBebidas from '../../assets/whiskey.png';
import iconeFerramentas from '../../assets/ferramentas.png';
import iconeSaúde from '../../assets/cuidados-de-saude.png';
import iconeEsportes from '../../assets/corrida.png';
import iconeModa from '../../assets/moda.png';

const Categories: React.FC = () => {
  return (
    <section className='categories limiter'>
      <CardCategory
        text='Tecnologia'
        srcIcon={iconeTecnologia}
        altIcon='Ícone de um monitor, tablet e smartphone'
        selected={true}
      />
      <CardCategory
        text='Supermercado'
        srcIcon={iconeSupermercado}
        altIcon='Ícone de um supermercado'
      />
      <CardCategory
        text='Bebidas'
        srcIcon={iconeBebidas}
        altIcon='Ícone de uma garrafa de whiskey'
      />
      <CardCategory
        text='Ferramentas'
        srcIcon={iconeFerramentas}
        altIcon='Ícone de um martelo e uma chave de fenda'
      />
      <CardCategory
        text='Saúde'
        srcIcon={iconeSaúde}
        altIcon='Ícone de uma mão segurando um coração'
      />
      <CardCategory
        text='Esportes e Fitness'
        srcIcon={iconeEsportes}
        altIcon='Ícone de uma pessoa correndo na esteira'
      />
      <CardCategory
        text='Moda'
        srcIcon={iconeModa}
        altIcon='Ícone de um vestido, salto alto e um diamante'
      />
    </section>
  );
};

export default Categories;
