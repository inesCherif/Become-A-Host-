import React from "react";
import useTextInput from "../../hooks/useTextInput";
import "./TextInput.css";

function TextInput({ maxLength }) {
  const { value, handleChange, remainingChars } = useTextInput(maxLength);

  return (
    <div className="text-input-container">
      <input
        type="text"
        value={value}
        onChange={handleChange}
        className="text-input-count"
      />
      <span className="remaining-chars">{remainingChars}</span>
    </div>
  );
}

export default TextInput;
