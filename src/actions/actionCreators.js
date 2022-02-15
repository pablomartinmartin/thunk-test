import { ADD_TO_CART, GET_PRODUCTS, REMOVE_FROM_CART } from "./actionTypes";

import * as catalog from "../MOCK_DATA/products.json";

export const getProducts = () => {
  return {
    type: GET_PRODUCTS,
    payload: {
      catalog,
    },
  };
};

export const addToCart = (productSku) => {
  return {
    type: ADD_TO_CART,
    payload: {
      productSku,
    },
  };
};

export const removeCart = (productSku) => {
  return {
    type: REMOVE_FROM_CART,
    payload: { productSku },
  };
};
