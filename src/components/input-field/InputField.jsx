import React from "react";
import './InputField.css'

const InputField = ({ inputId = "input1", inputName = "input1", labelText = "Your country", className = "" }) => {
  return (
    <>
      <label htmlFor={inputId} className="second-label">
        {labelText}
      </label>
      <br />
      <input
        type="text"
        id={inputId}
        name={inputName}
        className={`body second-input ${className}`} 
      />
    </>
  );
};

export default InputField;
