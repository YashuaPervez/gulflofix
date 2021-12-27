import React from "react";

// Components
import Container from "../../../components/UI/Container";
import FAQ from "../../../components/FAQ";

//
import "./index.scss";

const AllFaq = () => {
  return (
    <section className="section faq-allfaq">
      <Container>
        <h1 className="faq-allfaq-title mb-lg">Frequently asked questions</h1>
        <FAQ
          title="General"
          faqs={[
            {
              question: "First Question",
              answer: "this is awesome",
            },
            {
              question: "First Question",
              answer: "this is awesome",
            },
            {
              question: "First Question",
              answer: "this is awesome",
            },
          ]}
        />
        <FAQ
          title="Microsoft Specific"
          faqs={[
            {
              question: "First Question",
              answer: "this is awesome",
            },
            {
              question: "First Question",
              answer: "this is awesome",
            },
            {
              question: "First Question",
              answer: "this is awesome",
            },
          ]}
        />
      </Container>
    </section>
  );
};

export default AllFaq;
