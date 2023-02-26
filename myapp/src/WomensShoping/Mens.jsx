import React from 'react'
import axios from "axios"
import Slider from "react-slick";
import { useState,useEffect } from 'react'
import  styles from "./Womens.modules.css"
import {Link} from "react-router-dom"
const Mens = () => {
    const[Data,setData]=useState([])
  
    const getData=async()=>{
    return await  axios.get("https://filthy-top-hat-fawn.cyclic.app/front")
    .then((res)=>setData(res.data))
    .catch((err)=>console.log(err))
    }
   
    useEffect(()=>{
      getData()
    },[Data])
    
const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 3000,
      cssEase: "linear"
    };
    const arr=[
        {
          image:"https://img1.junaroad.com//assets/images/mobileNotif/img-1628498908811.jpg ",
          name:"My"
        },
      {
       image:"https://img0.junaroad.com/images/icons/men/tshirts.png",
       name:"tshirt"
      }
      ,
      {
       image:"https://img0.junaroad.com/images/icons/men/shirts.png",
       name:"Shirts"
      }
      ,
      {
       image:"https://img0.junaroad.com/images/icons/men/jeans.png",
       name:"jeans" 
      },
      {
        image:"https://img0.junaroad.com/images/icons/men/trousers.png",
        name:"trousers"
      },
      {
        image:"https://img0.junaroad.com/images/icons/men/ethnicsets.png",
        name:"ethnicsets"
      },
      {
        image:"https://img0.junaroad.com/images/icons/men/footwear.png",
        name:"footwear"
      },
      {
       image:"https://img0.junaroad.com/images/icons/men/kids.png",
       name:"men-kids"
      },
      {
        image:"https://img0.junaroad.com/images/icons/women/home.png",
        name:"home"
      }
      ,{
        image:"https://img0.junaroad.com/images/icons/women/home.png",
        name:"footwear"

      },
      {
        image:"https://img0.junaroad.com/images/icons/men/accessory.png",
        name:"accessory"
      },
      {
        image:"https://img0.junaroad.com/images/icons/men/winter.png",
        name:"men-winter"
      },
      {
        image:"https://img0.junaroad.com/images/icons/women/home.png",
        name:"home"
      }
    ]
  return (
    <div className='rahul'>
      <div className='mainboard'>
        {
          arr.map((el,i)=>{
            return(
              <div>
                <img className='round' src={el.image} alt={i}/>
                <h4>{el.name}</h4>
              </div>
            )
          })
        }
      </div>
    
       
        <div style={{paddingBottom:"40px"}}>
        <div className='alert'>
          <img className='line_image'  src='https://img0.junaroad.com/assets/images/blue_annoucement.png' alt="horne"/>
          <h4>Get FLAT 10% OFF on your purchase on payment via Paytm/ GPay/ PhonePe/ Net Banking/ Any Credit or Debit Card</h4>
          </div>
        <Slider {...settings}> 
         <img src="https://img1.junaroad.com//assets/images/mobileNotif/img-1661924796571.jpg?crsl_pos=0" alt="1" />
         <img src="https://img0.junaroad.com/images/banners/B2G1_13january2023_1673587401792.jpg?crsl_pos=0" alt="2" />
         <img src="https://img1.junaroad.com//assets/images/mobileNotif/img-1677088334472.jpg?crsl_pos=0" alt="3" />
         <img  src="https://img1.junaroad.com//assets/images/mobileNotif/img-1676008328934.jpg?crsl_pos=0" alt="4"/>
         <img src="https://img1.junaroad.com//assets/images/mobileNotif/img-1667388470485.jpg?crsl_pos=0" alt="5" />
         </Slider>
        </div>
      <div className="lead" >
          {
           Data.map((el)=>{
            return(
              <>
              <div styles={{border:"1px solid red", marginLeft:""}} >
                <div key={el.id} className={styles.card} >
                  <Link to="/menproduct">
                  
                  <img  style={{width:"500px"}} src={el.img} alt="" />
                  </Link>
                   
                </div>
                
              </div>
              </>
            )
          })
          }
      </div>
  </div>)
}

export default Mens
