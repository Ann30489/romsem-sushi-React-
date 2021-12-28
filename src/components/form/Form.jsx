import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import axios from "axios";
import styles from "./Form.module.scss";

const Registration = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (message) {
      setTimeout(() => {
        setMessage("");
      }, 5000);
    }
  }, [message]);

  const onSubmit = async (
    values,
    { setSubmitting, setErrors, setStatus, resetForm }
  ) => {
    const header = new Headers();
    header.append("Content-Type", "application/json");
    try {
      await axios
        .post(
          "https://beetroot-solodkui.herokuapp.com/beetroot-solodkui/users/registration",
          values,
          header
        )
        .then((response) => {
          console.log(response);
          setStatus({ success: true });
          if ("success: true") {
            setMessage(response.data.message.ru + "!");
          }

          resetForm({});
        })
        .catch((error) => {
          console.log(error.request);
          console.log(error.response.data);
          setStatus({ success: false });
          const errorMessage = error.response.data?.message.ru;

          const errors = {};
          if (errorMessage.indexOf("емейлом") !== -1) {
            errors.email = errorMessage;
          } else {
            errors.username = errorMessage;
          }
          setErrors(errors);
        });
    } catch (error) {
      const errorResponse = error.response.data;
      console.log(errorResponse.message.ru + "!");
    }
  };

  return (
    <>
      <p className={styles.registration__success}>{message ? message : ""}</p>

      {/* Form */}
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          username: "",
          password: "",
          active: "true",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Обязательно";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Неверный email";
          }
          return errors;
        }}
        onSubmit={onSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form className={styles.form} onSubmit={handleSubmit}>
            <label htmlFor="fName" className={styles.registration__label}>
              Имя
            </label>
            <input
              type="text"
              name="firstName"
              className={styles.registration__item}
              id={styles.fName}
              placeholder="Имя"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.firstName}
              required="required"
            />
            <label htmlFor="lName" className={styles.registration__label}>
              Фамилия
            </label>
            <input
              type="text"
              name="lastName"
              className={styles.registration__item}
              id={styles.lName}
              placeholder="Фамилия"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lastName}
              required="required"
            />
            <label htmlFor="email" className={styles.registration__label}>
              Email
            </label>
            <input
              type="email"
              name="email"
              className={styles.registration__item}
              id={styles.email}
              placeholder="Email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              required="required"
            />
            <p className={styles.errorEmail}>
              {errors.email && touched.email && errors.email}
            </p>
            <label htmlFor="username" className={styles.registration__label}>
              Никнейм
            </label>
            <input
              type="text"
              name="username"
              className={styles.registration__item}
              id={styles.username}
              placeholder="Никнейм"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
              required="required"
            />
            <p className={styles.errorName}>
              {errors.username && touched.username && errors.username}
            </p>
            <p className={styles.errorText}>
              {errors.password && touched.password && errors.password}
            </p>
            <label htmlFor="password" className={styles.registration__label}>
              Пароль
            </label>
            <input
              type="password"
              name="password"
              className={styles.registration__item}
              id={styles.password}
              placeholder="Пароль"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              required="required"
            />
            <button
              className={styles.registration__button}
              type="submit"
              disabled={isSubmitting}
            >
              Отправить
            </button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default Registration;
