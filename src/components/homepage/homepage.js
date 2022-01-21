import React from "react";
import ProductCard from "../product-card/product-card";
import SimpleSlider from "../slider/slider";
import { SliderContainer } from "./homepage.style";
import { recommendedProducts } from "./homepage.data";
import { PRODUCTS_DATA as data } from "../product-page/product-page.data";
const HomePage = () => {
  const pcParts = data
    .filter((product) => {
      return product.url.startsWith("/pc-components");
    })
    .slice(-5);
  const tvs = data
    .filter((product) => {
      return product.url.startsWith("/tvs");
    })
    .slice(-5);
  const gaming = data
    .filter((product) => {
      return product.url.startsWith("/gaming");
    })
    .slice(-5);
  const phones = data
    .filter((product) => {
      return product.url.startsWith("/mobile-phones");
    })
    .slice(-5);
  const laptops = data
    .filter((product) => {
      return product.url.startsWith("/laptops");
    })
    .slice(-5);

  const recommended = data.slice(-5);

  return (
    <div>
      <SliderContainer>
        <SimpleSlider />
      </SliderContainer>
      <ProductCard
        title="We Recommend"
        recommendedProducts={recommended}
        section="we recommend"
      />
      <ProductCard
        title="New PC-Parts"
        recommendedProducts={pcParts}
        section="pc parts"
      />
      <ProductCard title="New TVs" recommendedProducts={tvs} section="tvs" />
      <ProductCard
        title="New Gaming Products"
        recommendedProducts={gaming}
        section="gaming"
      />
      <ProductCard
        title="New Laptops"
        recommendedProducts={laptops}
        section="laptops"
      />
      <ProductCard
        title="New Mobile Phones"
        recommendedProducts={phones}
        section="phones"
      />
    </div>
  );
};

export default HomePage;
