// PÁGINA DOS PRODUTOS QUANDO CLICADOS. 
// PÁGINAS DOS PRODUTOS COM MINIATURAS

import { useEffect, useState } from 'react'; // Importa os hooks useEffect e useState do React
import { useParams } from 'react-router-dom'; // Importa o hook useParams para obter parâmetros da URL
import "./produto.css"; // Importa o arquivo CSS específico do componente
import Header from '../../Componentes/Header/header'; // Importa o componente Header
import ProductCarousel from '../../Componentes/ProductCarousel/ProductCarousel'; // Importa o carrossel de imagens do produto
import Menu from "../../Componentes/Menu/menu"; // Importa o componente Menu
import { useCart } from '../../Componentes/Carrinho/CarrinhoContext'; // Importa o contexto do carrinho de compras
import Notification from '../../Componentes/Notification/Notification'; // Importa o componente de notificações
import imageConfig from '../../config/images'; // Importa o objeto de configuração de imagens

const ProductDetails = () => {
  const { nome } = useParams(); // Obtém o nome do produto da URL
  const [product, setProduct] = useState(null); // Estado para armazenar o produto selecionado
  const [quantidade, setQuantidade] = useState(1); // Estado para armazenar a quantidade do produto
  const { addToCart } = useCart(); // Obtém a função para adicionar ao carrinho do contexto
  const [showNotification, setShowNotification] = useState(false); // Estado para controlar a exibição da notificação
  const [isLoading, setIsLoading] = useState(true); // Estado para indicar se os dados ainda estão carregando

  useEffect(() => {
    const loadProduct = async () => {
      setIsLoading(true); // Define que os dados estão sendo carregados
      try {
        const decodedNome = decodeURIComponent(nome); // Decodifica o nome do produto da URL
        let foundProduct = null; // Variável para armazenar o produto encontrado
        
        // Percorre todas as categorias e tipos de produtos para encontrar o produto correspondente
        Object.values(imageConfig.paginas).forEach(categoria => {
        Object.values(categoria.tipos).forEach(tipo => {
            const found = tipo.produtos.find(p => p.nome === decodedNome);
            if (found) foundProduct = found; // Se encontrar o produto, armazena na variável
          });
        });
        
        setProduct(foundProduct); // Define o estado do produto com o produto encontrado
      } catch (error) {
        console.error('Erro ao carregar produto:', error); // Exibe erro no console caso ocorra
      } finally {
        setIsLoading(false); // Define que o carregamento foi concluído
      }
    };

    loadProduct(); // Chama a função para carregar o produto ao montar o componente
  }, [nome]); // Dependência do useEffect: executa sempre que "nome" mudar

  if (isLoading) {
    return <div>Carregando...</div>; // Exibe uma mensagem de carregamento enquanto os dados estão sendo buscados
  }

  if (!product) {
    return <div>Produto não encontrado.</div>; // Exibe mensagem caso o produto não seja encontrado
  }

  const images = product.imagens || [product.imagem]; // Obtém as imagens do produto ou uma imagem única

  const handleQuantidadeChange = (event) => {
    setQuantidade(parseInt(event.target.value)); // Atualiza a quantidade com o valor do input
  };

  const handleAddToCart = () => {
    addToCart(product, quantidade); // Adiciona o produto ao carrinho com a quantidade selecionada
    setShowNotification(true); // Exibe a notificação de adição ao carrinho
  };

  return (
    <div>
      <Header /> {/* Componente de cabeçalho */}
      <Menu /> {/* Componente de menu */}
      <Notification 
        message="Produto adicionado ao carrinho"
        isVisible={showNotification}
        setIsVisible={setShowNotification}
      /> {/* Exibe uma notificação quando o produto é adicionado ao carrinho */}
      <div className="product-details-container">
        <div className="product-carousel-container">
          {images.length > 0 && (
            <ProductCarousel 
              images={images} 
              className="product-carousel"
            />
          )} {/* Renderiza o carrossel de imagens se houver imagens disponíveis */}
          <p className='product-description'>
            <span className='desc'>Descrição: </span>
            {product.descricao} {/* Exibe a descrição do produto */}
          </p>
        </div>
        <div className="product-info">
          <h1>{product.nome}</h1> {/* Exibe o nome do produto */}
          <p>Preço: R$ {product.preco}</p> {/* Exibe o preço do produto */}

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
            /> {/* Input para selecionar a quantidade do produto */}
          </div>

          <div className="button-container">
            <button 
              className="btn-add-to-cart"
              onClick={handleAddToCart}
            >
              Adicionar ao Carrinho
            </button> {/* Botão para adicionar ao carrinho */}
            <button className="btn-buy-now">Comprar</button> {/* Botão para comprar diretamente */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;