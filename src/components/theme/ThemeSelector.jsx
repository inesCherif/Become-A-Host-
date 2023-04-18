import React, { useState, useRef } from "react";
import "./ThemeSelector.css";
import { AiFillPlusCircle } from "react-icons/ai";
import Popup from "../../containers/popup/Popup";

const ThemeSelector = ({ text, PopupComponent = Popup }) => {
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null);
  const handlePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      <div className="theme-selector" onClick={handlePopup}>
        <div className="theme-selector-add">
          <AiFillPlusCircle className="theme-selector-icon" />
          <p className="theme-selector-add-text">{text}</p>
        </div>
      </div>
      {showPopup && <PopupComponent popupRef={popupRef} handlePopup={handlePopup} />}
    </>
  );
};

export default ThemeSelector;


