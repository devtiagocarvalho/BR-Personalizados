import { Link } from 'react-router-dom';
import Header from '../../Componentes/Header/header';
import Menu from '../../Componentes/Menu/menu';
import './notfound.css';

function NotFound() {
    return (
        <>
            <Header />
            <Menu />
            <div className="not-found-container">
                <h1>404</h1>
                <h2>Página não encontrada</h2>
                <p>Desculpe, a página que você está procurando não existe.</p>
                <Link to="/" className="back-home-button">
                    Voltar para a Página Inicial
                </Link>
            </div>
        </>
    );
}

export default NotFound;