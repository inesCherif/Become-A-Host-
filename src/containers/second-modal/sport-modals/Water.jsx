import React from "react";
import SimpleTag from "../../../components/simple-tags/SimpleTag";

const Water = ({ handleCloseModal }) => {
  return (
    <div className="popup">
      <div className="popup-content second-modal">
        <h2 className="popup-title">What’s exactly in Water Sport?</h2>
        <div className="popup-grid">
          <SimpleTag text="Boating" />
          <SimpleTag text="Diving" />
          <SimpleTag text="Kayaking" />
          <SimpleTag text="Paddleboarding" />
          <SimpleTag text="Sailing" />
          <SimpleTag text="Snorkeling" />
          <SimpleTag text="Surfing" />
          <SimpleTag text="Swimming" />
        </div>

        <button className="close-modal" onClick={handleCloseModal}>
          <span class="close">&times;</span>
        </button>
      </div>
    </div>
  );
};

export default Water;
