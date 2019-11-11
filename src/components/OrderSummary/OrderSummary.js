import React from "react";
import "./OrderSummary.css";
import OrderSummaryList from "./OrderSummaryList/OrderSummaryList";
import OrderSummaryTotal from "./OrderSummaryTotal/OrderSummaryTotal";

function OrderSummary({ cart }) {
  const productCount = cart.products.reduce((a, b) => a + b.quantity, 0);

  return (
    <aside className="OrderSummary">
      <h3 className="OrderSummary-title">Order Summary</h3>
      <p className="OrderSummary-count">
        {productCount} {productCount > 1 ? "items" : "item"}
      </p>
      <OrderSummaryList cart={cart} />
      <OrderSummaryTotal cart={cart} />
    </aside>
  );
}

export default OrderSummary;
