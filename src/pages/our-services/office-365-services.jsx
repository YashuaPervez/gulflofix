import React from "react";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

// Components
import Layout from "../../components/Layout";

import CommonHero from "../../components/CommonHero";
import CTA from "../../components/CTA";
import Features from "../../container/Services_Pages/Office/Features";
import Features2 from "../../container/Services_Pages/Office/Features2";
import Description from "../../container/Services_Pages/Office/Description";
import OtherServices from "../../components/OtherServices";

//
// import HeroBG from "../../images/services/office/office-365-banner-bg.png";
import HeroLogo from "../../images/services/office/logo.svg";

const Office365Services = ({ data }) => {
  const { content, featuresList, featuresList2, featuresTitle, heroCta } =
    data.officepage;

  return (
    <Layout>
      <CommonHero
        BgImage={() => (
          <StaticImage
            src="../../images/services/office/office-365-banner-bg.png"
            placeholder="tracedSVG"
            className="common-hero-image"
          />
        )}
        // bgImage={HeroBG}
        logo={HeroLogo}
        title={heroCta.mainTitle}
        titleClasses="color-orange"
        title2={heroCta.level2Title}
        buttonColor="orange"
        buttonText={heroCta.buttonText}
        buttonLink={heroCta.buttonLink}
      />
      <Features data={{ featuresTitle, featuresList }} />
      <Features2 data={{ featuresList2 }} />
      <Description data={{ content }} />
      <OtherServices ignore="office" />
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

export const query = graphql`
  query MyQuery {
    officepage: contentfulOffice365Page {
      heroCta {
        mainTitle
        level2Title
        buttonText
        buttonLink
      }
      featuresTitle
      featuresList {
        title
        description {
          raw
        }
        image {
          gatsbyImageData(placeholder: TRACED_SVG)
        }
      }
      featuresList2 {
        title
        description {
          raw
        }
        image {
          gatsbyImageData(placeholder: TRACED_SVG)
        }
      }
      content {
        image {
          gatsbyImageData(placeholder: TRACED_SVG)
        }
        body {
          raw
        }
        buttonText
        buttonLink
      }
    }
  }
`;

export default Office365Services;
