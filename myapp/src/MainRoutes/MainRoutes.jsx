import React from 'react'
import HomePage from '../Product_Component/MenProduct/Pages/HomePage'
// import ProductDetails from './ProductDetails'
import { Routes, Route } from "react-router-dom";
import WomenHomePage from '../Product_Component/WomenProduct/Pages/WomenHomePage';
import Login from '../Components/signup_login/Login';
import SignUp from '../Components/signup_login/SignUp';
// import HomePage  from '../Product_Component/WomenProduct/Pages/WomenHomePage';

const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/menproduct" element={<HomePage/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/womenproduct" element={<WomenHomePage/>} />

        
    </Routes>
  )
}

export default MainRoutes