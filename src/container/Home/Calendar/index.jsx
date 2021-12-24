import React from "react";

// Components
import Container from "../../../components/UI/Container";

//
import "./index.scss";

const Calendar = () => {
  return (
    <section className="section">
      <Container>
        <div className="home-calender-section">
          <iframe
            src="https://meetings.hubspot.com/aadilg?embed=true&parentHubspotUtk=b8da7e28b4bcc48dc0a89dab09bf1932&parentPageUrl=https://www.gulflogix.ae/"
            className="home-calender-section-iframe"
            // scrolling="no"
          ></iframe>
        </div>
      </Container>
    </section>
  );
};

export default Calendar;
