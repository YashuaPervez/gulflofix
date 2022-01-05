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
// import HeroBG from "../../images/services/enablement-training-services/enablement-training-banner-bg.png";
import HeroLogo from "../../images/services/enablement-training-services/logo.png";
import ContentImage from "../../images/services/low-code-solution/no-code-img.png";

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
      <section className="section">
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
      </section>
      <ImageContent
        heading={content.title}
        image={content.image}
        buttonColor="blue"
        buttonText={content.buttonText}
        buttonLink={content.buttonLink}
      >
        <RichTextRenderer
          richText={content.body}
          config={{ p: "text-sm color-gray-2 mb-sm" }}
        />
      </ImageContent>
      <section className="section">
        <Container>
          <Cards
            heading={servicesTitle}
            cards={servicesList}
            colors={["pink", "purple", "pink"]}
          />
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
