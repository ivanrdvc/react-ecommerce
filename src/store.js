import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import checkoutReducer from "./services/checkout/index";
import cartReducer from "./services/cart/index";

const rootReducer = combineReducers({
  cart: cartReducer,
  checkout: checkoutReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
