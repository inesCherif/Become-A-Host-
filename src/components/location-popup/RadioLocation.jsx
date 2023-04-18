import React from "react";

const RadioLocation = ({ text, id, name, value, onSelect }) => {
  const radios = value.map((option, index) => (
    <React.Fragment key={index}>
      <input type="radio" id={`${id}${index + 1}`} name={name} value={option} onChange={onSelect} />
      <label htmlFor={`${id}${index + 1}`}>{option}</label>
      <br />
    </React.Fragment>
  ));

  const radiosCount = radios.length;
  const radiosInFirstDiv = Math.ceil(radiosCount / 2);

  return (
    <>
      <span className="radio-button">
        <p className="popup-radio-txt">{text}</p>

        <div className="popup-radio-container">
          <div>{radios.slice(0, radiosInFirstDiv)}</div>

          <div>{radios.slice(radiosInFirstDiv)}</div>
        </div>
      </span>
    </>
  );
};

export default RadioLocation;
