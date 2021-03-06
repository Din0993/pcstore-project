import React from "react";
import CartIcon from "../cart-icon/cart-icon";
import {
  UserInfoBarContainer,
  UserInfoBarNumber,
  UserInfoBarTextNormal,
  UserInfoBarTextContainer,
  UserInfoBarButton,
  UserInfoBarButtonsContainer,
} from "./user-info-bar.style";

const UserInfoBar = () => {
  const signInStatus = false;
  return (
    <div>
      <UserInfoBarContainer>
        <UserInfoBarTextContainer>
          <UserInfoBarTextNormal>Contact Number:</UserInfoBarTextNormal>
          <UserInfoBarNumber>123123</UserInfoBarNumber>
        </UserInfoBarTextContainer>
        <UserInfoBarButtonsContainer>
          {signInStatus ? (
            <UserInfoBarButton to="/sign-in-sign-up">
              Sign out
            </UserInfoBarButton>
          ) : (
            <UserInfoBarButton to="/sign-in-sign-up">
              Sign in / Sign up
            </UserInfoBarButton>
          )}
          <CartIcon />
        </UserInfoBarButtonsContainer>
      </UserInfoBarContainer>
    </div>
  );
};

export default UserInfoBar;
