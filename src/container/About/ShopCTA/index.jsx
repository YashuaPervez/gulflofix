import React from "react";
import { Link } from "gatsby";

// Components
import Container from "../../../components/UI/Container";
import Button from "../../../components/UI/Button";

//
import "./index.scss";

const ShopCTA = ({ data }) => {
  return (
    <section className="section">
      <Container>
        <div className="about-shop-cta">
          <h2 className="heading-section color-dark mb-sm">
            {data?.shopCta?.mainTitle}
          </h2>
          <Link to={data?.shopCta?.buttonLink}>
            <Button>{data?.shopCta?.buttonText}</Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default ShopCTA;
