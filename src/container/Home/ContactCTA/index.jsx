import React from "react";
import { Link } from "gatsby";

// Components
import Container from "../../../components/UI/Container";

//
import "./index.scss";

const ContactCTA = () => {
  return (
    <section className="section home-contact-cta-section">
      <Container>
        <div className="home-contact-cta">
          <h2 className="home-contact-cta-heading">
            Can’t find what your looking for?
          </h2>
          <h3 className="home-contact-cta-heading2">We’re here to help.</h3>
          <Link to="/contact">
            <span className="underline home-contact-cta-link">Contact Us</span>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default ContactCTA;
