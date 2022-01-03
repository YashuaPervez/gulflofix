import React from "react";

// Components
import Container from "../../../components/UI/Container";
import CTA from "../../../components/CTA";

import "./index.scss";

const ContactCTA = ({ data }) => {
  return (
    <section className="section">
      <Container>
        <CTA
          headingText={data?.contactCta?.mainTitle}
          heading2Text={data?.contactCta?.level2Title}
          ctaText={data?.contactCta?.buttonText}
          ctaLink={data?.contactCta?.buttonLink}
          headingClasses="color-blue heading-big"
          heading2Classes="color-dark contact-cta-heading2"
          ctaClasses="contact-cta-text"
        />
      </Container>
    </section>
  );
};

export default ContactCTA;
