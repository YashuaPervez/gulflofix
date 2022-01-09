import React from "react";

// Components
import Navbar from "./Navbar";
import Footer from "./Footer";
import SEO from "../SEO";

//
import Logo from "../../images/favicon.ico";
import "../../styles/global.scss";

const Layout = ({ children }) => {
  return (
    <>
      <SEO
        title="Gulf Logix"
        name="Gulf Logix"
        description="innovate faster using no code low code technologies to foster collaboration and automate business processes"
        websiteURL="https://www.gulflogix.ae"
        favIcon={Logo}
        lang="en"
        twitterHandle="gulflogix"
      />
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
