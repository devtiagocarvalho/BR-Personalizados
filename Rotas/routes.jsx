// Configuração de rotas da aplicação com React Router DOM
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Paginas/Home/home';
import Caixinhas from '../Paginas/Caixinhas/caixinhas';
import ProductDetails from '../Paginas/Produto/produto';
import Topo from '../Paginas/Topodebolo/topodebolo';
import Escolar from '../Paginas/Escolar/escolar'
import Agendas from '../Paginas/Agendas/agendas';
import Sacolas from '../Paginas/Sacolas/sacolas';
import Batizados from '../Paginas/Batizados/batizados';
import ArtesDigitais from '../Paginas/ArtesDigitais/artesdigitais';
import SobreNos from '../Paginas/Sobre/sobrenos';
import Paineis from '../Paginas/Paineis/paines';
import ScrollToTop from '../Componentes/ScrollToTop/scroll';
import NotFound from '../Paginas/NotFound/notfound';
import Carrinho from '../Componentes/Carrinho/Carrinho';
import Acessorios from '../Paginas/Acessorios/acessorios';
import Convites from '../Paginas/Convites/convites';
import Login from '../Paginas/Login/Login';
import Canecas from '../Paginas/Canecas/canecas';

const AppRoutes = () => {
    return (
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/caixinhas" element={<Caixinhas />} />
        <Route path="/topo" element={<Topo/>} />
        <Route path="/agendas" element={<Agendas/>} />  
        <Route path="/sacolas" element={<Sacolas/>} /> 
        <Route path="/escolar" element={<Escolar/>} />      
        <Route path="/batizados" element={<Batizados/>} />   
        <Route path="/artesdigitais" element={<ArtesDigitais/>} />    
        <Route path="/sobre" element={<SobreNos/>} />   
        <Route path="/paineis" element={<Paineis/>} /> 
        <Route path="/cart" element={<Carrinho />} />
        <Route path="/product/:nome" element={<ProductDetails />} />
        <Route path="/acessorios" element={<Acessorios />} />
        <Route path="/convites" element={<Convites />} />
        <Route path="/login" element={<Login />} />
        <Route path="/canecas" element={<Canecas />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
