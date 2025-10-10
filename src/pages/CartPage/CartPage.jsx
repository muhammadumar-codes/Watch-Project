import { useContext } from "react";
import { cartContext } from "../../context/CartContext";
import "../../styles/Cart.css";

export default function Cart() {
  const {
    Cart,
    removeFromCart,
    decreaseQuantity,
    addToCart,
    clearCart,
    totalPrice,
  } = useContext(cartContext);

  return (
    <div className="cart-page">
      {Cart.length === 0 ? (
        <p className="cart-empty-message">Your cart is empty 😔</p>
      ) : (
        <>
          {Cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} className="cart-img" />
              <div className="cart-details">
                <h3>{item.name}</h3>
                <p>Rs {item.price}</p>
                <div className="quantity-controls">
                  <button onClick={() => decreaseQuantity(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => addToCart(item)}>+</button>
                </div>
                <p>Total: Rs {item.price * item.quantity}</p>
                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                   Remove
                </button>
              </div>
            </div>
          ))}

          <div className="cart-summary">
            <h3>Total: Rs {totalPrice}</h3>
            <button className="clear-btn" onClick={clearCart}>
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
}
