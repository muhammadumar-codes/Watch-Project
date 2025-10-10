import "./Home.css";
import { useState } from "react";

// for using  context api
import { useContext } from "react";

// components
import Product from "../../components/ProductCard/Product";
import HeroSection from "../../components/HeroSection/HeroSection";
import Dropdown from "../../components/DropDown/DropDown";
import { DataContext } from "../../context/Datacontext"

export default function Home() {
  const { watches } = useContext(DataContext);

  const [selected, setSelected] = useState("");

  const filterWatches =
    selected === ""
      ? watches
      : watches.filter(
          (item) => item.category.toLowerCase() === selected.toLowerCase()
        );

  return (
    <>
      <HeroSection page={"Premium"} className={"container-fluid-Home-page"} />
      <Dropdown setSelected={setSelected} />
      <Product watches={filterWatches} />
    </>
    
  );
}
