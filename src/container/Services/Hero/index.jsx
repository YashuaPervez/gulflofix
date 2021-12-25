import React from "react";

// Components
import Container from "../../../components/UI/Container";

//
import "./index.scss";

const Hero = () => {
  return (
    <section className="services-hero">
      <Container>
        <div className="services-hero-grid">
          <div className="services-hero-content">
            <h1 className="heading-xl services-hero-title">Our services</h1>
            <p className="text-md color-gray-2 services-hero-text">
              We can assist you with assessing your business ideas and providing
              complete end-to-end business solutions that digitize and automate
              your business processes to help your organisation work more
              efficiently in a paperless environment.
            </p>
          </div>
          <div className="services-hero-spacer"></div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
