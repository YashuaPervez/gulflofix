import React from "react";
import { Link } from "gatsby";

// Components
import Container from "../../../components/UI/Container";

//
import "./index.scss";

const ContactCTA = ({ data }) => {
  return (
    <section className="section home-contact-cta-section">
      <Container>
        <div className="home-contact-cta">
          <h2 className="home-contact-cta-heading">
            {data?.contactCta?.mainTitle}
          </h2>
          <h3 className="home-contact-cta-heading2">
            {data?.contactCta?.level2Title}
          </h3>
          <Link to={data?.contactCta?.buttonLink}>
            <span className="underline home-contact-cta-link">
              {data?.contactCta?.buttonText}
            </span>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default ContactCTA;
