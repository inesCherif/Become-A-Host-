import React from "react";
import SimpleTag from "../../../components/simple-tags/SimpleTag";
import { getGridColumns } from "../../../hooks/getGridColumns";

const DrinkFood = ({ handleCloseModal }) => {
  const numTags = 4;
  const gridColumns = getGridColumns(numTags);

  return (
    <div className="popup">
      <div className="popup-content second-modal">
        <h2 className="popup-title">What’s exactly in Food?</h2>
        <div className="popup-grid" style={{ gridTemplateColumns: gridColumns }}>
          <SimpleTag text="Drinking tour" />
          <SimpleTag text="wine making class" />
          <SimpleTag text="wine pairing" />
          <SimpleTag text="Winery tour" />
          <SimpleTag text=" Wine tasting" />
        </div>

        <button className="close-modal" onClick={handleCloseModal}>
          <span class="close">&times;</span>
        </button>
      </div>
    </div>
  );
};

export default DrinkFood;
