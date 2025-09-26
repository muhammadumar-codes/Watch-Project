import "./Home.css";
import { useState } from "react";

// components
import Product from "../../components/ProductCard/Product";
import HeroSection from "../../components/HeroSection/HeroSection";
import Dropdown from "../../components/DropDown/DropDown";
import {watches} from "../../components/Data/Data"
export default function Home() {





  const [selected, setSelected] = useState("");

const filterWatches=selected===""
?watches 
:watches.filter((item)=>item.category.toLowerCase()===selected.toLowerCase())

  return (
    <>
      <HeroSection page={"Premium"}  className={"container-fluid-Home-page"} />
      <Dropdown setSelected={setSelected} />
      <Product watches={filterWatches} />
    </>
  );
}
