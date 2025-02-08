import { Link } from 'react-router-dom';
import "./artesdigitais.css"
import Header from "../../Componentes/Header/header";
import Menu from "../../Componentes/Menu/menu";
import imageConfig from '../../config/images'; // Importando a configuração de imagens

function ArtesDigitais() {
  const { tipos } = imageConfig.paginas.artesDigitais; // Acessando os tipos de artes digitais

  return (
    <div>
      <Header />
      <Menu />
      <h1 className="titulo">Artes Digitais - Studio Silhouette</h1>

      {Object.entries(tipos).map(([tipoKey, tipo]) => ( // Mapeando os tipos de artes digitais
        <div key={tipoKey}>
          <h2 className="subtitulo">{tipo.titulo}</h2>
          <div className="imagem-container">
            {tipo.produtos.map((produto) => ( // Mapeando os produtos de cada tipo
              <div className="card" key={produto.id}>
                <Link to={`/product/${encodeURIComponent(produto.nome)}`} className="product-link">
                  <img src={produto.imagem} alt={produto.nome} />
                  <p className="nome">{produto.nome}</p>
                  <p className="tamanho">{produto.tamanho}</p>
                  <p className="preco">R$ {produto.preco}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ArtesDigitais;

