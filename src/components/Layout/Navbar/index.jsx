import React, { useState } from "react";
import { Link } from "gatsby";

// Components
import Container from "../../UI/Container";
import Navigation from "./Navigation";
import IconList from "./IconList";
import Toggle from "./Toggle";

//
import LogoImage from "../../../images/logo.png";
import "./index.scss";

const Navbar = () => {
  const [active, setActive] = useState(false);

  return (
    <header className="navbar">
      <Container>
        <div className="navbar-content">
          <Link to="/">
            <img src={LogoImage} />
          </Link>
          <div className={`collapse-able ${active ? "active" : ""}`}>
            <Navigation active={active} />
            <IconList />
          </div>
          <Toggle setActive={setActive} active={active} />
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
