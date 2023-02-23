import React from 'react'
import { FaCartPlus } from 'react-icons/fa';
import { HiPencil } from 'react-icons/hi';
import { CgProfile } from 'react-icons/cg';
import { BiSearchAlt2 } from 'react-icons/bi';




function mobilemenu() {
  return (
    <div className='text-center bg-gray-50'>
        
      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-2 text-center "   >
      <div className="border">
     <div className='flex justify-center justify-evenly p-3 text-2xl'>
        <h4>
          <a href="#" className="font-bold hover:text-red-500 transition-all hover:border-b hover:border-red-500"><HiPencil/></a>
        </h4>
        <h4>
          <a href="#" className="font-bold hover:text-red-500 transition-all hover:border-b hover:border-red-500"><CgProfile/></a>
        </h4>
        <h4>
          <a href="#" className="font-bold hover:text-red-500 transition-all hover:border-b hover:border-red-500"><FaCartPlus/></a></h4>
        <h4>
          <a href="#" className="font-bold hover:text-red-500 transition-all hover:border-b hover:border-red-500"><BiSearchAlt2/></a></h4>
     </div>
        </div>
        <div className="border" >
            <ul>
                <li className='p-2'>
                  <a href="#" className="font-bold hover:text-red-500 transition-all hover:border-b hover:border-red-500">WOMEN</a>
                </li>
                <li className='p-2'>
                  <a href="#" className="font-bold hover:text-red-500 transition-all hover:border-b hover:border-red-500">MEN</a>
                </li>
                <li className='p-2'>
                  <a href="#" className="font-bold hover:text-red-500 transition-all hover:border-b hover:border-red-500">KIDS</a>
                </li>
                <li className='p-2'>
                  <a href="#" className="font-bold hover:text-red-500 transition-all hover:border-b hover:border-red-500">HOME</a>
                </li>
                <li className='p-2'>
                  <a href="#" className="font-bold hover:text-red-500 transition-all hover:border-b hover:border-red-500">OFFERS</a>
                </li>
            </ul>
        </div>
       

      </div>
    </div>
  )
}

export default mobilemenu
