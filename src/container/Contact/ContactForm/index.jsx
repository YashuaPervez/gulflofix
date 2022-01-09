import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ReCAPTCHA from "react-google-recaptcha";

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
  const [submitted, setSubmitted] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(false);
  const [submitErrors, setSubmitErrors] = useState([]);
  const [loading, setLoading] = useState(false);

  const form = useForm({
    resolver: yupResolver(contactFormSchema),
  });
  const {
    handleSubmit,
    formState: { errors },
  } = form;

  const submitFormHandler = async (data) => {
    if (!captchaValue) {
      return alert("Please pass the captcha");
    }
    setLoading(true);

    // Create the new request
    var xhr = new XMLHttpRequest();
    var url =
      "https://api.hsforms.com/submissions/v3/integration/submit/8384385/bec1a432-fe82-4f98-825b-3b6e465cab19";

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
          name: "message",
          value: data.body,
        },
        {
          name: "firstname",
          value: data.firstname,
        },
      ],
      context: {
        pageUri: "https://www.gulflogix.ae/",
        pageName: "Gulflogix",
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
      setLoading(false);
      if (xhr.readyState == 4 && xhr.status == 200) {
        setSubmitted(true);
      } else if (xhr.readyState == 4 && xhr.status == 400) {
        const response = JSON.parse(xhr.responseText);
        setSubmitErrors(response.errors);
        // alert(xhr.responseText);  Returns a 400 error the submission is rejected.
      }
    };

    // Sends the request

    xhr.send(final_data);
  };

  const captchaChangeHandler = (value) => {
    if (value) {
      setCaptchaValue(value);
    }
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
            <div className="form-errors">
              {submitErrors.map((error) => {
                if (error.errorType === "NUMBER_OUT_OF_RANGE") {
                  return (
                    <p className="error">Contact number is out of range</p>
                  );
                }
              })}
            </div>
            <FormProvider {...form}>
              {false ? (
                <p>Thanks for sending your feedback.</p>
              ) : (
                <form
                  onSubmit={handleSubmit(submitFormHandler)}
                  autoComplete="off"
                >
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
                      <div className="form-row-unit">
                        <ReCAPTCHA
                          sitekey="6Ld6DMcZAAAAAP77cLAhXdE5AAyyATWU6qjdPXHZ"
                          onChange={captchaChangeHandler}
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <Button disabled={loading}>
                        {loading ? "Submitting..." : "Send Message"}
                      </Button>
                    </div>
                  </div>
                </form>
              )}
            </FormProvider>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactForm;
