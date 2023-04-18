import React from "react";
import "./Passions.css";
import Navbar from "../../../../layouts/navbar/Navbar";
import { Link } from "react-router-dom";
import Button from "../../../../components/button/Button";
import useActiveNav from "../../../../hooks/useActiveNav";
import Tips from "../../../../components/tips/Tips";
import InputField from "../../../../components/input-field/InputField";

const Passions = () => {
  const { selectedNavItem, handleContinueClick } = useActiveNav("passions", "");

  return (
    <>
      <Navbar selectedNavItem={selectedNavItem} selectedNavStep="step1" />
      <div className="desktop-content">
        <div className="content-position">
          <h1 className="content-title">Passions</h1>
          <Tips
            title="Tips"
            text="What makes you uniquely qualified to host experiences? Tell guests why you’re passionate and knowledgeable about the subject matter. Keep in mind: Hosting is about person-to-person connection, so make sure this section focuses on you."
          />
          <div className="profile-info-inputs">
            <form action="">
              <table>
                <tr>
                  <td>
                    <InputField
                      inputId="input1"
                      labelText="What are you passionate about ?"
                      className="third-input"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <InputField
                      inputId="input3"
                      labelText="what do you love most about your city ?"
                      className="third-input"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="description" className="second-label">
                      Describe yourself more
                    </label>
                    <br />
                    <textarea
                      name="description"
                      id="description"
                      cols="30"
                      rows="10"
                      className="textarea-description"
                    ></textarea>
                  </td>
                </tr>
              </table>
            </form>
          </div>

          <span className="btn-position">
            <Link to="/overview">
              <Button onClick={handleContinueClick} />
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default Passions;
