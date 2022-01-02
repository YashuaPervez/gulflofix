import React from "react";

// Components
import Container from "../../../components/UI/Container";

//
import "./index.scss";

const Hero = ({ data }) => {
  return (
    <section className="about-hero">
      <Container>
        <div className="about-hero-grid">
          <div className="about-hero-content">
            <h1 className="heading-xl about-hero-title">{data?.title}</h1>
            <p className="text-lg-thin">{data?.description}</p>
          </div>
          <div className="about-hero-spacer"></div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
