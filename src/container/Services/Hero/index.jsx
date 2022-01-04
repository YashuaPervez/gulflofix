import React from "react";

// Components
import Container from "../../../components/UI/Container";

//
import "./index.scss";

const Hero = ({ data }) => {
  return (
    <section className="services-hero">
      <Container>
        <div className="services-hero-grid">
          <div className="services-hero-content">
            <h1 className="heading-xl services-hero-title">{data?.title}</h1>
            <p className="text-md color-gray-2 services-hero-text">
              {data?.description?.description}
            </p>
          </div>
          <div className="services-hero-spacer"></div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
