import React, { useEffect, useState } from "react";
import "./Bookings.css";
import Navbar from "../../../../layouts/navbar/Navbar";
import { Link } from "react-router-dom";
import Button from "../../../../components/button/Button";
import useActiveNav from "../../../../hooks/useActiveNav";
import Toggle from "../../../../components/Toggle/Toggle";
import { useDispatch, useSelector } from "react-redux";
import { updateCutoff } from "../../../../redux/actions/step4-actions/bookingActions";
import { auth, db } from "../../../../firebase";
import bookingDataToToFirestore from "../../../../redux/actions/step4-actions/bookingDataToFirestore";

const Bookings = () => {
  const { selectedNavItem, handleContinueClick } = useActiveNav(
    "bookings",
    "review"
  );
  const booking = useSelector((state) => state.booking);
  const handleContinue = () => {
    bookingDataToToFirestore(dispatch, booking);
  };

  const dispatch = useDispatch();
  const [cutoffTime, setCutoffTime] = useState("");

  const selectedCcutoffTime = () => {
    const Selected = document.getElementById("cutoff").value;
    setCutoffTime(Selected);
    dispatch(updateCutoff(Selected));
  };

  // fetch data from firebase and display it in select
  useEffect(() => {
    const fetchData = async () => {
      const userId = auth.currentUser.uid;
      const applicationRef = db.collection("applications").doc(userId);
      const doc = await applicationRef.get();
      if (doc.exists && doc.data().booking) {
        const { cutoffTime: fetchedCutoffTime } = doc.data().booking;
        if (fetchedCutoffTime !== undefined) {
          setCutoffTime(fetchedCutoffTime);
          dispatch(updateCutoff(fetchedCutoffTime));
        }
      }
    };
    fetchData();
  }, []);

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
            <h1 className="add-photo-title">
              Cutoff time for additional guests
            </h1>
            <span className="contact-details">
              If an instance is booked, this is how far in advance any <br />{" "}
              new guests can book.
            </span>
            <div className="select-container">
              <br />
              <select
                name="cutoff"
                id="cutoff"
                className="select age-selection Experience-selection"
                onChange={selectedCcutoffTime}
              >
                <option value="1 hour before Start time" selected>
                  1 hour before Start time
                </option>
                <option
                  value="3 hours before Start time"
                  selected={cutoffTime === "3 hours before Start time"}
                >
                  3 hours before Start time
                </option>
                <option
                  value="6 hours before Start time"
                  selected={cutoffTime === "6 hours before Start time"}
                >
                  6 hours before Start time
                </option>
                <option
                  value="12 hours before Start time"
                  selected={cutoffTime === "12 hours before Start time"}
                >
                  12 hours before Start time
                </option>
                <option
                  value="24 hours before Start time"
                  selected={cutoffTime === "24 hours before Start time"}
                >
                  24 hours before Start time
                </option>
                <option
                  value="weeks before Start tim"
                  selected={cutoffTime === "weeks before Start tim"}
                >
                  weeks before Start time
                </option>
              </select>
            </div>
            <p className="contact-details">
              We suggest setting your cutoff time to 1 hour based on your
              activity and <br /> the time of day you are hosting. You can
              always change this later.
            </p>
            <br />
            <br />
            <h1 className="add-photo-title">Requests for availability</h1>

            <Toggle text="Toggle me" />

            <p className="contact-details">
              When unchecked, “Contact host” will still appear on your
              experience <br /> page so people can message you, but the “Request
              availability” link <br /> will be removed from your calendar.
            </p>
          </div>
          <span className="btn-position">
            <Link to="/review">
              <Button
                onClick={() => {
                  handleContinueClick();
                  handleContinue();
                }}
              />
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default Bookings;
