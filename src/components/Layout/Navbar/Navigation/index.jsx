import React from "react";
import { Link } from "gatsby";

// Components
import Button from "../../../UI/Button";

//
import "./index.scss";

const Navigation = () => {
  return (
    <nav className={`header-navigation `}>
      <ul>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/">Our Services</Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
        <li>
          <Button>Book a Session</Button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
