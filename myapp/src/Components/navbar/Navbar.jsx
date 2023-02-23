import React from 'react'
import logo from "../../Asset/logo.png"
import style from './Navbar.module.css'



const Navbar = () => {
  return (
    <>
    <nav className={style.Navbar}>


        <div> <a href='/'><img src={logo} alt="" /></a> </div>
        <div>
            <div>WOMEN</div>
            <div>MEN</div>
            <div>Kids</div>
            <div>HOME</div>
            <div>OFFERS</div>
        </div>
        <div>

             <div>
                <img src="" alt="" />
                <p>SCRAPBOOK</p>
             </div>
             <div>
             <img src="" alt="" />
                <p>SEARCH</p>
             </div>
             <div>
             <img src="" alt="" />
                <p>CART</p>
             </div>
             <div>
             <img src="" alt="" />
                <p>PROFILE</p>
             </div>

        </div>




   
    </nav>
    </>
  )
}

export default Navbar
