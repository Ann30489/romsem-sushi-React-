import React from "react";
import Form from "../../components/form/Form";
import image from "../../assets/images/card8.webp";
import styles from "./Registration.page.module.scss";

const RegistrationPage = () => {
  return (
    <>
      <p className={styles.registration__title}>
        Регистрируйся и получи сет Дракон в подарок!
      </p>

      <div className={styles.registration__image}>
        <img src={image} alt="sushi set" />
      </div>
      <Form />
    </>
  );
};

export default RegistrationPage;
