import styled, { css } from "styled-components";

const containersStyles = css`
  display: flex;
  margin-top: 10px;
`;

const tableBorders = css`
  border: 1px solid grey;
`;

export const DetailedProductPageContainer = styled.div`
  ${containersStyles}
  padding: 5px 70px;
  flex-direction: column;
  gap: 30px;
  width: 100%;
`;

export const DetailedProductPageProductInfoContainer = styled.div`
  ${containersStyles}
  flex-wrap: wrap;
  padding: 10px;
  gap: 20px;
  width: 100%;
`;

export const DetailedProductPageTitle = styled.h2`
  font-weight: 500;
`;

export const DetailedProductPageTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  border-bottom: 1px solid grey;
  padding-bottom: 40px;
  width: 30%;
`;

export const DetailedProductPageSpecName = styled.p`
  font-weight: 800;
  display: inline-block;
  line-height: 1;
  height: 5px;
`;

export const DetailedProductPageSpecValue = styled.p`
  font-weight: 500;
  display: inline-block;
  line-height: 1;
  height: 5px;
`;

export const DetailedProductPageSpecContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const DetailedProductPagePriceInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  border: 1px solid grey;
  gap: 20px;
  width: 30%;
`;

export const DetailedProductPagePriceText = styled.p`
  font-size: 30px;
`;

export const DetailedProductPageButtons = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 25px;
  width: 200px;
  height: 60px;
  padding: 10px 30px;
  border-radius: 5px;
  background: #1fa02a;
  color: white;
  text-align: center;
  transition: all 0.4s ease;
  margin-bottom: 20px;
  &:hover {
    background: #188021;
  }
`;

export const DetailedProductPageImagesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35%;
`;

export const DetailedProductPageImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  object-position: bottom;
`;

export const DetailedProductPageTable = styled.table`
  ${tableBorders}
  border-collapse: collapse;
  width: 60%;
`;

export const DetailedProductPageTr = styled.tr`
  ${tableBorders}
  text-align: left;
`;

export const DetailedProductPageTh = styled.th`
  ${tableBorders}
  text-align: left;
  padding: 5px 3px;
`;

export const DetailedProductPageTd = styled.td`
  ${tableBorders}
  text-align: left;
  padding: 5px 3px;
`;
