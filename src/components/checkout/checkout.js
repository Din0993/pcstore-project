import React from "react";
import { useSelector } from "react-redux";
import CheckoutItem from "../checkout-item/checkout-item";
import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
} from "./checkout.style";

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const prices = cartItems.map((cartItem) => {
    return (
      Number(cartItem.price.slice(1, cartItem.price.length)) * cartItem.quantity
    );
  });

  const total = prices.reduce((acc, item) => {
    return acc + item;
  }, 0);

  return (
    <CheckoutPageContainer>
      <CheckoutHeaderContainer>
        <HeaderBlockContainer>
          <span>Product</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Description</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Quantity</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Price</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Remove</span>
        </HeaderBlockContainer>
      </CheckoutHeaderContainer>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <TotalContainer>TOTAL: ${Math.round(total * 100) / 100}</TotalContainer>
    </CheckoutPageContainer>
  );
};

export default Checkout;
