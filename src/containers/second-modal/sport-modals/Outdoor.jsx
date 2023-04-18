import React from "react";
import SimpleTag from "../../../components/simple-tags/SimpleTag";
import { getGridColumns } from "../../../hooks/getGridColumns";

const Outdoor = ({ handleCloseModal }) => {
  const numTags = 4;
  const gridColumns = getGridColumns(numTags);

  return (
    <div className="popup">
      <div className="popup-content second-modal">
        <h2 className="popup-title">What’s exactly in Outdoor sport?</h2>
        <div className="popup-grid" style={{ gridTemplateColumns: gridColumns }}>
          <SimpleTag text="Golf" />
          <SimpleTag text="Football" />
          <SimpleTag text="FIshing" />
          <SimpleTag text="Hunting" />
        </div>

        <button className="close-modal" onClick={handleCloseModal}>
          <span class="close">&times;</span>
        </button>
      </div>
    </div>
  );
};

export default Outdoor;
