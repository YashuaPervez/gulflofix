import React from "react";
import { Link } from "gatsby";

// Components
import Layout from "../components/Layout";
import Container from "../components/UI/Container";

const OnlineStore = () => {
  return (
    <Layout>
      <Container>
        <section className="section">
          <h1>E-Commerce functionality comming soon</h1>
          <Link to="/">Back</Link>
        </section>
      </Container>
    </Layout>
  );
};

export default OnlineStore;
