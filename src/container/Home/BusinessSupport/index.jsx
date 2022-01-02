import React from "react";
import { Link } from "gatsby";

// Components
import Container from "../../../components/UI/Container";
import Button from "../../../components/UI/Button";

//
import "./index.scss";

const BusinessSupport = ({ data }) => {
  return (
    <section className="section home-business-support">
      <Container>
        <h2 className="heading-section color-dark home-business-support-heading">
          {data?.pointsTitle}
        </h2>
        <p className="text-lg color-gray-2 home-business-support-text">
          {data?.pointsDescription}
        </p>
        <ul className="home-business-list">
          {data?.pointsList?.map((item) => (
            <li className="text-lg color-gray-2">{item}</li>
          ))}
        </ul>
        <div className="home-business-cta">
          <Link to={data?.pointsButtonLink}>
            <Button color="yellow">{data?.pointsButtonText}</Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default BusinessSupport;
