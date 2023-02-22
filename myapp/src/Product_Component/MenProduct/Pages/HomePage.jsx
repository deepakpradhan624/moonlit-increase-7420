import React from 'react'
import ProductList from '../Component/ProductList'
import Sidebar from '../Component/Sidebar'


const HomePage = () => {
  return (

    <div style={{display:"flex"}}>
        <div style={{width:"20%", border:"1px solid red", height:"auto"}}>
            <Sidebar/>
        </div>
        <div style={{width:"80%", border:"1px solid black", height:"auto"}}>

        <ProductList/>
        </div>
    </div>
  )
}

export default HomePage