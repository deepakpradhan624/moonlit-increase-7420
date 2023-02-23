import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { useLocation, useSearchParams } from 'react-router-dom'
import { getProduct } from '../../../Redux/mensProduct/action'


import styles from "../styles/productlist.module.css"
import WomenProductCard from './WomenProductCard'

const WomenProductList = () => {
    const dispatch=useDispatch()
    const location=useLocation()
    const [searchParam]=useSearchParams()
    const womens=useSelector((store)=>{
        return store.womenReducer.womens
    })
let obj={
  params:{
    rating:searchParam.getAll("rating"),
    category:searchParam.getAll("category"),
    _sort:searchParam.get("order") && "price",
    _order:searchParam.get("order")
  }
}
    useEffect(()=>{
        dispatch(getProduct(obj))
    },[location.search])
  return (
    <div className={styles.listcontainer}>
     {womens.length>0 && womens.map((el)=>{
        return <WomenProductCard key={el.id} card={el} />
     })}
    </div>
  )
}

export default WomenProductList