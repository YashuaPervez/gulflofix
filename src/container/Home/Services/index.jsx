import React from "react";

// Components
import Container from "../../../components/UI/Container";
import Paper from "../../../components/UI/Paper";

//
import "./index.scss";

const Services = () => {
  return (
    <section className="section">
      <Container>
        <h2>Our Services</h2>
        <div className="home-services-grid">
          <Paper>Paper 1</Paper>
          <Paper>Paper 2</Paper>
          <Paper>Paper 3</Paper>
        </div>
        <h2>We are a Microsoft Partner</h2>
        <h3>Platforms we specialise in:</h3>
        <div className="home-services-grid">
          <Paper>Paper 1</Paper>
          <Paper>Paper 2</Paper>
          <Paper>Paper 3</Paper>
        </div>
      </Container>
    </section>
  );
};

export default Services;
