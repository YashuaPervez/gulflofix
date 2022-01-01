import React from "react";

// Components
import Paper from "../UI/Paper";
import Button from "../UI/Button";

//
import "./index.scss";
import CodeImage from "../../images/home-services/code.png";
import DegreeImage from "../../images/home-services/degree.png";
import StatsImage from "../../images/home-services/stats.png";

const Cards = ({ heading }) => {
  return (
    <>
      {heading && (
        <h2 className="heading-section color-dark mb-lg">{heading}</h2>
      )}
      <div className="card-grid">
        <Paper>
          <div className="card-item">
            <div className="card-image mb-md">
              <img src={CodeImage} />
            </div>
            <h3 className="card-heading mb-sm color-pink heading-small">
              No Code/Low Code Solutions
            </h3>
            <p className="text-sm mb-sm color-gray-2 card-text">
              Build business solutions quicker and make the right decisions
              faster to innovate and adapt your business.
            </p>
            <Button color="pink">Learn More</Button>
          </div>
        </Paper>
        <Paper>
          <div className="card-item">
            <div className="card-image mb-md">
              <img src={DegreeImage} />
            </div>
            <h3 className="card-heading mb-sm color-blue heading-small">
              Enablement{" & "}
              Training
            </h3>
            <p className="text-sm mb-sm color-gray-2 card-text">
              Services designed to enable your employees for rapid digital
              transformation and expansion.
            </p>
            <Button color="blue">Learn More</Button>
          </div>
        </Paper>
        <Paper>
          <div className="card-item">
            <div className="card-image mb-md">
              <img src={StatsImage} />
            </div>
            <h3 className="card-heading mb-sm color-purple heading-small">
              Implementation Services
            </h3>
            <p className="text-sm mb-sm color-gray-2 card-text">
              Get deeper insights from your data by automating your
              organization’s business processes for better results.
            </p>
            <Button color="purple">Learn More</Button>
          </div>
        </Paper>
      </div>
    </>
  );
};

export default Cards;
