import React from "react";

// Components
import Layout from "../../components/Layout";

import CommonHero from "../../components/CommonHero";
import OtherServices from "../../components/OtherServices";
import CTA from "../../components/CTA";

//
import HeroBG from "../../images/services/power/power-plaform-banner-bg.png";
import HeroLogo from "../../images/services/power/logo.png";

const PowerPlatform = () => {
  return (
    <Layout>
      <CommonHero
        bgImage={HeroBG}
        logo={HeroLogo}
        title="Power Platform"
        titleClasses="color-yellow"
        title2="The Microsoft Power Platform is a low-code service that allows you to build business solutions and applications that run on multiple platforms and devices with little to no code. "
        buttonColor="yellow"
      />
      <OtherServices />
      <section className="section">
        <CTA
          headingText="Have questions?"
          heading2Text="Check out our frequently asked questions"
          ctaText="FAQs"
          ctaLink="/faq"
          headingClasses="color-yellow heading-big"
          heading2Classes="color-dark contact-cta-heading2"
          ctaClasses="yellow"
        />
      </section>
    </Layout>
  );
};

export default PowerPlatform;
