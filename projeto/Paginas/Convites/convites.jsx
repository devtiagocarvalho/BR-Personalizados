import { Link } from 'react-router-dom';
import "./convites.css"
import Header from "../../Componentes/Header/header";
import Menu from "../../Componentes/Menu/menu";
import Footer from "../../Componentes/Footer/footer";

function Convites() {
  return (
    <div>
      <Header />
      <Menu />
      <h1 className="titulo">Convites Personalizados</h1>

      <h2 className="subtitulo">Convites para Festas:</h2>
      <div className="imagem-container">
        <div className="card">
          <Link to={`/product/Convite Festa Infantil`} className="product-link">
            <img src="https://i.ibb.co/prcgcGz/agenda-1.jpg" alt="Convite Festa Infantil" />
            <p className="nome">Convite Festa Infantil</p>
            <p className="tamanho">15cm x 10cm</p>
            <p className="preco">R$ 35,00</p>
          </Link>
        </div>
        <div className="card">
          <Link to={`/product/Convite Casamento`} className="product-link">
            <img src="https://i.ibb.co/6tX6hqW/material.webp" alt="Convite Casamento" />
            <p className="nome">Convite Casamento</p>
            <p className="tamanho">18cm x 12cm</p>
            <p className="preco">R$ 40,00</p>
          </Link>
        </div>
        {/* Você pode adicionar mais cards de convites aqui */}
      </div>

      <Footer />
    </div>
  );
}

export default Convites; 