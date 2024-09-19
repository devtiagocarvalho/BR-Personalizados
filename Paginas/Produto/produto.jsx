import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../../DB/produtos.json';
import "./produto.css";
import Header from '../../Componentes/Header/header';
import ProductCarousel from '../../Componentes/ProductCarousel/ProductCarousel';
import Menu from "../../Componentes/Menu/menu";

const ProductDetails = () => {
  const { nome } = useParams();
  const [product, setProduct] = useState(null);
  const [quantidade, setQuantidade] = useState(1); // Estado para gerenciar a quantidade

  useEffect(() => {
    const decodedNome = decodeURIComponent(nome);
    const foundProduct = data.find(product => product.nome === decodedNome);
    setProduct(foundProduct);
  }, [nome]);

  if (!product) {
    return <p>Produto não encontrado.</p>;
  }

  const images = [product.imagem, product.imagem2, product.imagem3, product.imagem4, product.imagem5, product.imagem6, product.imagem7, product.imagem8, product.imagem9, product.imagem10].filter(img => img);

  const handleQuantidadeChange = (event) => {
    setQuantidade(event.target.value);
  };

  return (
    <div>
      <Header />
      <Menu />
      <div className="product-details-container">
        <div className="product-carousel-container">
          <ProductCarousel images={images} className="product-carousel" />
          <p className='product-description'><span className='desc'>Descrição: </span><br />{product.descricao}</p>
        </div>
        <div className="product-info">
          <h1>{product.nome}</h1>
          <p>Preço: R$ {product.preco}</p>

          {/* Campo de entrada para quantidade */}
          <div className="quantity-container">
            <label htmlFor="quantity">Quantidade:</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={quantidade}
              onChange={handleQuantidadeChange}
              min="1"
              className="quantity-input"
            />
          </div>

          {/* Adicionando os dois botões */}
          <div className="button-container">
            <button className="btn-add-to-cart">Adicionar ao Carrinho</button>
            <button className="btn-buy-now">Comprar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
