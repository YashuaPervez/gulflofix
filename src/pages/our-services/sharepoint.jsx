import React from "react";

// Components
import Layout from "../../components/Layout";

import CommonHero from "../../components/CommonHero";
import CTA from "../../components/CTA";
import OtherServices from "../../components/OtherServices";
import Features from "../../container/Services_Pages/Share/Features";
import About from "../../container/Services_Pages/Share/About";

//
import HeroBG from "../../images/services/share/sharepoint-banner-bg.png";
import HeroLogo from "../../images/services/share/logo.svg";

const SharePoint = () => {
  return (
    <Layout>
      <CommonHero
        bgImage={HeroBG}
        logo={HeroLogo}
        title="Power Platform"
        titleClasses="color-teal"
        title2="The Microsoft Power Platform is a low-code service that allows you to build business solutions and applications that run on multiple platforms and devices with little to no code. "
        buttonColor="teal"
      />
      <Features />
      <About />
      <OtherServices />
      <section className="section">
        <CTA
          headingText="Have questions?"
          heading2Text="Check out our frequently asked questions"
          ctaText="FAQs"
          ctaLink="/faq"
          headingClasses="color-teal heading-big"
          heading2Classes="color-dark contact-cta-heading2"
          ctaClasses="teal"
        />
      </section>
    </Layout>
  );
};

export default SharePoint;
