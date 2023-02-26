import * as types from "./auth.actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  userData: {},
  isAuth: false,
  userlist: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // user login cases
    case types.LOGIN_SET_USER_DATA: {
      return {
        ...state,
        userData: { ...payload },
        isAuth:true
      };
    }
    case types.LOGIN_GET_USER_DATA: {
      return {
        ...state,
        isAuth: true,
      };
    }
    case types.LOGIN_REMOVE_USER_DATA: {
      return {
        ...state,
        userData: {},
      };
    }
    // user login cases end
    case types.ADD_USER_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case types.ADD_USER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isAuth: true
      };
    }

    case types.ADD_USER_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case types.GET_USER_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case types.GET_USER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        userlist: payload,
      };
    }
    case types.GET_USER_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case "LOGOUT_USER":{
      return{
        ...initialState
      }
    }

    default:
      return state;
  }
};
