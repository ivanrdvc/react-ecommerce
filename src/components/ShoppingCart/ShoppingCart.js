import React from "react";
import { useSelector } from "react-redux";
import "./ShoppingCart.css";
import ProductList from "./ProductList/ProductList";
import ShoppingCartDetails from "./ShoppingCartDetails/ShoppingCartDetails";

function ShoppingCart() {
  const { products, total, subtotal } = useSelector(state => state.cart);

  return (
    <div className="ShoppingCart">
      <h2 className="ShoppingCart-title">Shopping Cart</h2>
      <div className="ShoppingCart-wrap">
        {products.length ? (
          <React.Fragment>
            <ProductList products={products} />
            <ShoppingCartDetails total={total} subtotal={subtotal} />
          </React.Fragment>
        ) : (
          <p>Your shopping cart is Empty.</p>
        )}
      </div>
    </div>
  );
}

export default ShoppingCart;
