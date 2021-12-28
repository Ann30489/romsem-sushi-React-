import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.scss";

const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <div className={styles.navigation__wrapper}>
        <Link className={styles.navigation__item} to="/">
          Главная
        </Link>
        <Link className={styles.navigation__item} to="/comments">
          Отзывы
        </Link>
        <Link className={styles.navigation__item} to="/registration">
          Регистрация
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
