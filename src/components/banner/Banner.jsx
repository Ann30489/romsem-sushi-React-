import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import ShopContext from "../../context/shop-context.js";
import Button from "../button/Button";
import styles from "./Banner.module.scss";

import SwiperCore, { Pagination } from "swiper";

const Banner = () => {
  SwiperCore.use([Pagination]);
  return (
    <>
      <ShopContext.Consumer>
        {(context) => (
          <Swiper
            spaceBetween={1}
            pagination={{
              clickable: true,
            }}
            className="mySwiper"
            id={styles.slider}
          >
            <SwiperSlide>
              <div
                className={styles.banner__container}
                key={"ProductBanner-" + context.productsBanner[0].id}
              >
                <img
                  className={styles.banner__image}
                  src={context.productsBanner[0].image}
                  alt=""
                />
                <div className={styles.banner__info__container}>
                  <div className={styles.banner__info}>
                    <span className="swiper-no-swiping">
                      <p className={styles.banner__title}>
                        {context.productsBanner[0].name}
                      </p>
                    </span>
                    <span className="swiper-no-swiping">
                      <p className={styles.banner__description}>
                        {context.productsBanner[0].description}
                      </p>
                    </span>
                    <div className={styles.banner__price}>
                      <div className={styles.banner__price__wrapper}>
                        <span className="swiper-no-swiping">
                          <span className={styles.banner__price__number}>
                            {context.productsBanner[0].discount} COM
                          </span>
                        </span>
                        <span className={styles.banner__price__line}></span>
                      </div>
                    </div>
                    <span className="swiper-no-swiping">
                      <p className={styles.banner__discount}>
                        {context.productsBanner[0].price} СОМ
                      </p>
                    </span>
                    <Button
                      onClick={context.addProductToCart.bind(
                        this,
                        context.productsBanner[0]
                      )}
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={styles.banner__container}
                key={"ProductBanner-" + context.productsBanner[1].id}
              >
                <img
                  className={styles.banner__image}
                  src={context.productsBanner[1].image}
                  alt=""
                />
                <div className={styles.banner__info__container}>
                  <div className={styles.banner__info}>
                    <span className="swiper-no-swiping">
                      <p className={styles.banner__title}>
                        {context.productsBanner[1].name}
                      </p>
                    </span>
                    <span className="swiper-no-swiping">
                      <p className={styles.banner__description}>
                        {context.productsBanner[1].description}
                      </p>
                    </span>
                    <div className={styles.banner__price}>
                      <div className={styles.banner__price__wrapper}>
                        <span className="swiper-no-swiping">
                          <span className={styles.banner__price__number}>
                            {context.productsBanner[1].discount} COM
                          </span>
                        </span>
                        <span className={styles.banner__price__line}></span>
                      </div>
                    </div>
                    <span className="swiper-no-swiping">
                      <p className={styles.banner__discount}>
                        {context.productsBanner[1].price} СОМ
                      </p>
                    </span>
                    <Button
                      onClick={context.addProductToCart.bind(
                        this,
                        context.productsBanner[1]
                      )}
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={styles.banner__container}
                key={"ProductBanner-" + context.productsBanner[2].id}
              >
                <img
                  className={styles.banner__image}
                  src={context.productsBanner[2].image}
                  alt=""
                />
                <div className={styles.banner__info__container}>
                  <div className={styles.banner__info}>
                    <span className="swiper-no-swiping">
                      <p className={styles.banner__title}>
                        {context.productsBanner[2].name}
                      </p>
                    </span>
                    <span className="swiper-no-swiping">
                      <p className={styles.banner__description}>
                        {context.productsBanner[2].description}
                      </p>
                    </span>
                    <div className={styles.banner__price}>
                      <div className={styles.banner__price__wrapper}>
                        <span className="swiper-no-swiping">
                          <span className={styles.banner__price__number}>
                            {context.productsBanner[2].discount} COM
                          </span>
                        </span>
                        <span className={styles.banner__price__line}></span>
                      </div>
                    </div>
                    <span className="swiper-no-swiping">
                      <p className={styles.banner__discount}>
                        {context.productsBanner[2].price} СОМ
                      </p>
                    </span>
                    <Button
                      onClick={context.addProductToCart.bind(
                        this,
                        context.productsBanner[2]
                      )}
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={styles.banner__container}
                key={"ProductBanner-" + context.productsBanner[3].id}
              >
                <img
                  className={styles.banner__image}
                  src={context.productsBanner[3].image}
                  alt=""
                />
                <div className={styles.banner__info__container}>
                  <div className={styles.banner__info}>
                    <span className="swiper-no-swiping">
                      <p className={styles.banner__title}>
                        {context.productsBanner[3].name}
                      </p>
                    </span>
                    <span className="swiper-no-swiping">
                      <p className={styles.banner__description}>
                        {context.productsBanner[3].description}
                      </p>
                    </span>
                    <div className={styles.banner__price}>
                      <div className={styles.banner__price__wrapper}>
                        <span className="swiper-no-swiping">
                          <span className={styles.banner__price__number}>
                            {context.productsBanner[3].discount} COM
                          </span>
                        </span>
                        <span className={styles.banner__price__line}></span>
                      </div>
                    </div>
                    <span className="swiper-no-swiping">
                      <p className={styles.banner__discount}>
                        {context.productsBanner[3].price} СОМ
                      </p>
                    </span>
                    <Button
                      onClick={context.addProductToCart.bind(
                        this,
                        context.productsBanner[3]
                      )}
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={styles.banner__container}
                key={"ProductBanner-" + context.productsBanner[4].id}
              >
                <img
                  className={styles.banner__image}
                  src={context.productsBanner[4].image}
                  alt=""
                />
                <div className={styles.banner__info__container}>
                  <div className={styles.banner__info}>
                    <span className="swiper-no-swiping">
                      <p className={styles.banner__title}>
                        {context.productsBanner[4].name}
                      </p>
                    </span>
                    <span className="swiper-no-swiping">
                      <p className={styles.banner__description}>
                        {context.productsBanner[4].description}
                      </p>
                    </span>
                    <div className={styles.banner__price}>
                      <div className={styles.banner__price__wrapper}>
                        <span className="swiper-no-swiping">
                          <span className={styles.banner__price__number}>
                            {context.productsBanner[4].discount} COM
                          </span>
                        </span>
                        <span className={styles.banner__price__line}></span>
                      </div>
                    </div>
                    <span className="swiper-no-swiping">
                      <p className={styles.banner__discount}>
                        {context.productsBanner[4].price} СОМ
                      </p>
                    </span>
                    <Button
                      onClick={context.addProductToCart.bind(
                        this,
                        context.productsBanner[4]
                      )}
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        )}
      </ShopContext.Consumer>
    </>
  );
};

export default Banner;
