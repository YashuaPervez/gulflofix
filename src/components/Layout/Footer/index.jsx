import React from "react";
import { Link } from "gatsby";

// Components
import Container from "../../UI/Container";
import SubscribeForm from "./SubscribeForm";

//
import LogoWhite from "../../../images/logo-white.png";
import "./index.scss";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <Container>
          <div className="footer-logo">
            <img src={LogoWhite} />
          </div>
          <div className="footer-grid">
            <div className="footer-grid-item">
              <h3 className="footer-heading">Take a look around</h3>

              <ul className="footer-list">
                <li>
                  <Link to="/our-services">
                    <span className="text text-link">
                      Learn about our services
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/about-us">
                    <span className="text text-link">
                      Find out more about us
                    </span>
                  </Link>
                </li>
                <li>
                  <a href="https://www.gulflogix.ae/online-store/">
                    <span className="text text-link">Buy service hours</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-grid-item">
              <h3 className="footer-heading">Need help?</h3>

              <ul className="footer-list">
                <li>
                  <a href="#">
                    <span className="text text-link">Online support</span>
                  </a>
                </li>
                <li>
                  <Link to="/faq">
                    <span className="text text-link">
                      Frequently Asked Questions
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/contact-us">
                    <span className="text text-link">Contact Us</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-grid-item">
              <h3 className="footer-heading">Legal</h3>

              <ul className="footer-list">
                <li>
                  <a href="https://www.gulflogix.ae/terms-conditions/">
                    <span className="text text-link">
                      {"Terms & Conditions"}
                    </span>
                  </a>
                </li>
                <li>
                  <a href="https://www.gulflogix.ae/privacy-policy/">
                    <span className="text text-link">
                      Learn about our services
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-grid-item">
              <h3 className="footer-heading">Connect with us</h3>
              <ul className="footer-list">
                <li>
                  <a target="_blank" href="https://www.facebook.com/gulflogix/">
                    <span className="text text-link">Facebook</span>
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://twitter.com/gulflogix">
                    <span className="text text-link">Twitter</span>
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/company/gulflogix"
                  >
                    <span className="text text-link">Linkedin</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-grid-item">
              <h3 className="footer-heading">Keep updated</h3>
              <p className="text">
                Sign up for our newsletter for industry trends, updates, special
                offers and more
              </p>
              <SubscribeForm />
            </div>
          </div>
        </Container>
      </footer>
      <div className="footer-bar">
        <Container>© 2021 Gulf Logix. All rights reserved</Container>
      </div>
    </>
  );
};

export default Footer;
