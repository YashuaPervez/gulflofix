import React from "react";
import { Link } from "gatsby";

// Components
import Container from "../../UI/Container";

//
import LogoWhite from "../../../images/logo-white.png";
import "./index.scss";

const Footer = () => {
  const subscribeHandler = (e) => {
    e.preventDefault();
  };

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
                  <Link to="/">
                    <span className="text text-link">
                      Learn about our services
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="text text-link">
                      Learn about our services
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="text text-link">
                      Learn about our services
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-grid-item">
              <h3 className="footer-heading">Take a look around</h3>

              <ul className="footer-list">
                <li>
                  <Link to="/">
                    <span className="text text-link">
                      Learn about our services
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="text text-link">
                      Learn about our services
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="text text-link">
                      Learn about our services
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-grid-item">
              <h3 className="footer-heading">Take a look around</h3>

              <ul className="footer-list">
                <li>
                  <Link to="/">
                    <span className="text text-link">
                      Learn about our services
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="text text-link">
                      Learn about our services
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="text text-link">
                      Learn about our services
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-grid-item">
              <h3 className="footer-heading">Connect with us</h3>
            </div>
            <div className="footer-grid-item">
              <h3 className="footer-heading">Keep updated</h3>
              <p className="text">
                Sign up for our newsletter for industry trends, updates, special
                offers and more
              </p>
              <form className="footer-form" onSubmit={subscribeHandler}>
                <div className="footer-element">
                  <input className="footer-input" />
                </div>
                <div className="footer-element">
                  <button className="footer-button">Submit</button>
                </div>
              </form>
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
