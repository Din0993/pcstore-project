import React from "react";
import { useParams } from "react-router-dom";
import { PRODUCTS_DATA } from "../product-page/product-page.data";
const DetailedProductPage = () => {
  const { param } = useParams();
  const matchedData = PRODUCTS_DATA.filter((product) => {
    if (product.name === param) return product;
  });

  return (
    <div>
      <img src={`${matchedData[0].imageSrc}`} />
    </div>
  );
};

export default DetailedProductPage;
