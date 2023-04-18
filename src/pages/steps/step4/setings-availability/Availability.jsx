import React from "react";
import "./Availability.css";
import Navbar from "../../../../layouts/navbar/Navbar";
import { Link } from "react-router-dom";
import Button from "../../../../components/button/Button";
import useActiveNav from "../../../../hooks/useActiveNav";
import DayPicker from "../../../../components/day-picker/DayPicker";

const Availability = () => {
  const { selectedNavItem, handleContinueClick } = useActiveNav(
    "availability",
    "pricing"
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
            <h1 className="add-photo-title">Experience hosting days</h1>
            <span className="contact-details">Select your available days</span>
            <DayPicker />
            <br />
            <p className="contact-details">
              We suggest Weekends and at <br /> least 3 days per week
            </p>{" "}
            <br />
            <br />
            <h1 className="add-photo-title">Experience start time</h1>
            <div className="select-container">
              <select
                name="duration"
                id="duration"
                className="select age-selection Experience-selection"
              >
                <option value="">00:00 AM</option>
                <option value="">01:00 AM</option>
                <option value="">02:00 AM</option>
                <option value="">04:00 AM</option>
                <option value="">05:00 AM</option>
                <option value="">06:00 AM</option>
                <option value="">07:00 AM</option>
                <option value="">08:00 AM</option>
                <option value="" selected>09:00 AM</option>
                <option value="">10:00 AM</option>
                <option value="">11:00 AM</option>
                <option value="">12:00 PM</option>
                <option value="">01:00 PM</option>
                <option value="">02:00 PM</option>
                <option value="">04:00 PM</option>
                <option value="">05:00 PM</option>
                <option value="">06:00 PM</option>
                <option value="">07:00 PM</option>
                <option value="">08:00 PM</option>
                <option value="">09:00 PM</option>
                <option value="">10:00 PM</option>
                <option value="">11:00 PM</option>
              </select>
            </div>
          </div>
          <span className="btn-position">
            <Link to="/pricing">
              <Button onClick={handleContinueClick} />
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default Availability;
