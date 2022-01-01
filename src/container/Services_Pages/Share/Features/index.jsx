import React from "react";

// Components
import Container from "../../../../components/UI/Container";
import Paper from "../../../../components/UI/Paper";

//
import "./index.scss";
import FeatureOneImage from "../../../../images/services/share/sharepoint-1.png";
import FeatureTwoImage from "../../../../images/services/share/sharepoint-2.png";
import FeatureThreeImage from "../../../../images/services/share/sharepoint-3.png";
import FeatureFourImage from "../../../../images/services/share/sharepoint-4.png";

const Features = () => {
  return (
    <section className="section">
      <Container>
        <h2 className="heading-section color-dark mb-lg">
          GulfLogix are specialists in implementing business specific intranet
          solutions using SharePoint to maximize collaboration, employee
          engagement and productivity by offering the following solutions and
          services:
        </h2>
        <Paper>
          <div className="services-share-features-grid">
            <div className="services-share-features-item">
              <div className="mb-md">
                <img src={FeatureOneImage} />
              </div>
              <h3 className="color-dark heading-small mb-md">
                Intranet services
              </h3>
            </div>
            <div className="services-share-features-item">
              <div className="mb-md">
                <img src={FeatureTwoImage} />
              </div>
              <h3 className="color-dark heading-small mb-md">
                Document management
              </h3>
            </div>
            <div className="services-share-features-item">
              <div className="mb-md">
                <img src={FeatureThreeImage} />
              </div>
              <h3 className="color-dark heading-small mb-md">
                Workflow & process automation
              </h3>
            </div>
            <div className="services-share-features-item">
              <div className="mb-md">
                <img src={FeatureFourImage} />
              </div>
              <h3 className="color-dark heading-small mb-md">
                Bespoke development
              </h3>
            </div>
          </div>
        </Paper>
      </Container>
    </section>
  );
};

export default Features;
