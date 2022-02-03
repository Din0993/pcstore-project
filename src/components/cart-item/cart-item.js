import React from "react";
import {
  CartItemContainer,
  CartItemImage,
  ItemDetailsContainer,
} from "./cart-item.style";
const CartItem = ({ item: { imageSrc, price, name, quantity } }) => {
  return (
    <CartItemContainer>
      <CartItemImage src={imageSrc} alt="item" />
      <ItemDetailsContainer>
        <span>{name}</span>
        <span>
          {quantity} x {price}
        </span>
      </ItemDetailsContainer>
    </CartItemContainer>
  );
};

export default CartItem;
