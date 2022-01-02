import React from "react";
import { Link } from "gatsby";

// Components
import Container from "../../../components/UI/Container";
import Button from "../../../components/UI/Button";
import FeaturesBlock from "../../../components/Features";

//
import "./index.scss";

const Features = ({ data }) => {
  return (
    <section className="section home-feature">
      <Container>
        <div className="home-features-wrapper">
          <FeaturesBlock features={data?.featuresList} />
        </div>
        <div className="home-features-cta">
          <h2 className="heading-big color-dark cta-heading">
            {data?.cta?.mainTitle}
          </h2>
          <Link to={data?.cta?.buttonLink}>
            <Button color="orange">{data?.cta?.buttonText}</Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default Features;
