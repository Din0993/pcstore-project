import React from "react";
import { cartActionCreators } from "../redux";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import {
  CartContainer,
  ShoppingIcon,
  ItemCountContainer,
} from "./cart-icon.style";

const CartIcon = () => {
  const state = useSelector((state) => state.cart);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const { toggleCartHidden } = bindActionCreators(cartActionCreators, dispatch);
  const quantity = cartItems.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);
  return (
    <CartContainer onClick={toggleCartHidden}>
      <ShoppingIcon />
      <ItemCountContainer>{quantity}</ItemCountContainer>
    </CartContainer>
  );
};

export default CartIcon;
