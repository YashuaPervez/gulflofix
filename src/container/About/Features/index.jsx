import React from "react";

// Components
import Container from "../../../components/UI/Container";
import FeaturesBlock from "../../../components/Features";

//
import "./index.scss";

const Features = () => {
  return (
    <div className="about-features">
      <Container>
        <FeaturesBlock />
      </Container>
    </div>
  );
};

export default Features;
