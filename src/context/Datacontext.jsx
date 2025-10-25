import { createContext } from "react";
export const DataContext = createContext();


// ===this  Provider  watch  Data provider ====

export default function DataContextProvider({ children }) {
  const watches = [
    {
      id: 1,
      name: "Rolex Submariner",
      brand: "Rolex",
      description:
        "Luxury diving watch with 300m water resistance and timeless design.",
      price: 8999,
      discount: 10,
      category: "Female",
      stock: 5,
      rating: 3.5,
      colors: ["Silver", "Black", "Gold"],
      isFeatured: true,
      image:
        "//currenwatches.com.pk/cdn/shop/products/Untitled-1copy.jpg?v=1750833325&amp;width=165 165w,//currenwatches.com.pk/cdn/shop/products/Untitled-1copy.jpg?v=1750833325&amp;width=360 360w,//currenwatches.com.pk/cdn/shop/products/Untitled-1copy.jpg?v=1750833325&amp;width=493 493w",
    },
    {
      id: 2,
      name: "Omega Speedmaster",
      brand: "Omega",
      description:
        "The Moonwatch, worn during NASA missions. Legendary chronograph.",
      price: 7599,
      discount: 5,
      category: "Male",
      stock: 3,
      rating: 4.8,
      colors: ["Black", "Blue"],
      isFeatured: true,
      image:
        "//currenwatches.com.pk/cdn/shop/products/73fe8cb383af0b5ca132558ab84c0c8b.jpg?v=1757597303&amp;width=165 165w,//currenwatches.com.pk/cdn/shop/products/73fe8cb383af0b5ca132558ab84c0c8b.jpg?v=1757597303&amp;width=360 360w,//currenwatches.com.pk/cdn/shop/products/73fe8cb383af0b5ca132558ab84c0c8b.jpg?v=1757597303&amp;width=493 493w",
    },
    {
      id: 3,
      name: "Tag Heuer Carrera",
      brand: "Tag Heuer",
      description:
        "Racing-inspired chronograph with sporty and stylish design.",
      price: 5499,
      discount: 0,
      category: "Female",
      stock: 7,
      rating: 4.6,
      colors: ["Black", "Silver"],
      isFeatured: false,
      image:
        "//currenwatches.com.pk/cdn/shop/products/Untitled-2copy_512dcfe9-2fc0-42f9-a47b-f8743958e39e.jpg?v=1645790849&amp;width=165 165w,//currenwatches.com.pk/cdn/shop/products/Untitled-2copy_512dcfe9-2fc0-42f9-a47b-f8743958e39e.jpg?v=1645790849&amp;width=360 360w,//currenwatches.com.pk/cdn/shop/products/Untitled-2copy_512dcfe9-2fc0-42f9-a47b-f8743958e39e.jpg?v=1645790849&amp;width=493 493w",
    },
    {
      id: 4,
      name: "Seiko Prospex",
      brand: "Seiko",
      description:
        "Affordable diving watch with automatic movement and strong durability.",
      price: 699,
      discount: 15,
      category: "Unisex",
      stock: 10,
      rating: 4.5,
      colors: ["Blue", "Black", "Green"],
      isFeatured: false,
      image: "/public/assets/images/watch (1).jpg",
    },
    {
      id: 5,
      name: "Casio G-Shock",
      brand: "Casio",
      description: "Shock-resistant sports watch with rugged durability.",
      price: 9000,
      discount: 0,
      category: "Male",
      stock: 20,
      rating: 4.4,
      colors: ["Black", "Red", "Green"],
      isFeatured: true,
      image: "/public/assets/images/watch (3).jpg",
    },
    {
      id: 6,
      name: "Audemars Piguet Royal Oak",
      brand: "Audemars Piguet",
      description:
        "Iconic luxury watch with octagonal bezel and premium craftsmanship.",
      price: 29999,
      discount: 8,
      category: "Female",
      stock: 2,
      rating: 5.0,
      colors: ["Silver", "Gold"],
      isFeatured: true,
      image:
        "//currenwatches.com.pk/cdn/shop/files/1b4f8b28-4002-4d0a-be2b-218f3fa6e330.jpg?v=1747820666&amp;width=165 165w,//currenwatches.com.pk/cdn/shop/files/1b4f8b28-4002-4d0a-be2b-218f3fa6e330.jpg?v=1747820666&amp;width=360 360w,//currenwatches.com.pk/cdn/shop/files/1b4f8b28-4002-4d0a-be2b-218f3fa6e330.jpg?v=1747820666&amp;width=493 493w",
    },
    {
      id: 7,
      name: "Patek Philippe Nautilus",
      brand: "Patek Philippe",
      description: "Prestigious Swiss luxury sports watch with unique style.",
      price: 49999,
      discount: 12,
      category: "Male",
      stock: 1,
      rating: 5.0,
      colors: ["Silver", "Blue"],
      isFeatured: true,
      image:
        "//currenwatches.com.pk/cdn/shop/products/73fe8cb383af0b5ca132558ab84c0c8b.jpg?v=1757597303&amp;width=165 165w,//currenwatches.com.pk/cdn/shop/products/73fe8cb383af0b5ca132558ab84c0c8b.jpg?v=1757597303&amp;width=360 360w,//currenwatches.com.pk/cdn/shop/products/73fe8cb383af0b5ca132558ab84c0c8b.jpg?v=1757597303&amp;width=493 493w",
    },
    {
      id: 8,
      name: "Breitling Navitimer",
      brand: "Breitling",
      description: "Pilot’s watch with slide rule bezel for aviation lovers.",
      price: 6599,
      discount: 0,
      category: "Male",
      stock: 4,
      rating: 4.7,
      colors: ["Black", "Brown"],
      isFeatured: false,
      image:
        "/public/assets/images/watch (4).jpg",
    },
    {
      id: 9,
      name: "Cartier Santos",
      brand: "Cartier",
      description: "Elegant square watch with rich history of aviation.",
      price: 8999,
      discount: 6,
      category: "Female",
      stock: 6,
      rating: 4.8,
      colors: ["Rose Gold", "Silver"],
      isFeatured: true,
      image: "/public/assets/images/watch (5).jpg",
    },
    {
      id: 10,
      name: "Tissot PRX",
      brand: "Tissot",
      description: "Affordable Swiss watch with integrated bracelet design.",
      price: 499,
      discount: 10,
      category: "Female",
      stock: 15,
      rating: 4.5,
      colors: ["Silver", "Black", "Blue"],
      isFeatured: false,
      image:"/public/assets/images/watch (6).jpg",
    },
    {
      id: 11,
      name: "Longines HydroConquest",
      brand: "Longines",
      description: "Swiss diving watch with ceramic bezel and sleek design.",
      price: 1299,
      discount: 7,
      category: "Male",
      stock: 8,
      rating: 4.6,
      colors: ["Black", "Blue"],
      isFeatured: false,
      image: "/public/assets/images/watch (8).jpg",
    },
    {
      id: 12,
      name: "Hublot Big Bang",
      brand: "Hublot",
      description: "Bold luxury sports watch with innovative design.",
      price: 15999,
      discount: 5,
      category: "Female",
      stock: 3,
      rating: 4.9,
      colors: ["Black", "Gold"],
      isFeatured: true,
      image:
        "//currenwatches.com.pk/cdn/shop/products/S38f7a029e54b47c1a5d68f068c54bd97Y.jpg?v=1747630736&amp;width=165 165w,//currenwatches.com.pk/cdn/shop/products/S38f7a029e54b47c1a5d68f068c54bd97Y.jpg?v=1747630736&amp;width=360 360w,//currenwatches.com.pk/cdn/shop/products/S38f7a029e54b47c1a5d68f068c54bd97Y.jpg?v=1747630736&amp;width=493 493w",
    },
    {
      id: 13,
      name: "IWC Pilot’s Watch",
      brand: "IWC",
      description: "Classic aviation-inspired timepiece for professionals.",
      price: 7999,
      discount: 0,
      category: "Male",
      stock: 5,
      rating: 4.7,
      colors: ["Black", "Brown"],
      isFeatured: false,
      image: "/public/assets/images/watch (9).jpg",
    },
    {
      id: 14,
      name: "Fossil Grant",
      brand: "Fossil",
      description: "Stylish fashion chronograph at an affordable price.",
      price: 249,
      discount: 20,
      category: "Female",
      stock: 18,
      rating: 4.3,
      colors: ["Blue", "Brown", "Rose Gold"],
      isFeatured: false,
      image:
        "/public/assets/images/watch (4).jpg",
    },
    {
      id: 15,
      name: "Citizen Eco-Drive",
      brand: "Citizen",
      description: "Eco-friendly solar-powered watch with long battery life.",
      price: 399,
      discount: 15,
      category: "Unisex",
      stock: 12,
      rating: 4.6,
      colors: ["Black", "Green", "Silver"],
      isFeatured: true,
      image: "/public/assets/images/watch (8).jpg",
    },
  ];

  // === this  is Provider for Cart system  ====
  
  


  return (
    <>
      <DataContext.Provider value={{watches}}>{children}</DataContext.Provider>
    </>
  );
}
