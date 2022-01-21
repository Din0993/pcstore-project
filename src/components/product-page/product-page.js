import React from "react";
import { useParams } from "react-router-dom";
import { PRODUCTS_DATA } from "./product-page.data";
import ProductCard from "../product-card/product-card";

const ProductPage = () => {
  const { component } = useParams();
  const selectedProducts = PRODUCTS_DATA.filter((product) => {
    return product.type === component;
  });

  return (
    <ProductCard
      title={component.toUpperCase()}
      recommendedProducts={selectedProducts}
      section={component}
    />
  );
};

export default ProductPage;
