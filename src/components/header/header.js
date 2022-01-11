import React from "react";

import {
  HeaderContainer,
  LogoContainer,
  HeaderOptionsContainer,
  HeaderLink,
} from "./header.style";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { Link } from "react-router-dom";

const Header = () => {
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
      </HeaderContainer>
    </div>
  );
};
export default Header;
