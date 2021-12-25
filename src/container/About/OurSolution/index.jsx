import React from "react";

// Components
import Container from "../../../components/UI/Container";

//
import OurSolutionsImage from "../../../images/about-solution.png";
import "./index.scss";

const OurSolution = () => {
  return (
    <div className="section">
      <Container>
        <div className="about-oursolution-grid">
          <div className="about-oursolution-image">
            <img src={OurSolutionsImage} />
          </div>
          <div className="about-oursolution-content">
            <h2 className="heading-small color-dark mb-sm">
              Our Accelerate Solution
            </h2>
            <p className="text-sm color-gray-2 mb-sm">
              We have developed rapid and agile delivery methods through many
              years of cloud business application experience. Our Accelerate
              Solution delivery model coupled with Microsoft’s advanced
              technology stack enables fast, low-risk application deployment by
              eliminating complexities and support concerns.
            </p>
            <p className="text-sm color-gray-2 mb-sm">
              Our Accelerate Solution model offers instant deployment without
              compromise. It incorporates initial release, production support
              and on-going releases. Quick delivery can be made for simple
              appointed applications or more complex integrated solutions.
            </p>
            <p className="text-sm color-gray-2 mb-sm">
              Projects are tailored to the underlying Microsoft technology,
              business requirements and timeline.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OurSolution;
