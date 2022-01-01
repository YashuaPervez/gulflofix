import React from "react";

// Components
import Layout from "../../components/Layout";
import CommonHero from "../../components/CommonHero";
import Container from "../../components/UI/Container";
import CTA from "../../components/CTA";
import ImageContent from "../../components/ImageContent";
import Cards from "../../components/Cards";
import OtherServices from "../../components/OtherServices";

//
import HeroBG from "../../images/services/implementation-services/implementation-services-banner-bg.png";
import HeroLogo from "../../images/services/implementation-services/logo.png";
import ContentImage from "../../images/services/implementation-services/implementation-services-img.png";

const ImplementationServices = () => {
  return (
    <Layout>
      <CommonHero
        bgImage={HeroBG}
        logo={HeroLogo}
        title="Implementation Services"
        titleClasses="color-purple"
        title2="Data is increasingly flowing from multiple sources and businesses that understand how to consume this data will gain deep insight and guide their business for better results. "
        buttonColor="purple"
        buttonText=""
      />
      <ImageContent imgUrl={ContentImage} buttonColor="purple">
        <p className="text-sm color-gray-2 mb-sm">
          We work together to meet challenges effectively by using Microsoft
          Power Platform to analyze data, build solutions, automate processes,
          and create virtual agents.
        </p>
        <p className="text-sm color-gray-2 mb-sm">
          We will work with you to automate your organization’s business
          processes, utilizing forms and flows created with the Power Platform.
        </p>
      </ImageContent>
      <OtherServices />
      <section className="section">
        <Container>
          <Cards heading="Learn more about the services we offer" />
        </Container>
      </section>
      <section className="section">
        <CTA
          headingText="Have questions?"
          heading2Text="Check out our frequently asked questions"
          ctaText="FAQs"
          ctaLink="/faq"
          headingClasses="color-purple heading-big"
          heading2Classes="color-dark contact-cta-heading2"
          ctaClasses="purple"
        />
      </section>
    </Layout>
  );
};

export default ImplementationServices;
