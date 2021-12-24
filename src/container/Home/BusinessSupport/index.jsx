import React from "react";

// Components
import Container from "../../../components/UI/Container";
import Button from "../../../components/UI/Button";

//
import "./index.scss";

const BusinessSupport = () => {
  return (
    <section className="section">
      <Container>
        <h2>Businesses we support</h2>
        <h2>
          We are a team of highly qualified and experienced industry experts
          offering cutting edge solutions to various verticals, including but
          not limited to:
        </h2>
        <ul className="home-business-list">
          <li>this is item</li>
          <li>this is item</li>
          <li>this is item</li>
          <li>this is item</li>
          <li>this is item</li>
          <li>this is item</li>
        </ul>
        <div className="home-business-cta">
          <Button>Get Started Now</Button>
        </div>
      </Container>
    </section>
  );
};

export default BusinessSupport;
