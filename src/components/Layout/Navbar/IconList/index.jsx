import React from "react";

//
import { Search, Bag } from "../../../icons";
import "./index.scss";

const IconList = () => {
  return (
    <ul className="header-icon-list hide-mobile">
      <li>
        <Search size={16} />
      </li>
      <li>
        <Bag size={18} />
      </li>
    </ul>
  );
};

export default IconList;
