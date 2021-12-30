import React from "react";

// Components
import Container from "../../../../components/UI/Container";

//
import PowerAppsImage from "../../../../images/services/power/power_apps_2.png";
import PowerAutomateImage from "../../../../images/services/power/power_automate_2.png";
import PowerBiImage from "../../../../images/services/power/power_bi_2.png";
import "./index.scss";

const Apps2 = () => {
  return (
    <section className="section">
      <Container>
        <div className="services-power-apps2-item">
          <div className="services-power-apps2-item-image">
            <img src={PowerAppsImage} />
          </div>
          <div className="services-power-apps2-item-content">
            <h3 className="heading-section color-dark mb-sm">Power Apps</h3>
            <p className="color-dark text-sm mb-sm">
              Microsoft Power Apps is a low code application development
              platform that empowers businesses to build professional web and
              mobile apps to solve business challenges. Businesses need custom
              software that is simple and easy to use, including web and mobile
              applications.
            </p>
            <p className="color-dark text-sm mb-sm">
              We create custom apps at the speed of innovation, in hours, not
              months, that connect to your existing data and systems to solve
              problems and drive efficiency.
            </p>
            <p className="color-dark text-sm mb-sm">
              Our experience combined with the commended competency on PowerApps
              has made Business Process Management and implementation an
              uncomplicated and rapid process.
            </p>
          </div>
        </div>
        <div className="services-power-apps2-item">
          <div className="services-power-apps2-item-image">
            <img src={PowerAutomateImage} />
          </div>
          <div className="services-power-apps2-item-content">
            <h3 className="heading-section color-dark mb-sm">Power Automate</h3>
            <p className="color-dark text-sm mb-sm">
              Microsoft Power Apps is a low code application development
              platform that empowers businesses to build professional web and
              mobile apps to solve business challenges. Businesses need custom
              software that is simple and easy to use, including web and mobile
              applications.
            </p>
            <p className="color-dark text-sm mb-sm">
              We create custom apps at the speed of innovation, in hours, not
              months, that connect to your existing data and systems to solve
              problems and drive efficiency.
            </p>
            <p className="color-dark text-sm mb-sm">
              Our experience combined with the commended competency on PowerApps
              has made Business Process Management and implementation an
              uncomplicated and rapid process.
            </p>
          </div>
        </div>
        <div className="services-power-apps2-item">
          <div className="services-power-apps2-item-image">
            <img src={PowerBiImage} />
          </div>
          <div className="services-power-apps2-item-content">
            <h3 className="heading-section color-dark mb-sm">Power BI</h3>
            <p className="color-dark text-sm mb-sm">
              Microsoft Power Apps is a low code application development
              platform that empowers businesses to build professional web and
              mobile apps to solve business challenges. Businesses need custom
              software that is simple and easy to use, including web and mobile
              applications.
            </p>
            <p className="color-dark text-sm mb-sm">
              We create custom apps at the speed of innovation, in hours, not
              months, that connect to your existing data and systems to solve
              problems and drive efficiency.
            </p>
            <p className="color-dark text-sm mb-sm">
              Our experience combined with the commended competency on PowerApps
              has made Business Process Management and implementation an
              uncomplicated and rapid process.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Apps2;
