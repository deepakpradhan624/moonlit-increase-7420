//import axios from "axios";
import {
  //   RecaptchaVerifier,
  //   signInWithPhoneNumber,
  signOut,
} from "firebase/auth";
import { auth } from "../../Pages/Signup_Login/FireBase";
import {
  AUTH_SIGN_IN_ERROR,
  // eslint-disable-next-line no-unused-vars
  AUTH_SIGN_IN_LOADING,
  AUTH_SIGN_IN_SUCCESS,
  AUTH_SIGN_OUT,
} from "./Auth.actinType";

export const login = (creds) => async (dispatch) => {
  
  dispatch({ type: AUTH_SIGN_IN_SUCCESS, payload: creds });
  //   } catch (error) {
  //     dispatch({ type: AUTH_SIGN_IN_ERROR });
  //   }
};

export const logout = () => async (dispatch) => {
  signOut(auth)
    .then((res) => {
      console.log("logout", res);
      dispatch({ type: AUTH_SIGN_OUT });
    })
    .catch((err) => {
      dispatch({ type: AUTH_SIGN_IN_ERROR });
    });
};
