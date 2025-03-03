import { CarrinhoProvider } from "../Componentes/Carrinho/CarrinhoContext";
import AppRoutes from "../Rotas/routes";

function App() {
  return (
    <CarrinhoProvider>
      <div className="app-container">
        <AppRoutes />
      </div>
    </CarrinhoProvider>
  );
}

export default App;
