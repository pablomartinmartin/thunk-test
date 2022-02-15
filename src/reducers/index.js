import { combineReducers } from "redux";

import {
  ADD_TO_CART,
  GET_PRODUCTS,
  REMOVE_FROM_CART,
} from "../actions/actionTypes";

const initialState = {
  catalog: {},
  cartItems: [],
};

function cart(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        catalog: {
          ...action.payload.catalog,
        },
      };
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload.productSku],
      };
    case REMOVE_FROM_CART:
      return state - 1;
    default:
      return state;
  }
}

export default combineReducers({
  cart,
});
