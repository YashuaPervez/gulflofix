import React from "react";

// Components
import Container from "../../../../components/UI/Container";
import Paper from "../../../../components/UI/Paper";

//
import "./index.scss";
import OfficeFeatureOne from "../../../../images/services/office/office_feature_1.png";
import OfficeFeatureTwo from "../../../../images/services/office/office_feature_2.png";
import OfficeFeatureThree from "../../../../images/services/office/office_feature_3.png";

const Features = () => {
  return (
    <section className="section">
      <Container>
        <h3 className="mb-lg heading-section color-dark">
          GulfLogix can help you move your business to the cloud and benefit
          from all of the following features:
        </h3>
        <Paper>
          <div className="services-office-features-grid">
            <div className="services-office-features-item">
              <div className="services-office-features-item-image">
                <img src={OfficeFeatureOne} />
              </div>
              <div className="services-office-features-item-body">
                <h3 className="color-dark heading-small">
                  Microsoft Exchange Online
                </h3>
                <p className="color-gray-2 text-sm">Email in the cloud</p>
              </div>
            </div>
            <div className="services-office-features-item">
              <div className="services-office-features-item-image">
                <img src={OfficeFeatureTwo} />
              </div>
              <div className="services-office-features-item-body">
                <h3 className="color-dark heading-small">Microsoft Teams</h3>
                <p className="color-gray-2 text-sm">
                  Instant messaging and conferencing
                </p>
              </div>
            </div>
            <div className="services-office-features-item">
              <div className="services-office-features-item-image">
                <img src={OfficeFeatureThree} />
              </div>
              <div className="services-office-features-item-body">
                <h3 className="color-dark heading-small">
                  OneDrive for Business
                </h3>
                <p className="color-gray-2 text-sm">Personal file sharing</p>
              </div>
            </div>
          </div>
        </Paper>
      </Container>
    </section>
  );
};

export default Features;
