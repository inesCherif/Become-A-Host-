import React, { useEffect, useState } from "react";
import "./Toggle.css";
import { useDispatch } from "react-redux";
import { updateDatesRequest } from "../../redux/actions/step4-actions/bookingActions";
import { auth, db } from "../../firebase";

const Toggle = () => {
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(false);
  const [datesRequest, setDatesRequest] = useState("Allow people to request dates and times not listed");

  const handleCheckboxChange = () => {
    if (isChecked) {
      setDatesRequest(
        "Allow people to request dates and times not listed"
      );
    } else {
      setDatesRequest("don't Allow people to request dates and times not listed");
    }
    setIsChecked(!isChecked);
    dispatch(updateDatesRequest(datesRequest));
  };


  useEffect(() => {
    const fetchData = async () => {
      const userId = auth.currentUser.uid;
      const applicationRef = db.collection("applications").doc(userId);
      const doc = await applicationRef.get();
      if (doc.exists && doc.data().booking) {
        const { datesRequest: fetchedDatesRequest } = doc.data().booking;
        if (fetchedDatesRequest === "Allow people to request dates and times not listed") {
          setDatesRequest(fetchedDatesRequest);
          setIsChecked(true); // set isChecked to true if fetchedDatesRequest is "Allow people to request dates and times not listed"
          dispatch(updateDatesRequest(fetchedDatesRequest));
        }
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <section className="toogle-container">
        <div
          className={`checkbox-example ${isChecked ? "red-background" : ""}`}
        >
          <input
            type="checkbox"
            value="1"
            id="checkboxOneInput"
            checked={isChecked} // set the checked prop of the input element to the isChecked state variable
            onClick={handleCheckboxChange}
          />
          <label htmlFor="checkboxOneInput"></label>
        </div>
        <div>
          <p className="contact-details">
            Allow people to request dates and times not listed.
          </p>
        </div>
      </section>
    </div>
  );
};
export default Toggle;
