import React from "react";
import ShopContext from "../context/shop-context";
import ButtonBack from "../components/buttonBack/ButtonBack";
import ButtonSlide from "../components/buttonSlide/ButtonSlide";
import Recommendation from "../components/recommendation/Recommendation";
import "../styles/_products.scss";

const Product2 = () => {
  return (
    <>
      <ButtonBack />
      <ShopContext.Consumer>
        {(context) => (
          <div className="product" key={"Product-" + context.products[1].id}>
            <div className="product__wrapper">
              <div className="product__card">
                <div className="product__image">
                  <img src={context.products[1].image} alt="" />
                </div>
                <div className="product__info">
                  <p className="product__title">{context.products[1].name}</p>
                  <p className="product__weight">
                    {context.products[1].description}
                  </p>
                  <p className="product__price">
                    {context.products[1].price} СOM
                  </p>
                  <div className="product__description">
                    <p className="product__description__title">Состав</p>
                    <p className="product__description__text">
                      Лосось, сыр "Филадельфия", огурец, авокадо
                    </p>
                  </div>
                  <ButtonSlide
                    className="product__button"
                    onClick={context.addProductToCart.bind(
                      this,
                      context.products[1]
                    )}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </ShopContext.Consumer>
      <Recommendation />
    </>
  );
};

export default Product2;
