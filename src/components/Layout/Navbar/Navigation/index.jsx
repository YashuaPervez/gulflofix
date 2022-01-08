import React, { useState } from "react";
import { Link } from "gatsby";

// Components
import Button from "../../../UI/Button";

//
import { DownArrow, Search, Bag } from "../../../icons";
import "./index.scss";

const Navigation = ({ setSearchOpen }) => {
  const [dropdownOpen, setDropDownOpen] = useState(false);

  const navigation = [
    {
      text: "About",
      link: "/about-us",
      type: "link",
    },
    {
      text: "Our Services",
      link: "/our-services",
      type: "link",
      childrens: [
        {
          text: "Technology",
          type: "heading",
        },
        {
          text: "Office 365",
          link: "/our-services/office-365-services",
          type: "link",
        },
        {
          text: "Power Platform",
          link: "/our-services/power-platform",
          type: "link",
        },
        {
          text: "SharePoint",
          link: "/our-services/sharepoint",
          type: "link",
        },
        {
          text: "Services",
          type: "heading",
        },
        {
          text: "Low Code Solution",
          link: "/our-services/low-code-solution",
          type: "link",
        },
        {
          text: "Enablement & Traning Services",
          link: "/our-services/enablement-training-services",
          type: "link",
        },
        {
          text: "Implementation Services",
          link: "/our-services/implementation-services",
          type: "link",
        },
      ],
    },
    {
      text: "Shop",
      link: "https://www.gulflogix.ae/online-store/",
      type: "link",
    },
    {
      text: "Book a Session",
      link: "https://meetings.hubspot.com/aadilg",
      type: "button",
      classes: "hide-mobile",
    },
    {
      text: "Book a Session",
      link: "https://meetings.hubspot.com/aadilg",
      type: "link",
      classes: "hide-desktop",
    },
    {
      text: <Search size={16} />,
      link: "/search",
      type: "link",
      classes: "hide-desktop",
      onClick: () => {
        console.log("onclick");
        setSearchOpen(true);
      },
    },
    {
      text: <Bag size={16} />,
      link: "https://www.gulflogix.ae/cart",
      type: "link",
      classes: "hide-desktop",
    },
    {
      text: "Contact Us",
      link: "/contact-us",
      type: "link",
      classes: "hide-desktop",
    },
    {
      text: "FAQs",
      link: "/faq",
      type: "link",
      classes: "hide-desktop",
    },
  ];

  return (
    <nav className={`header-navigation `}>
      <ul>
        {navigation.map((navItem) => {
          const hasChildren =
            navItem.childrens && navItem.childrens.length !== 0;

          return (
            <li className={`nav-item ${navItem.classes || ""}`}>
              {navItem.type === "link" && (
                <div className="link-container">
                  <Link
                    className="text"
                    to={navItem.onClick ? "#" : navItem.link}
                    activeClassName="active"
                    onClick={navItem.onClick}
                  >
                    {navItem.text}
                  </Link>
                  {hasChildren && (
                    <button
                      className="end"
                      onClick={() => {
                        setDropDownOpen((prev) => !prev);
                      }}
                    >
                      <DownArrow />
                    </button>
                  )}
                </div>
              )}
              {navItem.type === "button" && (
                <Link to={navItem.link} activeClassName="active">
                  <span className="text">
                    <Button>{navItem.text}</Button>
                  </span>
                </Link>
              )}
              {hasChildren && (
                <ul className={`dropdown ${dropdownOpen ? "open" : ""}`}>
                  {navItem.childrens.map((child) => {
                    return (
                      <>
                        {child.type === "link" && (
                          <li className="dropdown-item">
                            <Link to={child.link} activeClassName="active">
                              {child.text}
                            </Link>
                          </li>
                        )}
                        {child.type === "heading" && (
                          <h3 className="dropdown-title">{child.text}</h3>
                        )}
                      </>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
