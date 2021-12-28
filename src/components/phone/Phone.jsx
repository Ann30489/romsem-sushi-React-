import React from "react";
import FormikPhoneInput from "./FormikPhoneInput";
import { useFormik } from "formik";

const SignupForm = () => {
  const ref = React.createRef();

  const formik = useFormik({
    initialValues: {
      phone: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <FormikPhoneInput
          ref={ref}
          name="phone"
          formik={formik}
          placeholder="+___ (__) ___ __ __"
          maxLength="18"
          onChange={(e) => formik.setFieldValue("phone", e)}
        />
      </form>
    </>
  );
};

export default function Phone() {
  return (
    <div className="phone">
      <SignupForm />
    </div>
  );
}
