import React from "react";
import DoneIcon from "@mui/icons-material/Done";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import useEmailValidation from "../../hooks/useEmailValidation";
import './EmailInput.css'

const EmailInput = () => {
  const { formData, handleChange } = useEmailValidation();

  return (
    <>
      <label htmlFor="email" className="label">
        Email
      </label>
      <br />
      <div className="email">
        <input
          type="email"
          name="email"
          placeholder="xxxxx@xxxxx.xxx"
          value={formData.email}
          onChange={handleChange}
          className={`body Input ${
            formData.email && !formData.isEmailValid
              ? "invalid"
              : formData.isEmailValid
              ? "valid"
              : ""
          }`}
        />
        <DoneIcon
          className="valid-email-icon"
          style={{ display: formData.isEmailValid ? "block" : "none" }}
        />
        <ErrorOutlineIcon
          className="invalid-email-icon"
          style={{
            display:
              formData.email && !formData.isEmailValid ? "block" : "none",
          }}
        />
      </div>
    </>
  );
};

export default EmailInput;
