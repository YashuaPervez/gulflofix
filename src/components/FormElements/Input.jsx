import React from "react";
import { useFormContext } from "react-hook-form";

//
import "./index.scss";

const Input = ({ name, id, placeholder, text, error, className }) => {
  const { register } = useFormContext();

  return (
    <div>
      {text ? (
        <textarea
          name={name}
          id={id}
          placeholder={placeholder}
          className="form-input form-textarea"
          {...register(id)}
        ></textarea>
      ) : (
        <input
          name={name}
          id={id}
          placeholder={placeholder}
          className={`${className || "form-input"}`}
          autoComplete="off"
          {...register(id)}
        />
      )}
      {error && <span className="form-input-error">{error}</span>}
    </div>
  );
};

export default Input;
