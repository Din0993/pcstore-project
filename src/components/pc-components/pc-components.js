import React from "react";
import { useNavigate } from "react-router-dom";
import ProductGroups from "../product-group-card/product-group-card";
import { PCComponentsTitle } from "./pc-components.style";
import { PCCOMPONENTS_DATA } from "./pc-components.data";
const PCComponents = () => {
  const navigate = useNavigate();
  const data = PCCOMPONENTS_DATA;
  return (
    <div>
      <PCComponentsTitle>PC Components</PCComponentsTitle>
      <ProductGroups data={data} />
    </div>
  );
};

export default PCComponents;
