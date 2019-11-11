import React, { useState } from "react";
import "./ShippingStep.css";

function ShippingStep(props) {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="CheckoutStep">
      <h2 className="CheckoutStep-title">{props.name}</h2>

      <div className="ShippingStep-form">
        <label htmlFor="billing">Same as billing</label>
        <input
          type="checkbox"
          id="billing"
          checked={isVisible}
          onChange={() => setIsVisible(!isVisible)}
        />
      </div>

      {!isVisible && (
        <div className="ShippingStep-address">
          <pre>new form here</pre>
        </div>
      )}

      <button
        type="submit"
        className="button button--primary"
        onClick={() => props.complete(props.id)}
      >
        Next Step
      </button>
    </div>
  );
}

export default ShippingStep;
