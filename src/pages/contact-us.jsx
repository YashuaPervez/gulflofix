import React from "react";

// Components
import Layout from "../components/Layout";

import ContactForm from "../container/Contact/ContactForm";
import FullImage from "../container/Contact/FullImage";

const ContactUs = () => {
  return (
    <Layout>
      <ContactForm />
      <FullImage />
    </Layout>
  );
};

export default ContactUs;
