import React, { useReducer } from "react";

import ShopContext from "./shop-context";
import products from "../js/products";
import productsBanner from "../js/productsBanner";
import productsNew from "../js/productsNew";
import productsRecommend from "../js/productsRecommend";
import {
  shopReducer,
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  ADD_AMOUNT,
  REMOVE_ALL,
} from "./reducers";

const GlobalState = (props) => {
  const [cartState, dispatch] = useReducer(shopReducer, { cart: [] });

  const addProductToCart = (product) => {
    setTimeout(() => {
      dispatch({ type: ADD_PRODUCT, product: product });
    }, 200);
  };

  const removeProductFromCart = (productId) => {
    setTimeout(() => {
      dispatch({ type: REMOVE_PRODUCT, productId: productId });
    }, 200);
  };

  const addProductAmount = (productId) => {
    setTimeout(() => {
      dispatch({ type: ADD_AMOUNT, productId: productId });
    }, 200);
  };

  const removeAllFromCart = (state) => {
    setTimeout(() => {
      dispatch({ type: REMOVE_ALL, state: state });
    }, 200);
  };

  return (
    <ShopContext.Provider
      value={{
        products: products,
        productsBanner: productsBanner,
        productsNew: productsNew,
        productsRecommend: productsRecommend,
        cart: cartState.cart,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart,
        addProductAmount: addProductAmount,
        removeAllFromCart: removeAllFromCart,
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};

export default GlobalState;
