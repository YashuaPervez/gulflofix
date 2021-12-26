import React from "react";
import { Link } from "gatsby";

// Components
import Button from "../../../UI/Button";

//
import { Bag, Search, DownArrow } from "../../../icons";
import "./index.scss";

const Navigation = () => {
  return (
    <nav className={`header-navigation `}>
      <ul>
        <li className="nav-item">
          <Link to="/about-us">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/our-services">
            <span className="text">Our Services</span>
            <span className="end">
              <DownArrow />
            </span>
          </Link>
          <ul className="dropdown">
            <h3 className="dropdown-title">Technology</h3>
            <li className="dropdown-item">Office 365</li>
            <li className="dropdown-item">Power Platform</li>
            <li className="dropdown-item">SharePoint</li>
            <h3 className="dropdown-title">Services</h3>
            <li className="dropdown-item">Low Code Solution</li>
            <li className="dropdown-item">Enablement & Traning Services</li>
            <li className="dropdown-item">Implementation Services</li>
          </ul>
        </li>
        <li className="nav-item">
          <Link to="/">Shop</Link>
        </li>
        <li className="nav-item hide-mobile">
          <Button>Book a Session</Button>
        </li>
        <li className="nav-item hide-desktop">
          <Link to="/">Book a Session</Link>
        </li>
        <li className="nav-item hide-desktop">
          <Link to="/">
            <Search size={20} />
          </Link>
        </li>
        <li className="nav-item hide-desktop">
          <Link to="/">
            <Bag size={20} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
