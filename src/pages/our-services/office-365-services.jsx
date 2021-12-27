import React from "react";

// Components
import Layout from "../../components/Layout";

import CommonHero from "../../components/CommonHero";
import CTA from "../../components/CTA";
import Features from "../../container/Services_Pages/Office/Features";

//
import HeroBG from "../../images/services/office/office-365-banner-bg.png";
import HeroLogo from "../../images/services/office/logo.svg";

const Office365Services = () => {
  return (
    <Layout>
      <CommonHero
        bgImage={HeroBG}
        logo={HeroLogo}
        title="Office 365 Services"
        titleClasses="color-orange"
        title2="Proficient consulting, services and support"
        buttonColor="orange"
      />
      <Features />
      <section className="section">
        <CTA
          headingText="Have questions?"
          heading2Text="Check out our frequently asked questions"
          ctaText="FAQs"
          ctaLink="/faq"
          headingClasses="color-orange heading-big"
          heading2Classes="color-dark contact-cta-heading2"
          ctaClasses="orange"
        />
      </section>
    </Layout>
  );
};

export default Office365Services;
