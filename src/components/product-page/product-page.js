import React from "react";
import { useParams } from "react-router-dom";
const ProductPage = () => {
  const { component } = useParams();
  console.log(component);
  return <div>Product Page</div>;
};

export default ProductPage;
