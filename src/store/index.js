import { configureStore, createStore, combineReducers } from "@reduxjs/toolkit";
import { cashReducer } from "./cashReducer";
import { customerReducer } from "./customerReducer";
import thunk from "redux-thunk";

import {composeWithDevTools} from 'redux-devtools-extension'
import { applyMiddleware } from "redux";
const rootReducer = combineReducers({
  cash: cashReducer,
  custome: customerReducer,
});
export const store = configureStore({
  reducer: rootReducer,
  thunk: composeWithDevTools(applyMiddleware(thunk)),
});

//export const store = createStore(rootReducer);
