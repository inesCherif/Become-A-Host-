import React from "react";
import SimpleTag from "../../../components/simple-tags/SimpleTag";

const Agriculture = ({ handleCloseModal }) => {
  return (
    <div className="popup">
      <div className="popup-content second-modal">
        <h2 className="popup-title">What’s exactly in Plants and Agriculture ? </h2>
        <div className="popup-grid">
          <SimpleTag text="Farming" />
          <SimpleTag text="Gardening" />
          <SimpleTag text="Herbalism" />
        </div>

        <button className="close-modal" onClick={handleCloseModal}>
          <span class="close">&times;</span>
        </button>
      </div>
    </div>
  );
};

export default Agriculture;
