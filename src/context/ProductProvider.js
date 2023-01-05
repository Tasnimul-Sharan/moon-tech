import React, { createContext, useContext, useEffect, useReducer } from "react";
import { actionTypes } from "../state/ProductState/actionTypes";
import {
  initialState,
  productReducer,
} from "../state/ProductState/productReducer";
const productContext = createContext();

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  useEffect(() => {
    dispatch({ type: actionTypes.fetchingStart });
    fetch("products.json")
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: actionTypes.fetchingSuccess, payload: data })
      )
      .catch(() => {
        dispatch({ type: actionTypes.fetchingError });
      });
  }, []);

  const value = {
    state,
    dispatch,
  };

  return (
    <productContext.Provider value={value}>{children}</productContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(productContext);
  return context;
};

export default ProductProvider;
