import styled, { css } from "styled-components";

export const UserInfoBarContainer = styled.div`
  position: relative;
  padding: 0 70px;
  height: 30px;
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
  font-size: 10px;
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
  gap: 5px;
`;

export const UserInfoBarButton = styled.button`
  border: none;
  outline: none;
  background-color: #00449c;
  color: white;
  font-size: 12px;
  border-radius: 5px;
  padding: 3px 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: #002c66;
  }
`;
