import React from "react";
import { Link } from "react-router-dom";
import styles from "./ProductsCards.module.scss";
import ShopContext from "../../context/shop-context.js";
import sprite from "../../assets/svg/symbol-defs-menu.svg";
import ButtonSlide from "../buttonSlide/ButtonSlide";
import Text from "../text/Text";

const ProductsCards = () => {
  return (
    <>
      <div className={styles.products__title}>
        <div className={styles.products__icon}>
          <svg className="icon icon-sets-icon" id={styles.setsIcon}>
            <use href={sprite + "#icon-sets-icon"} />
          </svg>
        </div>
        <p className={styles.products__title__text}>Сеты</p>
      </div>
      <div className={styles.products}>
        <ShopContext.Consumer>
          {(context) => (
            <React.Fragment>
              <ul className={styles.products__wrapper}>
                {context.products.map((product) => (
                  <>
                    <li
                      className={styles.cardProducts}
                      key={"Product-" + product.id}
                    >
                      <Link className={styles.products__link} to={product.link}>
                        <div className={styles.cardProducts__top}>
                          <div className={styles.cardProducts__image}>
                            <img src={product.image} alt="" />
                          </div>
                          <p className={styles.cardProducts__title}>
                            {product.name}
                          </p>
                          <p className={styles.cardProducts__description}>
                            {product.description}
                          </p>
                        </div>
                      </Link>
                      <div className={styles.cardProducts__bottom}>
                        <span className={styles.cardProducts__price}>
                          {product.price} СOM
                        </span>
                        <ButtonSlide
                          onClick={context.addProductToCart.bind(this, product)}
                        />
                      </div>
                    </li>
                  </>
                ))}
              </ul>
            </React.Fragment>
          )}
        </ShopContext.Consumer>
      </div>
      <Text />
    </>
  );
};

export default ProductsCards;
