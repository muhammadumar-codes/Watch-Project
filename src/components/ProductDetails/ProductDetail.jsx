import { useParams } from "react-router-dom";

//data
import { watches } from "../../components/Data/Data";

export default function ProductDetails() {
  // Taking the parameter as id
  const {id}=useParams();

  // convert id (string → number) and find product
  const watch = watches.find((p) => p.id === +id);

  // showing card on Detail page
  return (
    <>
      <div className="card-container">
        {watch ? (
          <div
            className="card shadow-sm mb-4 bg-body rounded"
            style={{ width: "22rem" }}
          >
            <img src={watch.image} className="watch-img" alt={watch.name} />
            <div className="card-body text-center">
              <h5 className="card-title">{watch.name}</h5>
              <p className="card-text">{watch.description}</p>
              <h6 className="price-tag">Rs. {watch.price}</h6>
              <a href="#" className="btn-gradient">
                🛒 Add To Cart
              </a>
            </div>
          </div>
        ) : (
          <h3>No watch found for this ID ⌚</h3>
        )}
      </div>
    </>
  );
}
