import { createContext, useContext, useState, useEffect } from 'react';

const CarrinhoContext = createContext();

export const useCart = () => {
    return useContext(CarrinhoContext);
};

export const CarrinhoProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        const savedItems = localStorage.getItem('cartItems');
        return savedItems ? JSON.parse(savedItems) : [];
    });

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product, quantity = 1) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.nome === product.nome);
            if (existingItem) {
                return prevItems.map(item =>
                    item.nome === product.nome
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            }
            return [...prevItems, { ...product, quantity }];
        });
    };

    const removeFromCart = (productName) => {
        setCartItems(prevItems => prevItems.filter(item => item.nome !== productName));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const cartItemCount = cartItems.reduce((total, item) => total + (item.quantity || 0), 0);

    return (
        <CarrinhoContext.Provider 
            value={{ 
                cartItems, 
                addToCart, 
                removeFromCart, 
                clearCart, 
                cartItemCount 
            }}
        >
            {children}
        </CarrinhoContext.Provider>
    );
}; 