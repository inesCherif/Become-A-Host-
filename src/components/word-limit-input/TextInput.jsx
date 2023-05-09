import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import useTextInput from "../../hooks/useTextInput";
import { updateTitleInfo } from "../../redux/actions/step3-actions/updateTitleInfo";
import "./TextInput.css";
import { auth, db } from "../../firebase";

function TextInput({ maxLength }) {
  const dispatch = useDispatch();
  const { value, handleChange, remainingChars, setValue  } = useTextInput(maxLength);

  const handleTitleChange = (event) => {
    const newValue = event.target.value;
    if (newValue.length <= maxLength) {
      dispatch(updateTitleInfo(newValue));
    }
    handleChange(event);
  };

  useEffect(() => {
    const fetchData = async () => {
      const userId = auth.currentUser.uid;
      const applicationRef = db.collection("applications").doc(userId);
      const doc = await applicationRef.get();
      if (doc.exists && doc.data().title) {
        const { experienceTitle: fetchedExperienceTitle } = doc.data().title;
        if (fetchedExperienceTitle !== undefined) {
          setValue(fetchedExperienceTitle); // <-- update the value state variable
          dispatch(updateTitleInfo(fetchedExperienceTitle));
        }
      }
    };
    fetchData();
  }, []);
  


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

