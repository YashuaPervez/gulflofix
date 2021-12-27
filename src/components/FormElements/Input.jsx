import React from "react";

//
import "./index.scss";

const Input = ({ name, id, placeholder, text }) => {
  if (text) {
    return (
      <div>
        <textarea
          name={name}
          id={id}
          placeholder={placeholder}
          className="form-input form-textarea"
        ></textarea>
      </div>
    );
  }

  return (
    <div>
      <input
        name={name}
        id={id}
        placeholder={placeholder}
        className="form-input"
      />
    </div>
  );
};

export default Input;
