import React from "react";
import './Radio.css'

function Radio(props) {
  return (
    <div className="radio-button">
      <input type="radio" id={props.id} name={props.name} value={props.value} />
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  );
}

export default Radio;
