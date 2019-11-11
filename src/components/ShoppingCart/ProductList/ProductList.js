import React from "react";
import "./ProductList.css";
import ProductListItem from "./ProductListItem/ProductListItem";

function ProductList({ products }) {
  return (
    products && (
      <div className="ProductList">
        <div className="ProductList-header">
          <span className="ProductList-title">Product</span>
          <span className="ProductList-title">Quantity</span>
          <span className="ProductList-title">Price</span>
        </div>
        {products.map(p => (
          <ProductListItem key={p.id} {...p} />
        ))}
      </div>
    )
  );
}

export default ProductList;
