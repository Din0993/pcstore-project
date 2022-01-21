import React from "react";
import { useParams } from "react-router-dom";
import { PRODUCTS_DATA } from "./product-page.data";
import ProductCard from "../product-card/product-card";

const ProductPage = () => {
  const { component } = useParams();
  const isItPCPart = !(
    component === "phones" ||
    component === "laptops" ||
    component === "gaming" ||
    component === "tvs"
  );
  console.log(isItPCPart);

  const selectedProducts = PRODUCTS_DATA.filter((product) => {
    return product.type === component;
  });

  const selectedPCPartProduct = PRODUCTS_DATA.filter((product) => {
    return product.pcpart === component;
  });

  return (
    <ProductCard
      title={component.toUpperCase()}
      recommendedProducts={
        isItPCPart ? selectedPCPartProduct : selectedProducts
      }
      section={component}
    />
  );
};

export default ProductPage;
