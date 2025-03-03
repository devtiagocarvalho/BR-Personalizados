import { Link } from "react-router-dom";
import "./imagem.css"


function ImgFinal() {
   return (
       <div className="imgfinal">
           <Link to="/acessorios" className="link-imagem">
               <span className="outros">
                   <img src="https://i.ibb.co/Jy18m44/banner-1.webp" alt="Banner 1" />
               </span>
           </Link>
           <Link to="/paineis">
               <span className="outros">
                   <img src="https://i.ibb.co/nD9FJgB/painel-festa-e-aniversario-banner-1-80-x-1-20-personalizado-decoracao-personalizado.webp" alt="painel" />
               </span>
           </Link>
       </div>
   );
}

export default ImgFinal;