import { Link } from 'react-router-dom';
import "./convites.css"
import Header from "../../Componentes/Header/header";
import Menu from "../../Componentes/Menu/menu";
import Footer from "../../Componentes/Footer/footer";
import imageConfig from '../../config/images'; // Importando a configuração de imagens

function Convites() {
  const { tipos } = imageConfig.paginas.convites; // Acessando os tipos de convites

  return (
    <div>
      <Header />
      <Menu />
      <h1 className="titulo">Convites Personalizados</h1>

      {Object.entries(tipos).map(([tipoKey, tipo]) => ( // Mapeando os tipos de convites
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

      <Footer />
    </div>
  );
}

export default Convites; 