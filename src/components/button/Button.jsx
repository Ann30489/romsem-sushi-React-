import React from "react";
import styles from "./Button.module.scss";

const Button = (props) => {
  return (
    <>
      <button className={styles.button} type="submit" onClick={props.onClick}>
        <span>Хочу!</span>
      </button>
    </>
  );
};

export default Button;
