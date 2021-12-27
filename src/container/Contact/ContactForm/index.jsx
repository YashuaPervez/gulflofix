import React from "react";

// Components
import Container from "../../../components/UI/Container";
import Input from "../../../components/FormElements/Input";
import Button from "../../../components/UI/Button";

//
import { Email, Phone, Whatsapp } from "../../../components/icons";
import "./index.scss";

const ContactForm = () => {
  const submitFormHandler = (e) => {
    e.preventDefault();
  };

  return (
    <section className="section">
      <Container>
        <h1 className="heading-section mb-sm">Contact us</h1>
        <div className="contact-form-grid">
          <div className="contact-form-content">
            <h2 className="heading-thin-small mb-sm">
              Do you have questions? Don’t hesitate to ask us – we’re here to
              help!
            </h2>
            <p className="text-sm color-gray-2 mb-sm">
              We just need a couple of hours! No more than 24 business hours
              since receiving your issue ticket.
            </p>
            <p className="text-sm color-dark mb-sm">
              If you’d like to book a consultation session, please go here.
            </p>
            <div className="details-grid">
              <div className="text-sm color-dark detail-item">
                <div className="detail-item-icon">
                  <Phone size={14} color={"#007dff"} />
                </div>
                <a href="tel:+971 50 278 6164">+971 50 278 6164</a>
              </div>
              <div className="text-sm color-dark detail-item">
                <div className="detail-item-icon">
                  <Whatsapp size={14} color={"#007dff"} />
                </div>
                <span>+971 50 278 6164</span>
              </div>
              <div className="text-sm color-dark detail-item">
                <div className="detail-item-icon">
                  <Email size={14} color={"#007dff"} />
                </div>
                <a href="mailto:info@gulflogix.com">info@gulflogix.com</a>
              </div>
            </div>
          </div>
          <div className="contact-form-form">
            <form onSubmit={submitFormHandler}>
              <div className="form-layout">
                <div className="form-row">
                  <div className="form-row-unit">
                    <Input id="name" name="name" placeholder="Your Name" />
                  </div>
                  <div className="form-row-unit">
                    <Input id="name" name="name" placeholder="Your Name" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-row-unit">
                    <Input id="name" name="name" placeholder="Your Name" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-row-unit">
                    <Input id="name" name="name" placeholder="Your Name" text />
                  </div>
                </div>
                <div className="form-row">
                  <Button>Send Message</Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactForm;
