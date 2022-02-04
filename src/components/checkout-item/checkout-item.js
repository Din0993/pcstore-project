import React from "react";
import { useDispatch } from "react-redux";
import { cartActionCreators } from "../redux";
import { bindActionCreators } from "redux";
import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer,
} from "./checkout-item.style";

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const { clearItemFromCart, addItem, removeItem } = bindActionCreators(
    cartActionCreators,
    dispatch
  );
  const { name, imageSrc, price, quantity } = cartItem;

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageSrc} alt="item" />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div onClick={() => removeItem(cartItem)}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => addItem(cartItem)}>&#10095;</div>
      </QuantityContainer>
      <TextContainer>{price}</TextContainer>
      <RemoveButtonContainer onClick={() => clearItemFromCart(cartItem)}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
