import React from "react";
import { graphql } from "gatsby";

// Components
import Layout from "../components/Layout";

import ContactForm from "../container/Contact/ContactForm";
import FullImage from "../container/Contact/FullImage";

const ContactUs = ({ data }) => {
  const { title, title2, description, description2, phone, phone2, email } =
    data.contact;

  return (
    <Layout>
      <ContactForm
        data={{
          title,
          title2,
          description,
          description2,
          phone,
          phone2,
          email,
        }}
      />
      <FullImage />
    </Layout>
  );
};

export const query = graphql`
  query ContactPageQuery {
    contact: contentfulContactPage {
      title
      title2
      description
      description2
      phone
      phone2
      email
    }
  }
`;

export default ContactUs;
