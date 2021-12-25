import React from "react";

// Components
import Layout from "../components/Layout";

import Hero from "../container/About/Hero";
import Parther from "../container/About/Partner";

const AboutUs = () => {
  return (
    <Layout>
      <Hero />
      <Parther />
    </Layout>
  );
};

export default AboutUs;
