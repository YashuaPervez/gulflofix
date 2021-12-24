import React, { useState } from "react";

//
import "./index.scss";

const Toggle = ({ active, setActive }) => {
  return (
    <div className="header-toggle-container">
      <button
        className={`header-toggle-button ${active ? "active" : ""}`}
        onClick={() => setActive((prev) => !prev)}
      >
        <span className="header-toggle-bar-1"></span>
        <span className="header-toggle-bar-2"></span>
        <span className="header-toggle-bar-3"></span>
      </button>
    </div>
  );
};

export default Toggle;
