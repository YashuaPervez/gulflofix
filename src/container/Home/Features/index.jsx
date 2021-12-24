import React from "react";

// Components
import Paper from "../../../components/UI/Paper";
import Container from "../../../components/UI/Container";
import Button from "../../../components/UI/Button";

//
import "./index.scss";
import ClockImage from "../../../images/home-features/clock.png";
import HandImage from "../../../images/home-features/hand.png";
import CallImage from "../../../images/home-features/call.png";
import BulbImage from "../../../images/home-features/bulb.png";

const Features = () => {
  return (
    <section className="section home-feature">
      <Container>
        <div className="home-features-wrapper">
          <Paper>
            <div className="features">
              <div className="feature-item">
                <div className="feature-item-image">
                  <img src={ClockImage} />
                </div>
                <h3 className="small-heading feature-item-heading">
                  Efficiency
                </h3>
                <p className="sm-text feature-item-desc">
                  Quick lead times and smart project management to keep project
                  implementation on track and on time.
                </p>
              </div>
              <div className="feature-item">
                <div className="feature-item-image">
                  <img src={HandImage} />
                </div>
                <h3 className="small-heading feature-item-heading">
                  Cost-Effectiveness
                </h3>
                <p className="sm-text feature-item-desc">
                  Cost-effective services and solutions that fit your budget{" "}
                  {"&"}
                  zero sweet talk about additional software add-ons.
                </p>
              </div>
              <div className="feature-item">
                <div className="feature-item-image">
                  <img src={BulbImage} />
                </div>
                <h3 className="small-heading feature-item-heading">
                  Innovation
                </h3>
                <p className="sm-text feature-item-desc">
                  Keen business analysis out-of-box implementation for rapid
                  deployment and stress-free implementation.
                </p>
              </div>
              <div className="feature-item">
                <div className="feature-item-image">
                  <img src={CallImage} />
                </div>
                <h3 className="small-heading feature-item-heading">
                  Service Excellence
                </h3>
                <p className="sm-text feature-item-desc">
                  Personal, friendly and professional service and straight
                  forward and unbiased advice and recommendations.
                </p>
              </div>
            </div>
          </Paper>
        </div>
        <div className="home-features-cta">
          <h2 className="black-heading cta-heading">
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
