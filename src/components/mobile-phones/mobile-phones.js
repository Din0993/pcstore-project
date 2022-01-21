import React from "react";
import ProductCard from "../product-card/product-card";
import { PRODUCTS_DATA } from "../product-page/product-page.data";
const MobilePhones = () => {
  return (
    <div>
      <ProductCard
        title="Mobile Phones"
        recommendedProducts={PRODUCTS_DATA}
        section="phones"
      />
    </div>
  );
};

export default MobilePhones;
