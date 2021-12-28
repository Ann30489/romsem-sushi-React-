import React from "react";
import PropTypes from "prop-types";
import PhoneInput from "react-phone-number-input";

const FormikPhoneInput = React.forwardRef(
  (
    { name, onChange, placeholder, maxLength, pattern, formik, ...rest },
    ref
  ) => (
    <PhoneInput
      {...rest}
      ref={ref}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      maxLength={maxLength}
    />
  )
);

FormikPhoneInput.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  formik: PropTypes.shape({
    handleChange: PropTypes.func.isRequired,
    handleBlur: PropTypes.func.isRequired,
  }).isRequired,
};

export default FormikPhoneInput;
