import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { cartActionCreators } from "../redux/index";
import { PRODUCTS_DATA } from "../product-page/product-page.data";
import {
  DetailedProductPageContainer,
  DetailedProductPageProductInfoContainer,
  DetailedProductPageTextContainer,
  DetailedProductPageSpecName,
  DetailedProductPagePriceInfoContainer,
  DetailedProductPageButtons,
  DetailedProductPagePriceText,
  DetailedProductPageTitle,
  DetailedProductPageImagesContainer,
  DetailedProductPageImage,
  DetailedProductPageSpecValue,
  DetailedProductPageSpecContainer,
  DetailedProductPageTable,
  DetailedProductPageTr,
  DetailedProductPageTh,
  DetailedProductPageTd,
} from "./detailed-product-page.style";
const DetailedProductPage = () => {
  const { param } = useParams();
  const matchedData = PRODUCTS_DATA.filter((product) => {
    if (product.name === param) return product;
  });
  let specs;
  if (Object.keys(matchedData[0].specs).length > 5) {
    specs = Object.fromEntries(
      Object.entries(matchedData[0].specs).slice(0, 5)
    );
  } else {
    specs = matchedData[0].specs;
  }

  const state = useSelector((state) => state.cart);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const { addItem } = bindActionCreators(cartActionCreators, dispatch);
  const q = cartItems.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  console.log(q);

  return (
    <div>
      <DetailedProductPageContainer>
        <DetailedProductPageTitle>
          {matchedData[0].name}
        </DetailedProductPageTitle>
        <DetailedProductPageProductInfoContainer>
          <DetailedProductPageImagesContainer>
            <DetailedProductPageImage src={matchedData[0].imageSrc} />
          </DetailedProductPageImagesContainer>
          <DetailedProductPageTextContainer>
            {Object.entries(specs).map((spec) => {
              return (
                <DetailedProductPageSpecContainer key={spec[0]}>
                  {" "}
                  <DetailedProductPageSpecName>
                    {spec[0]}:
                  </DetailedProductPageSpecName>{" "}
                  <DetailedProductPageSpecValue>
                    {spec[1]}
                  </DetailedProductPageSpecValue>
                </DetailedProductPageSpecContainer>
              );
            })}
          </DetailedProductPageTextContainer>
          <DetailedProductPagePriceInfoContainer>
            <DetailedProductPagePriceText>
              Price: {matchedData[0].price}
            </DetailedProductPagePriceText>
            <DetailedProductPagePriceText>
              Or on 24 monthly installments: <br />$
              {Number(
                Math.round(
                  (matchedData[0].price.slice(1, matchedData[0].price.length) /
                    24) *
                    100
                ) / 100
              )}{" "}
              per month.
            </DetailedProductPagePriceText>
            <DetailedProductPageButtons onClick={() => addItem(matchedData[0])}>
              Add to cart
            </DetailedProductPageButtons>
          </DetailedProductPagePriceInfoContainer>
        </DetailedProductPageProductInfoContainer>

        <h2>Specifications</h2>
        <DetailedProductPageTable>
          <DetailedProductPageTr>
            <DetailedProductPageTh>Spec name</DetailedProductPageTh>
            <DetailedProductPageTh>Spec value</DetailedProductPageTh>
          </DetailedProductPageTr>
          {Object.entries(matchedData[0].specs).map((spec) => {
            return (
              <DetailedProductPageTr key={spec[0]}>
                <DetailedProductPageTd>{spec[0]}</DetailedProductPageTd>
                <DetailedProductPageTd>{spec[1]}</DetailedProductPageTd>
              </DetailedProductPageTr>
            );
          })}
        </DetailedProductPageTable>
      </DetailedProductPageContainer>
    </div>
  );
};

export default DetailedProductPage;
