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
      <script
        type="text/javascript"
        id="hs-script-loader"
        async
        defer
        src="//js-na1.hs-scripts.com/8384385.js"
      ></script>
      <Footer />
    </>
  );
};

export default Layout;
