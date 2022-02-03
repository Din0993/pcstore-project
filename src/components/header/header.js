import React from "react";
import CartDropdown from "../cart-dropdown/cart-dropdown";
import { useSelector } from "react-redux";
import {
  HeaderContainer,
  LogoContainer,
  HeaderOptionsContainer,
  HeaderLink,
} from "./header.style";
import { ReactComponent as Logo } from "../../assets/crown.svg";

const Header = () => {
  const hidden = useSelector((state) => state.cart.hidden);

  return (
    <div>
      <HeaderContainer>
        <LogoContainer to="/">
          <Logo />
        </LogoContainer>
        <HeaderOptionsContainer>
          <HeaderLink to="/pc-components">PC-Parts</HeaderLink>
          <HeaderLink to="/tvs">TV</HeaderLink>
          <HeaderLink to="/gaming">Gaming</HeaderLink>
          <HeaderLink to="/mobile-phones">Phones</HeaderLink>
          <HeaderLink to="/laptops">Laptops</HeaderLink>
        </HeaderOptionsContainer>
        {hidden ? null : <CartDropdown />}
      </HeaderContainer>
    </div>
  );
};
export default Header;
