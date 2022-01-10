import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";

// Components
import Layout from "../components/Layout";

import Hero from "../container/Services/Hero";
import Services from "../container/Home/Services";

const OurServices = ({ data }) => {
  const { title, description } = data.our_services;
  const {
    servicesTitle,
    servicesList,
    servicesTitle2,
    servicesDescription,
    servicesList2,
  } = data.home;

  return (
    <Layout>
      <Helmet>
        <title>
          Gulf Logix Information Technology | Gulf Logix UAE | Services
        </title>
      </Helmet>
      <Hero data={{ title, description }} />
      <Services
        data={{
          servicesList,
          servicesTitle2,
          servicesDescription,
          servicesList2,
        }}
      />
    </Layout>
  );
};

export const query = graphql`
  query OurServicesPage {
    our_services: contentfulOurServicesPage {
      title
      description {
        description
      }
    }
    home: contentfulHomePage {
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
    }
  }
`;

export default OurServices;
