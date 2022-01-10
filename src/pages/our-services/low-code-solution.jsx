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
import RichTextRenderer from "../../components/RichTextRenderer";

//
// import image from "../../images/no-code-blob.png";
import HeroLogo from "../../images/services/low-code-solution/logo.png";

const LowCodeSolution = ({ data }) => {
  const { heroCta, content, servicesTitle, services } = data.lowcodesolution;

  return (
    <Layout>
      <Helmet>
        <title>Low Code Solution - Gulf Logix</title>
      </Helmet>
      <CommonHero
        BgImage={() => (
          <StaticImage
            src="../../images/services/low-code-solution/no-code-banner-bg.png"
            placeholder="tracedSVG"
            className="common-hero-image"
          />
        )}
        logo={HeroLogo}
        title={heroCta.mainTitle}
        titleClasses="color-pink"
        title2={heroCta?.level2Title}
        title3={heroCta?.level3Title}
        buttonColor="pink"
        buttonText=""
      />
      <ImageContent
        image={content.image}
        buttonColor="pink"
        buttonLink={content.buttonLink}
        buttonText={content.buttonText}
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
            src="../../images/no-code-blob.png"
          />
        </div>
        <div className="content">
          <Container>
            <Cards
              heading={servicesTitle}
              cards={services}
              colors={["blue", "purple", "pink"]}
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
          headingClasses="color-pink heading-big"
          heading2Classes="color-dark contact-cta-heading2"
          ctaClasses="pink"
        />
      </section>
    </Layout>
  );
};

export const query = graphql`
  query LowCodeSolutionPageQuery {
    lowcodesolution: contentfulLowCodeSolutionPage {
      heroCta {
        mainTitle
        level2Title
        level3Title
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
      services {
        image {
          gatsbyImageData(placeholder: TRACED_SVG)
        }
        title
        description {
          raw
        }
        buttonText
        buttonLink
      }
    }
  }
`;

export default LowCodeSolution;
