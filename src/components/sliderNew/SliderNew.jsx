import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ShopContext from "../../context/shop-context";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import styles from "./SliderNew.module.scss";

import SwiperCore, { Navigation } from "swiper";
import ButtonSlide from "../buttonSlide/ButtonSlide";

// install Swiper modules
SwiperCore.use([Navigation]);

const SliderNew = () => {
  return (
    <>
      <ShopContext.Consumer>
        {(context) => (
          <Swiper
            navigation={true}
            slidesPerView={3}
            spaceBetween={50}
            className="mySwiper"
          >
            <SwiperSlide>
              <div
                className={styles.card}
                key={"ProductNew-" + context.productsNew[0].id}
              >
                <div className={styles.card__top}>
                  <div className={styles.card__image}>
                    <img src={context.productsNew[0].image} alt="" />
                  </div>
                  <span className="swiper-no-swiping">
                    <p className={styles.card__title}>
                      {context.productsNew[0].name}
                    </p>
                    <p className={styles.card__description}>
                      {context.productsNew[0].description}
                    </p>
                  </span>
                </div>
                <div className={styles.card__bottom}>
                  <span className="swiper-no-swiping">
                    <span className={styles.card__price}>
                      {context.productsNew[0].price} СOM
                    </span>
                  </span>
                  <ButtonSlide
                    onClick={context.addProductToCart.bind(
                      this,
                      context.productsNew[0]
                    )}
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={styles.card}
                key={"ProductNew-" + context.productsNew[1].id}
              >
                <div className={styles.card__top}>
                  <div
                    className={
                      styles.card__image + " " + styles.card__image__double
                    }
                  >
                    <img src={context.productsNew[1].image} alt="" />
                  </div>
                  <span className="swiper-no-swiping">
                    <p className={styles.card__title}>
                      Филадельфия и<br /> лосось сет
                    </p>
                    <p className={styles.card__description}>
                      {context.productsNew[1].description}
                    </p>
                  </span>
                </div>
                <div className={styles.card__bottom}>
                  <span className="swiper-no-swiping">
                    <span className={styles.card__price}>
                      {context.productsNew[1].price} СOM
                    </span>
                  </span>
                  <ButtonSlide
                    onClick={context.addProductToCart.bind(
                      this,
                      context.productsNew[1]
                    )}
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={styles.card}
                key={"ProductNew-" + context.productsNew[2].id}
              >
                <div className={styles.card__top}>
                  <div
                    className={
                      styles.card__image + " " + styles.card__image__double
                    }
                  >
                    <img src={context.productsNew[2].image} alt="" />
                  </div>
                  <span className="swiper-no-swiping">
                    <p className={styles.card__title}>
                      Самая большая
                      <br /> Филадельфия
                    </p>
                    <p className={styles.card__description}>
                      {context.productsNew[2].description}
                    </p>
                  </span>
                </div>
                <div className={styles.card__bottom}>
                  <span className="swiper-no-swiping">
                    <span className={styles.card__price}>
                      {context.productsNew[2].price} СOM
                    </span>
                  </span>
                  <ButtonSlide
                    onClick={context.addProductToCart.bind(
                      this,
                      context.productsNew[2]
                    )}
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={styles.card}
                key={"ProductNew-" + context.productsNew[3].id}
              >
                <div className={styles.card__top}>
                  <div className={styles.card__image}>
                    <img src={context.productsNew[3].image} alt="" />
                  </div>
                  <span className="swiper-no-swiping">
                    <p className={styles.card__title}>
                      {context.productsNew[3].name}
                    </p>
                    <p className={styles.card__description}>
                      {context.productsNew[3].description}
                    </p>
                  </span>
                </div>
                <div className={styles.card__bottom}>
                  <span className="swiper-no-swiping">
                    <span className={styles.card__price}>
                      {context.productsNew[3].price} СOM
                    </span>
                  </span>
                  <ButtonSlide
                    onClick={context.addProductToCart.bind(
                      this,
                      context.productsNew[3]
                    )}
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={styles.card}
                key={"ProductNew-" + context.productsNew[4].id}
              >
                <div className={styles.card__top}>
                  <div className={styles.card__image}>
                    <img src={context.productsNew[4].image} alt="" />
                  </div>
                  <span className="swiper-no-swiping">
                    <p className={styles.card__title}>
                      {context.productsNew[4].name}
                    </p>
                    <p className={styles.card__description}>
                      {context.productsNew[4].description}
                    </p>
                  </span>
                </div>
                <div className={styles.card__bottom}>
                  <span className="swiper-no-swiping">
                    <span className={styles.card__price}>
                      {context.productsNew[4].price} СOM
                    </span>
                  </span>
                  <ButtonSlide
                    onClick={context.addProductToCart.bind(
                      this,
                      context.productsNew[4]
                    )}
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={styles.card}
                key={"ProductNew-" + context.productsNew[5].id}
              >
                <div className={styles.card__top}>
                  <div className={styles.card__image}>
                    <img src={context.productsNew[5].image} alt="" />
                  </div>
                  <span className="swiper-no-swiping">
                    <p className={styles.card__title}>
                      {context.productsNew[5].name}
                    </p>
                    <p className={styles.card__description}>
                      {context.productsNew[5].description}
                    </p>
                  </span>
                </div>
                <div className={styles.card__bottom}>
                  <span className="swiper-no-swiping">
                    <span className={styles.card__price}>
                      {context.productsNew[5].price} СOM
                    </span>
                  </span>
                  <ButtonSlide
                    onClick={context.addProductToCart.bind(
                      this,
                      context.productsNew[5]
                    )}
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={styles.card}
                key={"ProductNew-" + context.productsNew[6].id}
              >
                <div className={styles.card__top}>
                  <div className={styles.card__image}>
                    <img src={context.productsNew[6].image} alt="" />
                  </div>
                  <span className="swiper-no-swiping">
                    <p className={styles.card__title}>
                      {context.productsNew[6].name}
                    </p>
                    <p className={styles.card__description}>
                      {context.productsNew[6].description}
                    </p>
                  </span>
                </div>
                <div className={styles.card__bottom}>
                  <span className="swiper-no-swiping">
                    <span className={styles.card__price}>
                      {context.productsNew[6].price} СOM
                    </span>
                  </span>
                  <ButtonSlide
                    onClick={context.addProductToCart.bind(
                      this,
                      context.productsNew[6]
                    )}
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={styles.card}
                key={"ProductNew-" + context.productsNew[7].id}
              >
                <div className={styles.card__top}>
                  <div className={styles.card__image}>
                    <img src={context.productsNew[7].image} alt="" />
                  </div>
                  <span className="swiper-no-swiping">
                    <p className={styles.card__title}>
                      {context.productsNew[7].name}
                    </p>
                    <p className={styles.card__description}>
                      {context.productsNew[7].description}
                    </p>
                  </span>
                </div>
                <div className={styles.card__bottom}>
                  <span className="swiper-no-swiping">
                    <span className={styles.card__price}>
                      {context.productsNew[7].price} СOM
                    </span>
                  </span>
                  <ButtonSlide
                    onClick={context.addProductToCart.bind(
                      this,
                      context.productsNew[7]
                    )}
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={styles.card}
                key={"ProductNew-" + context.productsNew[8].id}
              >
                <div className={styles.card__top}>
                  <div className={styles.card__image}>
                    <img src={context.productsNew[8].image} alt="" />
                  </div>
                  <span className="swiper-no-swiping">
                    <p className={styles.card__title}>
                      {context.productsNew[8].name}
                    </p>
                    <p className={styles.card__description}>
                      {context.productsNew[8].description}
                    </p>
                  </span>
                </div>
                <div className={styles.card__bottom}>
                  <span className="swiper-no-swiping">
                    <span className={styles.card__price}>
                      {context.productsNew[8].price} СOM
                    </span>
                  </span>
                  <ButtonSlide
                    onClick={context.addProductToCart.bind(
                      this,
                      context.productsNew[8]
                    )}
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        )}
      </ShopContext.Consumer>
    </>
  );
};

export default SliderNew;
