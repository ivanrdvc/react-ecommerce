import React from "react";
import "./Quantity.css";

function Quantity({ quantity, updateQuantity, id }) {
  return (
    <div className="Quantity">
      <input
        type="number"
        name="quantity"
        value={quantity}
        min="1"
        max="50"
        onChange={e => updateQuantity(id, e.target.value)}
      />
    </div>
  );
}

export default Quantity;
