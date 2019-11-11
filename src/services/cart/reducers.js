import types from "./types";

const initialState = {
  isLoading: true,
  products: [],
  total: ""
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_CART:
      return {
        ...state,
        isLoading: false,
        error: null,
        ...action.payload
      };
    case types.REMOVE_PRODUCT:
      return {
        ...state,
        ...action.payload
      };
    case types.UPDATE_QUANTITY:
      return {
        ...state,
        ...action.payload
      };
    case types.DELETE_CART:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}
