import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const UserInfoBarContainer = styled.div`
  position: relative;
  padding: 0 70px;
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0;
  background-color: #0e141c;
  color: white;
  align-items: center;
`;

export const UserInfoBarTextContainer = styled.div`
  display: flex;
  font-size: 16px;
  line-height: 1;
`;

export const UserInfoBarNumber = styled.p`
  color: #005cd6;
`;

export const UserInfoBarTextNormal = styled.p`
  margin-right: 5px;
`;

export const UserInfoBarButtonsContainer = styled.div`
  display: flex;
  background-color: transparent;
  gap: 12px;
`;

export const UserInfoBarButton = styled(Link)`
  border: none;
  outline: none;
  background-color: #00449c;
  color: white;
  font-size: 16px;
  border-radius: 5px;
  padding: 5px 13px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: #002c66;
  }
`;
