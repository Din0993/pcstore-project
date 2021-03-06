import React from "react";
import {
  ProductCardContainer,
  ProductCardItem,
  ProductCardImage,
  ProductCardName,
  ProductCardPrice,
  ProductCardTitle,
  ProductCardImageContainer,
} from "./product-card.style";

const ProductCard = ({ recommendedProducts, title, section }) => {
  return (
    <div>
      <ProductCardTitle>{title}</ProductCardTitle>
      <ProductCardContainer>
        {recommendedProducts.map((product) => {
          if (
            product.section
              ? product.section === section
              : product.type === section ||
                section === "we recommend" ||
                product.pcpart === section
          )
            return (
              <ProductCardItem key={product.id}>
                <ProductCardImageContainer>
                  <ProductCardImage src={product.imageSrc} />
                </ProductCardImageContainer>
                <ProductCardName to={`${product.url}/${product.name}`}>
                  {product.name}
                </ProductCardName>
                <ProductCardPrice>{product.price}</ProductCardPrice>
              </ProductCardItem>
            );
        })}
      </ProductCardContainer>
    </div>
  );
};

export default ProductCard;
