import React from "react";
import ProductCard from "../product-card/product-card";
import SimpleSlider from "../slider/slider";
import { SliderContainer } from "./homepage.style";
const HomePage = () => {
  return (
    <div>
      <SliderContainer>
        <SimpleSlider />
      </SliderContainer>
      <ProductCard />
    </div>
  );
};

export default HomePage;
