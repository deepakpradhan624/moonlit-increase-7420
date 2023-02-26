import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useSearchParams } from 'react-router-dom'

const Privateroute = ({children}) => {
  const {isAuth}=useSelector((state)=>{
    return state.authReducer
  })
  console.log(isAuth)
  if(isAuth){
    return children;
  }else{
    return <Navigate to="/login"/>
  }
}

export default Privateroute
