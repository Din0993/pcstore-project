import React from "react";
import {
  ProductGroupCardImage,
  ProductGroupCardImageContainer,
  ProductGroupCardTitle,
  ProductGroupCardItem,
  ProductGroupCardContainer,
} from "./product-group-card.style";

const ProductGroups = ({ data }) => {
  return (
    <div>
      <ProductGroupCardContainer>
        {data.map((comp) => {
          return (
            <ProductGroupCardItem key={comp.id} to={comp.url}>
              <ProductGroupCardImageContainer>
                <ProductGroupCardImage src={comp.imageSrc} />
              </ProductGroupCardImageContainer>
              <ProductGroupCardTitle>{comp.title}</ProductGroupCardTitle>
            </ProductGroupCardItem>
          );
        })}
      </ProductGroupCardContainer>
    </div>
  );
};

export default ProductGroups;
