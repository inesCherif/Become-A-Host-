import React from "react";
import "./Theme.css";
import Navbar from "../../../../layouts/navbar/Navbar";
import { Link } from "react-router-dom";
import Button from "../../../../components/button/Button";
import useActiveNav from "../../../../hooks/useActiveNav";
import Tips from "../../../../components/tips/Tips";
import ThemeSelector from "../../../../components/theme/ThemeSelector";
import Popup from "../../../../containers/popup/Popup";

const Theme = () => {
  const { selectedNavItem, handleContinueClick } = useActiveNav(
    "theme",
    "title"
  );

  return (
    <>
      <Navbar selectedNavItem={selectedNavItem} selectedNavStep="step3" />
      <div className="desktop-content">
        <div className="content-position">
          <h1 className="content-title">
            What type of experience will you host?
          </h1>

          <Tips
            title="Tips"
            text="Select a theme that best describes what guests will mainly be doing on your experience. This will help guests find and book your experience."
          />

          <div className="theme-selector-header">
            <span className="theme-selector-title">Select a theme</span>
          </div>

          <ThemeSelector text="Add  a Pincipale Theme" PopupComponent={Popup} />

          <div className="theme-selector-header ">
            <span className="theme-selector-title">
              How about another theme? (optional)
            </span>
            <p className="body">
              The most unique experiences have more than one theme. Capture
              different <br /> aspects of your experience by including more.
            </p>
          </div>
          <span className="theme-selector">
            <ThemeSelector text="Add a secondary theme" PopupComponent={Popup} />
          </span>
          
          <span className="btn-position theme-btn-position">
            <Link to="/title">
              <Button onClick={handleContinueClick} />
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default Theme;
