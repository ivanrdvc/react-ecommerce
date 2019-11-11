import React from "react";
import "./OrderSummaryList.css";
import OrderSummaryItem from "./OrderSummaryItem/OrderSummaryItem";

function OrderSummaryList(props) {
  return (
    <div className="OrderSummaryList">
      {props.cart.products.map(p => (
        <OrderSummaryItem key={p.id} {...p} />
      ))}
    </div>
  );
}

export default OrderSummaryList;
