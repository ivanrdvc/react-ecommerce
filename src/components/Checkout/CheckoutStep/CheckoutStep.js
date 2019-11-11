import React from "react";
import { useDispatch } from "react-redux";
import "./CheckoutStep.css";
import { actions, constants } from "../../../services/checkout/index";
import BillingStep from "./BillingStep/BillingStep";
import PaymentStep from "./PaymentStep/PaymentStep";
import ConfirmationStep from "./ConfirmationStep/ConfirmationStep";
import ShippingStep from "./ShippingStep/ShippingStep";

function CheckoutStep(props) {
  const dispatch = useDispatch();
  const completeStep = (id, data) => dispatch(actions.completeStep(id, data));
  const placeOrder = () => dispatch(actions.fakeProcessPayment());

  // TODO refactor to be extensible
  if (props.type === constants.BILLING_STEP) {
    return <BillingStep {...props} complete={completeStep} />;
  }

  if (props.type === constants.SHIPPING_STEP) {
    return <ShippingStep {...props} complete={completeStep} />;
  }

  if (props.type === constants.PAYMENT_STEP) {
    return <PaymentStep {...props} complete={completeStep} />;
  }

  if (props.type === constants.CONFIRMATION_STEP) {
    return <ConfirmationStep {...props} complete={placeOrder} />;
  }

  return null;
}

export default CheckoutStep;
