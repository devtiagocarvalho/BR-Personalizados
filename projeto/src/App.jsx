import { CartProvider } from "../Componentes/Cart/CartContext"
import AppRoutes from "../Rotas/routes"
function App() {
  return (
    <>
    <CartProvider>
    <AppRoutes/>
    </CartProvider>
 
    </>
  )
}

export default App
