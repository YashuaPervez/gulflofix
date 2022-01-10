import React from "react";
import { Link } from "gatsby";

// Components
import Container from "../UI/Container";
import Paper from "../UI/Paper";

//
import MSPartner from "../../images/microsoft-partner-logo.png";
import OfficeImage from "../../images/home-services-2/office.svg";
import PowerImage from "../../images/home-services-2/power.png";
import ShareImage from "../../images/home-services-2/share.svg";
import "./index.scss";

const OtherServices = ({ ignore = "power", ignore2 = "" }) => {
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
                    <div className="other-services-content-others-image">
                      <img src={PowerImage} />
                    </div>
                    <div className="other-services-content-others-content">
                      <h3 className="heading-small color-yellow">
                        Power Platform
                      </h3>
                      <Link
                        className="underline yellow text-sm"
                        to="/our-services/power-platform"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </Paper>
              )}
              {ignore !== "office" && ignore2 !== "office" && (
                <Paper>
                  <div className="other-services-content-others-item">
                    <div className="other-services-content-others-image">
                      <img src={OfficeImage} />
                    </div>
                    <div className="other-services-content-others-content">
                      <h3 className="heading-small color-orange">
                        Office 365 Services
                      </h3>
                      <Link
                        className="underline orange text-sm"
                        to="/our-services/office-365-services"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </Paper>
              )}
              {ignore !== "share" && (
                <Paper>
                  <div className="other-services-content-others-item">
                    <div className="other-services-content-others-image">
                      <img src={ShareImage} />
                    </div>
                    <div className="other-services-content-others-content">
                      <h3 className="heading-small color-teal">SharePoint</h3>
                      <Link
                        className="underline teal text-sm"
                        to="/our-services/sharepoint"
                      >
                        Learn More
                      </Link>
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
