import React from "react";

//
import "./index.scss";

const Button = ({ children, color }) => {
  let colorClasses = "";
  switch (color) {
    case "blue":
      colorClasses = "button-blue";
      break;
    case "orange":
      colorClasses = "button-orange";
      break;
    case "yellow":
      colorClasses = "button-yellow";
      break;
    case "teal":
      colorClasses = "button-teal";
      break;
    default:
      colorClasses = "button-blue";
      break;
  }

  return <button className={`button ${colorClasses}`}>{children}</button>;
};

export default Button;
