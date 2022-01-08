import React from "react";
import { graphql } from "gatsby";

// Components
import Layout from "../components/Layout";
import Container from "../components/UI/Container";
import RichTextRenderer from "../components/RichTextRenderer";

const TermsPage = ({ data }) => {
  const { content } = data.terms;

  return (
    <Layout>
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
