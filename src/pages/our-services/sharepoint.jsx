import React from "react";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Helmet } from "react-helmet";

// Components
import Layout from "../../components/Layout";

import CommonHero from "../../components/CommonHero";
import CTA from "../../components/CTA";
import OtherServices from "../../components/OtherServices";
import Features from "../../container/Services_Pages/Share/Features";
import About from "../../container/Services_Pages/Share/About";

//
import HeroLogo from "../../images/services/share/logo.svg";

const SharePoint = ({ data }) => {
  const { heroCta, servicesTitle, services, content } = data.sharepoint;

  return (
    <Layout>
      <Helmet>
        <title>Sharepoint - Gulf Logix</title>
      </Helmet>
      <CommonHero
        BgImage={() => (
          <StaticImage
            src="../../images/services/share/sharepoint-banner-bg.png"
            placeholder="tracedSVG"
            className="common-hero-image"
          />
        )}
        logo={HeroLogo}
        title={heroCta.mainTitle}
        titleClasses="color-teal"
        title2={heroCta.level2Title}
        buttonColor="teal"
        buttonText={heroCta.buttonText}
        buttonLink={heroCta.buttonLink}
      />
      <Features data={{ servicesTitle, services }} />
      <About data={{ content }} />
      <OtherServices ignore="share" />
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

export const query = graphql`
  query SharePointPageQuery {
    sharepoint: contentfulSharepointPage {
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

export default SharePoint;
