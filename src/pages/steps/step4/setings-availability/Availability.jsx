import React, { useEffect, useState } from "react";
import "./Availability.css";
import Navbar from "../../../../layouts/navbar/Navbar";
import { Link } from "react-router-dom";
import Button from "../../../../components/button/Button";
import useActiveNav from "../../../../hooks/useActiveNav";
import DayPicker from "../../../../components/day-picker/DayPicker";
import { useDispatch, useSelector } from "react-redux";
import availabilityDataToToFirestore from "../../../../redux/actions/step4-actions/availabilityDataToFirestore";
import { updateExperienceStartTime } from "../../../../redux/actions/step4-actions/availibilityActions";
import { auth, db } from "../../../../firebase";

const Availability = () => {
  const { selectedNavItem, handleContinueClick } = useActiveNav(
    "availability",
    "pricing"
  );
  const dispatch = useDispatch();
  const availability = useSelector((state) => state.availability);
  const handleContinue = () => {
    availabilityDataToToFirestore(dispatch, availability);
  };

  const [experienceStartTime, setExperienceStartTime] = useState("09:00 AM");
  const selectedTimeValue = () => {
    const Selected = document.getElementById("time").value;
    setExperienceStartTime(Selected);
    dispatch(updateExperienceStartTime(Selected));
  };

   // fetch data from firebase and display it in select
   useEffect(() => {
    const fetchData = async () => {
      const userId = auth.currentUser.uid;
      const applicationRef = db.collection("applications").doc(userId);
      const doc = await applicationRef.get();
      if (doc.exists && doc.data().availability) {
        const {
          experienceStartTime: fetchedExperienceStartTime,
        } = doc.data().availability;
        if (fetchedExperienceStartTime !== undefined) {
          setExperienceStartTime(fetchedExperienceStartTime);
          dispatch(updateExperienceStartTime(fetchedExperienceStartTime));
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
          <h1 className="content-title">General availability</h1>
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
                name="time"
                id="time"
                className="select age-selection Experience-selection"
                onChange={selectedTimeValue}
              >
                <option value="00:00 AM" selected={experienceStartTime === "00:00 AM"} >00:00 AM</option>
                <option value="01:00 AM" selected={experienceStartTime === "01:00 AM"} >01:00 AM</option>
                <option value="02:00 AM" selected={experienceStartTime === "02:00 AM"} >02:00 AM</option>
                <option value="03:00 AM" selected={experienceStartTime === "03:00 AM"} >03:00 AM</option>
                <option value="04:00 AM" selected={experienceStartTime === "04:00 AM"} >04:00 AM</option>
                <option value="05:00 AM" selected={experienceStartTime === "05:00 AM"} >05:00 AM</option>
                <option value="06:00 AM" selected={experienceStartTime === "06:00 AM"} >06:00 AM</option>
                <option value="07:00 AM" selected={experienceStartTime === "07:00 AM"} >07:00 AM</option>
                <option value="08:00 AM" selected={experienceStartTime === "08:00 AM"} >08:00 AM</option>
                <option value="09:00 AM" selected>
                  09:00 AM
                </option>
                <option value="10:00 AM" selected={experienceStartTime === "10:00 AM"} >10:00 AM</option>
                <option value="11:00 AM" selected={experienceStartTime === "11:00 AM"} >11:00 AM</option>
                <option value="12:00 PM" selected={experienceStartTime === "12:00 PM"} >12:00 PM</option>
                <option value="01:00 PM" selected={experienceStartTime === "01:00 PM"} >01:00 PM</option>
                <option value="02:00 PM" selected={experienceStartTime === "02:00 PM"} >02:00 PM</option>
                <option value="03:00 PM" selected={experienceStartTime === "03:00 PM"} >02:00 PM</option>
                <option value="04:00 PM" selected={experienceStartTime === "04:00 PM"} >04:00 PM</option>
                <option value="05:00 PM" selected={experienceStartTime === "05:00 PM"} >05:00 PM</option>
                <option value="06:00 PM" selected={experienceStartTime === "06:00 PM"} >06:00 PM</option>
                <option value="07:00 PM" selected={experienceStartTime === "07:00 PM"} >07:00 PM</option>
                <option value="08:00 PM" selected={experienceStartTime === "08:00 PM"} >08:00 PM</option>
                <option value="09:00 PM" selected={experienceStartTime === "09:00 PM"} >09:00 PM</option>
                <option value="10:00 PM" selected={experienceStartTime === "10:00 PM"} >10:00 PM</option>
                <option value="11:00 PM" selected={experienceStartTime === "11:00 PM"} >11:00 PM</option>
              </select>
            </div>
          </div>
          <span className="btn-position">
            <Link to="/pricing">
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

export default Availability;
