import React from "react";

// Components
import Container from "../../../../components/UI/Container";
import Paper from "../../../../components/UI/Paper";

//
import PowerAppsImage from "../../../../images/services/power/power_apps.png";
import PowerAutomateImage from "../../../../images/services/power/power_automate.png";
import PowerBiImage from "../../../../images/services/power/power_bi.png";
import "./index.scss";

const Apps = () => {
  return (
    <section className="section">
      <Container>
        <h2 className="heading-section color-dark mb-lg">
          Gulf Logix can help you transform & automate processes whilst gaining
          useful insights using the following services:
        </h2>
        <Paper type="outlined">
          <div className="services-power-apps-grid">
            <div className="services-power-apps-item">
              <div className="mb-md">
                <img src={PowerAppsImage} />
              </div>
              <h3 className="color-dark heading-small mb-md">Power Apps</h3>
              <p className="text-sm color-gray-2">
                PowerApps provides standardized templates and sample data to
                build an out-of-the-box application as well as allows the
                building of complex and customized applications from scratch.
              </p>
            </div>
            <div className="services-power-apps-item">
              <div className="mb-md">
                <img src={PowerAutomateImage} />
              </div>
              <h3 className="color-dark heading-small mb-md">Power Automate</h3>
              <p className="text-sm color-gray-2">
                Power Automate enables easy and quick deployment of Business
                Process Automation and Optimization solutions to achieve
                streamlined collaboration between the multiple disciplines of a
                business.
              </p>
            </div>
            <div className="services-power-apps-item">
              <div className="mb-md">
                <img src={PowerBiImage} />
              </div>
              <h3 className="color-dark heading-small mb-md">Power BI</h3>
              <p className="text-sm color-gray-2">
                Power BI is a range of business analytics tools that deliver
                insights throughout your organization by connecting to hundreds
                of data sources, simplifying data prep, and driving ad hoc
                analysis.
              </p>
            </div>
          </div>
        </Paper>
      </Container>
    </section>
  );
};

export default Apps;
