import React from "react";
import ProductCard from "../product-card/product-card";
import { PRODUCTS_DATA } from "../product-page/product-page.data";
const Laptops = () => {
  return (
    <div>
      <ProductCard
        title="Laptops"
        recommendedProducts={PRODUCTS_DATA}
        section="laptops"
      />
    </div>
  );
};

export default Laptops;
