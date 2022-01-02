import React from "react";

// Components
import Container from "../../../components/UI/Container";
import Input from "../../../components/FormElements/Input";
import Button from "../../../components/UI/Button";

//
import { Email, Phone, Whatsapp } from "../../../components/icons";
import "./index.scss";

const ContactForm = ({ data }) => {
  const submitFormHandler = (e) => {
    e.preventDefault();
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
