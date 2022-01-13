import React from "react";
import ProductCard from "../product-card/product-card";
import SimpleSlider from "../slider/slider";
import { SliderContainer } from "./homepage.style";
import { recommendedProducts } from "./homepage.data";
const HomePage = () => {
  return (
    <div>
      <SliderContainer>
        <SimpleSlider />
      </SliderContainer>
      <ProductCard
        title="We Recommend"
        recommendedProducts={recommendedProducts}
        section="we recommend"
      />
      <ProductCard
        title="Popular PC-Parts"
        recommendedProducts={recommendedProducts}
        section="pc parts"
      />
      <ProductCard
        title="Popular TVs"
        recommendedProducts={recommendedProducts}
        section="tvs"
      />
      <ProductCard
        title="Popular Gaming Products"
        recommendedProducts={recommendedProducts}
        section="gaming"
      />
      <ProductCard
        title="Popular Laptops"
        recommendedProducts={recommendedProducts}
        section="laptops"
      />
      <ProductCard
        title="Popular Mobile Phones"
        recommendedProducts={recommendedProducts}
        section="phones"
      />
    </div>
  );
};

export default HomePage;
