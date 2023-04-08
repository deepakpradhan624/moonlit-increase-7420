import {
    WOMENPRODUCT_FAILURE,
    WOMENPRODUCT_REQUEST,
    WOMENPRODUCT_SUCCESS,
  } from "./actionTypes";
  
  const initialState = {
    isLoading: false,
    isError: false,
    womens: [],
  };
  
  export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case WOMENPRODUCT_REQUEST:
        return { ...state, isLoading: true };
      case WOMENPRODUCT_SUCCESS:
        return { ...state, isLoading: false, womens: payload };
      case WOMENPRODUCT_FAILURE:
        return { ...state, isLoading: false, isError: true };
      default:
        return state;
    }
  };
  