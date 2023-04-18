// import React from "react";
// import "./Tags.css";

// const Tags = (props) => {
//   const { src, theme, onClick } = props;
//   return (
//     <div className="popup-cell" onClick={onClick}>
//       <img src={src} alt="" className="theme-icon" />
//       <p className="theme-label">{theme}</p>
//     </div>
//   );
// };

// export default Tags;
import React from "react";
import "./Tags.css";

const Tags = (props) => {
  const { src, theme, onClick } = props;
  return (
    <div className="popup-cell" onClick={onClick}>
      <img src={src} alt="" className="theme-icon" />
      <p className="theme-label">{theme}</p>
    </div>
  );
};

export default Tags;