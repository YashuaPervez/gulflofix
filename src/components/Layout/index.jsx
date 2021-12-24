import React from "react";

// Components
import Navbar from "./Navbar";

//
import "../../styles/global.scss";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <header>Footer</header>
    </>
  );
};

export default Layout;
