import React from "react";

import HomePage from "./components/homepage/homepage";
import TVs from "./components/tvs/tvs";
import MobilePhones from "./components/mobile-phones/mobile-phones";
import Laptops from "./components/laptops/laptops";
import Gaming from "./components/gaming/gaming";
import PCComponents from "./components/pc-components/pc-components";
import ProductPage from "./components/product-page/product-page";
import Header from "./components/header/header";
import UserInfoBar from "./components/user-info-bar/user-info-bar";
import DetailedProductPage from "./components/detailed-product-page/detailed-product-page";
import SignInAndSignUp from "./components/SignInAndSignUpPage.js/sign-in-and-sign-up";
import Checkout from "./components/checkout/checkout";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Router>
        <UserInfoBar />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tvs" element={<TVs />} />
          <Route path="/gaming" element={<Gaming />} />
          <Route path="/pc-components" element={<PCComponents />} />
          <Route path="/pc-components/:component" element={<ProductPage />} />
          <Route path="/mobile-phones" element={<MobilePhones />} />
          <Route path="/laptops" element={<Laptops />} />
          <Route
            path="/pc-components/:component/:param"
            element={<DetailedProductPage />}
          />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/tvs/:param" element={<DetailedProductPage />} />
          <Route path="/gaming/:param" element={<DetailedProductPage />} />
          <Route
            path="/mobile-phones/:param"
            element={<DetailedProductPage />}
          />
          <Route path="/laptops/:param" element={<DetailedProductPage />} />
          <Route path="/sign-in-sign-up" element={<SignInAndSignUp />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
