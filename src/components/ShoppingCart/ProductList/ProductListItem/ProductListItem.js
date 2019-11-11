import React from "react";
import { useDispatch } from "react-redux";

import "./ProductListItem.css";
import { actions } from "../../../../services/cart/index";
import Quantity from "../../../common/Quantity/Quantity";

function ProductListItem(props) {
  const dispatch = useDispatch();
  const updateQuantity = (id, qty) => {
    if (qty >= 1 && qty <= 50) dispatch(actions.updateQuantity(id, qty));
  };

  return (
    <div className="ProductListItem">
      <div className="ProductListItem-details">
        <div className="ProductListItem-img">
          <img src="/img/products/prod-thumbnail.jpg" alt="product" />
        </div>
        <div className="ProductListItem-name">{props.name}</div>
      </div>

      <div className="ProductListItem-total">
        <div className="ProductListItem-quantity">
          <Quantity
            id={props.id}
            quantity={props.quantity}
            updateQuantity={updateQuantity}
          />
        </div>
        <div className="ProductListItem-remove">
          <svg
            onClick={() => dispatch(actions.removeProduct(props.id))}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="#424242"
              d="M465.423 48.24h-137.6V23.955c0-13.2-10.73-23.955-23.92-23.955h-95.785c-13.2 0-23.92 10.746-23.92 23.955V48.24H46.577a12.05 12.05 0 0 0-12.049 12.049 12.05 12.05 0 0 0 12.049 12.049H68.9l15.228 396.396C85.07 492.995 104.818 512 129.1 512h253.804c24.28 0 44.03-19.006 44.96-43.267L443.1 72.337h22.332c6.653 0 12.05-5.394 12.05-12.05a12.05 12.05 0 0 0-12.049-12.047zM208.285 24.097h95.43V48.24h-95.43V24.097zm195.5 443.712c-.433 11.268-9.605 20.094-20.882 20.094H129.1c-11.276 0-20.448-8.827-20.882-20.095L93.025 72.338h325.952l-15.193 395.47zM182.63 181.57a12.05 12.05 0 0 0-12.042-11.817l-.236.002c-6.652.128-11.943 5.626-11.815 12.278l3.78 196.634a12.05 12.05 0 0 0 12.042 11.817l.236-.002a12.05 12.05 0 0 0 11.815-12.278l-3.78-196.634zm73.368-11.817a12.05 12.05 0 0 0-12.049 12.049v196.634a12.05 12.05 0 0 0 12.049 12.049 12.05 12.05 0 0 0 12.049-12.049V181.802a12.05 12.05 0 0 0-12.049-12.049zm85.647.003c-6.628-.147-12.15 5.162-12.278 11.815l-3.78 196.634a12.05 12.05 0 0 0 11.815 12.278l.236.002c6.546 0 11.916-5.244 12.042-11.817l3.78-196.634a12.05 12.05 0 0 0-11.815-12.278z"
            />
          </svg>
        </div>
        <div className="ProductListItem-price">{props.price}</div>
      </div>
    </div>
  );
}

export default ProductListItem;
