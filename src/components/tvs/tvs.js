import React from "react";

import { PRODUCTS_DATA } from "../product-page/product-page.data";
import ProductCard from "../product-card/product-card";

const TVs = () => {
  return (
    <div>
      <ProductCard
        title="TVS"
        recommendedProducts={PRODUCTS_DATA}
        section="tvs"
      />
    </div>
  );
};

export default TVs;
