// import React from "react";
// import "./Input.css";
// const Input = ({ label, type, htmlFor, id, placeholder }) => {
//   return (
//     <>
//       <label htmlFor={htmlFor} className="label">
//         {label}
//       </label>
//       <br />
//       <input
//         type={type}
//         id={id}
//         name={id}
//         className="body Input"
//         placeholder={placeholder}
//       />
//     </>
//   );
// };

// export default Input;

import React from "react";
import "./Input.css";
const Input = ({ label, htmlFor, id, name, placeholder, value, onChange }) => {
  return (
    <>
      <label htmlFor={htmlFor} className="label">
        {label}
      </label>
      <br />
      <input
        type="text"
        id={id}
        className="body Input"
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
        required
      />
    </>
  );
};

export default Input;
