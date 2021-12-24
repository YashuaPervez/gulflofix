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
            <h2>
              Improving business performance through
              <span> Digital transformation</span>
            </h2>
            <p>
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
