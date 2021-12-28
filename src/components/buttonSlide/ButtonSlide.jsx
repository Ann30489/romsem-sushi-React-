import React from "react";
import styles from "./ButtonSlide.module.scss";

const ButtonSlide = (props) => {
  return (
    <>
      <button className={styles.button} type="submit" onClick={props.onClick}>
        <span>Хочу!</span>
      </button>
    </>
  );
};

export default ButtonSlide;
