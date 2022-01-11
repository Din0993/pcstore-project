import React from "react";

import {
  UserInfoBarContainer,
  UserInfoBarNumber,
  UserInfoBarTextNormal,
  UserInfoBarTextContainer,
  UserInfoBarButton,
  UserInfoBarButtonsContainer,
} from "./user-info-bar.style";

const UserInfoBar = () => {
  return (
    <div>
      <UserInfoBarContainer>
        <UserInfoBarTextContainer>
          <UserInfoBarTextNormal>Contact Number:</UserInfoBarTextNormal>
          <UserInfoBarNumber>123123</UserInfoBarNumber>
        </UserInfoBarTextContainer>
        <UserInfoBarButtonsContainer>
          <UserInfoBarButton>Sign in</UserInfoBarButton>
          <UserInfoBarButton>Sign up</UserInfoBarButton>
        </UserInfoBarButtonsContainer>
      </UserInfoBarContainer>
    </div>
  );
};

export default UserInfoBar;
