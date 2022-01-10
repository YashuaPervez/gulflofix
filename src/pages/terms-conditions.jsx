import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";

// Components
import Layout from "../components/Layout";
import Container from "../components/UI/Container";
import RichTextRenderer from "../components/RichTextRenderer";

const TermsPage = ({ data }) => {
  const { content } = data.terms;

  return (
    <Layout>
      <Helmet>
        <title>Terms {"&"} Conditions - Gulf Logix</title>
      </Helmet>
      <Container>
        <section className="section">
          <RichTextRenderer
            richText={content}
            config={{
              p: "text-sm color-gray-2 mb-sm",
            }}
          />
        </section>
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query TermsPageQuery {
    terms: contentfulTermsPage {
      title
      content {
        raw
      }
    }
  }
`;

export default TermsPage;
