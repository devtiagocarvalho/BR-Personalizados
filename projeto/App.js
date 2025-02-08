import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Agendas from './Paginas/Agendas/agendas';
import Escolar from './Paginas/Escolar/escolar'; // Certifique-se de que este caminho está correto
import ArtesDigitais from './Paginas/ArtesDigitais/artesdigitais';
// ... outras importações

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/agendas" component={Agendas} />
        <Route path="/escolar" component={Escolar} />
        <Route path="/artesdigitais" component={ArtesDigitais} />
        {/* ... outras rotas */}
      </Switch>
    </Router>
  );
}

export default App; 