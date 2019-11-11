import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import "./Checkout.css";
import { actions } from "../../services/checkout/index";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import CheckoutStep from "./CheckoutStep/CheckoutStep";
import OrderSummary from "../OrderSummary/OrderSummary";

function Checkout() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(actions.fetchCheckout()), []);
  const cart = useSelector(state => state.cart);
  const checkout = useSelector(state => state.checkout);

  if (cart.isLoading || checkout.isLoading) {
    return null;
  }

  if (!cart.products.length) {
    return <Redirect to="/cart" />;
  }

  if (checkout.isCompleted) {
    return <Redirect to="checkout/receipt" />;
  }

  return (
    <>
      <Breadcrumbs steps={checkout.steps} />
      <div className="Checkout">
        <CheckoutStep {...checkout.steps.find(s => s.isActive)} />
        <OrderSummary cart={cart} />
      </div>
    </>
  );
}

export default Checkout;
