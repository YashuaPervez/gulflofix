import React from "react";

// Components
import Layout from "../components/Layout";

import Hero from "../container/About/Hero";
import Parther from "../container/About/Partner";
import WhyChooseUs from "../container/About/WhyChooseUs";
import Features from "../container/About/Features";
import Services from "../container/About/Services";
import OurSolution from "../container/About/OurSolution";
import ShopCTA from "../container/About/ShopCTA";

const AboutUs = () => {
  return (
    <Layout>
      <Hero />
      <Parther />
      <WhyChooseUs />
      <Features />
      <Services />
      <OurSolution />
      <ShopCTA />
    </Layout>
  );
};

export default AboutUs;
