import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Paginas/Home/home';
import Caixinhas from '../Paginas/Caixinhas/caixinhas';
import ProductDetails from '../Paginas/Produto/produto';
import Topo from '../Paginas/Topodebolo/topodebolo';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/caixinhas" element={<Caixinhas />} />
        <Route path="/topo" element={<Topo/>} />
        <Route path="/product/:nome" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
