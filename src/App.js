import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route } from "react-router-dom";
import { actions } from "./services/cart/index";
import "./App.css";
import Loader from "./components/common/Loader/Loader";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import Checkout from "./components/Checkout/Checkout";
import Receipt from "./components/Receipt/Receipt";

function App() {
  const isLoading = useSelector(state => state.isLoading);
  const dispatch = useDispatch();

  useEffect(() => dispatch(actions.fetchCart()), []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="App">
      <Route path="/cart" exact component={ShoppingCart} />
      <Route path="/checkout" exact component={Checkout} />
      <Route path="/checkout/receipt" exact component={Receipt} />
    </div>
  );
}

export default App;
