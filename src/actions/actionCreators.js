import { ADD_TO_CART, REMOVE_FROM_CART } from "./actionTypes";

export const addToCart = (productId) => {
  return {
    type: ADD_TO_CART,
    payload: {
      productId,
    },
  };
};

export const removeTodo = (productId) => {
  return {
    type: REMOVE_FROM_CART,
    payload: { productId },
  };
};
