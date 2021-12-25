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
  const features = [
    {
      title: "Efficiency",
      description:
        "Quick lead times and smart project management to keep project implementation on track and on time.",
      image: ClockImage,
    },
    {
      title: "Cost-Effectiveness",
      description:
        "Cost-effective services and solutions that fit your budget & zero sweet talk about additional software add-ons.",
      image: HandImage,
    },
    {
      title: "Innovation",
      description:
        "Keen business analysis out-of-box implementation for rapid deployment and stress-free implementation.",
      image: BulbImage,
    },
    {
      title: "Service Excellence",
      description:
        "Personal, friendly and professional service and straight forward and unbiased advice and recommendations.",
      image: CallImage,
    },
  ];

  return (
    <section className="section home-feature">
      <Container>
        <div className="home-features-wrapper">
          <Paper>
            <div className="features">
              {features.map((feat) => (
                <div className="feature-item">
                  <div className="feature-item-image">
                    <img src={feat.image} />
                  </div>
                  <h3 className="heading-small feature-item-heading">
                    {feat.title}
                  </h3>
                  <p className="text-xs color-gray-2 feature-item-desc">
                    {feat.description}
                  </p>
                </div>
              ))}
            </div>
          </Paper>
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
