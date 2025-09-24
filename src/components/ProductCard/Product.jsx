import "./Product.css";

export default function Card() {
// Prodcuts carts

const watches = [
  {
    id: 1,
    name: "Rolex Submariner",
    description: "Luxury diving watch with 300m water resistance.",
    price: 8999,
    category: "Male",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
  },
  {
    id: 2,
    name: "Omega Speedmaster",
    description: "Moonwatch, classic chronograph worn by NASA astronauts.",
    price: 7599,
    category: "Male",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea"
  },
  {
    id: 3,
    name: "Tag Heuer Carrera",
    description: "Racing-inspired chronograph with sporty design.",
    price: 5499,
    category: "Male",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e"
  },
  {
    id: 4,
    name: "Seiko Prospex",
    description: "Affordable professional diving watch with automatic movement.",
    price: 699,
    category: "Unisex",
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f"
  },
  {
    id: 5,
    name: "Casio G-Shock",
    description: "Shock-resistant sports watch with rugged durability.",
    price: 199,
    category: "Male",
    image: "https://images.unsplash.com/photo-1503602642458-232111445657"
  },
  {
    id: 6,
    name: "Audemars Piguet Royal Oak",
    description: "Iconic luxury watch with octagonal bezel.",
    price: 29999,
    category: "Male",
    image: "https://images.unsplash.com/photo-1526045612212-70caf35c14df"
  },
  {
    id: 7,
    name: "Patek Philippe Nautilus",
    description: "Prestigious Swiss luxury sports watch.",
    price: 49999,
    category: "Male",
    image: "https://images.unsplash.com/photo-1549921296-3a0b4c5c9d4c"
  },
  {
    id: 8,
    name: "Breitling Navitimer",
    description: "Pilot’s watch with slide rule bezel.",
    price: 6599,
    category: "Male",
    image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3"
  },
  {
    id: 9,
    name: "Cartier Santos",
    description: "Elegant square watch with history of aviation.",
    price: 8999,
    category: "Female",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
  },
  {
    id: 10,
    name: "Tissot PRX",
    description: "Affordable Swiss watch with integrated bracelet design.",
    price: 499,
    category: "Unisex",
    image: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34"
  },
  {
    id: 11,
    name: "Longines HydroConquest",
    description: "Diving watch with ceramic bezel and Swiss movement.",
    price: 1299,
    category: "Male",
    image: "https://images.unsplash.com/photo-1539883371375-a67a5e65b731"
  },
  {
    id: 12,
    name: "Hublot Big Bang",
    description: "Bold and innovative luxury sports watch.",
    price: 15999,
    category: "Male",
    image: "https://images.unsplash.com/photo-1545235617-9465d2a55698"
  },
  {
    id: 13,
    name: "IWC Pilot’s Watch",
    description: "Classic aviation-inspired timepiece.",
    price: 7999,
    category: "Male",
    image: "https://images.unsplash.com/photo-1508697014387-db70aad34f4e"
  },
  {
    id: 14,
    name: "Fossil Grant",
    description: "Stylish and affordable fashion chronograph.",
    price: 249,
    category: "Female",
    image: "https://images.unsplash.com/photo-1504274066651-8d31a536b11a"
  },
  {
    id: 15,
    name: "Citizen Eco-Drive",
    description: "Solar-powered watch with eco-friendly technology.",
    price: 399,
    category: "Unisex",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
  }
];


{watches.map((item)=>{
  return (
    <>
    <div className="card shadow-sm mb-4 bg-body rounded" style={{ width: "22rem" }} key={item.id}>
      <img src={item.image} className="watch-img" />
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">{item.description}</p>
        <h6 className="price-tag">{item.price}</h6>
        <a href="#" className="btn-gradient">🛒Add To cart</a>
      </div>
    </div>
    
        </>
  )
})
}










 
}
