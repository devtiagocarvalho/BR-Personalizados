// Gerenciador de estado global do carrinho com persistência em localStorage
import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  // Inicializa o estado com os itens do localStorage ou array vazio
  const [cartItems, setCartItems] = useState(() => {
    const savedItems = localStorage.getItem('cartItems');
    return savedItems ? JSON.parse(savedItems) : [];
  });

  // Atualiza o localStorage sempre que cartItems mudar
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, quantity) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(item => item.nome === product.nome);
      if (existingItem) {
        return prevItems.map(item => 
          item.nome === product.nome ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prevItems, { ...product, quantity }];
    });
  };

  const removeFromCart = (productName) => {
    setCartItems((prevItems) => prevItems.filter(item => item.nome !== productName));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  // Calcula o total de itens no carrinho
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, cartItemCount }}>
      {children}
    </CartContext.Provider>
  );
};
