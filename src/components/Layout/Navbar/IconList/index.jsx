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
    </ul>
  );
};

export default IconList;
