import React from "react";
import { Link } from "gatsby";

// Components
import Container from "../../../components/UI/Container";

//
import "./index.scss";

const Results = ({ results, query }) => {
  const filteredResults = results.filter(({ node: { searchText } }) =>
    searchText.searchText.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section className="section search-results">
      <Container>
        {filteredResults.length !== 0 ? (
          filteredResults.map(({ node: { title, link, searchText } }) => {
            return (
              <div className="mb-lg">
                <Link to={link}>
                  <h3 className="heading color-dark">{title}</h3>
                </Link>
                <p className="text-sm color-gray-2">
                  {`${searchText.searchText.substr(0, 300)}...`}
                </p>
              </div>
            );
          })
        ) : (
          <div>
            <p className="text-sm color-gray-2">No results found</p>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Results;
