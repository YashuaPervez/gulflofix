import React from "react";

// Components
import Layout from "../components/Layout";

import Hero from "../container/About/Hero";
import Parther from "../container/About/Partner";
import WhyChooseUs from "../container/About/WhyChooseUs";
import Features from "../container/About/Features";
import Services from "../container/About/Services";

const AboutUs = () => {
  return (
    <Layout>
      <Hero />
      <Parther />
      <WhyChooseUs />
      <Features />
      <Services />
    </Layout>
  );
};

export default AboutUs;
