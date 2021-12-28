import React from "react";
import styles from "./ContactsSm.module.scss";
import image1 from "../../assets/icons/whatsapp.png";
import image2 from "../../assets/icons/telegram.png";
import image3 from "../../assets/icons/instagram.png";
import Phone from "../phone/Phone";

const ContactsSm = () => {
  return (
    <div className={styles.contactsSm}>
      <div className={styles.contactsSm__wrapper}>
        <div className={styles.contactsSm__social}>
          <p className={styles.contactsSm__title}>Введите номер</p>
          <Phone />
          <p className={styles.contactsSm__text}>
            Выберите удобный
            <br /> мессенджер для общения
          </p>
          <div className={styles.contactsSm__socialContainer}>
            <div className={styles.contactsSm__icon}>
              <a
                className={styles.contactsSm__linkSocial}
                href="https://web.whatsapp.com/"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  className={styles.contactsSm__image}
                  src={image1}
                  alt="whatsap icon"
                />
              </a>
            </div>
            <div className={styles.contactsSm__icon}>
              <a
                className={styles.contactsSm__linkSocial}
                href="https://web.telegram.org/"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  className={styles.contactsSm__image}
                  src={image2}
                  alt="telegram icon"
                />
              </a>
            </div>
            <div className={styles.contactsSm__icon}>
              <a
                className={styles.contactsSm__linkSocial}
                href="https://instagram.com/"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  className={styles.contactsSm__image}
                  src={image3}
                  alt="instagram icon"
                />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.contactsSm__contacts}>
          <a href="tel:+996705188955">
            <p
              className={
                styles.contactsSm__contactsText +
                " " +
                styles.contactsSm__contactsTextTel +
                " " +
                styles.contactsSm__contactsTextTel1
              }
            >
              Тел:{" "}
              <span className={styles.contactsSm__contactsTextUnderline}>
                +996 705 188 955
              </span>
            </p>
          </a>
          <a href="tel:+996555188955">
            <p
              className={
                styles.contactsSm__contactsText +
                " " +
                styles.contactsSm__contactsTextTel
              }
            >
              Тел:{" "}
              <span className={styles.contactsSm__contactsTextUnderline}>
                +996 555 188 955
              </span>
            </p>
          </a>
          <a
            href="https://goo.gl/maps/8oiQcD2d3GgRSWNj8"
            rel="noreferrer"
            target="_blank"
          >
            <p className={styles.contactsSm__contactsText}>
              Адрес:{" "}
              <span className={styles.contactsSm__contactsTextUnderline}>
                Бакаева, 126
              </span>
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactsSm;
