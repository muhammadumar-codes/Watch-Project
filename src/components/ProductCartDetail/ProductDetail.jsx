//css
import "../../styles/ProductDetail.css";
// Button
import Button from "../Button/Button";

import { useParams } from "react-router-dom";
import { useContext } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

// context
import { DataContext } from "../../context/Datacontext";
import { cartContext } from "../../context/CartContext";

export default function ProductCardDetail() {
  // DataContext
  const { watches } = useContext(DataContext);
  // cartContext
  const { addToCart } = useContext(cartContext);

  // taking the unique id of each users!
  const { id } = useParams();
  const watch = watches.find((p) => p.id === +id);

  // ⭐ Function to render stars
  const renderStars = (rating) => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        // full star
        stars.push(<FaStar key={i} color="#FFD700" size={20} />);
      } else if (i - rating < 1) {
        // half star

        stars.push(<FaStarHalfAlt key={i} color="#FFD700" size={20} />);
      } else {
        // empty star
        stars.push(<FaRegStar key={i} color="#FFD700" size={20} />);
      }
    }
    return stars;
  };

  return (
    <>
      <div className="card-container">
        {watch ? (
          <div
            className="cardDetail shadow-sm mb-4 bg-body"
            style={{ width: "60rem" }}
          >
            <div>
              <img
                src={watch.image}
                className="watch-img-detail"
                alt={watch.name}
              />
            </div>
            <div className="card-body-detail-page text-center">
              <h5 className="brand-name-detail">{watch.name}</h5>
              <h6 className="card-title-detail">{watch.brand}</h6>
              <p className="card-textdetail">{watch.description}</p>

              {/* ⭐ Rating Section */}
              <p className="rating-detail">
                {renderStars(watch.rating)} <span>({watch.rating})</span>
              </p>

              <h6 className="price-tag-detail">Rs. {watch.price}</h6>

              <Button className="btn-gradient" onClick={()=>addToCart(watch)}>
                🛒 Add To Cart
              </Button>
            </div>
          </div>
        ) : (
          <h3>No watch found for this ID ⌚</h3>
        )}
      </div>
    </>
  );
}
