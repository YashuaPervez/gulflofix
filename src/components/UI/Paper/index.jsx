import React from "react";

//
import "./index.scss";

const Paper = ({ children, type }) => {
  let typeClasses = "";
  switch (type) {
    case "outlined":
      typeClasses = "outlined";
      break;
    default:
      typeClasses = "shadow";
      break;
  }

  return <div className={`paper ${typeClasses}`}>{children}</div>;
};

export default Paper;
