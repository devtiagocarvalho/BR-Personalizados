import { CarrinhoProvider } from "../Componentes/Carrinho/CarrinhoContext"
import AppRoutes from "../Rotas/routes"

function App() {
  return (
    <CarrinhoProvider>
      <AppRoutes />
    </CarrinhoProvider>
  )
}

export default App
