import React from "react";
import './Input.css'
const Input = ({ label, htmlFor, id, placeholder }) => {
  return (
    <>
      <label htmlFor={htmlFor} className="label">{label}</label>
      <br />
      <input
        type="text"
        id={id}
        name={id}
        className="body Input"
        placeholder={placeholder}
      />
    </>
  );
};

export default Input;
