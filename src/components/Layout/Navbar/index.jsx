import React, { useState } from "react";
import { Link } from "gatsby";

// Components
import Container from "../../UI/Container";
import Navigation from "./Navigation";
import IconList from "./IconList";
import Toggle from "./Toggle";
import SearchComponent from "../../Search";

//
import LogoImage from "../../../images/logo.png";
import { DownArrow } from "../../icons";
import "./index.scss";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <SearchComponent searchOpen={searchOpen} setSearchOpen={setSearchOpen} />
      <div className="top-bar">
        <Container>
          <ul>
            <li className="text-sm">
              <Link to="/faq" className="top-bar-link-item">
                <span className="top-bar-link-item-text">FAQs</span>
                <div className="top-bar-link-item-icon">
                  <DownArrow color="#fff" size={9} />
                </div>
              </Link>
            </li>
            <li className="text-sm">
              <Link to="/contact-us" className="top-bar-link-item">
                <span className="top-bar-link-item-text">Contact Us</span>
                <div className="top-bar-link-item-icon">
                  <DownArrow color="#fff" size={9} />
                </div>
              </Link>
            </li>
          </ul>
        </Container>
      </div>
      <header className="navbar">
        <Container>
          <div className="navbar-content">
            <Link to="/" className="navbar-content-image">
              <img src={LogoImage} />
            </Link>
            <div className={`collapse-able ${active ? "active" : ""}`}>
              <Navigation
                searchOpen={searchOpen}
                setSearchOpen={setSearchOpen}
              />
              <IconList searchOpen={searchOpen} setSearchOpen={setSearchOpen} />
            </div>
            <Toggle setActive={setActive} active={active} />
          </div>
        </Container>
      </header>
    </>
  );
};

export default Navbar;
