import React from "react";

// Components
import Container from "../../../../components/UI/Container";
import Button from "../../../../components/UI/Button";

//
import "./index.scss";
import DescriptionImage from "../../../../images/services/office/office_description_image.png";

const Description = () => {
  return (
    <section className="section">
      <Container>
        <div className="services-office-description-grid">
          <div className="services-office-description-image">
            <img src={DescriptionImage} />
          </div>
          <div className="services-office-description-content">
            <p>
              GulfLogix offers the complete spectrum of services in Microsoft
              365. Let us help you boost your cloud transformation journey. We
              help you understand and make full use of the licensing you’re
              paying for.
            </p>
            <ul>
              <li>
                Make an impact in all areas of your business and lifestyle.
              </li>
              <li>Use Office 365 to make Work from Home easy!</li>
              <li>
                Office 365 keeps your staff communicating, collaborating, and
                sharing.
              </li>
            </ul>
            <p>
              We can help you setup Office 365 quickly and efficiently so you
              can experience complete mobility.
            </p>

            <p>
              We are offering free advice and resources to help you transform.
            </p>
            <Button color="orange">Get Started Now</Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Description;
