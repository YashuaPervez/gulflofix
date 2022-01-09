import React from "react";

//
import "./index.scss";

const Button = ({ children, color = "blue", ...rest }) => {
  return (
    <button className={`button button-${color}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
