import { Link } from 'react-router-dom';
import "./paineis.css"
import Header from "../../Componentes/Header/header";
import Menu from "../../Componentes/Menu/menu";



function Paineis() {
  return (
    <div>
      <Header />
      <Menu />
      <h1 className="titulo">Paineis</h1>

      <h2 className="subtitulo">Painel Grande:</h2>
      <div className="imagem-container">
        <div className="card">
          <Link to={`/product/agenda teste`} className="product-link">
            <img src="https://i.ibb.co/nD9FJgB/painel-festa-e-aniversario-banner-1-80-x-1-20-personalizado-decoracao-personalizado.webp" alt="agenda teste" />
            <p className="nome">Painel Batman</p>
            <p className="tamanho">1,80m x 1,20m</p>
            <p className="preco">R$ 10,00</p>
          </Link>
        </div>
        <div className="card">
        <Link to={`/product/Caixinha milk 1`} className="product-link">
            <img src="https://i.ibb.co/Lk1xkvQ/caixinha-4.webp" alt="Caixinha milk 2" />
            <p className="nome">Painel Superman</p>
            <p className="tamanho">1,80m x 1,20m</p>
            <p className="preco">R$ 10,00</p>
          </Link>
        </div>
        <div className="card">
        <Link to={`/product/Caixinha milk 1`} className="product-link">
            <img src="https://i.ibb.co/Lk1xkvQ/caixinha-4.webp" alt="Caixinha milk 3" />
            <p className="nome">agenda Teste</p>
            <p className="preco">R$ 10,00</p>
          </Link>
        </div>
        <div className="card">
          <Link to={`/product/Caixinha milk 1`} className="product-link">
            <img src="https://i.ibb.co/Lk1xkvQ/caixinha-4.webp" alt="Caixinha milk 4" />
            <p className="nome"> Teste</p>
            <p className="preco">R$ 10,00</p>
          </Link>
        </div>
        <div className="card">
          <Link to={`/product/Caixinha milk 1`} className="product-link">
            <img src="https://i.ibb.co/Lk1xkvQ/caixinha-4.webp" alt="Caixinha milk 5" />
            <p className="nome">Teste</p>
            <p className="preco">R$ 10,00</p>
          </Link>
        </div>
        <div className="card">
          <Link to={`/product/Caixinha milk 1`} className="product-link">
            <img src="https://i.ibb.co/Lk1xkvQ/caixinha-4.webp" alt="Caixinha milk 6" />
            <p className="nome"> Teste</p>
            <p className="preco">R$ 10,00</p>
          </Link>
        </div>
      </div>



      <h2 className="subtitulo">Agenda teste 2:</h2>
      <div className="imagem-container">
        <div className="card">
          <Link to={`/product/selva`} className="product-link">
            <img src="https://i.ibb.co/5vfz7fY/selva.jpg" alt="selva" />
            <p className="nome">agenda</p>
            <p className="preco">R$ 10,00</p>
          </Link>
        </div>
        <div className="card">
          <Link to={`/product/selva`} className="product-link">
            <img src="https://i.ibb.co/Lk1xkvQ/caixinha-4.webp" alt="Caixa pirâmide 2" />
            <p className="nome">agenda Teste</p>
            <p className="preco">R$ 10,00</p>
          </Link>
        </div>
        <div className="card">
          <Link to={`/product/Caixa pirâmide 3`} className="product-link">
            <img src="https://i.ibb.co/Lk1xkvQ/caixinha-4.webp" alt="Caixa pirâmide 3" />
            <p className="nome">agenda Teste</p>
            <p className="preco">R$ 10,00</p>
          </Link>
        </div>
        <div className="card">
          <Link to={`/product/Caixa pirâmide 4`} className="product-link">
            <img src="https://i.ibb.co/Lk1xkvQ/caixinha-4.webp" alt="Caixa pirâmide 4" />
            <p className="nome">agenda Teste</p>
            <p className="preco">R$ 10,00</p>
          </Link>
        </div>
        <div className="card">
          <Link to={`/product/Caixa pirâmide 5`} className="product-link">
            <img src="https://i.ibb.co/Lk1xkvQ/caixinha-4.webp" alt="Caixa pirâmide 5" />
            <p className="nome"> Teste</p>
            <p className="preco">R$ 10,00</p>
          </Link>
        </div>
      </div>
      
      <h2 className="subtitulo">Agenda teste:</h2>
      <div className="imagem-container">
        <div className="card">
          <Link to={`/product/Caixa Quadrada 1`} className="product-link">
            <img src="https://i.ibb.co/Lk1xkvQ/caixinha-4.webp" alt="Caixa Quadrada 1" />
            <p className="nome"> Teste</p>
            <p className="preco">R$ 10,00</p>
          </Link>
        </div>
        <div className="card">
          <Link to={`/product/Caixa Quadrada 2`} className="product-link">
            <img src="https://i.ibb.co/Lk1xkvQ/caixinha-4.webp" alt="Caixa Quadrada 2" />
            <p className="nome"> Teste</p>
            <p className="preco">R$ 10,00</p>
          </Link>
        </div>
        <div className="card">
          <Link to={`/product/Caixa Quadrada 3`} className="product-link">
            <img src="https://i.ibb.co/Lk1xkvQ/caixinha-4.webp" alt="Caixa Quadrada 3" />
            <p className="nome"> Teste</p>
            <p className="preco">R$ 10,00</p>
          </Link>
        </div>
        <div className="card">
          <Link to={`/product/Caixa Quadrada 4`} className="product-link">
            <img src="https://i.ibb.co/Lk1xkvQ/caixinha-4.webp" alt="Caixa Quadrada 4" />
            <p className="nome"> Teste</p>
            <p className="preco">R$ 10,00</p>
          </Link>
        </div>
        <div className="card">
          <Link to={`/product/Caixa Quadrada 5`} className="product-link">
            <img src="https://i.ibb.co/Lk1xkvQ/caixinha-4.webp" alt="Caixa Quadrada 5" />
            <p className="nome">Teste</p>
            <p className="preco">R$ 10,00</p>
          </Link>
        </div>
        </div>
       </div>
  );
}

export default Paineis;

