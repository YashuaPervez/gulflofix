import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// Components
import Container from "../../../components/UI/Container";
import Input from "../../../components/FormElements/Input";
import Button from "../../../components/UI/Button";

//
import { Email, Phone, Whatsapp } from "../../../components/icons";
import "./index.scss";

const contactFormSchema = yup.object().shape({
  email: yup.string().email().required(),
  firstname: yup.string().min(3).max(20).required(),
  phone: yup.number().typeError("Must be a valid number").required(),
  body: yup.string().max(500).required(),
});

const ContactForm = ({ data }) => {
  const form = useForm({
    resolver: yupResolver(contactFormSchema),
  });
  const {
    handleSubmit,
    formState: { errors },
  } = form;

  const submitFormHandler = async (data) => {
    // Create the new request
    var xhr = new XMLHttpRequest();
    var url =
      "https://api.hsforms.com/submissions/v3/integration/submit/21170364/d4fdc4bd-e14d-471c-8057-cd9033781ef8";

    // Example request JSON:
    var data = {
      fields: [
        {
          name: "email",
          value: data.email,
        },
        {
          name: "phone",
          value: data.phone,
        },
        {
          name: "body",
          value: data.body,
        },
        {
          name: "firstname",
          value: data.firstname,
        },
      ],
      context: {
        pageUri: "www.example.com/page",
        pageName: "Example page",
      },
      legalConsentOptions: {
        // Include this object when GDPR options are enabled
        consent: {
          consentToProcess: true,
          text: "I agree to allow Example Company to store and process my personal data.",
          communications: [
            {
              value: true,
              subscriptionTypeId: 999,
              text: "I agree to receive marketing communications from Example Company.",
            },
          ],
        },
      },
    };

    var final_data = JSON.stringify(data);

    xhr.open("POST", url);
    // Sets the value of the 'Content-Type' HTTP request headers to 'application/json'
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        alert(xhr.responseText); // Returns a 200 response if the submission is successful.
      } else if (xhr.readyState == 4 && xhr.status == 400) {
        alert(xhr.responseText); // Returns a 400 error the submission is rejected.
      } else if (xhr.readyState == 4 && xhr.status == 403) {
        alert(xhr.responseText); // Returns a 403 error if the portal isn't allowed to post submissions.
      } else if (xhr.readyState == 4 && xhr.status == 404) {
        alert(xhr.responseText); //Returns a 404 error if the formGuid isn't found
      }
    };

    // Sends the request

    xhr.send(final_data);
  };

  return (
    <section className="section">
      <Container>
        <h1 className="heading-section mb-sm">{data?.title}</h1>
        <div className="contact-form-grid">
          <div className="contact-form-content">
            <h2 className="heading-thin-small mb-sm">{data?.title2}</h2>
            <p className="text-sm color-gray-2 mb-sm">{data?.description}</p>
            <p className="text-sm color-dark mb-sm">{data?.description2}</p>
            <div className="details-grid">
              <div className="text-sm color-dark detail-item">
                <div className="detail-item-icon">
                  <Phone size={14} color={"#007dff"} />
                </div>
                <a href={`tel:${data?.phone}`}>{data?.phone}</a>
              </div>
              <div className="text-sm color-dark detail-item">
                <div className="detail-item-icon">
                  <Whatsapp size={14} color={"#007dff"} />
                </div>
                <span>{data?.phone2}</span>
              </div>
              <div className="text-sm color-dark detail-item">
                <div className="detail-item-icon">
                  <Email size={14} color={"#007dff"} />
                </div>
                <a href={`mailto:${data?.email}`}>{data?.email}</a>
              </div>
            </div>
          </div>
          <div className="contact-form-form">
            <FormProvider {...form}>
              <form onSubmit={handleSubmit(submitFormHandler)}>
                <div className="form-layout">
                  <div className="form-row">
                    <div className="form-row-unit">
                      <Input
                        id="firstname"
                        name="firstname"
                        placeholder="Your Name"
                        error={errors?.firstname?.message}
                      />
                    </div>
                    <div className="form-row-unit">
                      <Input
                        id="email"
                        name="email"
                        placeholder="Your Email"
                        error={errors?.email?.message}
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-row-unit">
                      <Input
                        id="phone"
                        name="phone"
                        placeholder="Contact Number"
                        error={errors?.phone?.message}
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-row-unit">
                      <Input
                        id="body"
                        name="body"
                        placeholder="Your Message"
                        text
                        error={errors?.body?.message}
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <Button>Send Message</Button>
                  </div>
                </div>
              </form>
            </FormProvider>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactForm;
