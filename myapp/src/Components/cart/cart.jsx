import React, { useEffect, useState } from "react";

import "./cart.css";

import { Link } from "react-router-dom";

import { BsPlusSquareFill } from "react-icons/bs";
import { AiFillMinusSquare } from "react-icons/ai";

export default function Cart() {
  const [totalPrice, setTotalPrice] = useState(0);
 const [cart,setcart]=useState(JSON.parse(localStorage.getItem("cart"))||[])
  const [overightData, setOverightData] = useState([]);
function minus(id,quantity){
    if(quantity<2){
        remove(id)
    }else{
        const temp=cart.map((e)=>{
            if(e.id==id){
                e.quantity=+quantity-1
            }
            return e;
        })
        localStorage.setItem("cart",JSON.stringify(temp))
        setcart(temp)
    }
}
function plus(id,quantity){
    const temp=cart.map((e)=>{
        if(e.id==id){
            e.quantity=+quantity+1
        }
        return e;
    })
    localStorage.setItem("cart",JSON.stringify(temp))
    setcart(temp)
}

function remove(id){
    
   let temp= cart.filter((e)=>{
        return e.id!=id
    })
    localStorage.setItem("cart",JSON.stringify(temp))
    setcart(temp)


}
  useEffect(() => {
    console.log(cart)
    let temp=0
    cart.forEach(({quantity,price}) => {
        temp+=+quantity*(+price)
    });
    setTotalPrice(temp)

  }, [cart]);

  return (
    <>
      {cart.length === 0 ? (
        <div>
          <img
            src="https://images.meesho.com/images/pow/empty-cart.png"
            className="m-auto mt-4"
            alt=""
          />
          <p className="emptycart">Your Cart is empty</p>
          <div className="text-center ">
            <Link to="/">
              <button className="viewbtn">Viem Product</button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-around max-h-full px-4 py-8 sm:items-start gap-y-3 gap-x-4 sm:flex-row ">
          {/* left side */}

          <div className="">
            <h1
              className="decoration-black
    font-medium
    text-[18px]"
            >
              Cart <span className="text-slate-400">| {cart.length} Item</span>
            </h1>
            <div className="flex gap-y-4 flex-col mb-8 border items-center px-8 py-5 w-[100%]  shadow-xl rounded-sm ">
              {cart.length != 0 &&
                cart.map(({ id, img, price, rating, quantity=1,ratingImage, name }) => {
                  return (
                    <div
                      className="flex sm:gap-2 items-center font-semibold border  gap-y-8 px-4 flex-col md:flex-row py-8  shadow-md rounded-sm w-[100%]"
                      key={id}
                    >
                      <div className="rounded-lg w-[100%] sm:w-[200px]  h-[170px] ">
                        <img
                          className="w-[100%] h-[100%]  object-contain"
                          src={img}
                          alt={name}
                        />
                      </div>

                      <div className="flex flex-col  w-[100%] gap-y-4">
                        <p className="text-sm ">{name}</p>

                        <div className="flex justify-between items-center text-[10px]">
                          <p className="w-[120px] te">rating: {rating}</p>
                          
                          <div className="flex items-center gap-x-2 w-[] ">
                            Qty:
                            <div
                              onClick={() => {minus(id,quantity)}}
                            >
                              <AiFillMinusSquare size={25} />
                            </div>
                            <input
                              className=" text-center w-[10%]  "
                              type="text"
                              placeholder={quantity}
                              disabled
                            />
                            <div
                              onClick={() => {plus(id,quantity)}}
                            >
                              <BsPlusSquareFill size={20} />
                            </div>
                          </div>
                        </div>
                        <p>{ratingImage}</p>

                        <div className="flex gap-4 ">Price: {price}</div>

                        <button
                          className="text-[#F43397] text-start "
                          onClick={() => remove(id)}
                        >
                          REMOVE
                        </button>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>

          {/* Right side */}
          <div className="text-[12px] h-[90%] lg:w-[300px] md:w-[290px] sm:w-[40%] w-[290px] px-8 py-4 border flex flex-col gap-y-2 shadow-2xl rounded-sm ">
            <h2 className="text-xl font-bold">Price Details</h2>

            <div className="flex justify-between py-2 font-semibold">
              {/* className="flex justify-between" */}
              <p>Total Product Price </p>
              <p>₹ {totalPrice}</p>
            </div>
            <div className="border-[0.5px]"></div>
            {/* style={{ border: "1px solid rgb(240 240 240)" }} */}
            <div className="flex justify-between font-semibold">
              {/* className="flex items-center justify-between" */}
              <p>Order Total </p>
              <p>₹ {totalPrice}</p>
            </div>
            <Link to={"#"}>
              <div className="py-2 my-2 md:text-2xl text-[14px] text-center bg-[#F43397] rounded-lg text-slate-50">
                Continue
              </div>
            </Link>
            <div className="w-[100%]">
              <img
                src="	https://images.meesho.com/images/marketing/1588578650850.webp"
                className="w-[100%]"
                alt=""
              />
            </div>
          </div>
        </div>
      )}
          
    </>
  );
}