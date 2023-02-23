import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer as menReducer } from "../Redux/mensProduct/reducer";
import {reducer as womenReducer} from "../Redux/womensProduct/reducer"
const rootReducer = combineReducers({
  menReducer,
  womenReducer,
});
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
