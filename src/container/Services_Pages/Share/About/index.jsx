import React from "react";

// Components
import Container from "../../../../components/UI/Container";
import Button from "../../../../components/UI/Button";

//
import "./index.scss";
import ShareAboutImage from "../../../../images/services/share/sharepoint-img.png";

const About = () => {
  return (
    <section className="section">
      <Container>
        <div className="services-share-about">
          <div className="services-share-about-image">
            <img src={ShareAboutImage} />
          </div>
          <div className="services-share-about-content">
            <p className="text-sm color-gray-2 mb-sm">
              GulfLogix can assist to make your business highly productive by
              developing out of the box or customized solutions on SharePoint.
            </p>
            <p className="text-sm color-gray-2 mb-sm">
              We design SharePoint site architecture and develop implementation
              strategies to create easy to use, high performance workflow
              processes.
            </p>
            <p className="text-sm color-gray-2 mb-sm">
              We can help your business use SharePoint to facilitate team
              collaboration, simplify operational management and streamline
              complex processes.
            </p>
            <p className="text-sm color-gray-2 mb-sm">
              We can create scalable intranet portals, develop project
              management team sites and build document management and document
              collaboration solutions on SharePoint to help your team get things
              done efficiently and accurately.
            </p>
            <p className="text-sm color-gray-2 mb-sm">
              We offer your team user knowledge and training on how to use
              SharePoint effectively.
            </p>
            <Button color="teal">Get Started Now</Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
