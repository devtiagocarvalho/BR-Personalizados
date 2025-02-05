import { Link } from 'react-router-dom';
import "./escolar.css"
import Header from "../../Componentes/Header/header";
import Menu from "../../Componentes/Menu/menu";



function Escolar() {
  return (
    <div>
      <Header />
      <Menu />
      <h1 className="titulo">Materiais escolares personalizados</h1>

      <h2 className="subtitulo">Teste 1:</h2>
      <div className="imagem-container">
        <div className="card">
          <Link to={`/product/lapis`} className="product-link">
            <img src="https://i.ibb.co/jWKPgMM/l-pis.webp" alt="lapis" />
            <p className="nome">Lápis teste</p>
            <p className="tamanho">17,5cm</p>
            <p className="preco">R$ 10,00</p>
          </Link>
        </div>
        <div className="card">
        <Link to={`/product/Caixinha milk 1`} className="product-link">
            <img src="https://i.ibb.co/Lk1xkvQ/caixinha-4.webp" alt="Caixinha milk 2" />
            <p className="nome">lápis Teste</p>
            <p className="tamanho">17,5cm</p>
            <p className="preco">R$ 10,00</p>
          </Link>
        </div>
        <div className="card">
        <Link to={`/product/Caixinha milk 1`} className="product-link">
            <img src="https://i.ibb.co/Lk1xkvQ/caixinha-4.webp" alt="Caixinha milk 3" />
            <p className="nome">agenda Teste</p>
            <p className="tamanho">17,5cm</p>
            <p className="preco">R$ 10,00</p>
          </Link>
        </div>
        <div className="card">
          <Link to={`/product/Caixinha milk 1`} className="product-link">
            <img src="https://i.ibb.co/Lk1xkvQ/caixinha-4.webp" alt="Caixinha milk 4" />
            <p className="nome">planner Teste</p>
            <p className="tamanho">17,5cm</p>
            <p className="preco">R$ 10,00</p>
          </Link>
        </div>
        <div className="card">
          <Link to={`/product/Caixinha milk 1`} className="product-link">
            <img src="https://i.ibb.co/Lk1xkvQ/caixinha-4.webp" alt="Caixinha milk 5" />
            <p className="nome">Caderno Teste</p>
            <p className="tamanho">17,5cm</p>
            <p className="preco">R$ 10,00</p>
          </Link>
        </div>
        <div className="card">
          <Link to={`/product/Caixinha milk 1`} className="product-link">
            <img src="https://i.ibb.co/Lk1xkvQ/caixinha-4.webp" alt="Caixinha milk 6" />
            <p className="nome">caderneta Teste</p>
            <p className="tamanho">17,5cm</p>
            <p className="preco">R$ 10,00</p>
          </Link>
        </div>
      </div>



      <h2 className="subtitulo">Adesivos para caderno:</h2>
      <div className="imagem-container">
        <div className="card">
          <Link to={`/product/selva`} className="product-link">
            <img src="https://i.ibb.co/5vfz7fY/selva.jpg" alt="selva" />
            <p className="nome">Caixinha Teste</p>
            <p className="tamanho">17,5cm</p>
            <p className="preco">R$ 10,00</p>
          </Link>
        </div>
        <div className="card">
          <Link to={`/product/selva`} className="product-link">
            <img src="https://i.ibb.co/Lk1xkvQ/caixinha-4.webp" alt="Caixa pirâmide 2" />
            <p className="nome">Caixinha Teste</p>
            <p className="tamanho">17,5cm</p>
            <p className="preco">R$ 10,00</p>
          </Link>
        </div>
        <div className="card">
          <Link to={`/product/Caixa pirâmide 3`} className="product-link">
            <img src="https://i.ibb.co/Lk1xkvQ/caixinha-4.webp" alt="Caixa pirâmide 3" />
            <p className="nome">Caixinha Teste</p>
            <p className="tamanho">17,5cm</p>
            <p className="preco">R$ 10,00</p>
          </Link>
        </div>
        <div className="card">
          <Link to={`/product/Caixa pirâmide 4`} className="product-link">
            <img src="https://i.ibb.co/Lk1xkvQ/caixinha-4.webp" alt="Caixa pirâmide 4" />
            <p className="nome">Caixinha Teste</p>
            <p className="tamanho">17,5cm</p>
            <p className="preco">R$ 10,00</p>
          </Link>
        </div>
        <div className="card">
          <Link to={`/product/Caixa pirâmide 5`} className="product-link">
            <img src="https://i.ibb.co/Lk1xkvQ/caixinha-4.webp" alt="Caixa pirâmide 5" />
            <p className="nome">Caixinha Teste</p>
            <p className="tamanho">17,5cm</p>
            <p className="preco">R$ 10,00</p>
          </Link>
        </div>
      </div>
      
      <h2 className="subtitulo">Caderneta:</h2>
      <div className="imagem-container">
        <div className="card">
          <Link to={`/product/Caixa Quadrada 1`} className="product-link">
            <img src="https://i.ibb.co/Lk1xkvQ/caixinha-4.webp" alt="Caixa Quadrada 1" />
            <p className="nome">Caixinha Teste</p>
            <p className="tamanho">17,5cm</p>
            <p className="preco">R$ 10,00</p>
          </Link>
        </div>
        <div className="card">
          <Link to={`/product/Caixa Quadrada 2`} className="product-link">
            <img src="https://i.ibb.co/Lk1xkvQ/caixinha-4.webp" alt="Caixa Quadrada 2" />
            <p className="nome">Caixinha Teste</p>
            <p className="tamanho">17,5cm</p>
            <p className="preco">R$ 10,00</p>
          </Link>
        </div>
        <div className="card">
          <Link to={`/product/Caixa Quadrada 3`} className="product-link">
            <img src="https://i.ibb.co/Lk1xkvQ/caixinha-4.webp" alt="Caixa Quadrada 3" />
            <p className="nome">Caixinha Teste</p>
            <p className="tamanho">17,5cm</p>
            <p className="preco">R$ 10,00</p>
          </Link>
        </div>
        <div className="card">
          <Link to={`/product/Caixa Quadrada 4`} className="product-link">
            <img src="https://i.ibb.co/Lk1xkvQ/caixinha-4.webp" alt="Caixa Quadrada 4" />
            <p className="nome">Caixinha Teste</p>
            <p className="tamanho">17,5cm</p>
            <p className="preco">R$ 10,00</p>
          </Link>
        </div>
        <div className="card">
          <Link to={`/product/Caixa Quadrada 5`} className="product-link">
            <img src="https://i.ibb.co/Lk1xkvQ/caixinha-4.webp" alt="Caixa Quadrada 5" />
            <p className="nome">Caixinha Teste</p>
            <p className="tamanho">17,5cm</p>
            <p className="preco">R$ 10,00</p>
          </Link>
        </div>
        </div>
       </div>
  );
}

export default Escolar;

