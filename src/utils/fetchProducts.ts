const fetchProducts = async () => {
  const result = await fetch('https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json');

  const data = await result.json();

  return data;
};

export default fetchProducts;