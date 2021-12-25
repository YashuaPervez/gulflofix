import React from "react";

// Components
import Container from "../../../components/UI/Container";
import Button from "../../../components/UI/Button";
import FeaturesBlock from "../../../components/Features";

//
import "./index.scss";

const Features = () => {
  return (
    <section className="section home-feature">
      <Container>
        <div className="home-features-wrapper">
          <FeaturesBlock />
        </div>
        <div className="home-features-cta">
          <h2 className="heading-big color-dark cta-heading">
            We specialise in collaboration, content, application development
            {" & "}
            cloud solutions
          </h2>
          <Button color="orange">Learn more about what we offer</Button>
        </div>
      </Container>
    </section>
  );
};

export default Features;
