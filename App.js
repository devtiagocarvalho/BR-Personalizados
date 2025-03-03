import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Componentes/Header/header';
import Menu from './Componentes/Menu/menu'; // Importando o Menu
import AppRoutes from './Rotas/routes'; // Importando as rotas
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <Router>
      <Header />
      <Menu />
      <AppRoutes /> {/* Usando o componente de rotas aqui */}
      </Router>
  );
}

export default App; 