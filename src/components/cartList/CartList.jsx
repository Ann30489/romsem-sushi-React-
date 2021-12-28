import React, { useContext } from "react";
import ShopContext from "../../context/shop-context.js";
import styles from "./CartList.module.scss";

const CartList = () => {
  const context = useContext(ShopContext);

  const styleBlock = {
    display: "block",
  };

  const styleNone = {
    display: "none",
  };

  let total = 0;
  for (let i = 0; i < context.cart.length; i++) {
    total += context.cart[i].price * context.cart[i].quantity;
  }

  return (
    <React.Fragment>
      <div
        className={styles.cart}
        style={context.cart.length > 0 ? styleBlock : styleNone}
      >
        <div className={styles.cart__top}>
          <p className={styles.cart__title}>Корзина</p>
          <button
            className={styles.cart__removeBtn}
            onClick={context.removeAllFromCart}
          >
            Очистить
          </button>
        </div>
        <ul className={styles.cartList}>
          {context.cart.map((cartItem) => (
            <li
              className={styles.cartList__card}
              key={"cartItem-" + cartItem.id}
            >
              <div className={styles.cartList__image}>
                <img src={cartItem.image} alt="" />
              </div>
              <div className={styles.cartList__info}>
                <div>
                  <p className={styles.cartList__name}>{cartItem.name}</p>
                  <p className={styles.cartList__price}>{cartItem.price} СОМ</p>
                </div>
                <div className={styles.cartList__quantityWrap}>
                  <button
                    className={styles.cartList__countBtn}
                    onClick={context.removeProductFromCart.bind(
                      this,
                      cartItem.id
                    )}
                  >
                    <span>-</span>
                  </button>
                  <div className={styles.cartList__quantityContainer}>
                    <span className={styles.cartList__quantity}>
                      {cartItem.quantity}
                    </span>
                  </div>
                  <button
                    className={styles.cartList__countBtn}
                    onClick={context.addProductAmount.bind(this, cartItem.id)}
                  >
                    <span>+</span>
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className={styles.cartList__total}>Итого: {total} СОМ</div>
        <button className={styles.cartList__order}>Оформить заказ</button>
      </div>
    </React.Fragment>
  );
};

export default CartList;
