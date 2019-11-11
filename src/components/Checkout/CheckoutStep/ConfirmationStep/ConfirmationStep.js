import React from "react";
import { useSelector } from "react-redux";
import "./ConfirmationStep.css";

function PaymentStep(props) {
  const { isProcessing } = useSelector(state => state.checkout);

  return (
    <div className="CheckoutStep">
      <h2 className="CheckoutStep-title">{props.name}</h2>
      <button
        onClick={() => props.complete()}
        className="button button--primary"
      >
        {isProcessing ? "Processing..." : "Place order"}
      </button>
    </div>
  );
}

export default PaymentStep;
