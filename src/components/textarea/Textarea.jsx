import React from "react";

const Textarea = React.forwardRef((props, ref) => {
  return (
    <>
      <textarea
        className={props.className}
        value={props.value}
        onChange={props.onChange}
        id={props.id}
        type={props.type}
        ref={ref}
        maxLength={props.maxLength}
      />
    </>
  );
});

export default Textarea;
