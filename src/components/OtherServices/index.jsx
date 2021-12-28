import React from "react";

// Components
import Container from "../UI/Container";
import Paper from "../UI/Paper";

//
import MSPartner from "../../images/microsoft-partner-logo.png";
import "./index.scss";

const OtherServices = ({ ignore = "power" }) => {
  return (
    <section className="section other-services-container">
      <Container>
        <div className="other-services-content">
          <div className="other-services-image">
            <img src={MSPartner} />
          </div>
          <div className="other-services-content">
            <p className="text-sm color-gray-2 other-services-content-text">
              With multiple successful projects on Microsoft Platforms,
              GulfLogix offers world class consulting on the Microsoft Product
              stack. Learn more about the Microsoft Platforms we consult on:
            </p>
            <div className="other-services-content-others-grid">
              {ignore !== "power" && (
                <Paper>
                  <div className="other-services-content-others-item">
                    <div className="other-services-content-others-image"></div>
                    <div className="other-services-content-others-content">
                      <h3 className="heading-small color-yellow">
                        Power Platform
                      </h3>
                      <a className="underline yellow text-sm" href="#">
                        Learn More
                      </a>
                    </div>
                  </div>
                </Paper>
              )}
              {ignore !== "office" && (
                <Paper>
                  <div className="other-services-content-others-item">
                    <div className="other-services-content-others-image"></div>
                    <div className="other-services-content-others-content">
                      <h3 className="heading-small color-orange">
                        Office 365 Services
                      </h3>
                      <a className="underline orange text-sm" href="#">
                        Learn More
                      </a>
                    </div>
                  </div>
                </Paper>
              )}
              {ignore !== "share" && (
                <Paper>
                  <div className="other-services-content-others-item">
                    <div className="other-services-content-others-image"></div>
                    <div className="other-services-content-others-content">
                      <h3 className="heading-small color-teal">SharePoint</h3>
                      <a className="underline teal text-sm" href="#">
                        Learn More
                      </a>
                    </div>
                  </div>
                </Paper>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OtherServices;
