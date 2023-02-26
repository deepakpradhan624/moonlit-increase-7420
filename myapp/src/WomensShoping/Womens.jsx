// import React, { useEffect, useState } from 'react'
// import axios from "axios"
// import Slider from "react-slick";
// import "./Womens.modules.css"
// const Womens = () => {
//     const[Data,setData]=useState([])
  
//     const getData=async()=>{
//     return await  axios.get(`https://koti-api.onrender.com/shoes&bags`)
//     .then((res)=>setData(res.data))
//     .catch((err)=>console.log(err))
//     }
   
//     useEffect(()=>{
//       getData()
//     },[Data])
//     const settings = {
//       dots: true,
//       infinite: true,
//       slidesToShow: 3,
//       slidesToScroll: 1,
//       autoplay: true,
//       speed: 3000,
//       autoplaySpeed: 3000,
//       cssEase: "linear"
//     };
//     const arr=[
//       {
//         image:"https://img1.junaroad.com//assets/images/mobileNotif/img-1628498908811.jpg ",
//         name:"My"
//       },
//       {
//        image:"https://img0.junaroad.com/images/icons/women/kurtas.png",
//        name:"kurtas"
//       }
//       ,
//       {
//        image:"https://img0.junaroad.com/images/icons/women/tops.png",
//        name:"womens-tops"
//       }
//       ,
//       {
//        image:"https://img0.junaroad.com/images/icons/women/dresses.png",
//        name:"Dresses" 
//       },
//       {
//         image:"https://img0.junaroad.com/images/icons/women/sarees.png",
//         name:"Sarees"
//       },
//       {
//         image:"https://img0.junaroad.com/images/icons/women/suits.png",
//         name:"women-suits"
//       },
//       {
//         image:"https://img0.junaroad.com/images/icons/women/ethnicsets.png",
//         name:"enthnicsets"
//       },
//       {
//        image:"https://img0.junaroad.com/images/icons/women/bottoms.png",
//        name:"bottoms"
//       },
//       {
//         image:"https://img0.junaroad.com/images/icons/women/bags.png",
//         name:"bags"
//       }
//       ,{
//         image:"https://img0.junaroad.com/images/icons/women/footwear.png",
//         name:"footwear"

//       },
//       {
//         image:"https://img0.junaroad.com/images/icons/women/kids.png",
//         name:"women-kids"
//       },
//       {
//         image:"https://img0.junaroad.com/images/icons/women/addons.png",
//         name:"addons"
//       },
//       {
//         image:"https://img0.junaroad.com/images/icons/women/home.png",
//         name:"home"
//       }
//     ]
//   return (
//     <div className='rahul'>
//       <div className='mainboard'>
//         {
//           arr.map((el,i)=>{
//             return(
//               <div>
//                 <img className='round' src={el.image} alt={i}/>
//                 <h4 >{el.name}</h4>
//               </div>
//             )
//           })
//         }
//       </div>
    
       
//         <div  className='board' >
//           <div className='alert'>
//           <img className='line_image'  src='https://img0.junaroad.com/assets/images/blue_annoucement.png' alt="horne"/>
//           <h4>Get FLAT 10% OFF on your purchase on payment via Paytm/ GPay/ PhonePe/ Net Banking/ Any Credit or Debit Card</h4>
//           </div>
//         <Slider {...settings}>
//          <img src="https://img1.junaroad.com//assets/images/mobileNotif/img-1676008328934.jpg?crsl_pos=0" alt="1" />
//          <img src="https://img1.junaroad.com//assets/images/mobileNotif/img-1667988209100.jpg?crsl_pos=0" alt="2" />
//          <img src="https://img1.junaroad.com//assets/images/mobileNotif/img-1676438464216.jpg?crsl_pos=0" alt="3" />
//          <img  src="https://img1.junaroad.com//assets/images/mobileNotif/img-1647503406658.jpg?crsl_pos=0" alt="4"/>
//          <img src="https://img1.junaroad.com//assets/images/mobileNotif/img-1667988209100.jpg?crsl_pos=0" alt="5" />
//          </Slider>
//         </div>
//       <div className="lead" >
//           {
//            Data.map((el)=>{
//             return(
//               <div  className='main'>
//                 <div  class="card">
//                   <h2>{el.description}</h2>
//                     <img className='photo' src={el.image1} alt={el.cost}/>
//                     <center>
//                     <h1>{el.cost}</h1>
//                     <p>{el.description}</p>
//                     </center>
                   
//                 </div>
//                 <div style={{display:"grid"}}>
//                   <img className='photo1' src={el.image1} alt={el.cost} />
//                   <img className='photo1' src={el.image2} alt={el.cost} />
//                   <img className='photo1' src={el.image3} alt={el.cost} />
//                   <img className='photo1' src={el.image4} alt={el.cost} />
//                 </div>
//               </div>
//             )
//           })
//           }
//       </div>
//   </div>
//   )
// }

// export default Womens
