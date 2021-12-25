import React from "react";

// Components
import Container from "../../../components/UI/Container";

//
import "./index.scss";

const Hero = () => {
  return (
    <section className="about-hero">
      <Container>
        <div className="about-hero-grid">
          <div className="about-hero-content">
            <h1 className="heading-xl about-hero-title">About Gulf Logix</h1>
            <p className="text-lg-thin">
              We specialise in collaboration, content, application development &
              small to mid-market cloud solutions
            </p>
          </div>
          <div className="about-hero-spacer"></div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
