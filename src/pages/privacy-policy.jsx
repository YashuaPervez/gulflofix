import React from "react";
import { graphql } from "gatsby";

// Components
import Layout from "../components/Layout";
import Container from "../components/UI/Container";
import RichTextRenderer from "../components/RichTextRenderer";

const PrivacyPage = ({ data }) => {
  const { title, content } = data.privacy;

  return (
    <Layout>
      <Container>
        <section className="section">
          <h1 className="heading-big mb-lg">{title}</h1>
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
  query PrivacyPage {
    privacy: contentfulPrivacyPage {
      title
      content {
        raw
      }
    }
  }
`;

export default PrivacyPage;
