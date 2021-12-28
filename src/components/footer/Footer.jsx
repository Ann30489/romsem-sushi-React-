import React from "react";
import styles from "./Footer.module.scss";
import image1 from "../../assets/icons/whatsapp.png";
import image2 from "../../assets/icons/telegram.png";
import image3 from "../../assets/icons/instagram.png";
import Phone from "../phone/Phone";
import MenuSm from "../menuSm/MenuSm";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__wrapper}>
        <MenuSm />
        <div className={styles.footer__menu}>
          <p className={styles.footer__link}>О компании</p>
          <br />
          <p className={styles.footer__link}>Доставка и оплата</p>
          <br />
          <p className={styles.footer__link}>Лента материалов</p>
          <br />
          <p className={styles.footer__link}>Политика возврата</p>
        </div>
        <div className={styles.footer__social}>
          <p className={styles.footer__title}>Введите номер</p>
          <Phone />
          <p className={styles.footer__text}>
            Выберите удобный
            <br /> мессенджер для общения
          </p>
          <div className={styles.footer__socialContainer}>
            <div className={styles.footer__icon}>
              <a
                className={styles.footer__linkSocial}
                href="https://web.whatsapp.com/"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  className={styles.footer__image}
                  src={image1}
                  alt="whatsap icon"
                />
              </a>
            </div>
            <div className={styles.footer__icon}>
              <a
                className={styles.footer__linkSocial}
                href="https://web.telegram.org/"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  className={styles.footer__image}
                  src={image2}
                  alt="telegram icon"
                />
              </a>
            </div>
            <div className={styles.footer__icon}>
              <a
                className={styles.footer__linkSocial}
                href="https://instagram.com/"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  className={styles.footer__image}
                  src={image3}
                  alt="instagram icon"
                />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.footer__contacts}>
          <a href="tel:+996705188955">
            <p
              className={
                styles.footer__contactsText +
                " " +
                styles.footer__contactsTextTel +
                " " +
                styles.footer__contactsTextTel1
              }
            >
              Тел:{" "}
              <span className={styles.footer__contactsTextUnderline}>
                +996 705 188 955
              </span>
            </p>
          </a>
          <a href="tel:+996555188955">
            <p
              className={
                styles.footer__contactsText +
                " " +
                styles.footer__contactsTextTel
              }
            >
              Тел:{" "}
              <span className={styles.footer__contactsTextUnderline}>
                +996 555 188 955
              </span>
            </p>
          </a>
          <a
            href="https://goo.gl/maps/8oiQcD2d3GgRSWNj8"
            rel="noreferrer"
            target="_blank"
          >
            <p className={styles.footer__contactsText}>
              Адрес:{" "}
              <span className={styles.footer__contactsTextUnderline}>
                Бакаева, 126
              </span>
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
