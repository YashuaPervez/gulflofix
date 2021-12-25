import React from "react";
import { Link } from "gatsby";

// Components
import Container from "../../../components/UI/Container";
import Paper from "../../../components/UI/Paper";
import Button from "../../../components/UI/Button";

//
import "./index.scss";
import CodeImage from "../../../images/home-services/code.png";
import DegreeImage from "../../../images/home-services/degree.png";
import StatsImage from "../../../images/home-services/stats.png";

import OfficeImage from "../../../images/home-services-2/office.svg";
import PowerImage from "../../../images/home-services-2/power.png";
import ShareImage from "../../../images/home-services-2/share.svg";

const Services = () => {
  return (
    <section className="section home-services">
      <Container>
        <h2 className="heading-section color-dark home-service-heading">
          Our Services
        </h2>
        <div className="home-services-grid">
          <Paper>
            <div className="services-item">
              <div className="services-item-image">
                <img src={CodeImage} />
              </div>
              <h3 className="services-item-heading color-pink heading-small">
                No Code/Low Code Solutions
              </h3>
              <p className="text-sm color-gray-2 services-item-text">
                Build business solutions quicker and make the right decisions
                faster to innovate and adapt your business.
              </p>
              <Button>Learn More</Button>
            </div>
          </Paper>
          <Paper>
            <div className="services-item">
              <div className="services-item-image">
                <img src={DegreeImage} />
              </div>
              <h3 className="services-item-heading color-blue heading-small">
                Enablement{" & "}
                Training
              </h3>
              <p className="text-sm color-gray-2 services-item-text">
                Services designed to enable your employees for rapid digital
                transformation and expansion.
              </p>
              <Button>Learn More</Button>
            </div>
          </Paper>
          <Paper>
            <div className="services-item">
              <div className="services-item-image">
                <img src={StatsImage} />
              </div>
              <h3 className="services-item-heading color-purple heading-small">
                Implementation Services
              </h3>
              <p className="text-sm color-gray-2 services-item-text">
                Get deeper insights from your data by automating your
                organization’s business processes for better results.
              </p>
              <Button>Learn More</Button>
            </div>
          </Paper>
        </div>
        <h2 className="heading-section color-dark home-service-heading">
          We are a Microsoft Partner
        </h2>
        <p className="home-service-text text-lg text-gray">
          Platforms we specialise in:
        </p>
        <div className="home-services-grid">
          <Paper>
            <div className="services-item-2 orange">
              <div className="services-item-2-image">
                <img src={OfficeImage} />
              </div>
              <div className="services-item-2-body">
                <h3 className="services-item-2-heading">Office 365 Services</h3>
                <Link to="/">
                  <span className="underline">Learn More</span>
                </Link>
              </div>
            </div>
          </Paper>
          <Paper>
            <div className="services-item-2 yellow">
              <div className="services-item-2-image">
                <img src={PowerImage} />
              </div>
              <div className="services-item-2-body">
                <h3 className="services-item-2-heading">Power Platform</h3>
                <Link to="/">
                  <span className="underline">Learn More</span>
                </Link>
              </div>
            </div>
          </Paper>
          <Paper>
            <div className="services-item-2 teal">
              <div className="services-item-2-image">
                <img src={ShareImage} />
              </div>
              <div className="services-item-2-body">
                <h3 className="services-item-2-heading">SharePoint</h3>
                <Link to="/">
                  <span className="underline">Learn More</span>
                </Link>
              </div>
            </div>
          </Paper>
        </div>
      </Container>
    </section>
  );
};

export default Services;
