import React from "react";
import "./Modal.css";
import { getGridColumns } from "../../hooks/getGridColumns"

const Modal = ({ handleCloseModal, title, tags }) => {
  const numTags = tags.length;
  const gridColumns = getGridColumns(numTags);

  return (
    <div className="popup">
      <div className="overlay"></div>
      <div className="popup-content">
        <h2 className="popup-title">{title}</h2>
        <div
          className={`popup-grid ${
            numTags === 4 ? "popup-grid--two-columns" : ""
          }`}
          style={{ gridTemplateColumns: gridColumns }}
        >
          {tags.map((tag) => (
            <tag.component {...tag.props} key={tag.props.text} />
          ))}
        </div>

        <button className="close-modal" onClick={handleCloseModal}>
          <span class="close">&times;</span>
        </button>
      </div>
    </div>
  );
};

export default Modal;
