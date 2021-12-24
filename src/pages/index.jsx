import React from "react";

// Components
import Layout from "../components/Layout";

// Section
import Hero from "../container/Home/Hero";
import Features from "../container/Home/Features";
import Services from "../container/Home/Services";
import Experties from "../container/Home/Experties";
import BusinessSupport from "../container/Home/BusinessSupport";
import ContactCTA from "../container/Home/ContactCTA";
import Calendar from "../container/Home/Calendar";

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <Services />
      <Experties />
      <BusinessSupport />
      <ContactCTA />
      <Calendar />
    </Layout>
  );
};

export default HomePage;
