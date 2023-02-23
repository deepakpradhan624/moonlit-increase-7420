import React from 'react'
import WomenProductList from '../Component/WomenProductList'
import ProductList from '../Component/WomenProductList'
import WomenSidebar from '../Component/WomenSidebar'
import Sidebar from '../Component/WomenSidebar'


const WomenHomePage = () => {
  return (

    <div style={{display:"flex"}}>
        <div style={{width:"20%", border:"1px solid red", height:"auto"}}>
            <WomenSidebar/>
        </div>
        <div style={{width:"80%", border:"1px solid black", height:"auto"}}>

        <WomenProductList/>
        </div>
    </div>
  )
}

export default WomenHomePage