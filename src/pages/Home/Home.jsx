import "./Home.css";
import { useState } from "react";

// components
import Product from "../../components/ProductCard/Product";
import HeroSection from "../../components/HeroSection/HeroSection";
import Dropdown from "../../components/DropDown/DropDown";

export default function Home() {
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
    image: "//currenwatches.com.pk/cdn/shop/products/73fe8cb383af0b5ca132558ab84c0c8b.jpg?v=1757597303&amp;width=165 165w,//currenwatches.com.pk/cdn/shop/products/73fe8cb383af0b5ca132558ab84c0c8b.jpg?v=1757597303&amp;width=360 360w,//currenwatches.com.pk/cdn/shop/products/73fe8cb383af0b5ca132558ab84c0c8b.jpg?v=1757597303&amp;width=493 493w"
  },
  {
    id: 3,
    name: "Tag Heuer Carrera",
    description: "Racing-inspired chronograph with sporty design.",
    price: 5499,
    category: "Female",
    image: "//currenwatches.com.pk/cdn/shop/products/Untitled-2copy_512dcfe9-2fc0-42f9-a47b-f8743958e39e.jpg?v=1645790849&amp;width=165 165w,//currenwatches.com.pk/cdn/shop/products/Untitled-2copy_512dcfe9-2fc0-42f9-a47b-f8743958e39e.jpg?v=1645790849&amp;width=360 360w,//currenwatches.com.pk/cdn/shop/products/Untitled-2copy_512dcfe9-2fc0-42f9-a47b-f8743958e39e.jpg?v=1645790849&amp;width=493 493w"
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
    image: "../../src/assets/images/watch (9).jpg"
  },
  {
    id: 6,
    name: "Audemars Piguet Royal Oak",
    description: "Iconic luxury watch with octagonal bezel.",
    price: 29999,
    category: "Female",
    image: "//currenwatches.com.pk/cdn/shop/files/1b4f8b28-4002-4d0a-be2b-218f3fa6e330.jpg?v=1747820666&amp;width=165 165w,//currenwatches.com.pk/cdn/shop/files/1b4f8b28-4002-4d0a-be2b-218f3fa6e330.jpg?v=1747820666&amp;width=360 360w,//currenwatches.com.pk/cdn/shop/files/1b4f8b28-4002-4d0a-be2b-218f3fa6e330.jpg?v=1747820666&amp;width=493 493w"
  },
  {
    id: 7,
    name: "Patek Philippe Nautilus",
    description: "Prestigious Swiss luxury sports watch.",
    price: 49999,
    category: "Female",
    image: "//currenwatches.com.pk/cdn/shop/files/H5cc95eb433d54b7fb2a606ad0006ec02q.jpg?v=1694511353&amp;width=165 165w,//currenwatches.com.pk/cdn/shop/files/H5cc95eb433d54b7fb2a606ad0006ec02q.jpg?v=1694511353&amp;width=360 360w,//currenwatches.com.pk/cdn/shop/files/H5cc95eb433d54b7fb2a606ad0006ec02q.jpg?v=1694511353&amp;width=493 493w"
  },
  {
    id: 8,
    name: "Breitling Navitimer",
    description: "Pilot’s watch with slide rule bezel.",
    price: 6599,
    category: "Male",
    image: "//currenwatches.com.pk/cdn/shop/files/cds_035c6b1b-6a83-464c-a6b3-01e28baeb4bd.jpg?v=1747630736&amp;width=533"
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
    category: "Female ",
    image: "//currenwatches.com.pk/cdn/shop/products/S38f7a029e54b47c1a5d68f068c54bd97Y.jpg?v=1747630736&amp;width=165 165w,//currenwatches.com.pk/cdn/shop/products/S38f7a029e54b47c1a5d68f068c54bd97Y.jpg?v=1747630736&amp;width=360 360w,//currenwatches.com.pk/cdn/shop/products/S38f7a029e54b47c1a5d68f068c54bd97Y.jpg?v=1747630736&amp;width=493 493w"
  },
  {
    id: 11,
    name: "Longines HydroConquest",
    description: "Diving watch with ceramic bezel and Swiss movement.",
    price: 1299,
    category: "Male",
    image: "../src/assets/images/watch (6).jpg"
  },
  {
    id: 12,
    name: "Hublot Big Bang",
    description: "Bold and innovative luxury sports watch.",
    price: 15999,
    category: "Male",
    image: "../src/assets/images/watch (3).jpg"
  },
  {
    id: 13,
    name: "IWC Pilot’s Watch",
    description: "Classic aviation-inspired timepiece.",
    price: 7999,
    category: "Male",
    image: "../src/assets/images/watch (5).jpg"
  },
  {
    id: 14,
    name: "Fossil Grant",
    description: "Stylish and affordable fashion chronograph.",
    price: 249,
    category: "Female",
    image: "//currenwatches.com.pk/cdn/shop/products/Untitled-1copy.jpg?v=1750833325&amp;width=165 165w,//currenwatches.com.pk/cdn/shop/products/Untitled-1copy.jpg?v=1750833325&amp;width=360 360w,//currenwatches.com.pk/cdn/shop/products/Untitled-1copy.jpg?v=1750833325&amp;width=493 493w"
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





  const [selected, setSelected] = useState("");

  const filterWatches =
    selected === ""
      ? watches
      : watches.filter(
          (item) => item.category.toLowerCase() === selected.toLowerCase()
        );

  console.log(filterWatches);

  return (
    <>
      <HeroSection page={"Premium"}  className={"container-fluid-Home-page"} />
      <Dropdown setSelected={setSelected} />
      <Product watches={filterWatches} />
    </>
  );
}
