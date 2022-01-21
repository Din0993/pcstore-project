import React from "react";
import ProductCard from "../product-card/product-card";
import { PRODUCTS_DATA } from "../product-page/product-page.data";
const Gaming = () => {
  return (
    <div>
      <ProductCard
        title="GAMING"
        recommendedProducts={PRODUCTS_DATA}
        section="gaming"
      />
    </div>
  );
};

export default Gaming;
