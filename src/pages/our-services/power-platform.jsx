import React from "react";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

// Components
import Layout from "../../components/Layout";

import CommonHero from "../../components/CommonHero";
import OtherServices from "../../components/OtherServices";
import CTA from "../../components/CTA";
import Apps from "../../container/Services_Pages/Power/Apps";
import About from "../../container/Services_Pages/Power/About";
import Apps2 from "../../container/Services_Pages/Power/Apps2";

//
import HeroLogo from "../../images/services/power/logo.png";

const PowerPlatform = ({ data }) => {
  const { heroCta, servicesTitle, services, content, services2 } =
    data.powerplatform;

  return (
    <Layout>
      <CommonHero
        BgImage={() => (
          <StaticImage
            src="../../images/services/power/power-plaform-banner-bg.png"
            placeholder="tracedSVG"
            className="common-hero-image"
          />
        )}
        logo={HeroLogo}
        title={heroCta.mainTitle}
        titleClasses="color-yellow"
        title2={heroCta.level2Title}
        buttonColor="yellow"
      />
      <Apps data={{ servicesTitle, services }} />
      <div className="office-description-container">
        <div className="image">
          <StaticImage
            src="../../images/power-platform-bg.png"
            placeholder="tracedSVG"
            loading="lazy"
          />
        </div>
        <div className="content">
          <About data={{ content }} />
          <Apps2 data={{ services2 }} />
        </div>
      </div>
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

export const query = graphql`
  query PowerPlatformPage {
    powerplatform: contentfulPowerPlatformPage {
      heroCta {
        mainTitle
        level2Title
        buttonText
        buttonLink
      }
      servicesTitle
      services {
        title
        image {
          gatsbyImageData(placeholder: TRACED_SVG)
        }
        description {
          raw
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
      services2 {
        title
        description {
          raw
        }
        image {
          gatsbyImageData(placeholder: TRACED_SVG)
        }
      }
    }
  }
`;

export default PowerPlatform;
