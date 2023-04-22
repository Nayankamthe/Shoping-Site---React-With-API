import { Action } from "history";
import { ActionTypes } from "../constants/action-types";

const initialState = {
  products: [],
};

// reducer contain two parameter (state, action)
// here we just destructuring the action parmeter int 'type' and 'payload'.
export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};
