import React from "react";

// Components
import Container from "../../../components/UI/Container";
import FAQ from "../../../components/FAQ";

//
import "./index.scss";

const AllFaq = ({ data }) => {
  return (
    <section className="section faq-allfaq">
      <Container>
        <h1 className="faq-allfaq-title mb-lg">{data?.title}</h1>
        {data?.faqsList?.map((faq) => (
          <FAQ title={faq.title} faqs={faq.questionList} />
        ))}
        {/* <FAQ
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
        /> */}
      </Container>
    </section>
  );
};

export default AllFaq;
