import React from "react";

// Components
import Container from "../../../components/UI/Container";
import Paper from "../../../components/UI/Paper";

//
import "./index.scss";
import AnalysisImage from "../../../images/about-services/analysis.png";

const Services = () => {
  return (
    <section className="section">
      <Container>
        <div className="about-services">
          <h2 className="heading-section color-dark mb-sm about-services-heading">
            Our Service & Implementation Approach
          </h2>
          <p className="about-services-text text-sm color-gray-2 mb-md">
            GulfLogix can assist you with assessing your business ideas and
            providing complete end-to-end business solutions that digitize and
            automate your business processes to help your organisation work more
            efficiently in a paperless environment.
          </p>
          <h3 className="heading-small color-dark mb-lg">The Discovery</h3>
          <div className="about-services-discovery">
            <Paper type="outlined">
              <div className="about-services-grid">
                <div className="about-services-item">
                  <div className="mb-md">
                    <img src={AnalysisImage} />
                  </div>
                  <h3 className="heading-small color-dark mb-sm">Analysis</h3>
                  <p className="text-sm color-gray-2 about-services-item-text">
                    Needs analysis of requirements and objectives.
                  </p>
                </div>
                <div className="about-services-item">
                  <div className="mb-md">
                    <img src={AnalysisImage} />
                  </div>
                  <h3 className="heading-small color-dark mb-sm">Analysis</h3>
                  <p className="text-sm color-gray-2 about-services-item-text">
                    Needs analysis of requirements and objectives.
                  </p>
                </div>
                <div className="about-services-item">
                  <div className="mb-md">
                    <img src={AnalysisImage} />
                  </div>
                  <h3 className="heading-small color-dark mb-sm">Analysis</h3>
                  <p className="text-sm color-gray-2 about-services-item-text">
                    Needs analysis of requirements and objectives.
                  </p>
                </div>
              </div>
            </Paper>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Services;
