import React, { useContext } from "react";
import styles from "./CartEmpty.module.scss";
import ShopContext from "../../context/shop-context";

const CartEmpty = () => {
  const context = useContext(ShopContext);
  const styleBlock = {
    display: "block",
  };

  const styleNone = {
    display: "none",
  };

  return (
    <>
    <div className={styles.cartEmpty} style={context.cart.length > 0 ? styleNone : styleBlock}>
      <div className={styles.cartEmpty__wrapper}>
        <p className={styles.cartEmpty__title}>Ваша корзина пуста.</p>
        <p className={styles.cartEmpty__subtitle}>
          Добавьте же скорее что-нибудь!
        </p>
        <p className={styles.cartEmpty__details}>
          Бесплатная доставка от 800 СОМ
        </p>
      </div>
    </div>
    </>
  );
};

export default CartEmpty;
