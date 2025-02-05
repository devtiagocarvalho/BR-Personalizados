// Componente do cabeçalho principal com logo, navegação e ícones de redes sociais
import './header.css';
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { FiShoppingCart } from "react-icons/fi";
import { useCart } from '../Cart/CartContext';
import imageConfig from '../../config/images';

function Header() {
    const { cartItemCount } = useCart();
    
    const handleLogoClick = () => {
        window.scrollTo(0, 0);
    };

    return (
        <header>
            <div className="logo">  
                <img src={imageConfig.interface.logo} alt="Logo" className="logo-image" />
                <Link to="/" onClick={handleLogoClick}>
                    <span>BR Personalizados</span>
                </Link>
            </div>
            <nav>
                <ul>
                    <li><a href="https://www.instagram.com/brpersonalizadoss_/" target="_blank" rel="noopener noreferrer" className="icon-link"> <InstagramIcon style={{ color: '#E1306C', fontSize: '40px' }} /></a></li>

                    <li><a href="https://www.youtube.com/@tiagocarvalho5571" target="_blank" rel="noopener noreferrer" className="icon-link"> <YouTubeIcon style={{ color: '#E1306C', fontSize: '40px' }} /></a></li>

                    <li><a href="https://api.whatsapp.com/send/?phone=86994639119&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="icon-link"> <WhatsAppIcon style={{ color: '#E1306C', fontSize: '40px' }} /></a></li>

                    <li><a href="https://web.telegram.org/a/" target="_blank" rel="noopener noreferrer" className="icon-link"> <TelegramIcon style={{ color: '#E1306C', fontSize: '40px' }} /></a></li>

                    <li className="cart-icon-container">
                        <Link to="/cart">
                            <FiShoppingCart size={40} />
                            {cartItemCount > 0 && (
                                <span className="cart-count">{cartItemCount}</span>
                            )}
                        </Link>
                    </li>

                    {/*<Link to="/sobre"><li className="sobre" style={{color: 'black', fontSize: '25px'}}>sobre nós</li></Link>*/}

                </ul>
            </nav>
        </header>
    )
}

export default Header;