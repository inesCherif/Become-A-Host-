import React from "react";
import "./Bookings.css";
import Navbar from "../../../../layouts/navbar/Navbar";
import { Link } from "react-router-dom";
import Button from "../../../../components/button/Button";
import useActiveNav from "../../../../hooks/useActiveNav";
import Toggle from "../../../../components/Toggle/Toggle"

const Bookings = () => {
  const { selectedNavItem, handleContinueClick } = useActiveNav(
    "bookings",
    "review"
  );

  return (
    <>
      <Navbar selectedNavItem={selectedNavItem} selectedNavStep="step4" />
      <div className="desktop-content">
        <div className="content-position">
          <h1 className="content-title">Booking settings</h1>
          <div className="tips">
            <p className="type16">
              <br />
              <br />
              We recommend setting your cutoff time close to your start time so
              more guests can book. Be sure to give yourself enough time to
              prepare for your guests.
              <br />
              <br />
            </p>
          </div>
          <div className="booking-content">
            <h1 className="add-photo-title">Cutoff time for additional guests</h1>
            <span className="contact-details">If an instance is booked, this is how far in advance any <br /> new guests can book.</span>
            <div className="select-container">
              <br />
              <select
                name="duration"
                id="duration"
                className="select age-selection Experience-selection"
              >
                <option value="" selected>1 hour before Start  time</option>
                <option value="">3 hours before Start  time</option>
                <option value="">6 hours before Start  time</option>
                <option value="">12 hours before Start  time</option>
                <option value="">24 hours before Start  time</option>
                <option value="">weeks before Start  time</option>
              </select>
            </div>
            <p className="contact-details">We suggest setting your cutoff time to 1 hour based on your activity and <br /> the time of day you are hosting. You can always change this later.</p>
            <br />
            <br />
            <h1 className="add-photo-title">Requests for availability</h1>

            <Toggle text="Toggle me" />

            <p className="contact-details">When unchecked, “Contact host” will still appear on your experience <br /> page so people can message you, but the “Request availability” link <br /> will be removed from your calendar.</p>
          </div>
          <span className="btn-position">
            <Link to="/review">
              <Button onClick={handleContinueClick} />
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default Bookings;
