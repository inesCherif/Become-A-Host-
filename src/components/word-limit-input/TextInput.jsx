import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import useTextInput from "../../hooks/useTextInput";
import { updateTitleInfo } from "../../redux/actions/step3-actions/updateTitleInfo";
import "./TextInput.css";

function TextInput({ maxLength }) {
  const dispatch = useDispatch();
  const { value, handleChange, remainingChars } = useTextInput(maxLength);

  const handleTitleChange = (event) => {
    const newValue = event.target.value;
    if (newValue.length <= maxLength) {
      dispatch(updateTitleInfo(newValue));
    }
    handleChange(event);
  };


  return (
    <div className="text-input-container">
      <input
        type="text"
        value={value}
        onChange={handleTitleChange}
        className="text-input-count"
      />
      <span className="remaining-chars">{remainingChars}</span>
    </div>
  );
}

export default TextInput;

