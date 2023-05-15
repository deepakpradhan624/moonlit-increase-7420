import {
    WOMENPRODUCT_FAILURE,
    WOMENPRODUCT_REQUEST,
    WOMENPRODUCT_SUCCESS,
  } from "./actionTypes";
  import axios from "axios";
  
  export const productRequest = () => {
    return { type: WOMENPRODUCT_REQUEST };
  };
  
  export const productSuccess = (payload) => {
    return { type: WOMENPRODUCT_SUCCESS, payload };
  };
  export const productFailure = () => {
    return { type: WOMENPRODUCT_FAILURE };
  };
  
  export const getWomenProduct=(param)=>(dispatch)=>{
  dispatch(productRequest())
  return axios
  .get("https://careful-fish-sombrero.cyclic.app/womens",param)
  .then((res)=>{
      dispatch(productSuccess(res.data))
      console.log(res.data)
  }).catch((err)=>{
      dispatch(productFailure())
  })
  
  }