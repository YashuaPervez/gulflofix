import React from "react";

// Components
import Container from "../../../components/UI/Container";
import FeaturesBlock from "../../../components/Features";

//
import "./index.scss";

const Features = ({ data }) => {
  return (
    <div className="about-features">
      <Container>
        <FeaturesBlock
          features={data?.featuresList}
          learnMoreLink="/our-services"
        />
      </Container>
    </div>
  );
};

export default Features;
