import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer as menReducer } from "../Redux/mensProduct/reducer";
import {reducer as womenReducer} from "../Redux/womensProduct/reducer";
import { reducer as authReducer } from "./Auth/auth.reducer";
const rootReducer = combineReducers({
  menReducer,
  authReducer,
  womenReducer,
});
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
