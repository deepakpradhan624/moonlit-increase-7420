import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { useLocation, useSearchParams } from 'react-router-dom'
import { getProduct } from '../../../Redux/mensProduct/action'

import ProductCard from '../Component/ProductCard'
import styles from "../styles/productlist.module.css"

const ProductList = () => {
    const dispatch=useDispatch()
    const location=useLocation()
    const [searchParam]=useSearchParams()
    const mens=useSelector((store)=>{
        return store.menReducer.mens
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
     {mens.length>0 && mens.map((el)=>{
        return <ProductCard key={el.id} card={el} />
     })}
    </div>
  )
}

export default ProductList