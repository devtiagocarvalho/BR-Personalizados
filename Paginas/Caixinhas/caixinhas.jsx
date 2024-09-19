import { Link } from 'react-router-dom';
import "./caixinhas.css";
import Header from "../../Componentes/Header/header";
import Menu from "../../Componentes/Menu/menu";


function Caixinhas() {
  return (
    <div>
      <Header />
      <Menu />
      <h1 className="titulo">Caixinhas</h1>

      <h2 className="subtitulo">Caixinha milk:</h2>
      <div className="imagem-container">
        <div className="card">
          <Link to={`/product/detetive labrador`} className="product-link">
            <img src="https://i.ibb.co/k0QYfWX/cachorro.jpg" alt="detetive labrador" />
            <p className="nome">Detetive Labrador</p>
            <p className="preco">R$ 10,00</p>
          </Link>
        </div>
        <div className="card">
        <Link to={`/product/Caixinha milk 1`} className="product-link">
            <img src="https://i.ibb.co/Lk1xkvQ/caixinha-4.webp" alt="Caixinha milk 2" />
            <p className="nome">Caixinha Teste</p>
            <p className="preco">R$ 10,00</p>
          </Link>
        </div>
        <div className="card">
        <Link to={`/product/Caixinha milk 1`} className="product-link">
            <img src="https://i.ibb.co/Lk1xkvQ/caixinha-4.webp" alt="Caixinha milk 3" />
            <p className="nome">Caixinha Teste</p>
            <p className="preco">R$ 10,00</p>
          </Link>
        </div>
        <div className="card">
          <Link to={`/product/Caixinha milk 1`} className="product-link">
            <img src="https://i.ibb.co/Lk1xkvQ/caixinha-4.webp" alt="Caixinha milk 4" />
            <p className="nome">Caixinha Teste</p>
            <p className="preco">R$ 10,00</p>
          </Link>
        </div>
        <div className="card">
          <Link to={`/product/Caixinha milk 1`} className="product-link">
            <img src="https://i.ibb.co/Lk1xkvQ/caixinha-4.webp" alt="Caixinha milk 5" />
            <p className="nome">Caixinha Teste</p>
            <p className="preco">R$ 10,00</p>
          </Link>
        </div>
        <div className="card">
          <Link to={`/product/Caixinha milk 1`} className="product-link">
            <img src="https://i.ibb.co/Lk1xkvQ/caixinha-4.webp" alt="Caixinha milk 6" />
            <p className="nome">Caixinha Teste</p>
            <p className="preco">R$ 10,00</p>
          </Link>
        </div>
      </div>



      <h2 className="subtitulo">Caixa pirâmide:</h2>
      <div className="imagem-container">
        <div className="card">
          <Link to={`/product/selva`} className="product-link">
            <img src="https://i.ibb.co/5vfz7fY/selva.jpg" alt="selva" />
            <p className="nome">Caixinha Teste</p>
            <p className="preco">R$ 10,00</p>
          </Link>
        </div>
        <div className="card">
          <Link to={`/product/selva`} className="product-link">
            <img src="https://i.ibb.co/Lk1xkvQ/caixinha-4.webp" alt="Caixa pirâmide 2" />
            <p className="nome">Caixinha Teste</p>
            <p className="preco">R$ 10,00</p>
          </Link>
        </div>
        <div className="card">
          <Link to={`/product/Caixa pirâmide 3`} className="product-link">
            <img src="https://i.ibb.co/Lk1xkvQ/caixinha-4.webp" alt="Caixa pirâmide 3" />
            <p className="nome">Caixinha Teste</p>
            <p className="preco">R$ 10,00</p>
          </Link>
        </div>
        <div className="card">
          <Link to={`/product/Caixa pirâmide 4`} className="product-link">
            <img src="https://i.ibb.co/Lk1xkvQ/caixinha-4.webp" alt="Caixa pirâmide 4" />
            <p className="nome">Caixinha Teste</p>
            <p className="preco">R$ 10,00</p>
          </Link>
        </div>
        <div className="card">
          <Link to={`/product/Caixa pirâmide 5`} className="product-link">
            <img src="https://i.ibb.co/Lk1xkvQ/caixinha-4.webp" alt="Caixa pirâmide 5" />
            <p className="nome">Caixinha Teste</p>
            <p className="preco">R$ 10,00</p>
          </Link>
        </div>
      </div>
      
      <h2 className="subtitulo">Caixa Quadrada:</h2>
      <div className="imagem-container">
        <div className="card">
          <Link to={`/product/Caixa Quadrada 1`} className="product-link">
            <img src="https://i.ibb.co/Lk1xkvQ/caixinha-4.webp" alt="Caixa Quadrada 1" />
            <p className="nome">Caixinha Teste</p>
            <p className="preco">R$ 10,00</p>
          </Link>
        </div>
        <div className="card">
          <Link to={`/product/Caixa Quadrada 2`} className="product-link">
            <img src="https://i.ibb.co/Lk1xkvQ/caixinha-4.webp" alt="Caixa Quadrada 2" />
            <p className="nome">Caixinha Teste</p>
            <p className="preco">R$ 10,00</p>
          </Link>
        </div>
        <div className="card">
          <Link to={`/product/Caixa Quadrada 3`} className="product-link">
            <img src="https://i.ibb.co/Lk1xkvQ/caixinha-4.webp" alt="Caixa Quadrada 3" />
            <p className="nome">Caixinha Teste</p>
            <p className="preco">R$ 10,00</p>
          </Link>
        </div>
        <div className="card">
          <Link to={`/product/Caixa Quadrada 4`} className="product-link">
            <img src="https://i.ibb.co/Lk1xkvQ/caixinha-4.webp" alt="Caixa Quadrada 4" />
            <p className="nome">Caixinha Teste</p>
            <p className="preco">R$ 10,00</p>
          </Link>
        </div>
        <div className="card">
          <Link to={`/product/Caixa Quadrada 5`} className="product-link">
            <img src="https://i.ibb.co/Lk1xkvQ/caixinha-4.webp" alt="Caixa Quadrada 5" />
            <p className="nome">Caixinha Teste</p>
            <p className="preco">R$ 10,00</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Caixinhas;

