import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const newItems = [...prevItems, item];
      updateTotal(newItems);
      return newItems;
    });
  };

  const removeFromCart = (indexToRemove) => {
    setCartItems((prevItems) => {
      const newItems = prevItems.filter((_, index) => index !== indexToRemove);
      updateTotal(newItems);
      return newItems;
    });
  };

  const updateTotal = (items) => {
    const newTotal = items.reduce((sum, currentItem) => {
      let price = 0;

      if (typeof currentItem.price === 'string') {
        price = parseFloat(currentItem.price.replace('€', '').trim());
      } else if (typeof currentItem.price === 'number') {
        price = currentItem.price;
      }

      return sum + price;
    }, 0);

    setTotal(newTotal);
  };

  const clearCart = () => {
    setCartItems([]);
    setTotal(0);
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      total,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
