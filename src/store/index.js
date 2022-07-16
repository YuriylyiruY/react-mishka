import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import { configureStore,combineReducers } from "@reduxjs/toolkit";
import { applyMiddleware } from "redux";
import cashReducer from "./cashReducer";
import itemOfTheWeeksModalReducer from "./itemOfWeeksModalReducer";

//export const store = configureStore({ reducer: rootReducer });
const rootReducer = combineReducers({
  cash: cashReducer,
  modalev: itemOfTheWeeksModalReducer,
});
// custome: customerReducer,
export const store = configureStore({
  reducer: rootReducer,
  thunk: composeWithDevTools(applyMiddleware(thunk)),
});
