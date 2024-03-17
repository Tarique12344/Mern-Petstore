// CartContext.js
import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      // Check if the item is already in the cart
      const isItemInCart = state.cartItems.some(item => item.id === action.payload.id);

      if (isItemInCart) {
        // If item is already in the cart, you can display a message or handle it as needed.
        console.log('Item is already in the cart.');
        return state;
      }

      // Your logic to handle adding to the cart
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };

    case 'REMOVE_FROM_CART':
      // Your logic to handle removing from the cart
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload.id),
      };

    // ... other cases as needed
    default:
      return state;
  }
};

export const CartProviderfunc = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { cartItems: [] });

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
