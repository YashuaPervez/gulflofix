import React from "react";

// Components
import Container from "../../../components/UI/Container";

//
import "./index.scss";

const Hero = ({ query }) => {
  return (
    <section className="section search-hero-container">
      <Container>
        <div className="search-hero">
          <h1 className="heading color-dark">Results for: {query}</h1>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
