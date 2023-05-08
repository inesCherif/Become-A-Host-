import React from "react";
import "./InputField.css";

const InputField = ({
  id = "input1",
  name = "input1",
  htmlFor = "",
  labelText = "Your country",
  className = "",
  value = "",
  onChange = "",
}) => {
  return (
    <>
      <label htmlFor={htmlFor} className="second-label">
        {labelText}
      </label>
      <br />
      <input
        type="text"
        id={id}
        name={name}
        className={`body second-input ${className}`}
        onChange={onChange}
        value={value}
        required
      />
    </>
  );
};

export default InputField;
