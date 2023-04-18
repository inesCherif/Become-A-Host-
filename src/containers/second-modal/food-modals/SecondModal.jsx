import React from "react";
import "../../../containers/second-modal/SecondModal.css"
import SimpleTag from "../../../components/simple-tags/SimpleTag";

const Modal = ({ handleCloseModal }) => {

  return (
    <div className="popup">
      <div className="popup-content second-modal">
        <h2 className="popup-title">What’s exactly in Cooking and food making?</h2>
        <div className="popup-grid">
         <SimpleTag text="Baking" />
         <SimpleTag text="cooking" />
         <SimpleTag text=" making" />
        </div>

        <button className="close-modal" onClick={handleCloseModal}>
          <span class="close">&times;</span>
        </button>
      </div>
    </div>
  );
};

export default Modal;
