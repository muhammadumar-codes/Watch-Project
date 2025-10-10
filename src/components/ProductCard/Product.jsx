import "../../styles/Product.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { cartContext } from "../../context/CartContext";

export default function Product({ watches }) {
  const navigate = useNavigate();
  const { addToCart } = useContext(cartContext);

  return (
    <div className="card-container">
      {watches.length > 0 ? (
        watches.map((item) => (
          <div
            className="card shadow-sm mb-4 bg-body rounded"
            style={{ width: "22rem" }}
            key={item.id}
          >
            <img
              src={item.image}
              className="watch-img"
              alt={item.name}
              onClick={() => navigate(`productDetail/${item.id}`)}
            />
            <div className="card-body text-center">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.description}</p>
              <h6 className="price-tag">Rs {item.price}</h6>

              <button
                className="btn-gradient"
                onClick={() => addToCart(item)}
              >
                🛒 Add To Cart
              </button>
            </div>
          </div>
        ))
      ) : (
        <h3>No watches found for this category ⌚</h3>
      )}
    </div>
  );
}
