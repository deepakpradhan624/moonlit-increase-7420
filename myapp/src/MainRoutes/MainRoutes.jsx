import React from 'react'
import HomePage from '../Product_Component/MenProduct/Pages/HomePage'
// import ProductDetails from './ProductDetails'
import { Routes, Route } from "react-router-dom";

const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/menproduct" element={<HomePage/>} />
        
    </Routes>
  )
}

export default MainRoutes