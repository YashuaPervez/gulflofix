import React, { useEffect } from "react";
import { useQueryParam, StringParam } from "use-query-params";
import { navigate, graphql } from "gatsby";

// Components
import Layout from "../components/Layout";
import Hero from "../container/Search/Hero";
import Results from "../container/Search/Results";

const Search = ({ data }) => {
  const [query] = useQueryParam("q", StringParam);

  useEffect(() => {
    if (!query) {
      navigate("/");
    }
  }, [query]);

  const { searchPages } = data;

  return (
    <Layout>
      <Hero query={query} />
      <Results results={searchPages.edges} query={query} />
    </Layout>
  );
};

export const query = graphql`
  query SearchPageQuery {
    searchPages: allContentfulSearchPage(
      filter: { node_locale: { eq: "en-US" } }
      sort: { order: DESC, fields: contentful_id }
    ) {
      edges {
        node {
          title
          link
          searchText {
            searchText
          }
        }
      }
    }
  }
`;

export default Search;
