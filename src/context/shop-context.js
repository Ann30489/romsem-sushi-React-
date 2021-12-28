import React from "react";
import products from "../js/products";
import productsBanner from "../js/productsBanner";
import productsNew from "../js/productsNew";
import productsRecommend from "../js/productsRecommend";

export default React.createContext({
  products,
  productsBanner,
  productsNew,
  productsRecommend,
  cart: [],
  addProductToCart: () => {},
  removeProductFromCart: () => {},
  addProductAmount: () => {},
  removeAllFromCart: () => {},
});
