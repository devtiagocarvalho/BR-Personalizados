import { Link } from 'react-router-dom';
import "./acessorios.css"
import Header from "../../Componentes/Header/header";
import Menu from "../../Componentes/Menu/menu";
import Footer from "../../Componentes/Footer/footer";

function Acessorios() {
  return (
    <div>
      <Header />
      <Menu />
      <h1 className="titulo">Acessórios Personalizados</h1>

      <h2 className="subtitulo">Chaveiros:</h2>
      <div className="imagem-container">
        <div className="card">
          <Link to={`/product/Chaveiro Personalizado`} className="product-link">
            <img src="https://i.ibb.co/prcgcGz/agenda-1.jpg" alt="Chaveiro Personalizado" />
            <p className="nome">Chaveiro Personalizado</p>
            <p className="tamanho">5cm x 5cm</p>
            <p className="preco">R$ 15,00</p>
          </Link>
        </div>
        <div className="card">
          <Link to={`/product/Chaveiro Acrílico`} className="product-link">
            <img src="https://i.ibb.co/6tX6hqW/material.webp" alt="Chaveiro Acrílico" />
            <p className="nome">Chaveiro Acrílico</p>
            <p className="tamanho">4cm x 6cm</p>
            <p className="preco">R$ 20,00</p>
          </Link>
        </div>
      </div>

      <h2 className="subtitulo">Canecas:</h2>
      <div className="imagem-container">
        <div className="card">
          <Link to={`/product/Caneca Personalizada`} className="product-link">
            <img src="https://i.ibb.co/XVCw837/agenda-2.jpg" alt="Caneca Personalizada" />
            <p className="nome">Caneca Personalizada</p>
            <p className="tamanho">9,5cm x 8cm</p>
            <p className="preco">R$ 35,00</p>
          </Link>
        </div>
        <div className="card">
          <Link to={`/product/Caneca Mágica`} className="product-link">
            <img src="https://i.ibb.co/qsZQKsk/agenda-5.webp" alt="Caneca Mágica" />
            <p className="nome">Caneca Mágica</p>
            <p className="tamanho">9,5cm x 8cm</p>
            <p className="preco">R$ 35,00</p>
          </Link>
        </div>
      </div>

      <h2 className="subtitulo">Almofadas:</h2>
      <div className="imagem-container">
        <div className="card">
          <Link to={`/product/Almofada Personalizada`} className="product-link">
            <img src="https://i.ibb.co/6sX0LMc/etiquetas.jpg" alt="Almofada Personalizada" />
            <p className="nome">Almofada Personalizada</p>
            <p className="tamanho">30cm x 30cm</p>
            <p className="preco">R$ 50,00</p>
          </Link>
        </div>
        <div className="card">
          <Link to={`/product/Almofada Decorativa`} className="product-link">
            <img src="https://i.ibb.co/jWKPgMM/l-pis.webp" alt="Almofada Decorativa" />
            <p className="nome">Almofada Decorativa</p>
            <p className="tamanho">30cm x 30cm</p>
            <p className="preco">R$ 55,00</p>
          </Link>
        </div>
      </div>


      <Footer />
    </div>
  );
}

export default Acessorios; 