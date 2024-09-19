import './header.css';
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Header() {
    
    return (
        <>
      <header>
      <div className="logo">  <img src="../../imagens/logo.webp" alt="Logo" className="logo-image" /> < Link to={"/"}><span> BR Personalizados</span></Link> </div>
        <nav>
            <ul>
                <li><a href="https://www.instagram.com/brpersonalizadoss_/" target="_blank" rel="noopener noreferrer" className="icon-link"> <InstagramIcon style={{ color: '#E1306C', fontSize: '40px' }} /></a></li>

                <li><a href="https://www.youtube.com/@tiagocarvalho5571" target="_blank" rel="noopener noreferrer" className="icon-link"> <YouTubeIcon style={{ color: '#E1306C', fontSize: '40px' }} /></a></li>

                <li><a href="https://api.whatsapp.com/send/?phone=86994639119&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="icon-link"> <WhatsAppIcon style={{ color: '#E1306C', fontSize: '40px' }} /></a></li>

                <li><a href="https://web.telegram.org/a/" target="_blank" rel="noopener noreferrer" className="icon-link"> <TelegramIcon style={{ color: '#E1306C', fontSize: '40px' }} /></a></li>

                <li className="sobre" style={{color: 'black', fontSize: '25px'}}>sobre nós</li>

            </ul>
        </nav>
        </header>
        
        </>
        
    )
   
    
}

export default Header;