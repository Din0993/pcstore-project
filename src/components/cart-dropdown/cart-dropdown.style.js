import styled from "styled-components";
import { Link } from "react-router-dom";
export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  color: black;
  z-index: 5;
`;

export const EmptyMessageContainer = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItemsContainer = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export const CartItemsButton = styled(Link)`
  background-color: black;
  color: white;
  border: none;
  cursor: pointer;
  transition: all 0.4s ease;
  text-align: center;
  margin-top: 30px;
  padding: 10px 0;
  border: 1px solid transparent;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;
