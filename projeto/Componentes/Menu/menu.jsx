// Componente de navegação principal com links para as diferentes categorias de produtos
import { Link } from 'react-router-dom';
import './Menu.css';

function Menu() {
    return (
        <>
            <div className='containermenu'>
                <ul>
                <Link to="/agendas"><li>AGENDAS</li></Link>
                <Link to="/sacolas"><li>SACOLAS PERSONALIZADAS</li></Link>
                <Link to="/escolar"> <li>MATERIAL ESCOLAR</li> </Link>   
                <Link to="/batizados"><li>BATIZADOS</li></Link>
                <Link to="/artesdigitais"><li>ARTES DIGITAIS</li></Link>
                </ul>
            </div>
               </>
    );
}

export default Menu;
