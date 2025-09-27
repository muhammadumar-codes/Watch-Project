import { useParams } from "react-router-dom";

// for-using context api 
import { useContext } from "react";

//css
import "./ProductDetail.css";
//data
import {DataContext} from "../DataContext/Datacontext"

export default function ProductDetails() {
const {watches}=useContext(DataContext)
  // Taking the parameter as id
  const { id } = useParams();

  // convert id (string → number) and find product
  const watch = watches.find((p) => p.id === +id);

  //css

  // showing card on Detail page
  return (
    <>
      <div className="card-container">
        {watch ? (
          <div
            className="cardDetail shadow-sm mb-4 bg-body "
            style={{ width: "60rem" }}
          >
            <div>
              {" "}
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
              <h6 className="price-tag-detail">Rs. {watch.price}</h6>

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
