import React from "react";

// Components
import Layout from "../../components/Layout";
import CommonHero from "../../components/CommonHero";
import Container from "../../components/UI/Container";
import CTA from "../../components/CTA";
import ImageContent from "../../components/ImageContent";
import Cards from "../../components/Cards";

//
import HeroBG from "../../images/services/low-code-solution/no-code-banner-bg.png";
import HeroLogo from "../../images/services/low-code-solution/logo.png";
import ContentImage from "../../images/services/low-code-solution/no-code-img.png";

const LowCodeSolution = () => {
  return (
    <Layout>
      <CommonHero
        bgImage={HeroBG}
        logo={HeroLogo}
        title="No-Code / Low-Code Solution"
        titleClasses="color-pink"
        title2="Take advantage of the most exciting development in the world of business applications."
        title3="Enter the low-code revolution!"
        buttonColor="pink"
        buttonText=""
      />
      <ImageContent imgUrl={ContentImage} buttonColor="pink">
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

export default LowCodeSolution;
