/* eslint-disable react/prop-types */

import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [title, setTitle] = useState('My E-commerce Site');

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.id !== productId)
    );
  };

   // Function to edit the title
   const editTitle = (newTitle) => {
    setTitle(newTitle);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, searchQuery, setSearchQuery,title,editTitle }}>
      {children}
    </CartContext.Provider>
  );
};
