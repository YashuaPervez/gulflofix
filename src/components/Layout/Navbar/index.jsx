import React, { useState } from "react";

// Components
import Container from "../../UI/Container";
import Navigation from "./Navigation";
import IconList from "./IconList";
import Toggle from "./Toggle";

//
import "./index.scss";

const Navbar = () => {
  const [active, setActive] = useState(false);

  return (
    <header className="navbar">
      <Container>
        <div className="navbar-content">
          <h1>navbar</h1>
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
