import React from "react";

// Components
import Navbar from "./Navbar";
import Footer from "./Footer";

//
import "../../styles/global.scss";

const Layout = ({ children }) => {
  return (
    <>
      <div id="search-popover-placeholder"></div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
