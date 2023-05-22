import React from "react";

import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;

//Add props for inputs UI etc by using spread operator {...props} in the rendered element, ensures that alll the Key Value pairs of a props object are spread into the elements configurations
