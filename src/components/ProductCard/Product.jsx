import "./Product.css";

export default function Card({ image, name, price, description }) {
  return (
    <>
      <div className="card shadow-lg p-3 mb-4 bg-body rounded" style={{ width: "20rem" }}>
        {/* Watch Image */}
        <img src={image} className="card-img-top watch-img" alt={name} />

        {/* Card Body */}
        <div className="card-body text-center">
          <h5 className="card-title fw-bold">{name}</h5>
          <p className="card-text text-muted">{description}</p>
          <h6 className="price-tag">${price}</h6>
          <a href="#" className="btn btn-gradient">🛒 Buy Now</a>
        </div>
      </div>
    </>
  );
}
