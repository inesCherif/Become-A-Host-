import React from 'react'
import './CustomTextArea.css'

const CustomTextArea = ({ label }) => {
  return (
    <div className="custom-text-area-container">
      <textarea
        className="custom-text-area-input"
        type="text"
        placeholder={label}
      />
    </div>
  )
}

export default CustomTextArea
