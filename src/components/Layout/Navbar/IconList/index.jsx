import React from "react";

//
import { Search, Bag } from "../../../icons";
import "./index.scss";

const IconList = ({ setSearchOpen }) => {
  return (
    <ul className="header-icon-list hide-mobile">
      <li>
        <span onClick={() => setSearchOpen(true)}>
          <Search size={16} />
        </span>
      </li>
      <li>
        <a href="https://www.gulflogix.ae/cart/">
          <Bag size={18} />
        </a>
      </li>
    </ul>
  );
};

export default IconList;
