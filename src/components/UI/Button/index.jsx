import React from "react";

//
import "./index.scss";

const Button = ({ children, color = "blue" }) => {
  return <button className={`button button-${color}`}>{children}</button>;
};

export default Button;
