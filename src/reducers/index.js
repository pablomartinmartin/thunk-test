import { combineReducers } from "redux";

import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/actionTypes";

const initialState = {
  cartItems: [],
};

function cart(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload.productId],
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
