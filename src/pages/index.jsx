import React from "react";
import { graphql } from "gatsby";

// Components
import Layout from "../components/Layout";

// Section
import Hero from "../container/Home/Hero";
import Features from "../container/Home/Features";
import Services from "../container/Home/Services";
import Experties from "../container/Home/Experties";
import BusinessSupport from "../container/Home/BusinessSupport";
import ContactCTA from "../container/Home/ContactCTA";
import Calendar from "../container/Home/Calendar";

const HomePage = ({ data }) => {
  const {
    heroTitle,
    heroTitleBold,
    heroDescription,
    heroButtonText,
    heroButtonLink,
    featuresList,
    cta,
    servicesTitle,
    servicesList,
    servicesTitle2,
    servicesDescription,
    servicesList2,
    expertiesTitle,
    expertiesDescription,
    expertiesList,
    pointsTitle,
    pointsDescription,
    pointsList,
    pointsButtonText,
    pointsButtonLink,
    contactCta,
  } = data?.home;

  return (
    <Layout>
      <Hero
        data={{
          heroTitle,
          heroTitleBold,
          heroDescription,
          heroButtonText,
          heroButtonLink,
        }}
      />
      <Features data={{ featuresList, cta }} />
      <Services
        data={{
          servicesTitle,
          servicesList,
          servicesTitle2,
          servicesDescription,
          servicesList2,
        }}
      />
      <Experties
        data={{
          expertiesTitle,
          expertiesDescription,
          expertiesList,
        }}
      />
      <BusinessSupport
        data={{
          pointsTitle,
          pointsDescription,
          pointsList,
          pointsButtonText,
          pointsButtonLink,
        }}
      />
      <ContactCTA
        data={{
          contactCta,
        }}
      />
      <Calendar />
    </Layout>
  );
};

export const query = graphql`
  query HomepageQuery {
    home: contentfulHomePage {
      heroTitle
      heroTitleBold
      heroDescription {
        heroDescription
      }
      heroButtonText
      heroButtonLink
      featuresList {
        image {
          title
          file {
            url
          }
          gatsbyImageData(placeholder: TRACED_SVG, height: 90, width: 90)
        }
        title
        description {
          raw
        }
      }
      cta {
        mainTitle
        buttonText
        buttonLink
      }
      servicesTitle
      servicesList {
        image {
          title
          file {
            url
          }
          gatsbyImageData(placeholder: TRACED_SVG)
        }
        title
        description {
          raw
        }
        buttonText
        buttonLink
      }
      servicesTitle2
      servicesDescription
      servicesList2 {
        image {
          title
          file {
            url
          }
          gatsbyImageData(placeholder: TRACED_SVG)
        }
        title
        buttonText
        buttonLink
      }
      expertiesTitle
      expertiesDescription
      expertiesList {
        image {
          title
          file {
            url
          }
          gatsbyImageData(placeholder: TRACED_SVG)
        }
        title
      }
      pointsTitle
      pointsDescription
      pointsList
      pointsButtonText
      pointsButtonLink
      contactCta {
        mainTitle
        level2Title
        buttonText
        buttonLink
      }
    }
  }
`;

export default HomePage;
