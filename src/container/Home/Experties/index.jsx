import React from "react";

// Components
import Container from "../../../components/UI/Container";
import Paper from "../../../components/UI/Paper";

//
import "./index.scss";
import AutomotiveImage from "../../../images/home-experties/automotive.png";

const Experties = () => {
  return (
    <section className="section home-experties">
      <Container>
        <h2 className="heading-section home-experties-heading">
          <span className="white">Industry Expertise</span>
        </h2>
        <p className="text-lg home-experties-text">
          <span className="white">
            We are experienced in providing valuable insights and solutions,
            across a wide range of industries, including but not limited to:
          </span>
        </p>
        <div className="home-experties-grid">
          <Paper>
            <div className="experties-grid-item">
              <div className="experties-grid-item-image">
                <img src={AutomotiveImage} />
              </div>
              <h3 className="experties-grid-item-heading text-sm">
                Automotive
              </h3>
            </div>
          </Paper>
          <Paper>
            <div className="experties-grid-item">
              <div className="experties-grid-item-image">
                <img src={AutomotiveImage} />
              </div>
              <h3 className="experties-grid-item-heading text-sm">
                Automotive
              </h3>
            </div>
          </Paper>
          <Paper>
            <div className="experties-grid-item">
              <div className="experties-grid-item-image">
                <img src={AutomotiveImage} />
              </div>
              <h3 className="experties-grid-item-heading text-sm">
                Automotive
              </h3>
            </div>
          </Paper>
          <Paper>
            <div className="experties-grid-item">
              <div className="experties-grid-item-image">
                <img src={AutomotiveImage} />
              </div>
              <h3 className="experties-grid-item-heading text-sm">
                Automotive
              </h3>
            </div>
          </Paper>
          <Paper>
            <div className="experties-grid-item">
              <div className="experties-grid-item-image">
                <img src={AutomotiveImage} />
              </div>
              <h3 className="experties-grid-item-heading text-sm">
                Automotive
              </h3>
            </div>
          </Paper>
          <Paper>
            <div className="experties-grid-item">
              <div className="experties-grid-item-image">
                <img src={AutomotiveImage} />
              </div>
              <h3 className="experties-grid-item-heading text-sm">
                Automotive
              </h3>
            </div>
          </Paper>
          <Paper>
            <div className="experties-grid-item">
              <div className="experties-grid-item-image">
                <img src={AutomotiveImage} />
              </div>
              <h3 className="experties-grid-item-heading text-sm">
                Automotive
              </h3>
            </div>
          </Paper>
          <Paper>
            <div className="experties-grid-item">
              <div className="experties-grid-item-image">
                <img src={AutomotiveImage} />
              </div>
              <h3 className="experties-grid-item-heading text-sm">
                Automotive
              </h3>
            </div>
          </Paper>
        </div>
      </Container>
    </section>
  );
};

export default Experties;
