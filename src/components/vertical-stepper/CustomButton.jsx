import React from "react";
import PropTypes from "prop-types";
import './CustomButton.css'

const CustomButton = ({ variant, onClick, children }) => {
  return (
    <button
      className={`primary-btn custom-button custom-button-${variant}`}
      onClick={onClick}
    >
      <span className="button-text">{children}</span>
    </button>
  );
};

CustomButton.propTypes = {
  variant: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default CustomButton;
