import React from "react";
import "./Title.css";
import Navbar from "../../../../layouts/navbar/Navbar";
import { Link } from "react-router-dom";
import Button from "../../../../components/button/Button";
import useActiveNav from "../../../../hooks/useActiveNav";
import Tips from "../../../../components/tips/Tips";
import TextInput from "../../../../components/word-limit-input/TextInput";

const Title = () => {
  const { selectedNavItem, handleContinueClick } = useActiveNav("title", "do");

  return (
    <>
      <Navbar selectedNavItem={selectedNavItem} selectedNavStep="step3" />
      <div className="desktop-content">
        <div className="content-position">
          <h1 className="content-title">Give your experience a title</h1>

          <Tips
            title="Tips"
            text="Think about writing a title that describes your main activity so guests get a sense of what they’ll be doing. Consider using action verbs and making it unique to set your experience apart."
          />
          <div className="idea-content">
            <p>
              <span className="idea-title">
                What is the title of your experience?
              </span>
              <br />
              <span className="idea-subtitle">
                Make it short, descriptive, and exciting.
              </span>
            </p>
            <TextInput maxLength={40}/>
          </div>

          <span className="btn-position">
            <Link to="/do">
              <Button onClick={handleContinueClick} />
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default Title;
