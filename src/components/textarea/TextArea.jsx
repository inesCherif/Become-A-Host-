import React, { useEffect } from "react";
import useTextInput from "../../hooks/useTextInput";
import "./TextArea.css";
import { useDispatch } from "react-redux";
import { updateDescriptionInfo } from "../../redux/actions/step3-actions/experienceActions";
import { auth, db } from "../../firebase";

function TextArea({placeholder, maxLength }) {
  const dispatch = useDispatch();
  const { value, handleChange, remainingChars, setValue } = useTextInput(maxLength);

  const handleDescriptionChange = (event) => {
    const newValue = event.target.value;
    if (newValue.length <= maxLength) {
      dispatch(updateDescriptionInfo(newValue));
    }
    handleChange(event);
  };

  useEffect(() => {
    const fetchData = async () => {
      const userId = auth.currentUser.uid;
      const applicationRef = db.collection("applications").doc(userId);
      const doc = await applicationRef.get();
      if (doc.exists && doc.data().experience) {
        const { experienceDescription: fetchedExperienceDescription } = doc.data().experience;
        if (fetchedExperienceDescription !== undefined) {
          setValue(fetchedExperienceDescription); 
          dispatch(updateDescriptionInfo(fetchedExperienceDescription));
        }
      }
    };
    fetchData();
  }, []);

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
