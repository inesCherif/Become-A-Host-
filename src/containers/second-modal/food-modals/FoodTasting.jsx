import React from "react";
import SimpleTag from "../../../components/simple-tags/SimpleTag";

const FoodTasting = ({ handleCloseModal }) => {

  return (
    <div className="popup">
      <div className="popup-content second-modal">
        <h2 className="popup-title">What’s exactly in Food tasting ?  </h2>
        <div className="popup-grid">
         <SimpleTag text="Cheese tasting" />
         <SimpleTag text="fruit tasting" />
         <SimpleTag text="Olive oil tasting" />
        </div>

        <button className="close-modal" onClick={handleCloseModal}>
          <span class="close">&times;</span>
        </button>
      </div>
    </div>
  );
};

export default FoodTasting;