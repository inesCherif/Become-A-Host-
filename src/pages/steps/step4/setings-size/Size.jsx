import React from "react";
import "./Size.css";
import Navbar from "../../../../layouts/navbar/Navbar";
import { Link } from "react-router-dom";
import Button from "../../../../components/button/Button";
import useActiveNav from "../../../../hooks/useActiveNav";

const Size = () => {
  const { selectedNavItem, handleContinueClick } = useActiveNav(
    "groupsize",
    "availability"
  );

  return (
    <>
      <Navbar selectedNavItem={selectedNavItem} selectedNavStep="step4" />
      <div className="desktop-content">
        <div className="content-position">
          <h1 className="content-title">Maximum group size</h1>
          <div className="tips">
            <p className="type16">
              <br />
              Think about what group size is best for your experience. Is it
              more interactive with fewer people, or more fun with a larger
              group? Remember: If only one person books, you'll still be
              expected to host. <br />
              You can host a public group for up to 10 guests. Guests who book
              may or may not know each other.
            </p>
          </div>
          <div className="contacts-content">
            <h1 className="add-photo-title">Public groups</h1>
            <div className="select-container">
              <label htmlFor="duration" className="select-label selected-label">
                Maximum Group size
              </label>
              <br />
              <select
                name="duration"
                id="duration"
                className="select select-container-size"
              >
                <option value="4" selected>
                  4
                </option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
              <p className="contact-details">
                We suggest 8 people based on <br /> your activity. You can
                always <br /> change this later.
              </p>
            </div>

            <h1 className="add-photo-title">Private Groups</h1>
            <div className="select-container">
              <label htmlFor="duration" className="select-label selected-label">
                Maximum Group size
              </label>
              <br />
              <select
                name="duration"
                id="duration"
                className="select select-container-size"
              >
                <option value="4" selected>
                  4
                </option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
              <p className="contact-details">
                For in-person experiences, you can <br /> host a private group
                for up to 25 <br /> guests.
              </p>
            </div>
          </div>

          <span className="btn-position">
            <Link to="/availability">
              <Button onClick={handleContinueClick} />
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default Size;
