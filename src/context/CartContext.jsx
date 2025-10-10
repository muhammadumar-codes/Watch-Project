import { createContext } from "react";
import { useState } from "react";

export const cartContext = createContext();
// context provider

export default function cartContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  return (
    <>
      <cartContext.Provider value={{ cart, setCart }}>
        {children}
      </cartContext.Provider>
    </>
  );
}
