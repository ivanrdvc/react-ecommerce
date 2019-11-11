import React from "react";
import "./OrderSummaryItem.css";

function OrderSummaryItem(props) {
  return (
    <div className="OrderSummaryItem">
      <img
        className="OrderSummaryItem-img"
        src="/img/products/prod-thumbnail.jpg"
        alt="product"
      />
      <span className="OrderSummaryItem-name">{props.name}</span>
      <span> x {props.quantity}</span>
      <span className="OrderSummaryItem-price">{props.price}</span>
    </div>
  );
}

export default OrderSummaryItem;
