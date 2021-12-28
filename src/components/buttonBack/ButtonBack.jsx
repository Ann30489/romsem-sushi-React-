import React from "react";
import { Link } from "react-router-dom";
import styles from "./ButtonBack.module.scss";
import backIcon from "../../assets/icons/back.png";

const ButtonBack = () => {
  return (
    <>
      <div className={styles.button__container}>
        <Link className={styles.button__link} to="/sets">
          <div className={styles.button__image}>
            <img className={styles.banner__image} src={backIcon} alt="" />
          </div>
        </Link>
        <span className={styles.button__text}>Назад</span>
      </div>
    </>
  );
};

export default ButtonBack;
