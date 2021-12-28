import React from "react";
import Address from "../../components/address/Address";
import CartEmpty from "../../components/cartEmpty/cartEmpty";
import CartList from "../../components/cartList/CartList";
import styles from "./CartSm.module.scss";

const CartSmPage = () => {
  return (
    <div className={styles.cartSm}>
      <CartList />
      <CartEmpty />
      <Address />
    </div>
  );
};

export default CartSmPage;
