import React from "react";
import SimpleTag from "../../../components/simple-tags/SimpleTag";

const Sky = ({ handleCloseModal }) => {
  return (
    <div className="popup">
      <div className="popup-content second-modal">
        <h2 className="popup-title">What’s exactly in Night Sky ? </h2>
        <div className="popup-grid">
          <SimpleTag text="Astro photography" />
          <SimpleTag text="Astronomy" />
          <SimpleTag text=" Stargazing" />
        </div>

        <button className="close-modal" onClick={handleCloseModal}>
          <span class="close">&times;</span>
        </button>
      </div>
    </div>
  );
};

export default Sky;
