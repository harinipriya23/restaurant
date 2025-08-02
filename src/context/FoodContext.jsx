import { createContext, useState } from "react";

export const FoodContext = createContext(null);
export default function FoodContextProvider({ children }) {
  const [cartItem, setCartItem] = useState({});

  const addToCart = (id) => {
    if (!cartItem[id]) {
      setCartItem((prev) => ({ ...prev, [id]: 1 }));
    } else {
      setCartItem((prev) => ({ ...prev, [id]: prev[id] + 1 }));
    }
  };

  const removeFromCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  const foodContextValues = () => {
    addToCart, removeFromCart, cartItem, setCartItem;
  };
  return (
    <FoodContext.Provider value={foodContextValues}>
      {children}
    </FoodContext.Provider>
  );
}
