import React from "react";
import SimpleTag from "../../../components/simple-tags/SimpleTag";

const MarketTour = ({ handleCloseModal }) => {

  return (
    <div className="popup">
      <div className="popup-content second-modal">
        <h2 className="popup-title">What’s exactly in Food and market tour?</h2>
        <div className="popup-grid">
         <SimpleTag text="Farm tour" />
         <SimpleTag text="street food tour" />
         <SimpleTag text="food market tour" />
        </div>

        <button className="close-modal" onClick={handleCloseModal}>
          <span class="close">&times;</span>
        </button>
      </div>
    </div>
  );
};

export default MarketTour;
