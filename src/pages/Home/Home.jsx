import "./Home.css";

// comppoents
import Products from "../../components/ProductCard/Product";
import HeroSection from "../../components/HeroSection/HeroSection";

export default function Home() {
  return (
    <>
    
      <HeroSection />

      {/* Cards container */}

      <Products/>
      
     
    </>
  );
}
