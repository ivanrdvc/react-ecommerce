import React from "react";
import { useDispatch } from "react-redux";
import "./ShoppingCartDetails.css";
import { Link } from "react-router-dom";
import { actions } from "../../../services/cart/index";

function ShoppingCartDetails({ total, subtotal }) {
  const dispatch = useDispatch();

  return (
    <div className="ShoppingCartDetails">
      <div className="ShoppingCartDetails-line">
        <span className="ShoppingCartDetails-title">Subtotal:</span>
        <span className="ShoppingCartDetails-subtotal">{subtotal}</span>
      </div>
      <div className="ShoppingCartDetails-line">
        <span className="ShoppingCartDetails-title">Total:</span>
        <span className="ShoppingCartDetails-total">{total}</span>
      </div>

      <div className="ShoppingCartDetails-nav">
        <a href="/">Continue Shopping</a>
        <button
          onClick={() => dispatch(actions.deleteCart())}
          className="button"
        >
          Clear Cart
        </button>
        <Link className="button " to="/checkout">
          Checkout
        </Link>
      </div>
    </div>
  );
}

export default ShoppingCartDetails;
