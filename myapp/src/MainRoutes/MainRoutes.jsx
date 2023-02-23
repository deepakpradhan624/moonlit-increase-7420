import React from 'react'
import HomePage from '../Product_Component/MenProduct/Pages/HomePage'
// import ProductDetails from './ProductDetails'
import { Routes, Route } from "react-router-dom";
import WomenHomePage from '../Product_Component/WomenProduct/Pages/WomenHomePage';
// import HomePage  from '../Product_Component/WomenProduct/Pages/WomenHomePage';

const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/menproduct" element={<HomePage/>} />
        <Route path="/womenproduct" element={<WomenHomePage/>} />

        
    </Routes>
  )
}

export default MainRoutes