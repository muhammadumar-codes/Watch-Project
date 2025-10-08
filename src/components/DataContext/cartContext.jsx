import { createContext } from "react";
import { useState } from "react";
const DataContext = createContext();

export default function CartContextProvider({ children }) {
const {Cart ,setCart}=useState();




 return (
    <>
      <DataContext.Provider value={{Cart, setCart}}>{children}</DataContext.Provider>
    </>
  );
}
