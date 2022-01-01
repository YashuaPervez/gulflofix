import React from "react";

// Components
import Layout from "../../components/Layout";
import CommonHero from "../../components/CommonHero";
import Container from "../../components/UI/Container";
import CTA from "../../components/CTA";
import ImageContent from "../../components/ImageContent";
import Cards from "../../components/Cards";

//
import HeroBG from "../../images/services/enablement-training-services/enablement-training-banner-bg.png";
import HeroLogo from "../../images/services/enablement-training-services/logo.png";
import ContentImage from "../../images/services/low-code-solution/no-code-img.png";

const EnablementTrainingServices = () => {
  return (
    <Layout>
      <CommonHero
        bgImage={HeroBG}
        logo={HeroLogo}
        title="Enablement & Training Services"
        titleClasses="color-blue"
        title2="We offer a variety of Enablement and Training Services designed to enable your employees for rapid digital transformation and expansion. "
        buttonColor="blue"
        buttonText=""
      />
      <section className="section">
        <Container>
          <Cards
            heading="Learn more about the services we offer"
            paperProps={{
              type: "outlined",
            }}
          />
        </Container>
      </section>
      <ImageContent
        heading="How do we enable you?"
        imgUrl={ContentImage}
        buttonColor="blue"
      >
        <p className="text-sm color-gray-2 mb-sm">
          Increased business demand for faster software solutions have propelled
          the adoption of low-code development platforms to the forefront. Many
          Low code platforms are cloud based and largely promote an out of the
          box experience and require less technical expertise for support.
        </p>
        <p className="text-sm color-gray-2 mb-sm">
          Low code platforms allow you to build business solutions quicker, make
          the right decisions faster, and to innovate and adapt your business in
          the market. GulfLogix specializes in low code development across
          multiple platforms.
        </p>
        <p className="text-sm color-gray-2 mb-sm">
          Using these platforms, we build flexible solutions in web and mobile
          applications rapidly. Our services in low-code platforms are
          accelerating the journey to a digital business by changing the way
          your business and IT works.
        </p>
        <p className="text-sm color-gray-2 mb-sm">
          We analyze what a low-code platform means to your business and train
          the IT personnel in your organization.
        </p>
      </ImageContent>
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
          headingClasses="color-pink heading-big"
          heading2Classes="color-dark contact-cta-heading2"
          ctaClasses="pink"
        />
      </section>
    </Layout>
  );
};

export default EnablementTrainingServices;
