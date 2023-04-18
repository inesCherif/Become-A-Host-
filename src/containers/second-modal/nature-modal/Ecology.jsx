import React from "react";
import SimpleTag from "../../../components/simple-tags/SimpleTag";

const Ecology = ({ handleCloseModal }) => {
  return (
    <div className="popup">
      <div className="popup-content second-modal">
        <h2 className="popup-title">What’s exactly in Nature and ecology tour?</h2>
        <div className="popup-grid">
          <SimpleTag text="Bay tour" />
          <SimpleTag text="Cave tour" />
          <SimpleTag text="Countryside tour" />
          <SimpleTag text="Desert tour" />
          <SimpleTag text=" Forest tour" />
          <SimpleTag text=" Hot spring tour" />
          <SimpleTag text=" Lake tour" />
          <SimpleTag text=" Ocean tour" />
          <SimpleTag text=" River tour" />
        </div>

        <button className="close-modal" onClick={handleCloseModal}>
          <span class="close">&times;</span>
        </button>
      </div>
    </div>
  );
};

export default Ecology;
