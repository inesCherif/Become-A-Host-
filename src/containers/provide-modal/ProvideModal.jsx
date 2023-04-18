import React, { useState } from "react";
import "./ProvideModal.css";

const ProvideModal = ({ title, options, onClose }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isDoneDisabled, setIsDoneDisabled] = useState(true);

  const handleCloseModal = () => {
    setSelectedOptions([]);
    setIsDoneDisabled(true);
    setIsOpen(false);
    onClose(); // Call onClose function to notify parent component
  };
  

  const handleCheckboxChange = (option) => {
    let updatedOptions = [...selectedOptions];
    const index = updatedOptions.indexOf(option);

    if (index === -1) {
      updatedOptions.push(option);
    } else {
      updatedOptions.splice(index, 1);
    }

    setSelectedOptions(updatedOptions);

    if (updatedOptions.length > 0) {
      setIsDoneDisabled(false);
    } else {
      setIsDoneDisabled(true);
    }
  };

  const handleDoneClick = () => {
    handleCloseModal();
    console.log("Selected Options: ", selectedOptions);
  };

  return (
    isOpen ? (
      <div className="popup">
        <div className="overlay"></div>
        <div className="popup-content  provide-popup">
          <h2 className="popup-title">{title}</h2>
          <div>
            <div className="checkbox-grid">
              {options.map(option => (
                <label key={option}>
                  <input
                    type="checkbox"
                    checked={selectedOptions.includes(option)}
                    onChange={() => handleCheckboxChange(option)}
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>

          <button
            className="done-button"
            onClick={handleDoneClick}
            disabled={isDoneDisabled}
          >
            Done
          </button>

          <button className="close-modal" onClick={handleCloseModal}>
            <span className="close">&times;</span>
          </button>
        </div>
      </div>
    ) : null
  );
};

export default ProvideModal;
