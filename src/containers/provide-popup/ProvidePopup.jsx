import React, { useState } from "react";
import "./ProvidePopup.css";
import Tags from "../../components/tags/Tags";
import Food from "../../assets/icons/food.png";
import Drink from "../../assets/icons/drink.png";
import Tickets from "../../assets/icons/tickets.png";
import Equipement from "../../assets/icons/equipement.png";
import Transport from "../../assets/icons/transport.png";
import renderProvidePopup from "../../hoc/renderProvidePopup";


const ProvidePopup = ({ popupRef, handlePopup }) => {
  const [selectedTag, setSelectedTag] = useState(null);
  const handleModalClose = () => {
    setSelectedTag(null); // Reset selectedTag state when modal is closed
  };
  
  return (
    <div className="popup" ref={popupRef}>
      <div onClick={handlePopup} className="overlay"></div>
      <div className="popup-content provide-popup-content">
        <h2 className="popup-title">Select what you will provide</h2>

        <div className="provide-popup-grid">
          
          <Tags
            src={Food}
            theme="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Food"
            onClick={() => setSelectedTag("Food")}
          />
          <Tags
            src={Drink}
            theme="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Drink"
            onClick={() => setSelectedTag("Drink")}
          />
          <Tags
            src={Tickets}
            theme="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tickets"
            onClick={() => setSelectedTag("Tickets")}
          />
          <Tags
            src={Transport}
            theme="&nbsp;&nbsp;&nbsp;Transportation"
            onClick={() => setSelectedTag("Transportation")}
          />
          <Tags
            src={Equipement}
            theme="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Equipments"
            onClick={() => setSelectedTag("Equipments")}
          />
        </div>
      </div>
      {renderProvidePopup(selectedTag, handleModalClose)}
    </div>
  );
};

export default ProvidePopup;



