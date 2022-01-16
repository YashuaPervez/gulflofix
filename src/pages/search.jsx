import React, { useEffect } from "react";
import { useQueryParam, StringParam } from "use-query-params";
import { navigate } from "gatsby";

// Components
import Layout from "../components/Layout";
import Hero from "../container/Search/Hero";

const Search = () => {
  const [query] = useQueryParam("q", StringParam);

  useEffect(() => {
    if (!query) {
      navigate("/");
    }
  }, [query]);

  return (
    <Layout>
      <Hero query={query} />
    </Layout>
  );
};

export default Search;
