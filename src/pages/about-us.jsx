import React from "react";
import { graphql } from "gatsby";

// Components
import Layout from "../components/Layout";

import Hero from "../container/About/Hero";
import Parther from "../container/About/Partner";
import WhyChooseUs from "../container/About/WhyChooseUs";
import Features from "../container/About/Features";
import Services from "../container/About/Services";
import OurSolution from "../container/About/OurSolution";
import ShopCTA from "../container/About/ShopCTA";
import { Helmet } from "react-helmet";

const AboutUs = ({ data }) => {
  const {
    title,
    description,
    partner,
    whyChoose,
    featuresList,
    implementationTitle,
    implementationDescription,
    implementationSubtitle,
    implementationList,
    solution,
    shopCta,
  } = data.about;

  return (
    <Layout>
      <Helmet>
        <title>
          Low Code Apps Dubai | Gulf Logix Information Technology | About
        </title>
      </Helmet>
      <Hero data={{ title, description }} />
      <Parther data={{ partner }} />
      <WhyChooseUs data={{ whyChoose }} />
      <div className="about-feature-services-solutions-group">
        <Features data={{ featuresList }} />
        <Services
          data={{
            implementationTitle,
            implementationDescription,
            implementationSubtitle,
            implementationList,
          }}
        />
        <OurSolution data={{ solution }} />
      </div>
      <ShopCTA data={{ shopCta }} />
    </Layout>
  );
};

export const query = graphql`
  query AboutPageQuery {
    about: contentfulAboutPage {
      title
      description
      partner {
        body {
          raw
        }
        image {
          file {
            url
          }
          gatsbyImageData(placeholder: TRACED_SVG)
        }
      }
      whyChoose {
        title
        body {
          raw
        }
        image {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      featuresList {
        title
        image {
          gatsbyImageData(placeholder: TRACED_SVG)
          file {
            url
          }
        }
        description {
          raw
        }
      }
      implementationTitle
      implementationDescription
      implementationSubtitle
      implementationList {
        image {
          file {
            url
          }
          gatsbyImageData(placeholder: BLURRED)
        }
        title
        description {
          raw
        }
      }
      solution {
        title
        body {
          raw
        }
        image {
          gatsbyImageData(placeholder: BLURRED)
          file {
            url
          }
        }
      }
      shopCta {
        mainTitle
        buttonText
        buttonLink
      }
    }
  }
`;

export default AboutUs;
