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
const ProductCard = () => {
  const products = [
    {
      id: 1,
      imageSrc:
        "https://img.gigatron.rs/img/products/medium/image5bbc637e2e9b6.webp",
      name: "Razer Deathadder",
      price: "$69.99",
    },
    {
      id: 2,
      imageSrc:
        "https://img.gigatron.rs/img/products/medium/image5bbc637e2e9b6.webp",
      name: "Razer Deathadder",
      price: "$69.99",
    },
    {
      id: 3,
      imageSrc:
        "https://img.gigatron.rs/img/products/medium/image5bbc637e2e9b6.webp",
      name: "Razer Deathadder",
      price: "$69.99",
    },
    {
      id: 4,
      imageSrc:
        "https://img.gigatron.rs/img/products/medium/image5bbc637e2e9b6.webp",
      name: "Razer Deathadder",
      price: "$69.99",
    },
    {
      id: 5,
      imageSrc:
        "https://img.gigatron.rs/img/products/medium/image5bbc637e2e9b6.webp",
      name: "Razer Deathadder",
      price: "$69.99",
    },
  ];

  return (
    <div>
      <ProductCardTitle>We Recommend</ProductCardTitle>
      <ProductCardContainer>
        {products.map((product) => {
          return (
            <ProductCardItem key={product.id}>
              <ProductCardImageContainer>
                <ProductCardImage src={product.imageSrc} />
              </ProductCardImageContainer>
              <ProductCardName to="/">{product.name}</ProductCardName>
              <ProductCardPrice>{product.price}</ProductCardPrice>
            </ProductCardItem>
          );
        })}
      </ProductCardContainer>
    </div>
  );
};

export default ProductCard;
