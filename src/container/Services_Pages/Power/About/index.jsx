import React from "react";

// Components
import Container from "../../../../components/UI/Container";
import Button from "../../../../components/UI/Button";

//
import "./index.scss";
import PowerAboutImage from "../../../../images/services/power/power-platform-img.png";

const About = () => {
  return (
    <section className="section services-power-about-section">
      <Container>
        <div className="services-power-about">
          <div className="services-power-about-image">
            <img src={PowerAboutImage} />
          </div>
          <div className="services-power-about-content">
            <p className="text-sm color-gray-2 mb-sm">
              GulfLogix can help create apps that connect to your existing
              systems or build new data structures to help you automate your
              process and mobilize your workforce.
            </p>
            <p className="text-sm color-gray-2 mb-sm">
              We have extensive experience in analyzing, designing, developing,
              and implementing Power Platform services to address specific
              business processes.
            </p>
            <Button color="yellow">Get Started Now</Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
