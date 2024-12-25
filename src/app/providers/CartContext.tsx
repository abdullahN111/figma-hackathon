// CartContext.tsx
import React, { createContext, useState, useContext, ReactNode } from "react";

// Define the cart item type
interface CartItem {
  id: string;
  name: string;
  quantity: number;
}

// Define the context state type
interface CartContextType {
  cart: CartItem[];

  addToCart: (item: CartItem) => void;
  cartItems: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
}

// Create the context with a default value of undefined (will throw an error if used outside provider)
const CartContext = createContext<CartContextType | undefined>(undefined);

// Define the provider component, correctly typing the children prop
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addItem = (item: CartItem) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeItem = (id: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart: cartItems,
        cartItems: cartItems,
        addItem: addItem,
        addToCart: addItem,
        removeItem: removeItem,
        clearCart: clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
