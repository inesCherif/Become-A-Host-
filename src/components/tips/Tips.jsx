import React from "react";
import "./Tips.css";

function Tips({ title, text }) {
  return (
    <div className="tips">
      <h2 className="body tips-title">{title}</h2>
      <p className="type16">{text}</p>
    </div>
  );
}

export default Tips;
