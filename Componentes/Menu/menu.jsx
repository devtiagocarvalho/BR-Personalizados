// Componente de navegação principal com links para as diferentes categorias de produtos
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PersonIcon from '@mui/icons-material/Person'; // Ícone para login

function Menu() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <>
            <button className="menu-hamburguer" onClick={toggleMenu}>
                <MenuIcon />
            </button>

            <div ref={menuRef} className={`containermenu ${isOpen ? 'open' : ''}`}>
                <div className="menu-header">
                    <button className="close-button" onClick={toggleMenu}>
                        <CloseIcon />
                    </button>
                    <div className="menu-user-section">
                        <p className="menu-title">Entre ou cadastre-se<br />para ver seus pedidos</p>
                        <div className="menu-actions">
                            <Link to="/cart" onClick={toggleMenu}>
                                <ReceiptIcon /> Meus Pedidos
                            </Link>
                            <Link to="/login" onClick={toggleMenu}>
                                <PersonIcon /> Login
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="menu-content">
                    <ul>
                        <Link to="/agendas" onClick={toggleMenu}><li>AGENDAS</li></Link>
                        <Link to="/sacolas" onClick={toggleMenu}><li>SACOLAS PERSONALIZADAS</li></Link>
                        <Link to="/escolar" onClick={toggleMenu}><li>MATERIAL ESCOLAR</li></Link>
                        <Link to="/batizados" onClick={toggleMenu}><li>BATIZADOS</li></Link>
                        <Link to="/artesdigitais" onClick={toggleMenu}><li>ARTES DIGITAIS</li></Link>
                        <Link to="/canecas" onClick={toggleMenu}><li>CANECAS</li></Link>
                     
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Menu;
