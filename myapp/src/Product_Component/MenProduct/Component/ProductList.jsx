import { SimpleGrid, Spinner } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { useLocation, useSearchParams } from 'react-router-dom'
import { getProduct } from '../../../Redux/mensProduct/action'

import ProductCard from '../Component/ProductCard'
// import styles from "../styles/productlist.module.css"

const ProductList = () => {
    const dispatch=useDispatch()
    const location=useLocation()
    const [searchParam]=useSearchParams()
    const mens=useSelector((store)=>{
        return store.menReducer.mens
    })
    const loading=useSelector((store)=>{
      return store.menReducer.isLoading
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

    <>
    <SimpleGrid columns={[1, 1, 3]} spacing={3}>
    {loading && (
          <Spinner
            size="xl"
            thickness="7px"
            color="teal.500"
            position="absolute"
            top="50%"
            left="50%"
          />
        )}
    {mens.length>0 && mens.map((el)=>{
        return <ProductCard key={el.id} card={el} />
     })}
    </SimpleGrid>
     
    </>
  )
}

export default ProductList