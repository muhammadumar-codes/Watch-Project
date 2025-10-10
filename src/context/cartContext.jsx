import { createContext } from "react";
import { useState } from "react";

// cartContext
export const cartContext = createContext();

// cart context privider
export default function CartContextProvider({ children }) {
const {Cart ,setCart}=useState([]);


// add to cart
 const addToCart = (product) => {
    const existing = Cart.find((item) => item.id === product.id);

    if (existing) {
      // agar product already Cart me hai, to uska quantity badha do
      setCart(
        Cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // agar product new hai, to add karo
      setCart([...Cart, { ...product, quantity: 1 }]);
    }
  };






 return (
    <>
      <cartContext.Provider value={{Cart, setCart ,addToCart}}>{children}</cartContext.Provider>
    </>
  );
}
