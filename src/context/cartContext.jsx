import { createContext, useState, useEffect } from "react";

// Create Context
export const cartContext = createContext();

// Cart Context Provider
export default function CartContextProvider({ children }) {
  // ✅ Load initial cart from localStorage if available
  const [Cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  // ✅ Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(Cart));
  }, [Cart]);

  // ✅ Add item to cart
  const addToCart = (product) => {
    const existing = Cart.find((item) => item.id === product.id);

    if (existing) {
      setCart(
        Cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...Cart, { ...product, quantity: 1 }]);
    }
  };

  // ✅ Remove item from cart
  const removeFromCart = (id) => {
    setCart(Cart.filter((item) => item.id !== id));
  };

  // ✅ Decrease quantity
  const decreaseQuantity = (id) => {
    setCart(
      Cart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity > 1 ? item.quantity - 1 : 1,
            }
          : item
      )
    );
  };

  // ✅ Clear cart
  const clearCart = () => {
    setCart([]);
  };

  // ✅ Calculate total price
  const totalPrice = Cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <cartContext.Provider
      value={{
        Cart,
        addToCart,
        removeFromCart,
        decreaseQuantity,
        clearCart,
        totalPrice,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}
