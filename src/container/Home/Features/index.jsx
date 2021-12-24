import React from "react";

// Components
import Paper from "../../../components/UI/Paper";
import Container from "../../../components/UI/Container";
import Button from "../../../components/UI/Button";

//
import "./index.scss";

const Features = () => {
  return (
    <section className="section">
      <Container>
        <div className="home-features-wrapper">
          <Paper>
            <div className="features">
              <div className="feature-item">asdasd</div>
              <div className="feature-item">asdasd</div>
              <div className="feature-item">asdasd</div>
              <div className="feature-item">asdasd</div>
            </div>
          </Paper>
        </div>
        <div className="home-features-cta">
          <h2 className="cta-heading">
            We specialise in collaboration, content, application development
            {" & "}
            cloud solutions
          </h2>
          <Button>Learn more about what we offer</Button>
        </div>
      </Container>
    </section>
  );
};

export default Features;
