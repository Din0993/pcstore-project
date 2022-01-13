import styled from "styled-components";
import { Link } from "react-router-dom";

export const ProductCardContainer = styled.div`
  width: 100%;
  padding: 5px 70px;
  height: 520px;
  display: flex;
  gap: 30px;
  margin-top: 10px;
`;

export const ProductCardItem = styled.div`
  display: flex;
  width: 20%;
  height: 90%;
  padding: 0 5px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  background-color: white;
  margin-top: 5px;
  border: 1px solid grey;
  transition: all 0.4s ease;
  &:hover {
    box-shadow: 0px 0px 17px 5px rgba(0, 0, 0, 0.47);
  }
`;

export const ProductCardImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  object-position: bottom;
`;

export const ProductCardImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  width: 100%;
  height: 50%;
`;

export const ProductCardName = styled(Link)`
  color: #0061bb;
  cursor: pointer;
  font-size: 22px;
  text-align: center;
  margin-top: 10px;
  padding: 0;
  line-height: 1;
  height: 50px;
`;

export const ProductCardPrice = styled.p`
  color: black;
  font-size: 20px;
  margin-top: 30px;
`;

export const ProductCardTitle = styled.h2`
  padding: 5px 70px;
  margin-top: 50px;
`;
