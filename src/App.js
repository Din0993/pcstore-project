import React from "react";

import HomePage from "./components/homepage/homepage";
import TVs from "./components/tvs/tvs";
import MobilePhones from "./components/mobile-phones/mobile-phones";
import Laptops from "./components/laptops/laptops";
import Gaming from "./components/gaming/gaming";
import PCComponents from "./components/pc-components/pc-components";
import ProductPage from "./components/product-page/product-page";
import Header from "./components/header/header";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
  Outlet,
  NavLink,
  useLocation,
} from "react-router-dom";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tvs" element={<TVs />} />
          <Route path="/gaming" element={<Gaming />} />
          <Route path="/pc-components" element={<PCComponents />} />
          <Route path="/pc-components/:component" element={<ProductPage />} />
          <Route path="/mobile-phones" element={<MobilePhones />} />
          <Route path="/laptops" element={<Laptops />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
