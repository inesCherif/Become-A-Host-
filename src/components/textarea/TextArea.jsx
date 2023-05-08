import React from "react";
import useTextInput from "../../hooks/useTextInput";
import "./TextArea.css";
import { useDispatch } from "react-redux";
import { updateDescriptionInfo } from "../../redux/actions/step3-actions/updateDescriptionInfo";

function TextArea({placeholder, maxLength }) {
  const dispatch = useDispatch();
  const { value, handleChange, remainingChars } = useTextInput(maxLength);

  const handleDescriptionChange = (event) => {
    const newValue = event.target.value;
    if (newValue.length <= maxLength) {
      dispatch(updateDescriptionInfo(newValue));
    }
    handleChange(event);
  };

  return (
    <div className="TextArea">
      <textarea
        value={value}
        onChange={handleDescriptionChange}
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
