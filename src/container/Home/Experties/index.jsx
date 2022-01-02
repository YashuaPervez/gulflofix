import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

// Components
import Container from "../../../components/UI/Container";
import Paper from "../../../components/UI/Paper";

//
import "./index.scss";
import AutomotiveImage from "../../../images/home-experties/automotive.png";

const Experties = ({ data }) => {
  return (
    <section className="section home-experties">
      <Container>
        <h2 className="heading-section home-experties-heading">
          <span className="white">{data?.expertiesTitle}</span>
        </h2>
        <p className="text-lg home-experties-text">
          <span className="white">{data?.expertiesDescription}</span>
        </p>
        <div className="home-experties-grid">
          {data?.expertiesList?.map((exp) => {
            const image = getImage(exp.image);

            return (
              <Paper>
                <div className="experties-grid-item">
                  <div className="experties-grid-item-image">
                    <GatsbyImage image={image} loading="lazy" />
                  </div>
                  <h3 className="experties-grid-item-heading text-sm">
                    {exp.title}
                  </h3>
                </div>
              </Paper>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Experties;
