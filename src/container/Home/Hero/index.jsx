import React from "react";

// Components
import Container from "../../../components/UI/Container";
import Button from "../../../components/UI/Button";

//
import HeroBgImage from "../../../images/home-banner-bg.png";
import "./index.scss";

const Hero = () => {
  return (
    <section className="home-hero">
      <div className="bg-image">
        <img src={HeroBgImage} />
      </div>
      <Container>
        <div className="home-hero-content-wrapper">
          <div className="home-hero-content">
            <h2 className="heading-thin home-hero-heading">
              Improving business performance through
              <br />
              <span className="highlight">
                <span className="text">digital transformation</span>
              </span>
            </h2>
            <p className="text-md home-hero-text">
              We are a unique company that has exemplary skills in low code
              collaboration and workflow platforms, making us the ideal choice
              for business process automation, employee engagement &amp; digital
              transformation initiatives.
            </p>
            <Button>Get Started</Button>
          </div>
          <div className="home-hero-spacer"></div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
