import React from "react";

// Components
import Container from "../../../components/UI/Container";
import Button from "../../../components/UI/Button";

//
import "./index.scss";

const BusinessSupport = () => {
  return (
    <section className="section home-business-support">
      <Container>
        <h2 className="section-heading home-business-support-heading">
          Businesses we support
        </h2>
        <p className="large-text home-business-support-text">
          We are a team of highly qualified and experienced industry experts
          offering cutting edge solutions to various verticals, including but
          not limited to:
        </p>
        <ul className="home-business-list">
          <li>this is item</li>
          <li>this is item</li>
          <li>this is item</li>
          <li>this is item</li>
          <li>this is item</li>
          <li>this is item</li>
        </ul>
        <div className="home-business-cta">
          <Button color="yellow">Get Started Now</Button>
        </div>
      </Container>
    </section>
  );
};

export default BusinessSupport;
