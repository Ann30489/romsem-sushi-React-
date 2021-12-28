import React, { useState } from "react";
import styles from "./Text.module.scss";
import arrow from "../../assets/icons/arrow-about.png";
import arrowLess from "../../assets/icons/arrow-less.png";

const Text = () => {
  const textStyle = {
    color: "#A4ACAD",
    transition: "0.35s cubic-bezier(0.4, 0, 0.2, 1)",
  };

  const textStyle2 = {
    color: "black",
    transition: "0.35s cubic-bezier(0.4, 0, 0.2, 1)",
  };

  const showStyle = {
    display: "block",
    transition: "0.35s cubic-bezier(0.4, 0, 0.2, 1)",
  };

  const hideStyle = {
    display: "none",
    transition: "0.35s cubic-bezier(0.4, 0, 0.2, 1)",
  };

  const [styleText, setStyleText] = useState(textStyle);
  const [styleGradient, setStyleGradient] = useState(showStyle);
  const [styleDetails, setStyleDetails] = useState(showStyle);
  const [styleLess, setStyleLess] = useState(hideStyle);

  const changeStyle = () => {
    setStyleText(textStyle2);
    setStyleGradient(hideStyle);
    setStyleDetails(hideStyle);
    setStyleLess(showStyle);
  };

  const restoreStyle = () => {
    setStyleText(textStyle);
    setStyleGradient(showStyle);
    setStyleDetails(showStyle);
    setStyleLess(hideStyle);
  };

  return (
    <>
      <div className={styles.text}>
        <div className={styles.text__wrapper} style={styleText}>
          <div className={styles.text__gradient} style={styleGradient}></div>
          <p className={styles.text__title}>Заказать суши в Бишкеке</p>
          <p>
            Ресторан “ROMSEM” предлагаем своим клиентам самые вкусные суши с
            доставкой на дом, приготовленные по классическим и адаптированным к
            европейской аудитории рецептам, а также собственным наработкам наших
            поваров. Мы ценим время наших клиентов, поэтому вы можете заказать
            суши в Бишкеке с доставкой на дом или в офис.
          </p>
          <p>В нашем меню более 20 видов суши:</p>
          <ul>
            <li>Классические с сырым лососем, тунцом, окунем.</li>
            <li>Экзотические с тигровой креветкой, морским гребешком.</li>
            <li>Пикантные с копченым лососем, угрем.</li>
          </ul>
          <p>
            В меню также представлены гунканы: с начинкой из красной икры и
            тобико, а также феликсы, где японский майонез сочетается с рыбой,
            морепродуктами, угрем.
          </p>
          <p>Любители острых блюд могут купить суши с соусом спайси.</p>
          <p>
            Популярные начинки — копченая курица, снежный краб, креветки,
            гребешки, тунец, лосось и окунь.
          </p>
        </div>
        <div className={styles.text__details} style={styleDetails}>
          <div
            className={styles.text__details__container}
            onClick={changeStyle}
          >
            <span>Подробнее</span>
            <div className={styles.text__arrow}>
              <img src={arrow} alt="" />
            </div>
          </div>
        </div>
        <div className={styles.text__hide} style={styleLess}>
          <div
            className={styles.text__details__container}
            onClick={restoreStyle}
          >
            <span>Свернуть</span>
            <div className={styles.text__arrow}>
              <img src={arrowLess} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Text;
