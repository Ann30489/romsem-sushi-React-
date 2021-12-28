import React from "react";
import ShopContext from "../../context/shop-context";
import styles from "./Recommendation.module.scss";
import plus from "../../assets/icons/plus.png";

const Recommendation = () => {
  return (
    <>
      <div className={styles.recommendation}>
        <p className={styles.recommendation__title}>
          Рекомендуем к этому товару
        </p>
        <ShopContext.Consumer>
          {(context) => (
            <React.Fragment>
              <div className={styles.recommendation__wrapper}>
                {context.productsRecommend.map((product) => (
                  <div
                    className={styles.recommendation__item}
                    key={"Product-" + product.id}
                  >
                    <div className={styles.recommendation__image}>
                      <img src={product.image} alt="" />
                    </div>
                    <p className={styles.recommendation__name}>
                      {product.name}
                    </p>
                    <div className={styles.recommendation__info}>
                      <p className={styles.recommendation__price}>
                        {product.price} СОМ
                      </p>
                      <div
                        className={styles.recommendation__add}
                        onClick={context.addProductToCart.bind(this, product)}
                      >
                        <img src={plus} alt="" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </React.Fragment>
          )}
        </ShopContext.Consumer>
      </div>
    </>
  );
};

export default Recommendation;
