import React from "react";
import ShopContext from "../../context/shop-context";
import ButtonSlide from "../buttonSlide/ButtonSlide";
import styles from "./SliderPopular.module.scss";

const SliderPopular = () => {
  return (
    <>
      <ShopContext.Consumer>
        {(context) => (
          <div className={styles.cardContainer}>
            <div
              className={styles.cardPopular}
              key={"ProductNew-" + context.productsNew[7].id}
            >
              <div className={styles.cardPopular__top}>
                <div className={styles.cardPopular__image}>
                  <img src={context.productsNew[7].image} alt="" />
                </div>
                <p className={styles.cardPopular__title}>
                  {context.productsNew[7].name}
                </p>
                <p className={styles.cardPopular__description}>
                  {context.productsNew[7].description}
                </p>
              </div>
              <div className={styles.cardPopular__bottom}>
                <span className={styles.cardPopular__price}>
                  {context.productsNew[7].price} СOM
                </span>
                <ButtonSlide
                  className={styles.buttonPopular}
                  onClick={context.addProductToCart.bind(
                    this,
                    context.productsNew[7]
                  )}
                />
              </div>
            </div>
            <div
              className={styles.cardPopular}
              id={styles.cardCentral}
              key={"ProductNew-" + context.productsNew[4].id}
            >
              <div className={styles.cardPopular__top}>
                <div className={styles.cardPopular__image}>
                  <img src={context.productsNew[4].image} alt="" />
                </div>
                <p className={styles.cardPopular__title}>
                  {context.productsNew[4].name}
                </p>
                <p className={styles.cardPopular__description}>
                  {context.productsNew[4].description}
                </p>
              </div>
              <div className={styles.cardPopular__bottom}>
                <span className={styles.cardPopular__price}>
                  {context.productsNew[4].price} СOM
                </span>
                <ButtonSlide
                  onClick={context.addProductToCart.bind(
                    this,
                    context.productsNew[4]
                  )}
                />
              </div>
            </div>
            <div
              className={styles.cardPopular}
              key={"ProductNew-" + context.productsNew[8].id}
            >
              <div className={styles.cardPopular__top}>
                <div className={styles.cardPopular__image}>
                  <img src={context.productsNew[8].image} alt="" />
                </div>
                <p className={styles.cardPopular__title}>
                  {context.productsNew[8].name}
                </p>
                <p className={styles.cardPopular__description}>
                  {context.productsNew[8].description}
                </p>
              </div>
              <div className={styles.cardPopular__bottom}>
                <span className={styles.cardPopular__price}>
                  {context.productsNew[8].price} СOM
                </span>
                <ButtonSlide
                  onClick={context.addProductToCart.bind(
                    this,
                    context.productsNew[8]
                  )}
                />
              </div>
            </div>
          </div>
        )}
      </ShopContext.Consumer>
    </>
  );
};

export default SliderPopular;
