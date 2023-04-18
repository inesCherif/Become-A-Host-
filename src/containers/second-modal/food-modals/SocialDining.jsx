import React from "react";
import SimpleTag from "../../../components/simple-tags/SimpleTag";

const SocialDining = ({ handleCloseModal }) => {

  return (
    <div className="popup">
      <div className="popup-content second-modal">
        <h2 className="popup-title">What’s exactly in Social dining ? </h2>
        <div className="popup-grid">
         <SimpleTag text="BBQ party" />
         <SimpleTag text="Lunch/dinner  with family" />
         <SimpleTag text="Picnic" />
        </div>

        <button className="close-modal" onClick={handleCloseModal}>
          <span class="close">&times;</span>
        </button>
      </div>
    </div>
  );
};

export default SocialDining;