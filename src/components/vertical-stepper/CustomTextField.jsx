import React from 'react';
import './CustomTextField.css'; 

const CustomTextField = ({ label, value, onChange }) => {
  return (
    <div className="custom-text-field-container">
      <input
        className="custom-text-field-input"
        type="text"
        value={value}
        onChange={onChange}
        placeholder={label}
      />
    </div>
  );
};

export default CustomTextField;
