import React from "react";
import SimpleTag from "../../../components/simple-tags/SimpleTag";
import { getGridColumns } from "../../../hooks/getGridColumns";

const DrinkCoffee = ({ handleCloseModal }) => {
  const numTags = 4;
  const gridColumns = getGridColumns(numTags);

  return (
    <div className="popup">
      <div className="popup-content second-modal">
        <h2 className="popup-title">What’s exactly in Coffee?</h2>
        <div className="popup-grid" style={{ gridTemplateColumns: gridColumns }}>
          <SimpleTag text="Drinking Coffee tour" />
          <SimpleTag text="Coffee farm tour" />
          <SimpleTag text="Coffee making class" />
          <SimpleTag text="Coffee tasting" />
        </div>

        <button className="close-modal" onClick={handleCloseModal}>
          <span class="close">&times;</span>
        </button>
      </div>
    </div>
  );
};

export default DrinkCoffee;
