import React, { createContext, useState } from 'react';

const CartContext = createContext({
    items: [],
    addItem: () => { },
    removeItem: () => { }, 
    incrementItem: () => {}, 
  decrementItem: () => {},
    
});

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addItem = (item) => {
        setCartItems([...cartItems, item]);
    };

    const removeItem = (itemName) => {
        setCartItems(cartItems.filter((item) => item.name !== itemName));
    };

    const incrementItem = (itemName) => {
        setCartItems(cartItems.map((item) => 
          item.name === itemName ? { ...item, quantity: item.quantity + 1 } : item 
        ));
      };
    
      const decrementItem = (itemName) => {
        setCartItems(cartItems.map((item) => 
          item.name === itemName ? { ...item, quantity: Math.max(item.quantity - 1, 0) } : item
        ));
      };

    const contextValue = {
        items: cartItems,
        addItem,
        removeItem,
        incrementItem,
        decrementItem,
    };

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
};

export { CartContext, CartProvider };
