import React from "react";
import "./OrderSummaryTotal.css";

function OrderSummaryTotal(props) {
  return (
    <div className="OrderSummaryTotal">
      <div className="OrderSummaryTotal-line">
        <span>Subtotal:</span>
        <span>{props.cart.total}</span>
      </div>

      <div className="OrderSummaryTotal-line">
        <span>Discount:</span>
        <span>0</span>
      </div>

      <div className="OrderSummaryTotal-line">
        <span>Total:</span>
        <span>{props.cart.total}</span>
      </div>
    </div>
  );
}

export default OrderSummaryTotal;
