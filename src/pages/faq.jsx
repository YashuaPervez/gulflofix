import React from "react";

// Components
import Layout from "../components/Layout";

import AllFaq from "../container/Faq/AllFaq";
import ContactCTA from "../container/Faq/ContactCTA";

const Faq = () => {
  return (
    <Layout>
      <AllFaq />
      <ContactCTA />
    </Layout>
  );
};

export default Faq;
