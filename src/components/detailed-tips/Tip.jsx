import React from "react";
import "./Tip.css";

const Tip = ({statement1, statement2, statement3, statement4, statement5}) => {
  return (
    <div className="tips2">
      <p className="body">
        {statement1}
        <br /> This could include:
      </p>
      <div className="overview-list">
        <ul className="overview-list">
          <li className="body">&nbsp; {statement2}</li>
          <li className="body">&nbsp; {statement3}</li>
          <li className="body">&nbsp; {statement4}</li>
        </ul>
      </div>
      <p className="body">{statement5}</p>
    </div>
  );
};

export default Tip;
