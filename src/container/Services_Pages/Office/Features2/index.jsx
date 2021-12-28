import React from "react";

// Componenets
import Container from "../../../../components/UI/Container";

//
import "./index.scss";
import OfficeFeatureFour from "../../../../images/services/office/office_feature_4.png";
import OfficeFeatureFive from "../../../../images/services/office/office_feature_5.png";
import OfficeFeatureSix from "../../../../images/services/office/office_feature_6.png";

const Features2 = () => {
  return (
    <section>
      <Container>
        <div className="services-office-feature2-grid">
          <div className="services-office-feature2-grid-item">
            <div className="mb-sm">
              <img src={OfficeFeatureFour} />
            </div>
            <h2 className="color-dark heading-small mb-sm">
              Document management
            </h2>
            <p className="color-gray-2 text-sm">
              Manage and organize documents across your business, making files
              easy to find, secure and compliant.
            </p>
          </div>
          <div className="services-office-feature2-grid-item">
            <div className="mb-sm">
              <img src={OfficeFeatureFive} />
            </div>
            <h2 className="color-dark heading-small mb-sm">Collaboration</h2>
            <p className="color-gray-2 text-sm">
              Office 365 is loaded with tools to get your teams talking and
              working together.
            </p>
          </div>
          <div className="services-office-feature2-grid-item">
            <div className="mb-sm">
              <img src={OfficeFeatureSix} />
            </div>
            <h2 className="color-dark heading-small mb-sm">
              Process improvement
            </h2>
            <p className="color-gray-2 text-sm">
              Quality approvals, document sign-off, new starter processes –
              quickly build tools to make you more efficient.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Features2;
