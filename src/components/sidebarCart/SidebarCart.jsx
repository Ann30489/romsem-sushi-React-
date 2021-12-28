import React from "react";
import Address from "../address/Address";
import CartList from "../cartList/CartList";
import CartEmpty from "../cartEmpty/cartEmpty";
import styles from "./SidebarCart.module.scss";

const SidebarCart = () => {
  return (
    <div className={styles.sidebarCart}>
      <CartList />
      <CartEmpty />
      <Address />
    </div>
  );
};

export default SidebarCart;
