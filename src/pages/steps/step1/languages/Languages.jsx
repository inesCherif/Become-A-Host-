import React from "react";
import "./Languages.css";
import Navbar from "../../../../layouts/navbar/Navbar";
import { Link } from "react-router-dom";
import Button from "../../../../components/button/Button";
import useActiveNav from "../../../../hooks/useActiveNav";
import Tips from "../../../../components/tips/Tips";
import InputField from "../../../../components/input-field/InputField"



const Languages = () => {
  const { selectedNavItem, handleContinueClick } = useActiveNav(
    "languages",
    "passions"
  );

  return (
    <>
      <Navbar selectedNavItem={selectedNavItem} selectedNavStep="step1" />
      <div className="desktop-content">
        <div className="content-position">
          <h1 className="content-title">Languages</h1>
          <Tips
            title="Tips"
            text="You should be able to read, write, and speak in your primary language
            If you speak more languages, you can always add them to your experience page in the future."
          />
          <div className="profile-info-inputs">
            <form action="">
              <table>
                <tr>
                  <td>
                    <InputField
                      inputId="input1"
                      labelText="what are the languages you are able to speak ?"
                      className="third-input"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <InputField
                      inputId="input3"
                      labelText="How would you rate your English level?"
                      className="third-input"
                    />
                  </td>
                </tr>
              </table>
            </form>
          </div>

          <span className="btn-position">
            <Link to="/passions">
              <Button onClick={handleContinueClick} />
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default Languages;
