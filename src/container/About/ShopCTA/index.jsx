import React from "react";

// Components
import Container from "../../../components/UI/Container";
import Button from "../../../components/UI/Button";

//
import "./index.scss";

const ShopCTA = () => {
  return (
    <section className="section">
      <Container>
        <div className="about-shop-cta">
          <h2 className="heading-section color-dark mb-sm">
            Get more for less. Learn while we deliver!
          </h2>
          <Button>Get Started</Button>
        </div>
      </Container>
    </section>
  );
};

export default ShopCTA;
