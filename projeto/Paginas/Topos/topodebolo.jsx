import { Link } from 'react-router-dom';
import "./topodebolo.css";
import Header from "../../Componentes/Header/header";
import Menu from "../../Componentes/Menu/menu";
import imageConfig from '../../config/images';

function Topo() {
  const { tipos } = imageConfig.paginas.topos;

  return (
    <div>
      <Header />
      <Menu />
      <h1 className="titulo">Topos de Bolo</h1>

      {Object.entries(tipos).map(([tipoKey, tipo]) => (
        <div key={tipoKey}>
          <h2 className="subtitulo">{tipo.titulo}</h2>
          <div className="imagem-container">
            {tipo.produtos.map((produto) => (
              <div className="card" key={produto.id}>
                <Link to={`/product/${encodeURIComponent(produto.nome)}`} className="product-link">
                  <img src={produto.imagem} alt={produto.nome} />
                  <p className="nome">{produto.nome}</p>
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

export default Topo; 