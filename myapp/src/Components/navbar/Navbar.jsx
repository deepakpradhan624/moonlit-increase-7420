import React, { useState } from 'react'
import logo from "../../Asset/logo.png"
// import from "@tailwind"
import { BiSearchAlt2 } from 'react-icons/bi';
import {Women} from './Women';
import {Men} from './Men';
import "./navbar.css"
import Mobilemenu from './Mobilemenu';

import { FaCartPlus } from "react-icons/fa";
import { HiPencil } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";




const Navbar = () => {

   const [Hover , setHover] = useState(<></>);
   const [show,setShow]=useState(false)

  return (
    <div  onMouseLeave={()=>{setHover(<></>)}} onClick={()=>{setHover(<></>)}} >
      <div  className="h-18w-auto shadow-md  flex justify-center justify-between p-2">
         <div className=" items-center flex bold-sm">
            <h2 className='font-bold mr-2'>Limeroad</h2>
            <div className='gap-2 ml-2 left-nav'>
               <ul  className=" flex gap-10 ml-10">
                  <li onMouseEnter={()=>{setHover(<Women />)}} className='hover:text-red-400'>
                     <a  href="" className='hover:border-b-4 transition-all hover:border-red-500'>
                        WOMEN
                     </a>
                  </li>
                  <li  onMouseEnter={()=>{setHover(<Men />)}} className='hover:text-red-400'>
                     <a href="/menproduct"  className='hover:border-b-4 transition-all hover:border-red-500'>
                        MEN
                     </a>
                  </li>
                  <li className=' hover:text-red-400'>
                     <a href="" className='hover:border-b-4 transition-all hover:border-red-500'>
                        KIDS
                     </a>
                  </li>
                  <li className=' hover:text-red-400'>
                     <a href="/" className='hover:border-b-4 transition-all hover:border-red-500'>
                        HOME
                     </a>
                  </li>
                  <li className=' hover:text-red-400'>
                     <a href="" className='hover:border-b-4 transition-all hover:border-red-500'>
                        OFFER
                     </a>
                  </li>
               </ul>

               
         </div>
         </div>
         
         <div className="items-center flex">
            <ul  className="font-bold items-center flex gap-10 side-nav">
              
               <li className=' '>
                  <a href="#" className='hover:text-red-500'>
                     <div className="text-2xl">
                     <HiPencil style={{margin:"auto"}} />


                     <p className="text-sm">SCARPBOOK</p>
                  </div>
                  </a>
               </li>
               <li className='' >
                  <a href="#" className='hover:text-red-500'>
                     <div className="text-2xl">
                     <BiSearchAlt2 style={{margin:"auto"}}  />
                     <p className="text-sm">SEARCH</p>
                  </div>
                  </a>
               </li>
               <li className='' >
                  <a href="/cart" className='hover:text-red-500'>
                     <div className="text-2xl">
                     <FaCartPlus style={{margin:"auto"}}  />
                     <p className="text-sm" >CART</p>
                  </div>
                  </a>
               </li>
               <li className='' >
                  <a href="login" className='hover:text-red-500'>
                     <div className="text-2xl">
                     <CgProfile style={{margin:"auto"}}  />
                     <p className="text-sm">Profile</p>
                  </div>
                  </a>
               </li>
            </ul>

            <div class="flex lg:hidden md:hiden">
                <button onClick={(e)=>{setShow((pre)=>{return !pre})}} type="button" class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                    {!show&&<svg x-show="!isOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
                    </svg>}
            
                   { show&&<svg x-show="isOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>}
                </button>
            </div>
            
         </div>
      </div>
      
         <div className="" onMouseLeave={()=>{setHover(<></>)}} style={{width:"80%",margin:"auto",boxShadow: "rgba(0, 0, 0, 0.2) 0px 60px 40px -7px"}}>
         { Hover}
         </div>
     
    
      
      
      {
         show&&<Mobilemenu/>
      }
      
    </ div>
  )
}

export default Navbar
