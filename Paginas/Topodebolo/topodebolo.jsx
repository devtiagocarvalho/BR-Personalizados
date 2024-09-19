import { Link } from 'react-router-dom';
import Header from "../../Componentes/Header/header";
import Menu from "../../Componentes/Menu/menu";
import "./topodebolo.css"


function Topo() {
  return (
    <div>
      <Header />
      <Menu />
      <h1 className="titulo">Topos de bolos</h1>

      <h2 className="subtitulo">Topos simples:</h2>
      <div className="imagem-container">
        <div className="card">
          <Link to={`/product/Topo do batman`} className="product-link">
            <img src="https://i.ibb.co/Jc9G153/batman.jpg" alt="topo do batman" />
            <p className="nome">Topo do Batman</p>
            <p className="preco">R$ 2,00</p>
          </Link>
        </div>
         </div>    


      <h2 className="subtitulo">Caixa pirâmide:</h2>
      <div className="imagem-container">
        <div className="card">
        <Link to={`/product/Topo do batman`} className="product-link">
            <img src="https://i.ibb.co/Jc9G153/batman.jpg" alt="topo do batman" />
            <p className="nome">Topo do Batman</p>
            <p className="preco">R$ 2,00</p>
          </Link>      

        </div>
        <div className="card">
          

        </div>
        <div className="card">
         

        </div>
        <div className="card">
         

        </div>
        <div className="card">
         

        </div>
      </div>
      
      <h2 className="subtitulo">Caixa Quadrada:</h2>
      <div className="imagem-container">
        <div className="card">
        

        </div>
        <div className="card">
        

        </div>
        <div className="card">
         

        </div>
        <div className="card">
         

        </div>
        <div className="card">
        

        </div>
      </div>
    </div>
  );
}

export default Topo;

