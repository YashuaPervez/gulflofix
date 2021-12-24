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
            <h2 className="hero-heading home-hero-heading">
              Improving business performance through
              <br />
              <span className="highlight">
                <span className="text">digital transformation</span>
              </span>
            </h2>
            <p className="large-text hero-hero-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed in
              adipisci ad quaerat. Fugiat, sequi voluptas vero accusamus soluta
              nesciunt blanditiis ex autem mollitia temporibus dicta officiis
              ratione distinctio maxime?
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
