import styled from "styled-components";
import { Link } from "react-router-dom";

export const ProductGroupCardContainer = styled.div`
  width: 100%;
  padding: 5px 70px;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin-top: 10px;
  align-items: center;
  justify-content: center;
`;

export const ProductGroupCardItem = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 30%;
  height: 300px;
  border: 1px solid grey;
  transition: all 0.4s ease;
  &:hover {
    box-shadow: 0px 0px 17px 5px rgba(0, 0, 0, 0.47);
  }
`;

export const ProductGroupCardImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  width: 90%;
  height: 70%;
`;

export const ProductGroupCardImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  object-position: bottom;
`;

export const ProductGroupCardTitle = styled.h2`
  font-size: 20px;
  text-align: center;
  color: black;
`;
