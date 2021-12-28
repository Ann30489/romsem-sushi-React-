import React from "react";
import { Link } from "react-router-dom";
import styles from "./Gallery.module.scss";
import gallery1 from "../../assets/images/gallery1.jpg";
import gallery2 from "../../assets/images/gallery2.jpg";
import gallery3 from "../../assets/images/gallery3.jpg";
import gallery4 from "../../assets/images/gallery4.jpg";
import gallery5 from "../../assets/images/gallery5.jpg";
import gallery6 from "../../assets/images/gallery6.jpg";
import gallery7 from "../../assets/images/gallery7.jpg";
import gallery8 from "../../assets/images/gallery8.jpg";
import gallery9 from "../../assets/images/gallery9.jpg";
import gallery10 from "../../assets/images/gallery10.jpg";
import gallery11 from "../../assets/images/gallery11.jpg";
import gallery12 from "../../assets/images/gallery12.jpg";
import gallery13 from "../../assets/images/gallery13.jpg";
import gallery14 from "../../assets/images/gallery14.jpg";

const Gallery = () => {
  return (
    <>
      <div className={styles.gallery}>
        <div className={styles.gallery__wrapper}>
          <div className={styles.gallery__item6}>
            <img className={styles.gallery__image} src={gallery6} alt="" />
            <span className={styles.gallery__title + " " + styles.title6}>
              Пицца
            </span>
          </div>
          <Link className={styles.gallery__link} to="/sets">
            <div className={styles.gallery__item7}>
              <img className={styles.gallery__image} src={gallery7} alt="" />
              <span className={styles.gallery__title + " " + styles.title7}>
                Сеты
              </span>
            </div>
          </Link>
          <div className={styles.gallery__item8}>
            <img className={styles.gallery__image} src={gallery8} alt="" />
            <span className={styles.gallery__title + " " + styles.title8}>
              WOK
            </span>
          </div>
          <div className={styles.gallery__item9}>
            <img className={styles.gallery__image} src={gallery9} alt="" />
            <span className={styles.gallery__title + " " + styles.title9}>
              Роллы
            </span>
          </div>
          <div className={styles.gallery__item10}>
            <img className={styles.gallery__image} src={gallery10} alt="" />
            <span className={styles.gallery__title + " " + styles.title10}>
              Суши
            </span>
          </div>
          <div className={styles.gallery__item11}>
            <img className={styles.gallery__image} src={gallery11} alt="" />
            <span className={styles.gallery__title + " " + styles.title11}>
              Супы
            </span>
            <span className={styles.gallery__note}>СКОРО</span>
          </div>
          <div className={styles.gallery__item12}>
            <img className={styles.gallery__image} src={gallery12} alt="" />
            <span className={styles.gallery__title + " " + styles.title12}>
              Салаты
            </span>
            <span className={styles.gallery__note}>СКОРО</span>
          </div>
          <div className={styles.gallery__item13}>
            <img className={styles.gallery__image} src={gallery13} alt="" />
            <span className={styles.gallery__title + " " + styles.title13}>
              Напитки
            </span>
          </div>
          <div className={styles.gallery__item14}>
            <img className={styles.gallery__image} src={gallery14} alt="" />
            <span className={styles.gallery__title + " " + styles.title14}>
              Комбо
            </span>
          </div>
          <div className={styles.gallery__item1}>
            <img className={styles.gallery__image} src={gallery1} alt="" />
            <span className={styles.gallery__title + " " + styles.title1}>
              Чикен
            </span>
          </div>
          <div className={styles.gallery__item2}>
            <img className={styles.gallery__image} src={gallery2} alt="" />
            <span className={styles.gallery__title + " " + styles.title2}>
              С угрем
            </span>
          </div>
          <div className={styles.gallery__item3}>
            <img className={styles.gallery__image} src={gallery3} alt="" />
            <span className={styles.gallery__title + " " + styles.title3}>
              Корн дог
            </span>
          </div>
          <div className={styles.gallery__item4}>
            <img className={styles.gallery__image} src={gallery4} alt="" />
            <span className={styles.gallery__title + " " + styles.title4}>
              Пицца
            </span>
          </div>
          <div className={styles.gallery__item5}>
            <img className={styles.gallery__image} src={gallery5} alt="" />
            <span className={styles.gallery__title + " " + styles.title5}>
              Акции
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
