import React from "react";

// Components
import Container from "../../../components/UI/Container";
import Paper from "../../../components/UI/Paper";

//
import "./index.scss";

const Experties = () => {
  return (
    <section className="section">
      <Container>
        <h2>Industry Expertise</h2>
        <h3>
          We are experienced in providing valuable insights and solutions,
          across a wide range of industries, including but not limited to:
        </h3>
        <div className="home-experties-grid">
          <Paper>1</Paper>
          <Paper>2</Paper>
          <Paper>3</Paper>
          <Paper>4</Paper>
          <Paper>5</Paper>
          <Paper>6</Paper>
          <Paper>7</Paper>
          <Paper>8</Paper>
        </div>
      </Container>
    </section>
  );
};

export default Experties;
