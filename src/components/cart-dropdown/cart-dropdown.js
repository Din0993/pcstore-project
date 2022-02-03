import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartActionCreators } from "../redux";
import { bindActionCreators } from "redux";
import CartItem from "../cart-item/cart-item";
import {
  CartDropdownContainer,
  EmptyMessageContainer,
  CartItemsContainer,
  CartItemsButton,
} from "./cart-dropdown.style";

const CartDropdown = () => {
  const state = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { toggleCartHidden } = bindActionCreators(cartActionCreators, dispatch);
  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log(cartItems);
  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
        )}
      </CartItemsContainer>
      <CartItemsButton onClick={toggleCartHidden}>
        GO TO CHECKOUT
      </CartItemsButton>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
