import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <>
      <input
        className={props.className}
        id={props.id}
        type={props.type}
        ref={ref}
        maxLength={props.maxLength}
      />
    </>
  );
});

export default Input;
