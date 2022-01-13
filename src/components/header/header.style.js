import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  width: 100%;
  position: relative;
  padding: 2px 70px;
  background-color: #000000e3;
  color: white;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  height: 65px;
`;

export const LogoContainer = styled(Link)`
  cursor: pointer;
`;

export const HeaderOptionsContainer = styled.div`
  margin-left: 30px;
  display: flex;
  gap: 20px;
`;

export const HeaderLink = styled(Link)`
  color: white;
  cursor: pointer;
  font-size: 18px;
  transition: all 0.3s ease;
  &:hover {
    color: #005cd6;
  }
`;
