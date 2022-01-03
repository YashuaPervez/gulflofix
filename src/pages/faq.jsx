import React from "react";
import { graphql } from "gatsby";

// Components
import Layout from "../components/Layout";

import AllFaq from "../container/Faq/AllFaq";
import ContactCTA from "../container/Faq/ContactCTA";

const Faq = ({ data }) => {
  const { title, faqsList, contactCta } = data.faq;

  return (
    <Layout>
      <AllFaq data={{ title, faqsList }} />
      <ContactCTA data={{ contactCta }} />
    </Layout>
  );
};

export const query = graphql`
  query FaqPageQuery {
    faq: contentfulFaqPage {
      title
      faqsList {
        title
        questionList {
          question
          answer {
            raw
          }
        }
      }
      contactCta {
        mainTitle
        level2Title
        buttonText
        buttonLink
      }
    }
  }
`;

export default Faq;
