import { actionTypes } from "./actionTypes";

export const initialState = {
  loading: false,
  product: [],
  error: false,
  cart: [],
};
export const productReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.fetchingStart:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case actionTypes.fetchingSuccess:
      return {
        ...state,
        loading: false,
        products: action.payload,
        error: false,
      };
    case actionTypes.fetchingError:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case actionTypes.addToCart:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};
