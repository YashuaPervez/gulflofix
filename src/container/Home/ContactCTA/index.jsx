import React from "react";
import { Link } from "gatsby";

// Components
import Container from "../../../components/UI/Container";

//
import "./index.scss";

const ContactCTA = () => {
  return (
    <section className="section">
      <Container>
        <div className="home-contact-cta">
          <h2>Can’t find what your looking for?</h2>
          <h3>We’re here to help.</h3>
          <Link to="/contact">Contact Us</Link>
        </div>
      </Container>
    </section>
  );
};

export default ContactCTA;
