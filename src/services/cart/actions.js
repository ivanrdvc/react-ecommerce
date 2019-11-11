import types from "./types";

//TODO implement proper error handling

function fetchCart() {
  return dispatch => {
    fetch("/cart/getcart")
      .then(res => res.json())
      .then(json =>
        dispatch({
          type: types.FETCH_CART,
          payload: json
        })
      )
      .catch(error => console.log(error));
  };
}

function removeProduct(id) {
  return dispatch => {
    fetch(`/cart/removeFromCart/?productId=${id}`)
      .then(res => res.json())
      .then(json =>
        dispatch({
          type: types.REMOVE_PRODUCT,
          payload: json
        })
      )
      .catch(error => console.log(error));
  };
}

function updateQuantity(id, qty) {
  return dispatch => {
    fetch(`/cart/updateQuantity?productId=${id}&quantity=${qty}`)
      .then(res => res.json())
      .then(json =>
        dispatch({
          type: types.UPDATE_QUANTITY,
          payload: json
        })
      )
      .catch(error => console.log(error));
  };
}

function deleteCart() {
  return dispatch => {
    fetch("/cart/deleteCart")
      .then(res => res.json())
      .then(json =>
        dispatch({
          type: types.DELETE_CART,
          payload: json
        })
      )
      .catch(error => console.log(error));
  };
}

export default {
  fetchCart,
  deleteCart,
  removeProduct,
  updateQuantity
};
