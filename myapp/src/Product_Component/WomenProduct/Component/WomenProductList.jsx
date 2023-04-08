import { SimpleGrid, Spinner } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { useLocation, useSearchParams } from 'react-router-dom'
import { getWomenProduct } from '../../../Redux/womensProduct/action'
import WomenProductCard from "./WomenProductCard"


// import ProductCard from '../Component/ProductCard'
// import styles from "../styles/productlist.module.css"

const WomenProductList = () => {
    const dispatch=useDispatch()
    const location=useLocation()
    const [searchParam]=useSearchParams()
    const womens=useSelector((store)=>{
        return store.womenReducer.womens
    })
    const loading=useSelector((store)=>{
      return store.womenReducer.isLoading
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
        dispatch(getWomenProduct(obj))
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
    {womens.length>0 && womens.map((el)=>{
        return <WomenProductCard key={el.id} card={el} />
     })}
    </SimpleGrid>
     
    </>
  )
}

export default WomenProductList