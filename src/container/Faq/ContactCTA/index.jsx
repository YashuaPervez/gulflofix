import React from "react";

// Components
import Container from "../../../components/UI/Container";
import CTA from "../../../components/CTA";

import "./index.scss";

const ContactCTA = () => {
  return (
    <section className="section">
      <Container>
        <CTA
          headingText="Have questions?"
          heading2Text="We’re here to help."
          ctaText="Contact Us"
          ctaLink="/contact-us"
          headingClasses="color-blue heading-big"
          heading2Classes="color-dark contact-cta-heading2"
          ctaClasses="contact-cta-text"
        />
      </Container>
    </section>
  );
};

export default ContactCTA;
