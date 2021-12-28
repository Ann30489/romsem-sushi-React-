import React from "react";
import { Link } from "react-router-dom";
import styles from "./Logo.module.scss";
import image from "../../assets/icons/logo.png";

const Logo = () => {
  return (
    <Link className="menu__link" to="/">
    <div className={styles.logo}>
      <div className={styles.logo__wrapper}>
        <img className={styles.logo__image} src={image} alt="logo icon" />
      </div>
      <p className={styles.logo__text}>ROMSEM</p>
    </div>
    </Link>
  );
};

export default Logo;
