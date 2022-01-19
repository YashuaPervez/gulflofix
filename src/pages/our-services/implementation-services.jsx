import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";

// Components
import Layout from "../../components/Layout";
import CommonHero from "../../components/CommonHero";
import Container from "../../components/UI/Container";
import CTA from "../../components/CTA";
import ImageContent from "../../components/ImageContent";
import Cards from "../../components/Cards";
import OtherServices from "../../components/OtherServices";
import RichTextRenderer from "../../components/RichTextRenderer";

//
import HeroLogo from "../../images/services/implementation-services/logo.png";

const ImplementationServices = ({ data }) => {
  const { heroCta, content, servicesTitle, servicesList } =
    data.implementationServices;

  return (
    <Layout>
      <Helmet>
        <title>
          Gulf Logix Information Technology | UAE | Implementation Services
        </title>
      </Helmet>
      <CommonHero
        BgImage={() => (
          <StaticImage
            src="../../images/services/implementation-services/implementation-services-banner-bg.png"
            className="common-hero-image"
          />
        )}
        logo={HeroLogo}
        title={heroCta.mainTitle}
        titleClasses="color-purple"
        title2={heroCta.level2Title}
        buttonColor="purple"
        buttonText=""
      />
      <ImageContent
        image={content.image}
        buttonColor="purple"
        buttonLink={content.buttonLink}
        buttonText={content.buttonText}
      >
        <RichTextRenderer
          richText={content.body}
          config={{
            p: "text-sm color-gray-2 mb-sm",
          }}
        />
      </ImageContent>
      <OtherServices ignore="share" ignore2="office" />
      <section className="section bg-image">
        <div className="image">
          <StaticImage
            loading="lazy"
            placeholder="tracedSVG"
            src="../../images/implementation-services-blob.png"
          />
        </div>
        <div className="content">
          <Container>
            <Cards
              heading={servicesTitle}
              cards={servicesList}
              colors={["pink", "blue", "purple"]}
            />
          </Container>
        </div>
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

export const query = graphql`
  query ImplementationServicesQueryPage {
    implementationServices: contentfulImplementationServicesPage {
      heroCta {
        mainTitle
        level2Title
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
      servicesTitle
      servicesList {
        image {
          gatsbyImageData(placeholder: TRACED_SVG)
        }
        title
        description {
          raw
        }
        buttonText
        buttonLink
        openInNewTab
      }
    }
  }
`;

export default ImplementationServices;
