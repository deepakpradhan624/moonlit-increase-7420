import React from "react";
import HomePage from "../Product_Component/MenProduct/Pages/HomePage";
// import ProductDetails from './ProductDetails'
import { Routes, Route } from "react-router-dom";
import WomenHomePage from "../Product_Component/WomenProduct/Pages/WomenHomePage";
// import HomePage  from '../Product_Component/WomenProduct/Pages/WomenHomePage';
// import Login from "../Components/signup_login/Login";
// import SignUp from "../Components/signup_login/SignUp";
import Mens from "../WomensShoping/Mens";
import Cart from "../Components/cart/cart";
import Checkout from "../Checkout/Pages/Checkout";

import Login from "../sign_log/Login";
import Signup from "../sign_log/Signup";
// import Privateroute from "../Components/Privateroute";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Mens />} />
      <Route path="/menproduct" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/womenproduct" element={<WomenHomePage />} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/checkout" element={<Checkout/>} />
    </Routes>
  );
};

export default MainRoutes;
