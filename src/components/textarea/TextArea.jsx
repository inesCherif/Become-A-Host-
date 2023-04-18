import React from "react";
import useTextInput from "../../hooks/useTextInput";
import "./TextArea.css";

function TextArea({placeholder, maxLength }) {
  const { value, handleChange, remainingChars } = useTextInput(maxLength);

  return (
    <div className="TextArea">
      <textarea
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="body"
      />
      <div className="remaining-chars remaining-chars-textarea">
        {remainingChars}
      </div>
    </div>
  );
}

export default TextArea;
