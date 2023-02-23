import React from 'react'

const WomenProductCard = ({card}) => {
  return (
    <div style={{border:"1px solid blue"}}>
        <img style={{width:"150px"}} src={card.img} alt="" />
        <h4>{card.name}</h4>
        <p>₹{card.price}</p>
        <p>Rating:{card.ratingImage}</p>
        <button style={{background:"blue", color:"white", width:"80%", height:"30px", marginBottom:"8px" }}>Add to Cart</button>
    </div>
  )
}

export default WomenProductCard