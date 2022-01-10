import React from "react";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

// Components
import Layout from "../../components/Layout";
import CommonHero from "../../components/CommonHero";
import Container from "../../components/UI/Container";
import CTA from "../../components/CTA";
import ImageContent from "../../components/ImageContent";
import Cards from "../../components/Cards";
import RichTextRenderer from "../../components/RichTextRenderer";

//
// import image1 from "../../images/enablement-training-blob01-bg.png";
// import image2 from "../../images/enablement-training-blob02-bg.png";
import HeroLogo from "../../images/services/enablement-training-services/logo.png";

const EnablementTrainingServices = ({ data }) => {
  const {
    heroCta,
    trainingsTitle,
    trainingsList,
    content,
    servicesTitle,
    servicesList,
  } = data.enablement;

  return (
    <Layout>
      <CommonHero
        BgImage={() => (
          <StaticImage
            src="../../images/services/enablement-training-services/enablement-training-banner-bg.png"
            placeholder="tracedSVG"
            className="common-hero-image"
          />
        )}
        logo={HeroLogo}
        title={heroCta.mainTitle}
        titleClasses="color-blue"
        title2={heroCta.level2Title}
        buttonColor="blue"
        buttonText=""
      />
      <section className="section bg-image">
        <div className="image">
          <StaticImage
            loading="lazy"
            placeholder="tracedSVG"
            src="../../images/enablement-training-blob01-bg.png"
          />
        </div>
        <div className="content">
          <Container>
            <Cards
              heading={trainingsTitle}
              paperProps={{
                type: "outlined",
              }}
              cards={trainingsList}
              colors={["yellow", "purple", "blue"]}
            />
          </Container>
        </div>
      </section>
      <ImageContent
        heading={content.title}
        image={content.image}
        buttonColor="blue"
        buttonText={content.buttonText}
        buttonLink={content.buttonLink}
        removePadding
      >
        <RichTextRenderer
          richText={content.body}
          config={{ p: "text-sm color-gray-2 mb-sm" }}
        />
      </ImageContent>
      <section className="section bg-image">
        <div className="image">
          <StaticImage
            loading="lazy"
            placeholder="tracedSVG"
            src="../../images/enablement-training-blob02-bg.png"
          />
        </div>
        <div className="content">
          <Container>
            <Cards
              heading={servicesTitle}
              cards={servicesList}
              colors={["pink", "purple", "blue"]}
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
          headingClasses="color-blue heading-big"
          heading2Classes="color-dark contact-cta-heading2"
          ctaClasses="blue"
        />
      </section>
    </Layout>
  );
};

export const query = graphql`
  query EnablementPageQuery {
    enablement: contentfulEnablementPage {
      heroCta {
        mainTitle
        level2Title
      }
      trainingsTitle
      trainingsList {
        title
        image {
          gatsbyImageData(placeholder: TRACED_SVG)
        }
        description {
          raw
        }
        buttonText
        buttonLink
      }
      content {
        title
        body {
          raw
        }
        image {
          gatsbyImageData(placeholder: TRACED_SVG)
        }
        buttonText
        buttonLink
      }
      servicesTitle
      servicesList {
        title
        image {
          gatsbyImageData(placeholder: TRACED_SVG)
        }
        description {
          raw
        }
        buttonText
        buttonLink
      }
    }
  }
`;

export default EnablementTrainingServices;
