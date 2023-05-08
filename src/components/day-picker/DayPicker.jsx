import React, { useEffect, useState } from "react";
import "./DayPicker.css";
import { useDispatch, useSelector } from "react-redux";
import { updateExperienceHostingDays } from "../../redux/actions/step4-actions/availibilityActions";
import { auth, db } from "../../firebase";

const DAY_NAMES = ["S", "M", "T", "W", "T", "F", "S"];
const DAY_NAMES_LONG = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const DayPicker = () => {
  const [selectedDays, setSelectedDays] = useState([]);

  const dispatch = useDispatch();
  const handleDayClick = (day) => {
    if (selectedDays.includes(day)) {
      // if the day is already selected, remove it from the selectedDays array
      setSelectedDays(
        selectedDays.filter((selectedDay) => selectedDay !== day)
      );
    } else {
      setSelectedDays([...selectedDays, day]);
    }

    dispatch(
      updateExperienceHostingDays(
        [...selectedDays, day].map((index) => DAY_NAMES_LONG[index]) //  array contain names of selected days
      )
    );
  };

  // Set Sunday (last day) as selected by default
  React.useEffect(() => {
    setSelectedDays([6]); // Sunday is at index 6 (0-based index)
  }, []);

  // fetch data from firebase and display it in select
  useEffect(() => {
    const fetchData = async () => {
      const userId = auth.currentUser.uid;
      const applicationRef = db.collection("applications").doc(userId);
      const doc = await applicationRef.get();
      if (doc.exists && doc.data().availability) {
        const { selectedDaysNames: fetchedSelectedDaysNames } =
          doc.data().availability;
        if (fetchedSelectedDaysNames !== []) {
          setSelectedDays(
            fetchedSelectedDaysNames.map((name) => DAY_NAMES_LONG.indexOf(name))
          );
          dispatch(updateExperienceHostingDays(fetchedSelectedDaysNames))
        }
      }
    };
    fetchData();
  }, []);

  return (
    <div className="day-picker-container">
      <ul className="day-picker-list">
        {DAY_NAMES.map((day, index) => (
          <li
            key={index}
            className={`day-picker-item ${
              selectedDays.includes(index) ? "selected" : ""
            }`}
            onClick={() => handleDayClick(index)}
          >
            {day}
          </li>
        ))}
      </ul>
      <div>{/* Selected days: {selectedDaysNames.join(', ')} */}</div>
    </div>
  );
};

export default DayPicker;
